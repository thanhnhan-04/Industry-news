#!/usr/bin/env python3
"""Build a single-file GitHub Pages dashboard.

This inlines the sector data files into index.html so GitHub Pages can serve the
dashboard from one file.
"""
from pathlib import Path


BASE = Path(__file__).resolve().parent
DASHBOARD = BASE / "dashboard.html"
OUTPUT = BASE / "index.html"
DATA_FILES = [
    "data-oil.js",
    "data-bds.js",
    "data-thuysan.js",
    "data-detmay.js",
    "data-hanghoa.js",
]


def main() -> int:
    html = DASHBOARD.read_text(encoding="utf-8")
    for name in DATA_FILES:
        content = (BASE / name).read_text(encoding="utf-8")
        tag = f'<script src="{name}"></script>'
        inline = f"<script>\n// Inlined from {name}\n{content}\n</script>"
        if tag not in html:
            raise SystemExit(f"Missing script tag in dashboard.html: {tag}")
        html = html.replace(tag, inline)

    html = html.replace(
        "<title>Bảng tin theo dõi ngành</title>",
        "<title>Industry News Dashboard</title>",
        1,
    )
    html = html.replace(
        "server cập nhật chưa chạy · mở http://127.0.0.1:8787/dashboard.html",
        "bản GitHub tĩnh · dữ liệu đã được nhúng trong file này",
    )
    html = html.replace(
        "chưa có server cập nhật local; mở http://127.0.0.1:8787/dashboard.html",
        "bản GitHub tĩnh chỉ để xem; cập nhật dữ liệu cần chạy bản local",
    )
    OUTPUT.write_text(html, encoding="utf-8")
    print(f"Wrote {OUTPUT.name} ({OUTPUT.stat().st_size:,} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

