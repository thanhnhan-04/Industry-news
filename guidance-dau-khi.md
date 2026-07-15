# Guidance theo dõi ngành Dầu khí Việt Nam

Phạm vi mã: PVD, PVS, GAS, PVT, BSR, PLX, OIL, POW, DPM, DCM (+ phụ trợ PVB, PVC, PXS, CNG).

## Nguyên tắc ghi tin (3 lớp)
1. Tin là gì? 2. Tác động vào khâu nào của chuỗi giá trị? 3. Mã nào hưởng lợi/bị ảnh hưởng và vì sao?
- Mỗi tin phải có 1 dòng "ý nghĩa đầu tư". Ưu tiên nguồn gốc (Chính phủ, Bộ Công Thương, PVN, IR doanh nghiệp, HOSE/HNX). Không chế số — chưa có thì ghi "chưa công bố". Tách ngắn hạn (giá dầu) và dài hạn (pháp lý/dự án). Tách dầu và khí.
- Thang điểm tác động: +2 rất tích cực, +1 tích cực, 0 trung tính, −1 tiêu cực, −2 rất tiêu cực.

## QUY TẮC NGÀY (date & srcDate) — RẤT QUAN TRỌNG
- `date` và `srcDate` phải là NGÀY THÔNG TIN ĐƯỢC ĐĂNG (publish date của bài/thông cáo), KHÔNG phải ngày truy xuất. Bài có ngày đăng → srcDate = "dd/mm/yyyy" (KHÔNG kèm "(truy xuất)").
- CHỈ dùng nhãn "(truy xuất)" cho TRANG DỮ LIỆU ĐỘNG không có ngày đăng (bảng giá Trading Economics, trang giá/cổ tức/KQKD cập nhật liên tục) khi báo giá trị hiện tại; khi đó `date` = ngày của giá trị đó (thường là hôm nay).
- TUYỆT ĐỐI không lấy ngày truy xuất làm "độ mới" của một bài có ngày đăng. Nếu thông tin có ngày đăng cũ hơn 30 ngày → BỎ, không đưa vào items dù mới tìm thấy hôm nay. Khi không tìm được ngày đăng, ưu tiên tìm nguồn khác có ngày rõ ràng.

## Nhóm yếu tố (factor) dùng để phân loại tin trên dashboard
- oil: Giá dầu & OPEC+ (Brent/WTI, OPEC+, tồn kho Mỹ, địa chính trị)
- gas: Khí & LNG (giá LNG châu Á, kho Thị Vải/Sơn Mỹ/Vũng Áng, nguồn khí nội địa)
- legal: Pháp lý & chính sách (Luật Dầu khí, NĐ 45/2023, PSC, GSPA, FDP, FID, NĐ 56/2025, NĐ 100/2025, PPA)
- project: Dự án (Lô B – Ô Môn, Sư Tử Trắng 2B, Lạc Đà Vàng, Dung Quất mở rộng, LNG)
- refining: Biên lọc dầu (crack spread xăng/diesel/Jet, tồn kho, kỳ bảo dưỡng)
- shipping: Vận tải biển (cước tanker/LPG, sanctions, bunker)
- fuel: Giá xăng dầu trong nước (giá cơ sở, chu kỳ điều hành thứ Năm, quỹ bình ổn, thuế, E10)
- finance: Tài chính DN (BCTC, backlog, doanh thu/LN, nợ vay, tỷ giá, cổ tức, tăng vốn)
- market: Thị trường & dòng tiền (khuyến nghị CTCK, biến động giá/khối lượng)

## Logic chuỗi giá trị (ai hưởng lợi khâu nào)
- PVS/PVD: hưởng lợi sớm ở giai đoạn CAPEX/triển khai dự án (khoan, EPC).
- GAS: hưởng lợi khi dòng khí vào hệ thống/đường ống vận hành.
- PVT: hưởng lợi khi có vận tải dầu thô/LPG/sản phẩm dầu (KHÔNG phải mắt xích chính của dự án khí đường ống).
- BSR: nhìn crack spread, tồn kho, công suất, kỳ bảo dưỡng — không chỉ giá dầu.
- PLX/OIL: giá dầu tăng ≠ lợi nhuận tăng; theo dõi cơ chế điều hành giá, chiết khấu, tồn kho.
- POW/DPM/DCM: theo dõi giá khí đầu vào và sản lượng huy động/tiêu thụ.

## Alert rules — báo ngay (đánh dấu isNew + nêu trong tóm tắt với nhãn ALERT)
- Brent tăng/giảm > 3% trong ngày (ghi lý do: địa chính trị/OPEC/tồn kho/demand).
- Tin hợp đồng Lô B / Sư Tử Trắng / Lạc Đà Vàng (PVN/PVGAS/PVD/PVS).
- Văn bản pháp lý mới về điện khí LNG, PPA, giá khí, giá xăng dầu.
- BCTC quý lệch mạnh kỳ vọng.
- BSR có tin bảo dưỡng/gián đoạn/nâng cấp Dung Quất.
- PVT mua/bán tàu, charter dài hạn, cước biến động mạnh.
- Giá xăng dầu điều chỉnh bất thường ngoài lịch (PLX/OIL/BSR).
- Cổ phiếu ngành tăng/giảm đồng loạt với thanh khoản lớn.

## Mẫu báo cáo hằng ngày (8–12 dòng)
1. Global: Brent/WTI [±%] vì [lý do] → tác động [mã].
2. Việt Nam/policy: [pháp lý/giá xăng dầu/quy hoạch] → [mã].
3. Dự án: [Lô B, Sư Tử Trắng 2B, Dung Quất, LNG] có gì mới.
4. Doanh nghiệp: [công bố/BCTC/hợp đồng].
5. Giao dịch cổ phiếu: [mã tăng/giảm mạnh, dòng tiền].
6. Sentiment ngành hôm nay: [+2..−2], lý do.
7. Việc cần làm tiếp.
Nguồn: [link...]

## Nguồn ưu tiên
Global: EIA (eia.gov/outlooks/steo), EIA Weekly Petroleum, IEA Oil Market Report, OPEC MOMR, Reuters Energy, Trading Economics Brent, ICE Brent.
Việt Nam: PVN (pvn.vn), Bộ Công Thương (moit.gov.vn), vanban.chinhphu.vn, baochinhphu.vn, EVN.
IR/DN: pvdrilling.com.vn, ptsc.com.vn, pvgas.com.vn, pvtrans.com, bsr.com.vn, petrolimex.com.vn, pvoil.com.vn, pvpower.vn, dpm.vn, pvcfc.com.vn.
Sàn/giá: hsx.vn, hnx.vn, finance.vietstock.vn, cafef.vn/du-lieu.chn.
Chuyên ngành: petrotimes.vn, tapchicongthuong.vn, offshore-energy.biz.
