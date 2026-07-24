#!/usr/bin/env python3
"""Run Stock Monitor updates in cron/launchd-friendly modes."""
from __future__ import annotations

import os
import subprocess
import sys
import time
from pathlib import Path


BASE = Path(__file__).resolve().parent
LOGS = BASE / "logs"


def stamp() -> str:
    return time.strftime("%Y-%m-%d %H:%M:%S")


def run_logged(log_name: str, title: str, script_name: str) -> int:
    LOGS.mkdir(exist_ok=True)
    env = os.environ.copy()
    env.setdefault("MPLCONFIGDIR", str(BASE / ".cache" / "matplotlib"))
    env.setdefault("XDG_CACHE_HOME", str(BASE / ".cache" / "xdg"))
    Path(env["MPLCONFIGDIR"]).mkdir(parents=True, exist_ok=True)
    Path(env["XDG_CACHE_HOME"]).mkdir(parents=True, exist_ok=True)

    with (LOGS / log_name).open("a", encoding="utf-8") as fh:
        fh.write(f"===== {stamp()} {title} =====\n")
        fh.flush()
        proc = subprocess.run(
            [sys.executable, str(BASE / script_name)],
            cwd=str(BASE),
            env=env,
            stdout=fh,
            stderr=subprocess.STDOUT,
        )
    return proc.returncode


def run_mode(mode: str) -> int:
    steps: dict[str, list[tuple[str, str, str]]] = {
        "full": [
            ("quant_update.log", "auto update\nMode: token-free quant update", "quant_update.py"),
            ("news_update.log", "news update\nMode: token-free RSS/news rule update", "news_update.py"),
            ("export_index.log", "export index", "export_index.py"),
        ],
        "quant": [
            ("quant_update.log", "auto update\nMode: token-free quant update", "quant_update.py"),
            ("export_index.log", "export index", "export_index.py"),
        ],
        "news": [
            ("news_update.log", "news update\nMode: token-free RSS/news rule update", "news_update.py"),
            ("export_index.log", "export index", "export_index.py"),
        ],
    }
    if mode not in steps:
        print(f"Usage: {Path(sys.argv[0]).name} [full|quant|news]", file=sys.stderr)
        return 2
    for log_name, title, script_name in steps[mode]:
        rc = run_logged(log_name, title, script_name)
        if rc:
            return rc
    return 0


def main() -> int:
    return run_mode(sys.argv[1] if len(sys.argv) > 1 else "full")


if __name__ == "__main__":
    raise SystemExit(main())
