# Guidance theo dõi ngành Thủy sản Việt Nam

Phạm vi mã: VHC, ANV, FMC, MPC, IDI, CMX (+ phụ trợ ASM, ABT).

## Nguyên tắc ghi tin (3 lớp)
1. Tin là gì? 2. Tác động vào khâu nào (thức ăn → nuôi trồng → chế biến → xuất khẩu → thị trường tiêu thụ)? 3. Mã nào hưởng lợi/bị ảnh hưởng và vì sao?
- Mỗi tin có 1 dòng "ý nghĩa đầu tư". Ưu tiên nguồn gốc (VASEP, Hải quan, DOC/USTR Mỹ, IR doanh nghiệp). Không chế số.
- Tách rõ cá tra (VHC, ANV, IDI) với tôm (FMC, MPC, CMX) — hai chuỗi khác thị trường, khác rào cản thuế.
- Tách tin thuế/thị trường (vĩ mô) với tin doanh nghiệp riêng lẻ.
- Thang điểm: +2 rất tích cực, +1 tích cực, 0 trung tính, −1 tiêu cực, −2 rất tiêu cực.

## QUY TẮC NGÀY (date & srcDate) — RẤT QUAN TRỌNG
- `date` và `srcDate` phải là NGÀY THÔNG TIN ĐƯỢC ĐĂNG (publish date của bài/thông cáo), KHÔNG phải ngày truy xuất. Bài có ngày đăng → srcDate = "dd/mm/yyyy" (KHÔNG kèm "(truy xuất)").
- CHỈ dùng nhãn "(truy xuất)" cho TRANG DỮ LIỆU ĐỘNG không có ngày đăng (bảng giá, trang giá/cổ tức/KQKD cập nhật liên tục) khi báo giá trị hiện tại; khi đó `date` = ngày của giá trị đó (thường là hôm nay).
- TUYỆT ĐỐI không lấy ngày truy xuất làm "độ mới" của một bài có ngày đăng. Nếu thông tin có ngày đăng cũ hơn 30 ngày → BỎ, không đưa vào items dù mới tìm thấy hôm nay. Khi không tìm được ngày đăng, ưu tiên tìm nguồn khác có ngày rõ ràng.

## Nhóm yếu tố (factor) — khớp với data-thuysan.js
- export: Xuất khẩu & thị trường (kim ngạch, đơn hàng, thị trường Mỹ/TQ/EU/Nhật, giá bán bình quân).
- tariff: Thuế & phòng vệ TM (CBPG tôm/cá tra Mỹ – DOC POR, thuế đối ứng USTR, miễn trừ).
- material: Nguyên liệu & nuôi trồng (giá cá tra/tôm nguyên liệu, vùng nuôi tự chủ, con giống, dịch bệnh).
- feed: Chi phí đầu vào (giá thức ăn: đậu nành, bột cá; tự chủ thức ăn).
- fx: Tỷ giá (USD/VND; đồng đối thủ Ecuador/Ấn Độ).
- policy: Pháp lý & rào cản (IUU – thẻ vàng EU, MMPA Mỹ, truy xuất nguồn gốc, ATIGA).
- finance: Tài chính DN (KQKD, biên gộp, mảng giá trị gia tăng/C&G, tồn kho).
- market: Thị trường & dòng tiền (khuyến nghị CTCK, biến động giá/khối lượng).

## Logic chuỗi giá trị (ai hưởng lợi khâu nào)
- Cá tra (VHC, ANV, IDI): nhìn giá cá tra nguyên liệu & giá XK, thị trường TQ (động lực chính bù Mỹ/EU). VHC có mảng C&G (collagen/gelatin) biên cao; ANV tự chủ chuỗi & đẩy mạnh TQ.
- Tôm (FMC, MPC, CMX): nhạy với thuế CBPG Mỹ; cạnh tranh Ecuador/Ấn Độ; FMC mạnh thị trường Nhật, CMX mạnh EU & tôm sinh thái.
- Tự chủ vùng nuôi + thức ăn = lợi thế biên khi giá nguyên liệu biến động.
- Rào cản (IUU/MMPA) tác động mạnh tới hàng đi EU/Mỹ — DN đa dạng thị trường chịu ảnh hưởng nhẹ hơn.

## Alert rules — báo ngay (đánh dấu isNew + nhãn ALERT)
- DOC công bố/điều chỉnh thuế CBPG tôm/cá tra (POR); USTR áp/sửa thuế đối ứng; quyết định miễn trừ.
- EU thay đổi trạng thái thẻ vàng IUU; Mỹ siết MMPA.
- Giá cá tra/tôm nguyên liệu hoặc giá XK biến động mạnh.
- KQKD quý lệch mạnh kỳ vọng; tin về mảng C&G (VHC).
- Cổ phiếu nhóm tăng/giảm đồng loạt thanh khoản lớn.

## Mẫu báo cáo hằng ngày (8–12 dòng)
1. Xuất khẩu & thị trường: [kim ngạch, thị trường] → mã.
2. Thuế & phòng vệ TM: [DOC/USTR, EU IUU].
3. Nguyên liệu & nuôi trồng: [giá cá tra/tôm, dịch bệnh].
4. Chi phí đầu vào: [giá thức ăn].
5. Tỷ giá: [USD/VND, đối thủ].
6. Doanh nghiệp: [KQKD/đơn hàng/C&G].
7. Giao dịch cổ phiếu: [mã tăng/giảm, dòng tiền].
8. Sentiment ngành hôm nay [+2..−2], lý do. 9. Việc cần làm tiếp. Nguồn: [link...]

## Nguồn ưu tiên
Ngành: VASEP (vasep.com.vn), Tổng cục Hải quan (customs.gov.vn), Thị trường cá tra (thitruongcatra.com).
Thuế Mỹ: DOC/USITC, USTR (ustr.gov), Federal Register.
IR/DN: vinhhoan.com (VHC), navicorp.com.vn (ANV), fimexvn.com (FMC), minhphu.com (MPC), idiseafood (IDI), camimex (CMX).
Sàn/giá: hsx.vn, hnx.vn, finance.vietstock.vn, cafef.vn/du-lieu.chn.
