#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="${STOCK_MONITOR_DIR:-$(cd "$(dirname "$0")" && pwd)}"
cd "$BASE_DIR"
mkdir -p logs
PYTHON_BIN="$BASE_DIR/.venv/bin/python"
if [[ ! -x "$PYTHON_BIN" ]]; then
  PYTHON_BIN="python3"
fi

{
  echo "===== $(date '+%Y-%m-%d %H:%M:%S') auto update ====="
  echo "Mode: token-free quant update"
  "$PYTHON_BIN" quant_update.py
} >> logs/quant_update.log 2>&1

{
  echo "===== $(date '+%Y-%m-%d %H:%M:%S') news update ====="
  echo "Mode: token-free RSS/news rule update"
  "$PYTHON_BIN" news_update.py
} >> logs/news_update.log 2>&1
