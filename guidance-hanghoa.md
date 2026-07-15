# Guidance theo dõi nhóm Hàng hóa nông nghiệp Việt Nam (đường, sữa, sắn, ngô)

Phạm vi mã: SBT, SLS, LSS, QNS (đường/sữa đậu nành) · VNM, IDP, MCM (sữa) · DBC, BAF, HAG (ngô–TĂCN–chăn nuôi & nông sản).

## Nguyên tắc ghi tin (3 lớp)
1. Tin là gì (giá hàng hóa hay tin DN)? 2. Tác động vào nhóm con nào (đường/sữa/ngô–TĂCN/sắn)? 3. Mã nào hưởng lợi/bị ảnh hưởng và vì sao?
- Đây là nhóm "commodity-driven": giá hàng hóa đầu vào/đầu ra là leading indicator. Luôn gắn tin giá với mã chịu tác động.
- Mỗi tin có 1 dòng "ý nghĩa đầu tư". Ưu tiên nguồn gốc (Trading Economics, Global Dairy Trade, Hải quan, AgroMonitor, IR DN). Không chế số.
- Tách rõ 4 nhóm con — đừng trộn lẫn (giá đường không tác động VNM; giá heo/ngô không tác động SBT).
- Thang điểm: +2 rất tích cực, +1 tích cực, 0 trung tính, −1 tiêu cực, −2 rất tiêu cực.

## QUY TẮC NGÀY (date & srcDate) — RẤT QUAN TRỌNG
- `date` và `srcDate` phải là NGÀY THÔNG TIN ĐƯỢC ĐĂNG (publish date của bài/thông cáo), KHÔNG phải ngày truy xuất. Bài có ngày đăng → srcDate = "dd/mm/yyyy" (KHÔNG kèm "(truy xuất)").
- CHỈ dùng nhãn "(truy xuất)" cho TRANG DỮ LIỆU ĐỘNG không có ngày đăng (bảng giá Trading Economics / Global Dairy Trade, trang giá cập nhật liên tục) khi báo giá trị hiện tại; khi đó `date` = ngày của giá trị đó (thường là hôm nay).
- TUYỆT ĐỐI không lấy ngày truy xuất làm "độ mới" của một bài có ngày đăng. Nếu thông tin có ngày đăng cũ hơn 30 ngày → BỎ, không đưa vào items dù mới tìm thấy hôm nay. Khi không tìm được ngày đăng, ưu tiên tìm nguồn khác có ngày rõ ràng.

## Nhóm yếu tố (factor) — khớp với data-hanghoa.js
- sugar: Đường (giá đường thế giới #11, giá đường nội, ATIGA/nhập lậu, thuế CBPG đường Thái, vùng mía).
- milk: Sữa (giá sữa bột WMP/SMP nhập, sức mua sữa nội, đàn bò, thị phần).
- corn: Ngô & thức ăn chăn nuôi (giá ngô/khô đậu nhập, giá heo hơi, dịch ASF, tái đàn).
- cassava: Sắn (giá sắn lát/tinh bột, cầu Trung Quốc, ethanol).
- input: Chi phí đầu vào & logistics (cước vận tải, năng lượng, phân bón).
- fx: Tỷ giá & nhập khẩu nguyên liệu (USD/VND ảnh hưởng giá bột sữa, ngô, khô đậu nhập).
- policy: Chính sách & phòng vệ TM (thuế nhập khẩu, hạn ngạch đường, CBPG, ATIGA).
- finance: Tài chính DN (KQKD, biên gộp, tồn kho, đòn bẩy).
- market: Thị trường & dòng tiền.

## Logic chuỗi giá trị (ai hưởng lợi gì)
- Đường (SBT, SLS, LSS): giá đường tăng + phòng vệ TM chặn đường Thái/nhập lậu = tích cực. SBT quy mô lớn, đòn bẩy cao; SLS biên cao, cổ tức tiền mặt lớn.
- Sữa (VNM, IDP, MCM, QNS-Vinasoy): giá bột sữa nhập (WMP/SMP) RẺ = biên tốt (đầu vào); cộng sức mua & thị phần. QNS có cả đường + sữa đậu nành.
- Ngô–TĂCN–heo (DBC, BAF, HAG): công thức biên = giá heo (đầu ra) cao + giá ngô/khô đậu (đầu vào) thấp. Theo dõi dịch ASF & chu kỳ tái đàn. HAG còn có chuối/sầu riêng.
- Sắn: cầu Trung Quốc & giá tinh bột; ít mã thuần niêm yết — chủ yếu tác động gián tiếp (HAG, DN tinh bột nhỏ).

## Alert rules — báo ngay (đánh dấu isNew + nhãn ALERT)
- Giá đường #11 / giá sữa bột GDT / giá ngô / giá heo hơi biến động mạnh (±5%+ hoặc đảo xu hướng).
- Quyết định CBPG/phòng vệ TM với đường nhập khẩu; thay đổi hạn ngạch/ATIGA.
- Bùng phát dịch ASF hoặc tin tái đàn lớn (DBC, BAF).
- KQKD quý lệch mạnh kỳ vọng; thay đổi thị phần sữa.
- Cầu Trung Quốc với sắn/tinh bột thay đổi mạnh.
- Cổ phiếu nhóm con tăng/giảm đồng loạt thanh khoản lớn.

## Mẫu báo cáo hằng ngày (8–12 dòng)
1. Đường: [giá #11 & nội, phòng vệ TM] → SBT/SLS/LSS/QNS.
2. Sữa: [giá WMP/SMP, sức mua, thị phần] → VNM/IDP/MCM.
3. Ngô–TĂCN–heo: [giá ngô/khô đậu, giá heo, ASF] → DBC/BAF/HAG.
4. Sắn: [giá tinh bột, cầu TQ].
5. Tỷ giá & chi phí đầu vào: [USD/VND, cước, năng lượng].
6. Doanh nghiệp: [KQKD/tồn kho/mở rộng].
7. Giao dịch cổ phiếu: [mã tăng/giảm, dòng tiền].
8. Sentiment nhóm hôm nay [+2..−2], lý do (nêu rõ nhóm con nào kéo). 9. Việc cần làm tiếp. Nguồn: [link...]

## Nguồn ưu tiên
Giá hàng hóa: Trading Economics (sugar, corn), Global Dairy Trade (globaldairytrade.info), ICE/CBOT.
Trong nước: AgroMonitor (agromonitor.vn), Chăn nuôi Việt Nam (channuoivietnam.com — giá heo), Bộ Nông nghiệp & Môi trường (mard.gov.vn), Tổng cục Hải quan (customs.gov.vn — XK sắn, NK ngô/đậu/sữa).
Hiệp hội: Hiệp hội Mía đường VN (VSSA), Hiệp hội Chăn nuôi VN.
IR/DN: ttcagris.com (SBT), miaduongsonla (SLS), lasuco.com.vn (LSS), qns.com.vn (QNS), vinamilk.com.vn (VNM), idp/MCM, dabaco.com.vn (DBC), nongnghiepbaf.vn (BAF), hagl.com.vn (HAG).
Sàn/giá: hsx.vn, hnx.vn, finance.vietstock.vn, cafef.vn/du-lieu.chn.
