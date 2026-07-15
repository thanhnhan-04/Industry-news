# Guidance theo dõi ngành Dệt may Việt Nam

Phạm vi mã: TNG, MSH, TCM, STK, GIL, ADS, VGT, HTG.

## Nguyên tắc ghi tin (3 lớp)
1. Tin là gì? 2. Tác động vào khâu nào (nguyên liệu → sợi → dệt nhuộm → may → xuất khẩu)? 3. Mã nào hưởng lợi/bị ảnh hưởng và vì sao?
- Mỗi tin có 1 dòng "ý nghĩa đầu tư". Ưu tiên nguồn gốc (VITAS, Hải quan, Bộ Công Thương, OTEXA, IR doanh nghiệp). Không chế số.
- Tách rõ tin vĩ mô/đơn hàng toàn ngành với tin doanh nghiệp riêng lẻ. Tách mảng sợi (STK, ADS, mảng sợi của TCM/VGT) với mảng may (TNG, MSH, HTG) — hai mảng có chu kỳ và biên khác nhau.
- Thang điểm: +2 rất tích cực, +1 tích cực, 0 trung tính, −1 tiêu cực, −2 rất tiêu cực.

## QUY TẮC NGÀY (date & srcDate) — RẤT QUAN TRỌNG
- `date` và `srcDate` phải là NGÀY THÔNG TIN ĐƯỢC ĐĂNG (publish date của bài/thông cáo), KHÔNG phải ngày truy xuất. Bài có ngày đăng → srcDate = "dd/mm/yyyy" (KHÔNG kèm "(truy xuất)").
- CHỈ dùng nhãn "(truy xuất)" cho TRANG DỮ LIỆU ĐỘNG không có ngày đăng (bảng giá, trang giá/KQKD cập nhật liên tục) khi báo giá trị hiện tại; khi đó `date` = ngày của giá trị đó (thường là hôm nay).
- TUYỆT ĐỐI không lấy ngày truy xuất làm "độ mới" của một bài có ngày đăng. Nếu thông tin có ngày đăng cũ hơn 30 ngày → BỎ, không đưa vào items dù mới tìm thấy hôm nay. Khi không tìm được ngày đăng, ưu tiên tìm nguồn khác có ngày rõ ràng.

## Nhóm yếu tố (factor) — khớp với data-detmay.js
- export: Đơn hàng & xuất khẩu (kim ngạch, đơn hàng quý tới, thị trường Mỹ/EU/Nhật/Hàn, dịch chuyển đơn từ TQ/Bangladesh).
- tariff: Thuế & thương mại (thuế đối ứng Mỹ, FTA EVFTA/CPTPP, quy tắc xuất xứ "từ sợi/vải trở đi", phòng vệ TM).
- input: Nguyên liệu (giá bông thế giới, giá xơ/sợi, nhập khẩu vải TQ, chênh bông–sợi).
- fx: Tỷ giá (USD/VND; đồng nội tệ đối thủ Bangladesh/Ấn Độ/TQ).
- labor: Lao động & chi phí (lương tối thiểu, thiếu hụt/biến động lao động, năng suất).
- esg: ESG & xanh hóa (CBAM, truy xuất nguồn gốc, tái chế, yêu cầu của nhãn hàng, sợi recycled).
- finance: Tài chính DN (KQKD, biên gộp, đơn giá, lượng đơn, tồn kho).
- market: Thị trường & dòng tiền (khuyến nghị CTCK, biến động giá/khối lượng).

## Logic chuỗi giá trị (ai hưởng lợi khâu nào)
- Mảng may (TNG, MSH, HTG, GIL): nhìn đơn hàng, đơn giá, tỷ trọng FOB/ODM, lấp đầy chuyền. Cầu Mỹ/EU là biến số chính.
- MSH: tỷ trọng khách Mỹ lớn → nhạy với thuế đối ứng Mỹ.
- TCM: chuỗi khép kín sợi–dệt–may, khách Hàn/Nhật, ODM biên cao; nhưng mảng sợi có thể lỗ khi giá sợi yếu.
- Mảng sợi (STK, ADS, VGT): nhìn spread bông–sợi, cầu Trung Quốc, giá dầu (xơ polyester). STK đặc thù sợi tái chế (premium).
- Điểm nghẽn ngành: thiếu khâu dệt–nhuộm vải → phụ thuộc vải nhập, khó tận dụng xuất xứ CPTPP/EVFTA. Tin đầu tư dệt nhuộm là tích cực dài hạn.

## Alert rules — báo ngay (đánh dấu isNew + nhãn ALERT)
- Mỹ áp/điều chỉnh thuế đối ứng hoặc thuế với hàng dệt may VN.
- Đơn hàng quý tới của DN lớn lệch mạnh (đầy/thiếu) so kỳ vọng.
- Giá bông thế giới biến động mạnh (±5%+) hoặc giá sợi đảo chiều.
- KQKD quý lệch mạnh; mảng sợi chuyển lỗ/lãi.
- Chính sách FTA/xuất xứ/CBAM mới ảnh hưởng xuất khẩu.
- Cổ phiếu nhóm tăng/giảm đồng loạt thanh khoản lớn.

## Mẫu báo cáo hằng ngày (8–12 dòng)
1. Đơn hàng & xuất khẩu: [kim ngạch/đơn hàng, thị trường] → mã.
2. Thuế & thương mại: [thuế Mỹ, FTA, xuất xứ].
3. Nguyên liệu: [giá bông/sợi, chênh bông–sợi] → mảng sợi.
4. Tỷ giá: [USD/VND, đối thủ].
5. Doanh nghiệp: [KQKD/đơn giá/nhà máy mới].
6. Giao dịch cổ phiếu: [mã tăng/giảm, dòng tiền].
7. Sentiment ngành hôm nay [+2..−2], lý do. 8. Việc cần làm tiếp. Nguồn: [link...]

## Nguồn ưu tiên
Ngành: VITAS (vietnamtextile.org.vn), Vinatex (vinatex.com.vn), Bộ Công Thương (moit.gov.vn).
Số liệu XNK: Tổng cục Hải quan (customs.gov.vn), OTEXA Mỹ (otexa.trade.gov).
Giá nguyên liệu: Trading Economics – Cotton (tradingeconomics.com/commodity/cotton), ICE Cotton.
IR/DN: tng.vn, msh.com.vn, thanhcongtextile.com, stk.com.vn, gilimex.com, damsan.com.vn, hoatho.com.vn.
Sàn/giá: hsx.vn, hnx.vn, finance.vietstock.vn, cafef.vn/du-lieu.chn.
