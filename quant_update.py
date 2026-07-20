#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
quant_update.py — Tầng "số" TOKEN-FREE cho dashboard ngành (giống narrate.py của Wyckoff).
Không gọi Claude/LLM. Chỉ pull giá (yfinance) + giá/KL cổ phiếu VN (vnstock),
áp bảng ngưỡng trong quant-rules.json, sinh các item "số liệu" và ghi vào khối
<PY-ITEMS>...</PY-ITEMS> của file data-<ngành>.js. Không đụng vào item tin của Claude.

Chạy:  python3 quant_update.py            # cập nhật tất cả ngành có trong rules
       python3 quant_update.py hanghoa    # chỉ 1 ngành
Cron ví dụ (mỗi sáng 7:00):  0 7 * * *  cd /path/Stock\ monitor && python3 quant_update.py
"""
import json, re, sys, datetime, warnings, time
from pathlib import Path
from sentiment_update import refresh_sentiment
warnings.filterwarnings("ignore")

BASE = Path(__file__).resolve().parent
RULES = json.loads((BASE / "quant-rules.json").read_text(encoding="utf-8"))
VNSTOCK_PAUSE_SEC = float(RULES.get("_vnstock_pause_sec", 7.0))


def vn_now():
    return datetime.datetime.utcnow() + datetime.timedelta(hours=7)


def impact_from(pct, thr, direction):
    """direction=+1: giá tăng tốt; -1: giá tăng xấu. Trả -2..+2."""
    a = abs(pct)
    mag = 2 if a >= 2 * thr else (1 if a >= thr else 0)
    if mag == 0:
        return 0
    return int(direction * (1 if pct > 0 else -1) * mag)


def make_price_item(cfg, close, pct, d):
    thr = cfg["thr"]
    if abs(pct) < thr:
        txt = cfg["flat"]
    else:
        txt = cfg["up"] if pct > 0 else cfg["down"]
    sign = "+" if pct >= 0 else ""
    val = round(close, 1) if close > 100 else round(close, 2)
    return {
        "factor": cfg["factor"],
        "impact": impact_from(pct, thr, cfg["dir"]),
        "date": d.strftime("%Y-%m-%d"),
        "srcDate": d.strftime("%d/%m/%Y") + " (truy xuất)",
        "isNew": abs(pct) >= thr,
        "aff": cfg["aff"],
        "title": f"{cfg['name']}: {val} {cfg['unit']} ({sign}{round(pct,1)}% phiên {d.strftime('%d/%m')})",
        "desc": "Ý nghĩa đầu tư: " + txt,
        "srcName": f"Yahoo Finance ({cfg['yf']})",
        "url": f"https://finance.yahoo.com/quote/{cfg['yf']}",
        "src": "py",
    }


def commodity_items(sec):
    import yfinance as yf
    out = []
    feeds = list(sec.get("commodities", []))
    if "fx" in sec:
        feeds.append(sec["fx"])
    for c in feeds:
        try:
            h = yf.Ticker(c["yf"]).history(period="10d")
            if h is None or len(h) < 2:
                print(f"  [skip] {c['yf']}: thiếu dữ liệu")
                continue
            close = float(h["Close"].iloc[-1])
            prev = float(h["Close"].iloc[-2])
            if prev == 0:
                continue
            pct = (close - prev) / prev * 100.0
            d = h.index[-1].date()
            out.append(make_price_item(c, close, pct, d))
            print(f"  [ok]  {c['yf']:6} {round(close,2):>10}  {round(pct,2):+.2f}%")
        except Exception as e:
            print(f"  [err] {c['yf']}: {repr(e)[:100]}")
    return out


def stock_item(sec):
    st = sec.get("stocks")
    if not st:
        return []
    try:
        from vnstock.api.quote import Quote
    except Exception as e:
        print(f"  [err] vnstock import: {repr(e)[:100]}")
        return []
    end = vn_now().date()
    start = end - datetime.timedelta(days=20)
    rows = []
    for tk in st["tickers"]:
        try:
            q = Quote(symbol=tk, source="VCI")
            df = q.history(start=start.isoformat(), end=end.isoformat(), interval="1D")
            if df is None or len(df) < 2:
                continue
            close = float(df["close"].iloc[-1])
            prev = float(df["close"].iloc[-2])
            if prev == 0:
                continue
            pct = (close - prev) / prev * 100.0
            d = str(df["time"].iloc[-1])[:10]
            rows.append((tk, pct, close, d))
        except BaseException as e:
            if isinstance(e, KeyboardInterrupt):
                raise
            print(f"  [err] {tk}: {repr(e)[:120]}")
        finally:
            time.sleep(VNSTOCK_PAUSE_SEC)
    if not rows:
        return []
    d = max(r[3] for r in rows)
    dd = datetime.date.fromisoformat(d)
    up = [r for r in rows if r[1] > 0.05]
    dn = [r for r in rows if r[1] < -0.05]
    rows_sorted = sorted(rows, key=lambda r: abs(r[1]), reverse=True)
    movers = "; ".join(
        f"{tk} {'+' if p>=0 else ''}{round(p,1)}%" for tk, p, _, _ in rows_sorted[:6]
    )
    breadth = len(up) - len(dn)
    bt = st.get("breadth_thr", 4)
    impact = 1 if breadth >= bt else (-1 if breadth <= -bt else 0)
    print(f"  [ok]  cổ phiếu: {len(up)} tăng / {len(dn)} giảm (breadth {breadth:+d})")
    group_name = st.get("name", "Nhóm")
    source_url = st.get("url", "https://www.hsx.vn/")
    return [{
        "factor": st["factor"],
        "impact": int(impact),
        "date": d,
        "srcDate": dd.strftime("%d/%m/%Y") + " (truy xuất)",
        "isNew": True,
        "aff": [r[0] for r in rows_sorted[:6]],
        "title": f"{group_name} phiên {dd.strftime('%d/%m')}: {len(up)} mã tăng / {len(dn)} mã giảm",
        "desc": "Ý nghĩa đầu tư: Diễn biến giá nhóm — " + movers +
                ". Dùng để soi dòng tiền và xác nhận/tương phản với luận điểm cơ bản.",
        "srcName": "vnstock (VCI)",
        "url": source_url,
        "src": "py",
    }]


def serialize(items):
    lines = []
    for it in items:
        lines.append("    " + json.dumps(it, ensure_ascii=False))
    body = ",\n".join(lines)
    return ("// <PY-ITEMS> khối này do quant_update.py tự ghi mỗi sáng — ĐỪNG sửa tay\n"
            "  itemsPY: [\n" + body + ("\n  " if body else "") + "],\n"
            "  // </PY-ITEMS>")


def update_file(path, items, ts):
    text = path.read_text(encoding="utf-8")
    block = serialize(items)
    new = re.sub(r"// <PY-ITEMS>.*?// </PY-ITEMS>", lambda m: block, text, count=1, flags=re.S)
    if new == text and "<PY-ITEMS>" not in text:
        raise SystemExit(f"KHÔNG tìm thấy marker <PY-ITEMS> trong {path.name}")
    new = re.sub(r'lastUpdated:\s*"[^"]*"', f'lastUpdated: "{ts}"', new, count=1)
    path.write_text(new, encoding="utf-8")
    refresh_sentiment(path)


def run_sector(key):
    sec = RULES[key]
    print(f"== {key} ==")
    items = commodity_items(sec) + stock_item(sec)
    if not items:
        print(f"  [warn] không lấy được item số mới; giữ nguyên {sec['file']}\n")
        refresh_sentiment(BASE / sec["file"])
        return
    ts = vn_now().strftime("%Y-%m-%dT%H:%M:%S+07:00")
    update_file(BASE / sec["file"], items, ts)
    print(f"  -> ghi {len(items)} item số vào {sec['file']}\n")


if __name__ == "__main__":
    keys = [k for k in RULES if not k.startswith("_")]
    if len(sys.argv) > 1:
        keys = [a for a in sys.argv[1:] if a in RULES]
    for k in keys:
        try:
            run_sector(k)
        except BaseException as e:
            if isinstance(e, KeyboardInterrupt):
                raise
            print(f"!! sector {k} failed: {repr(e)[:160]}\n")
