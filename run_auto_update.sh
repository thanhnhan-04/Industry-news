#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="${STOCK_MONITOR_DIR:-$(cd "$(dirname "$0")" && pwd)}"
cd "$BASE_DIR"
mkdir -p logs
mkdir -p .cache/matplotlib .cache/xdg
export MPLCONFIGDIR="$BASE_DIR/.cache/matplotlib"
export XDG_CACHE_HOME="$BASE_DIR/.cache/xdg"
PYTHON_BIN="${STOCK_MONITOR_PYTHON:-}"
if [[ -z "$PYTHON_BIN" ]]; then
  if command -v python3 >/dev/null 2>&1; then
    PYTHON_BIN="$(command -v python3)"
    if [[ "$PYTHON_BIN" == "/usr/bin/python3" && -x "/Library/Frameworks/Python.framework/Versions/3.11/bin/python3" ]]; then
      PYTHON_BIN="/Library/Frameworks/Python.framework/Versions/3.11/bin/python3"
    fi
  elif [[ -x "$BASE_DIR/.venv/bin/python" ]]; then
    PYTHON_BIN="$BASE_DIR/.venv/bin/python"
  else
    PYTHON_BIN="python3"
  fi
fi

MODE="${1:-full}"
exec "$PYTHON_BIN" auto_update.py "$MODE"
