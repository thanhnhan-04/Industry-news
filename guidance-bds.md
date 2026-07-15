# Guidance theo dõi ngành Bất động sản Việt Nam

Phạm vi mã: VHM, VRE, NLG, KDH, DXG, PDR, DIG, NVL, HDG, KBC.

## Nguyên tắc ghi tin (3 lớp)
1. Tin là gì? 2. Tác động vào khâu nào của chuỗi giá trị (pháp lý → mở bán → bàn giao → tài chính)? 3. Mã nào hưởng lợi/bị ảnh hưởng và vì sao?
- Mỗi tin phải có 1 dòng "ý nghĩa đầu tư". Ưu tiên nguồn gốc (Chính phủ, Bộ Xây dựng, Sở Xây dựng, HoREA, IR doanh nghiệp, HOSE/HNX). Không chế số — chưa có thì ghi "chưa công bố".
- Tách rõ tin pháp lý/chính sách (dài hạn, ảnh hưởng toàn ngành) với tin doanh nghiệp riêng lẻ (presales, bàn giao, đáo hạn).
- Thang điểm tác động: +2 rất tích cực, +1 tích cực, 0 trung tính, −1 tiêu cực, −2 rất tiêu cực.

## QUY TẮC NGÀY (date & srcDate) — RẤT QUAN TRỌNG
- `date` và `srcDate` phải là NGÀY THÔNG TIN ĐƯỢC ĐĂNG (publish date của bài/thông cáo), KHÔNG phải ngày truy xuất. Bài có ngày đăng → srcDate = "dd/mm/yyyy" (KHÔNG kèm "(truy xuất)").
- CHỈ dùng nhãn "(truy xuất)" cho TRANG DỮ LIỆU ĐỘNG không có ngày đăng (bảng giá, trang giá/cổ tức/KQKD cập nhật liên tục) khi báo giá trị hiện tại; khi đó `date` = ngày của giá trị đó (thường là hôm nay).
- TUYỆT ĐỐI không lấy ngày truy xuất làm "độ mới" của một bài có ngày đăng. Nếu thông tin có ngày đăng cũ hơn 30 ngày → BỎ, không đưa vào items dù mới tìm thấy hôm nay. Khi không tìm được ngày đăng, ưu tiên tìm nguồn khác có ngày rõ ràng.

## Nhóm yếu tố (factor) — khớp với data-bds.js
- legal: Pháp lý & gỡ vướng (Luật Đất đai 2024, Nhà ở 2023, KDBĐS 2023, nghị định, bảng giá đất, tiền sử dụng đất, đủ điều kiện mở bán).
- supply: Nguồn cung & mở bán (dự án mới, presales, số căn mở bán, tỷ lệ hấp thụ).
- demand: Cầu & giá (giá sơ cấp/thứ cấp, tâm lý người mua, lượng giao dịch).
- credit: Tín dụng & lãi suất (room tín dụng BĐS, lãi suất vay mua nhà, gói tín dụng ưu đãi).
- bond: Trái phiếu & đáo hạn (áp lực đáo hạn TPDN, phát hành mới, giãn/hoán đổi nợ).
- infra: Hạ tầng & quy hoạch (đầu tư công, vành đai, cao tốc, sân bay Long Thành, sáp nhập tỉnh).
- finance: Tài chính DN (presales/backlog, doanh thu bàn giao, nợ vay, dòng tiền, cổ tức, pha loãng).
- market: Thị trường & dòng tiền (khuyến nghị CTCK, biến động giá/khối lượng nhóm BĐS).

## Logic chuỗi giá trị (ai hưởng lợi khâu nào)
- VHM: dẫn dắt bằng presales đại đô thị + bàn giao; quy mô lớn, ít rủi ro pháp lý.
- NLG, KDH: quỹ đất sạch, mở bán đều; theo dõi hấp thụ & tiến độ pháp lý.
- DXG, PDR, DIG, NVL: câu chuyện gỡ pháp lý + cơ cấu nợ/trái phiếu là biến số chính (đòn bẩy cao, nhạy với đáo hạn TP).
- KBC: BĐS KCN — nhìn FDI, tỷ lệ lấp đầy, giá thuê, không theo chu kỳ nhà ở.
- VRE: TTTM cho thuê — nhìn tỷ lệ lấp đầy, sức mua tiêu dùng.
- HDG: BĐS + thủy điện/điện gió — tách 2 mảng.

## Alert rules — báo ngay (đánh dấu isNew + nhãn ALERT)
- Văn bản pháp lý mới hiệu lực (nghị định hướng dẫn Luật Đất đai/Nhà ở/KDBĐS, bảng giá đất, tiền sử dụng đất).
- Dự án lớn được gỡ pháp lý / cấp phép mở bán (Aqua City, NovaWorld, Gem Riverside, các đại đô thị VHM…).
- Đáo hạn / chậm trả / hoán đổi trái phiếu của DN trong phạm vi (NVL, PDR, DIG, DXG…).
- Thay đổi room tín dụng BĐS, lãi suất điều hành, gói tín dụng nhà ở xã hội.
- Presales/KQKD quý lệch mạnh kỳ vọng; pha loãng (phát hành lớn).
- Cổ phiếu nhóm tăng/giảm đồng loạt thanh khoản lớn.

## Mẫu báo cáo hằng ngày (8–12 dòng)
1. Pháp lý/chính sách: [luật/nghị định/bảng giá đất] → tác động ngành & mã.
2. Tín dụng & lãi suất: [room, lãi suất, gói tín dụng].
3. Nguồn cung & mở bán/presales: [dự án mới, hấp thụ].
4. Trái phiếu & đáo hạn: [DN nào, quy mô, xử lý].
5. Hạ tầng/quy hoạch: [đầu tư công, sân bay, sáp nhập tỉnh].
6. Doanh nghiệp: [presales/KQKD/bàn giao/pha loãng].
7. Giao dịch cổ phiếu: [mã tăng/giảm mạnh, dòng tiền].
8. Sentiment ngành hôm nay [+2..−2], lý do. 9. Việc cần làm tiếp. Nguồn: [link...]

## Nguồn ưu tiên
Chính sách: Bộ Xây dựng (moc.gov.vn), baochinhphu.vn, HoREA (horea.org.vn), Sở Xây dựng các tỉnh.
Thị trường: VARS (vars.com.vn), CBRE, Savills, Batdongsan.com.vn, CafeLand.
IR/DN: vinhomes.vn, namlonggroup.com, khangdien.com.vn, datxanh.vn, phatdat.com.vn, dic.vn, novaland.com.vn, hdgroup.vn, kinhbaccity.vn.
Sàn/giá: hsx.vn, hnx.vn, finance.vietstock.vn, cafef.vn/du-lieu.chn; trái phiếu: cbonds/HNX bond, sgx VBMA (vbma.org.vn).
