#!/usr/bin/env python3
"""Local web wrapper for Stock monitor.

Serves dashboard.html and exposes small local-only endpoints:
- GET  /api/status
- POST /api/run-quant
- POST /api/run-news

The server itself does not call any LLM. The quant updater is also token-free.
"""
from __future__ import annotations

import argparse
import json
import os
import socket
import subprocess
import sys
import time
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


def json_bytes(payload: dict) -> bytes:
    return json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")


def text_or_empty(value: object) -> str:
    if not value:
        return ""
    if isinstance(value, bytes):
        return value.decode("utf-8", errors="replace")
    return str(value)


class StockMonitorHandler(SimpleHTTPRequestHandler):
    server_version = "StockMonitorHTTP/1.0"

    def end_headers(self) -> None:
        if self.path.endswith(".html") or self.path.endswith(".js") or self.path.startswith("/api/"):
            self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    @property
    def base_dir(self) -> Path:
        return self.server.base_dir  # type: ignore[attr-defined]

    @property
    def public_mode(self) -> bool:
        return bool(getattr(self.server, "public_mode", False))

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/status":
            self._send_json(self._status_payload())
            return
        if parsed.path == "/":
            self.path = "/dashboard.html"
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        if self.public_mode:
            self._send_json({"ok": False, "error": "Public read-only mode"}, status=HTTPStatus.FORBIDDEN)
            return
        if parsed.path == "/api/run-quant":
            qs = parse_qs(parsed.query)
            sector = (qs.get("sector") or [""])[0].strip()
            self._send_json(self._run_script("quant_update.py", "quant_update.log", sector))
            return
        if parsed.path == "/api/run-news":
            qs = parse_qs(parsed.query)
            sector = (qs.get("sector") or [""])[0].strip()
            self._send_json(self._run_script("news_update.py", "news_update.log", sector))
            return
        self.send_error(HTTPStatus.NOT_FOUND, "Unknown endpoint")

    def _send_json(self, payload: dict, status: int = 200) -> None:
        body = json_bytes(payload)
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _status_payload(self) -> dict:
        files = []
        latest = 0.0
        for path in sorted(self.base_dir.glob("data-*.js")):
            st = path.stat()
            latest = max(latest, st.st_mtime)
            files.append({
                "name": path.name,
                "mtime": int(st.st_mtime),
                "mtimeText": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(st.st_mtime)),
                "size": st.st_size,
            })
        log_tail = ""
        log_path = self.base_dir / "logs" / "quant_update.log"
        if not self.public_mode and log_path.exists():
            text = log_path.read_text(encoding="utf-8", errors="replace")
            log_tail = "\n".join(text.splitlines()[-30:])
        payload = {
            "ok": True,
            "latestMtime": int(latest),
            "latestMtimeText": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(latest)) if latest else "",
            "files": files,
            "tokenMode": "server + quant_update = 0 LLM tokens",
            "publicMode": self.public_mode,
        }
        if not self.public_mode:
            payload["baseDir"] = str(self.base_dir)
            payload["logTail"] = log_tail
        return payload

    def _run_script(self, script_name: str, log_name: str, sector: str = "") -> dict:
        script = self.base_dir / script_name
        if not script.exists():
            return {"ok": False, "error": f"Missing {script.name}"}
        python_bin = self.base_dir / ".venv" / "bin" / "python"
        cmd = [str(python_bin if python_bin.exists() else sys.executable), str(script)]
        if sector:
            cmd.append(sector)
        started = time.time()
        logs = self.base_dir / "logs"
        logs.mkdir(exist_ok=True)
        try:
            proc = subprocess.run(
                cmd,
                cwd=str(self.base_dir),
                text=True,
                capture_output=True,
                timeout=600,
            )
        except subprocess.TimeoutExpired as exc:
            elapsed = round(time.time() - started, 2)
            stdout = text_or_empty(exc.stdout)
            stderr = text_or_empty(exc.stderr)
            output = (stdout + (("\n" + stderr) if stderr else "")).strip()
            stamp = time.strftime("%Y-%m-%d %H:%M:%S")
            with (logs / log_name).open("a", encoding="utf-8") as fh:
                fh.write(f"\n===== {stamp} timeout elapsed={elapsed}s =====\n")
                if output:
                    fh.write(output + "\n")
                fh.write("Update timed out before completion.\n")
            return {
                "ok": False,
                "returnCode": None,
                "elapsedSec": elapsed,
                "error": "Update chạy quá 10 phút và đã bị dừng. Thử lại từng phần hoặc kiểm tra rate-limit nguồn dữ liệu.",
                "output": output[-12000:],
                "status": self._status_payload(),
            }
        elapsed = round(time.time() - started, 2)
        output = (proc.stdout or "") + (("\n" + proc.stderr) if proc.stderr else "")
        stamp = time.strftime("%Y-%m-%d %H:%M:%S")
        with (logs / log_name).open("a", encoding="utf-8") as fh:
            fh.write(f"\n===== {stamp} rc={proc.returncode} elapsed={elapsed}s =====\n")
            fh.write(output)
            if output and not output.endswith("\n"):
                fh.write("\n")
        return {
            "ok": proc.returncode == 0,
            "returnCode": proc.returncode,
            "elapsedSec": elapsed,
            "output": output[-12000:],
            "status": self._status_payload(),
        }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dir", default=os.environ.get("STOCK_MONITOR_DIR") or Path(__file__).resolve().parent)
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=int(os.environ.get("STOCK_MONITOR_PORT", "8787")))
    parser.add_argument("--public", action="store_true", default=os.environ.get("STOCK_MONITOR_PUBLIC") == "1")
    args = parser.parse_args()

    base_dir = Path(args.dir).expanduser().resolve()
    if not (base_dir / "dashboard.html").exists():
        raise SystemExit(f"dashboard.html not found in {base_dir}")

    handler = lambda *h_args, **h_kwargs: StockMonitorHandler(*h_args, directory=str(base_dir), **h_kwargs)
    httpd = ThreadingHTTPServer((args.host, args.port), handler)
    httpd.base_dir = base_dir  # type: ignore[attr-defined]
    httpd.public_mode = bool(args.public)  # type: ignore[attr-defined]
    shown_host = "127.0.0.1" if args.host in ("0.0.0.0", "::") else args.host
    print(f"Stock monitor web: http://{shown_host}:{args.port}/dashboard.html")
    if args.host in ("0.0.0.0", "::"):
        ips = []
        try:
            hostname = socket.gethostname()
            for _, _, _, _, sockaddr in socket.getaddrinfo(hostname, None, socket.AF_INET):
                ip = sockaddr[0]
                if not ip.startswith("127.") and ip not in ips:
                    ips.append(ip)
        except Exception:
            pass
        for ip in ips:
            print(f"LAN URL: http://{ip}:{args.port}/dashboard.html")
    print(f"Serving: {base_dir}")
    print("Token mode: server + quant_update = 0 LLM tokens")
    print(f"Public mode: {'read-only' if args.public else 'off'}")
    httpd.serve_forever()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
