#!/bin/zsh
set -euo pipefail

BASE_DIR="${STOCK_MONITOR_DIR:-$(cd "$(dirname "$0")" && pwd)}"
PORT="${STOCK_MONITOR_PORT:-8787}"
HOST="${STOCK_MONITOR_HOST:-127.0.0.1}"
PYTHON_BIN="$BASE_DIR/.venv/bin/python"
if [[ ! -x "$PYTHON_BIN" ]]; then
  PYTHON_BIN="python3"
fi

cd "$BASE_DIR"
exec "$PYTHON_BIN" stock_monitor_server.py --dir "$BASE_DIR" --host "$HOST" --port "$PORT" --public
