#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Refresh rule-based sector sentiment from auto-generated items."""
from __future__ import annotations

import datetime as dt
import json
import re
from pathlib import Path


AUTO_BLOCKS = ("itemsNews", "itemsPY")
RECENT_DAYS = 3


def _parse_date(value: str) -> dt.date | None:
    try:
        return dt.date.fromisoformat((value or "")[:10])
    except ValueError:
        return None


def _clip(text: str, limit: int = 120) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def _extract_array(text: str, name: str) -> list[dict]:
    match = re.search(rf"\b{name}\s*:\s*(\[.*?\])\s*,\s*\n\s*// </", text, flags=re.S)
    if not match:
        return []
    try:
        rows = json.loads(match.group(1))
    except json.JSONDecodeError:
        return []
    return [row for row in rows if isinstance(row, dict)]


def auto_items(text: str) -> list[dict]:
    items: list[dict] = []
    for name in AUTO_BLOCKS:
        items.extend(_extract_array(text, name))
    return [it for it in items if _parse_date(str(it.get("date", "")))]


def _score_from(items: list[dict]) -> int:
    directional = [int(it.get("impact") or 0) for it in items if int(it.get("impact") or 0) != 0]
    if not directional:
        return 0
    total = sum(directional)
    if total >= 6:
        return 2
    if total >= 1:
        return 1
    if total <= -6:
        return -2
    if total <= -1:
        return -1
    return 0


def _describe_group(label: str, items: list[dict]) -> str:
    if not items:
        return ""
    picked = sorted(
        items,
        key=lambda it: (str(it.get("date", "")), abs(int(it.get("impact") or 0))),
        reverse=True,
    )[:2]
    bits = []
    for it in picked:
        src = it.get("srcName") or "nguồn"
        src_date = it.get("srcDate") or it.get("date") or ""
        bits.append(f"{_clip(str(it.get('title', '')), 105)} ({src}, {src_date})")
    return f"{label}: " + "; ".join(bits) + "."


def build_sentiment(items: list[dict]) -> dict | None:
    dated = [(it, _parse_date(str(it.get("date", "")))) for it in items]
    dated = [(it, d) for it, d in dated if d]
    if not dated:
        return None
    latest = max(d for _, d in dated)
    cutoff = latest - dt.timedelta(days=RECENT_DAYS - 1)
    recent = [it for it, d in dated if cutoff <= d <= latest]
    if not recent:
        return None

    score = _score_from(recent)
    positives = [it for it in recent if int(it.get("impact") or 0) > 0]
    negatives = [it for it in recent if int(it.get("impact") or 0) < 0]
    neutrals = [it for it in recent if int(it.get("impact") or 0) == 0]

    parts = [
        f"Tự động tổng hợp từ {len(recent)} tín hiệu mới nhất trong {RECENT_DAYS} ngày gần nhất."
    ]
    pos_text = _describe_group("Tích cực", positives)
    neg_text = _describe_group("Tiêu cực", negatives)
    if pos_text:
        parts.append(pos_text)
    if neg_text:
        parts.append(neg_text)
    if neutrals:
        parts.append(f"Có {len(neutrals)} tín hiệu trung tính/chờ kiểm chứng.")
    parts.append("Đây là chấm điểm rule-based từ tin/số liệu tự động; mở nguồn để kiểm chứng trước khi ra quyết định.")

    return {
        "score": score,
        "date": latest.isoformat(),
        "reason": " ".join(parts),
    }


def refresh_sentiment(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    sentiment = build_sentiment(auto_items(text))
    if not sentiment:
        return False
    block = (
        "  sentiment: {\n"
        f"    score: {sentiment['score']}, date: {json.dumps(sentiment['date'], ensure_ascii=False)},\n"
        f"    reason: {json.dumps(sentiment['reason'], ensure_ascii=False)}\n"
        "  },\n"
        "  items:"
    )
    new = re.sub(r"\s+sentiment:\s*\{.*?\n\s*\},\n\s*items:", "\n" + block, text, count=1, flags=re.S)
    if new == text:
        return False
    path.write_text(new, encoding="utf-8")
    return True


def main() -> int:
    base = Path(__file__).resolve().parent
    changed = 0
    for path in sorted(base.glob("data-*.js")):
        if refresh_sentiment(path):
            changed += 1
            print(f"refreshed {path.name}")
    print(f"Refreshed {changed} sentiment block(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
