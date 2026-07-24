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

Các chế độ:

- `./run_auto_update.sh news`: quét tin nhanh, phù hợp chạy 30 phút/lần.
- `./run_auto_update.sh full`: cập nhật số liệu thị trường và quét tin.
- Mỗi lần chạy sẽ build lại `index.html` từ `dashboard.html` và `data-*.js`.

Hoặc mở dashboard local và dùng các nút:

- `Cập nhật số liệu`
- `Quét tin`

Public share nên chạy ở chế độ read-only, không cho người xem bên ngoài kích hoạt cập nhật dữ liệu trên máy chủ.

## Xuất bản lên GitHub Pages

Tạo bản một file:

```bash
python3 export_index.py
```

Sau đó commit và push:

```bash
git add index.html
git commit -m "Update dashboard"
git push
```

Trong GitHub, bật Pages ở `Settings > Pages`, chọn `Deploy from a branch`,
branch `main`, folder `/root`. Website sẽ tự cập nhật sau mỗi lần push.

## Tự cập nhật bản web public và local

GitHub Pages là web tĩnh, nên trình duyệt không tự chạy crawler được. Repo này
dùng GitHub Actions để tự cập nhật:

- Quét tin: mỗi 30 phút, nếu có tin mới thì cập nhật `data-*.js` và `index.html`.
- Cập nhật số liệu thị trường: 16:45 giờ Việt Nam các ngày trong tuần, sau phiên.
- Chạy tay: vào `Actions` > `Update industry dashboard` > `Run workflow`.
- Workflow quét tin chạy `python news_update.py`; workflow full chạy `./run_auto_update.sh`,
  sau đó `python export_index.py`.
- Nếu có dữ liệu mới, workflow commit `data-*.js` và `index.html`; GitHub Pages
  sẽ tự deploy lại sau commit đó.

Máy local dùng LaunchAgent trong `launchd/`:

- Quét tin: mỗi 30 phút.
- Cập nhật full: 16:45 giờ Việt Nam các ngày trong tuần, sau phiên.
