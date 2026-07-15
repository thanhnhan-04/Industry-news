# Stock Monitor

Dashboard theo dõi tin và số liệu ngành cho thị trường chứng khoán Việt Nam.

## Chạy local

```bash
./start_stock_monitor_web.sh
```

Mở:

```text
http://127.0.0.1:8787/dashboard.html
```

## Cập nhật dữ liệu

```bash
./run_auto_update.sh
```

Hoặc mở dashboard local và dùng các nút:

- `Cập nhật số liệu`
- `Quét tin`

Public share nên chạy ở chế độ read-only, không cho người xem bên ngoài kích hoạt cập nhật dữ liệu trên máy chủ.

