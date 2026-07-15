#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Token-free news crawler for Stock monitor.

Fetches RSS/search feeds, classifies headlines with keyword rules, and writes
itemsNews blocks into data-*.js. No LLM/API tokens are used.
"""
from __future__ import annotations

import datetime as dt
import email.utils
import hashlib
import html
import json
import re
import ssl
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


BASE = Path(__file__).resolve().parent
RULES = json.loads((BASE / "news-rules.json").read_text(encoding="utf-8"))
WINDOW_DAYS = int(RULES.get("_window_days", 7))
MAX_ITEMS = int(RULES.get("_max_items_per_sector", 8))
PAUSE_SEC = float(RULES.get("_pause_sec", 1.2))
USER_AGENT = "Mozilla/5.0 StockMonitorBot/1.0"
DEFAULT_LOCALE = {"hl": "vi", "gl": "VN", "ceid": "VN:vi"}


def ssl_context() -> ssl.SSLContext:
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except Exception:
        return ssl.create_default_context()


def vn_now() -> dt.datetime:
    return dt.datetime.utcnow() + dt.timedelta(hours=7)


def strip_tags(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text or "")
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def google_news_url(query: str, locale: dict | None = None) -> str:
    q = query
    if "when:" not in q:
        q = f"{q} when:{WINDOW_DAYS}d"
    locale = {**DEFAULT_LOCALE, **(locale or {})}
    return "https://news.google.com/rss/search?" + urllib.parse.urlencode({
        "q": q,
        "hl": locale["hl"],
        "gl": locale["gl"],
        "ceid": locale["ceid"],
    })


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=25, context=ssl_context()) as resp:
        return resp.read()


def parse_date(value: str) -> dt.datetime:
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        if parsed.tzinfo:
            parsed = parsed.astimezone(dt.timezone(dt.timedelta(hours=7))).replace(tzinfo=None)
        return parsed
    except Exception:
        return vn_now()


def extract_source(item: ET.Element) -> str:
    for child in list(item):
        if child.tag.endswith("source") and child.text:
            return strip_tags(child.text)
    return "Google News"


def parse_rss(raw: bytes) -> list[dict]:
    root = ET.fromstring(raw)
    out = []
    for item in root.findall(".//item"):
        title = strip_tags(item.findtext("title") or "")
        link = strip_tags(item.findtext("link") or "")
        desc = strip_tags(item.findtext("description") or "")
        pub = parse_date(item.findtext("pubDate") or "")
        source = extract_source(item)
        if title and link:
            out.append({"title": title, "url": link, "desc": desc, "pub": pub, "source": source})
    return out


def norm(s: str) -> str:
    return (s or "").casefold()


def count_hits(text: str, words: list[str]) -> int:
    t = norm(text)
    return sum(1 for w in words if norm(w) in t)


def choose_factor(sec: dict, text: str) -> str:
    best = (0, sec.get("default_factor", "market"))
    for factor, words in sec.get("factor_keywords", {}).items():
        hits = count_hits(text, words)
        if hits > best[0]:
            best = (hits, factor)
    return best[1]


def choose_impact(sec: dict, text: str) -> int:
    pos = count_hits(text, sec.get("positive_keywords", []))
    neg = count_hits(text, sec.get("negative_keywords", []))
    strong_pos = count_hits(text, sec.get("strong_positive_keywords", []))
    strong_neg = count_hits(text, sec.get("strong_negative_keywords", []))
    score = pos - neg + 2 * strong_pos - 2 * strong_neg
    if score >= 3:
        return 2
    if score >= 1:
        return 1
    if score <= -3:
        return -2
    if score <= -1:
        return -1
    return 0


def affected(sec: dict, text: str) -> list[str]:
    t = norm(text)
    tickers = []
    for tk in sec.get("tickers", []):
        if re.search(rf"(?<![A-Za-z0-9]){re.escape(tk)}(?![A-Za-z0-9])", text):
            tickers.append(tk)
    for tk, words in sec.get("ticker_keywords", {}).items():
        if tk not in tickers and any(norm(w) in t for w in words):
            tickers.append(tk)
    return tickers[:8] or sec.get("default_aff", [])[:6]


def item_id(url: str, title: str) -> str:
    return hashlib.sha1((url or title).encode("utf-8")).hexdigest()[:16]


def make_item(sec: dict, raw: dict) -> dict | None:
    text = f"{raw['title']} {raw.get('desc', '')}"
    if count_hits(text, sec.get("include_keywords", [])) == 0:
        return None
    if count_hits(text, sec.get("exclude_keywords", [])) > 0:
        return None
    pub = raw["pub"]
    cutoff = vn_now() - dt.timedelta(days=WINDOW_DAYS)
    if pub < cutoff:
        return None
    factor = choose_factor(sec, text)
    impact = choose_impact(sec, text)
    aff = affected(sec, text)
    snippet = raw.get("desc") or raw["title"]
    snippet = re.sub(r"\s+-\s+[^-]{2,80}$", "", snippet).strip()
    if len(snippet) > 240:
        snippet = snippet[:237].rstrip() + "..."
    direction = "tích cực" if impact > 0 else ("tiêu cực" if impact < 0 else "trung tính/chờ kiểm chứng")
    return {
        "id": item_id(raw["url"], raw["title"]),
        "factor": factor,
        "impact": impact,
        "date": pub.strftime("%Y-%m-%d"),
        "srcDate": pub.strftime("%d/%m/%Y"),
        "isNew": True,
        "aff": aff,
        "title": raw["title"],
        "desc": f"Rule-based: {snippet} Tác động sơ bộ: {direction} theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.",
        "srcName": raw.get("source") or "Google News",
        "url": raw["url"],
        "src": "news",
        "sourceScope": raw.get("scope", "local"),
    }


def query_specs(sec: dict) -> list[dict]:
    specs = []
    for entry in sec.get("queries", []):
        specs.append({"query": entry, "scope": "local", "locale": None})
    for entry in sec.get("international_queries", []):
        if isinstance(entry, str):
            specs.append({"query": entry, "scope": "intl", "locale": {"hl": "en", "gl": "US", "ceid": "US:en"}})
        else:
            specs.append({
                "query": entry["query"],
                "scope": entry.get("scope", "intl"),
                "locale": entry.get("locale", {"hl": "en", "gl": "US", "ceid": "US:en"}),
            })
    return specs


def pick_items(items: list[dict]) -> list[dict]:
    items.sort(key=lambda x: (x["date"], abs(x["impact"]), x["title"]), reverse=True)
    max_items = MAX_ITEMS
    min_intl = int(RULES.get("_min_international_items", 0))
    if min_intl <= 0:
        return items[:max_items]

    picked = []
    seen = set()
    intl = [it for it in items if it.get("sourceScope") == "intl"]
    for it in intl[:min_intl]:
        picked.append(it)
        seen.add(it["id"])
    for it in items:
        if len(picked) >= max_items:
            break
        if it["id"] in seen:
            continue
        picked.append(it)
        seen.add(it["id"])
    picked.sort(key=lambda x: (x["date"], abs(x["impact"]), x["title"]), reverse=True)
    return picked


def serialize(items: list[dict]) -> str:
    body = ",\n".join("    " + json.dumps(it, ensure_ascii=False) for it in items)
    return ("// <NEWS-ITEMS> khối này do news_update.py tự ghi — ĐỪNG sửa tay\n"
            "  itemsNews: [\n" + body + ("\n  " if body else "") + "],\n"
            "  // </NEWS-ITEMS>")


def update_file(path: Path, items: list[dict], ts: str) -> None:
    text = path.read_text(encoding="utf-8")
    block = serialize(items)
    if "<NEWS-ITEMS>" not in text:
        text = text.replace("\n  valuechain: [", "\n" + block + "\n  valuechain: [", 1)
    else:
        text = re.sub(r"// <NEWS-ITEMS>.*?// </NEWS-ITEMS>", lambda _: block, text, count=1, flags=re.S)
    text = re.sub(r'lastUpdated:\s*"[^"]*"', f'lastUpdated: "{ts}"', text, count=1)
    path.write_text(text, encoding="utf-8")


def run_sector(key: str) -> None:
    sec = RULES["sectors"][key]
    print(f"== news {key} ==")
    seen = set()
    items = []
    for spec in query_specs(sec):
        query = spec["query"]
        url = google_news_url(query, spec.get("locale"))
        try:
            rows = parse_rss(fetch(url))
            for row in rows:
                row["scope"] = spec.get("scope", "local")
            print(f"  [feed:{spec.get('scope', 'local')}] {query}: {len(rows)} rows")
        except Exception as e:
            print(f"  [err:{spec.get('scope', 'local')}] {query}: {repr(e)[:120]}")
            rows = []
        for row in rows:
            it = make_item(sec, row)
            if not it or it["id"] in seen:
                continue
            seen.add(it["id"])
            items.append(it)
        time.sleep(PAUSE_SEC)
    items = pick_items(items)
    update_file(BASE / sec["file"], items, vn_now().strftime("%Y-%m-%dT%H:%M:%S+07:00"))
    print(f"  -> ghi {len(items)} item tin vào {sec['file']}\n")


def main() -> int:
    keys = list(RULES.get("sectors", {}).keys())
    if len(sys.argv) > 1:
        keys = [k for k in sys.argv[1:] if k in RULES.get("sectors", {})]
    for key in keys:
        try:
            run_sector(key)
        except Exception as e:
            print(f"!! news sector {key} failed: {repr(e)[:160]}\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
