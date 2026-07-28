// ====== DỮ LIỆU NGÀNH BẤT ĐỘNG SẢN — task "quet-nganh-bds" cập nhật file này mỗi sáng ======
// Chỉ sửa: lastUpdated, sentiment, items. GIỮ NGUYÊN: factors, valuechain, tickers, sources, meta.
window.SECTORS = window.SECTORS || {};
window.SECTORS.bds = {
  id: "bds",
  name: "Bất động sản",
  icon: "🏘️",
  order: 2,
  scope: "VHM, VRE, NLG, KDH, DXG, PDR, DIG, NVL, HDG, KBC",
  subtitle: "Sentiment ngành bất động sản VN theo chuỗi giá trị — pháp lý & gỡ vướng, nguồn cung & mở bán, cầu & giá, tín dụng & lãi suất, trái phiếu & đáo hạn, hạ tầng & quy hoạch, tài chính DN, dòng tiền. Phạm vi: VHM, VRE, NLG, KDH, DXG, PDR, DIG, NVL, HDG, KBC. Chỉ tin có nguồn cập nhật ≤ 30 ngày.",
  lastUpdated: "2026-07-29T00:40:36+07:00",
  factors: {
    legal: "Pháp lý & gỡ vướng", supply: "Nguồn cung & mở bán", demand: "Cầu & giá",
    credit: "Tín dụng & lãi suất", bond: "Trái phiếu & đáo hạn", infra: "Hạ tầng & quy hoạch",
    finance: "Tài chính DN", market: "Thị trường & dòng tiền"
  },
  sentiment: {
    score: 2, date: "2026-07-28",
    reason: "Tự động tổng hợp từ 8 tín hiệu mới nhất trong 3 ngày gần nhất. Tích cực: Động lực hút dòng vốn FDI - Cổng thông tin điện tử Tỉnh Quảng Ninh (Cổng thông tin điện tử Tỉnh Quảng Ninh, 28/07/2026); Tỷ lệ cho vay bất động sản Techcombank đã tăng lên 32%, sẽ đưa về 30% vào cuối năm - Chứng khoán DNSE (Chứng khoán DNSE, 28/07/2026). Đây là chấm điểm rule-based từ tin/số liệu tự động; mở nguồn để kiểm chứng trước khi ra quyết định."
  },
  items: [
    {
      factor: "market", impact: -1, date: "2026-06-29", srcDate: "29/06/2026", isNew: true,
      aff: ["VHM","VRE","NLG","KDH","DXG","PDR","DIG","NVL","HDG","KBC"],
      title: "Cổ phiếu BĐS bị bán mạnh phiên 29/6, VN-Index giảm gần 17 điểm; khối ngoại bán ròng tập trung VHM (~420 tỷ)",
      desc: "Ý nghĩa đầu tư: Áp lực chốt lời cộng khối ngoại xả trụ VHM cho thấy dòng tiền ngắn hạn thận trọng với nhóm BĐS; phân hóa mạnh, nên ưu tiên DN quỹ đất sạch và câu chuyện cơ bản thay vì đầu cơ theo sóng.",
      srcName: "Báo Nhân Dân (Baomoi)",
      url: "https://baomoi.com/chung-khoan-ngay-29-6-co-phieu-bat-dong-san-bi-ban-manh-vn-index-giam-gan-17-diem-c55504757.epi"
    },
    {
      factor: "market", impact: 1, date: "2026-06-26", srcDate: "26/06/2026", isNew: true,
      aff: ["VHM","NLG"],
      title: "Phiên 26/6: khối ngoại mua ròng ~360 tỷ, đổ hàng trăm tỷ vào VHM, VIC, NLG",
      desc: "Ý nghĩa đầu tư: Khối ngoại quay lại gom trụ BĐS (VHM +379 tỷ) cho thấy lực cầu dài hạn vẫn hiện diện; tuy nhiên dòng tiền đảo chiều nhanh (bán ròng trở lại phiên 29/6) → biến động cao, cần chọn điểm mua kỷ luật.",
      srcName: "Người Quan Sát",
      url: "https://nguoiquansat.vn/khoi-ngoai-phien-26-6-hang-tram-ty-do-vao-co-phieu-vhm-vic-nlg-300309.html"
    },
    {
      factor: "finance", impact: 1, date: "2026-06-21", srcDate: "21/06/2026", isNew: true,
      aff: ["KBC"],
      title: "KBC có thể đột biến LN quý 2 nếu hoàn tất bàn giao 92 ha KCN Quế Võ 2 mở rộng cho Luxshare; FDI 5T +145% lên 9,1 tỷ USD",
      desc: "Ý nghĩa đầu tư: Nếu ghi nhận trong Q2, DT/LNST ước ~5.600 tỷ (+871%) và ~1.890 tỷ (+367%) — catalyst lớn cho KBC; dòng FDI mạnh củng cố nhu cầu thuê đất KCN (Nam Sơn–Hạp Lĩnh, Tràng Duệ 3). Theo dõi tiến độ bàn giao thực tế và khả năng bán buôn 5ha KĐT Tràng Cát nửa cuối 2026.",
      srcName: "Elibook",
      url: "https://elibook.vn/2026/06/21/kbc-co-the-dot-bien-loi-nhuan-quy-2-neu-hoan-tat-ban-giao-92-ha-tai-kcn-que-vo-cho-doi-tac-luxshare-kha-nang-ban-buon-5ha-kdt-trang-cat-nua-sau-nam-2026.html/"
    },
    {
      factor: "credit", impact: -1, date: "2026-06-16", srcDate: "16/06/2026", isNew: true,
      aff: ["VHM","NLG","KDH","DXG","PDR","DIG","NVL","HDG"],
      title: "Lãi suất vay mua nhà neo cao (ưu đãi 8–10%, thả nổi 12–15%); VIS Rating dự báo lãi vay 2026 cao hơn 3–4 điểm %",
      desc: "Ý nghĩa đầu tư: Chi phí vốn cao kéo dài làm giảm khả năng tiếp cận của người mua (khảo sát One Mount: nhu cầu mua giảm ~35% trong quý), gây áp lực hấp thụ lên các CĐT nhà ở; lợi thế nghiêng về DN bán phân khúc nhu cầu thực, tài chính lành mạnh.",
      srcName: "CafeF / VTC News",
      url: "https://cafef.vn/lai-suat-cho-vay-mua-nha-van-neo-cao-18826061507474461.chn"
    }
  ],
  // <PY-ITEMS> khối này do quant_update.py tự ghi mỗi sáng — ĐỪNG sửa tay
  itemsPY: [
    {"factor": "market", "impact": 1, "date": "2026-07-28", "srcDate": "28/07/2026 (truy xuất)", "isNew": true, "aff": ["HDG", "KDH", "PDR", "NLG", "DXG", "DIG"], "title": "Nhóm bất động sản phiên 28/07: 9 mã tăng / 1 mã giảm", "desc": "Ý nghĩa đầu tư: Diễn biến giá nhóm — HDG +3.9%; KDH +3.4%; PDR +3.1%; NLG +3.0%; DXG +2.8%; DIG +2.8%. Dùng để soi dòng tiền và xác nhận/tương phản với luận điểm cơ bản.", "srcName": "vnstock (VCI)", "url": "https://www.hsx.vn/", "src": "py"}
  ],
  // </PY-ITEMS>
  // <NEWS-ITEMS> khối này do news_update.py tự ghi — ĐỪNG sửa tay
  itemsNews: [
    {"id": "c0470299ff54f6ba", "factor": "infra", "impact": 1, "date": "2026-07-28", "srcDate": "28/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Động lực hút dòng vốn FDI - Cổng thông tin điện tử Tỉnh Quảng Ninh", "desc": "Rule-based: Động lực hút dòng vốn FDI Cổng thông tin điện tử Tỉnh Quảng Ninh Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Cổng thông tin điện tử Tỉnh Quảng Ninh", "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQbHIxUUd4T09fcEZTd2lHd2pDVWE3azJ1SXFORW9GRTM3SE5QRlhTVWVZTVBSaC1Yd1pyN0hGYlFZcjhzRktrUUxiRWYzT3VYcVo0aUpia2pOZmdmQnlRdndTWnE0M2tVZGMzUFNoc01kWnh1WC0tZXp3NERFc1pRVkRDRDJCc25P?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "952e784e0380027d", "factor": "market", "impact": 1, "date": "2026-07-28", "srcDate": "28/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Tỷ lệ cho vay bất động sản Techcombank đã tăng lên 32%, sẽ đưa về 30% vào cuối năm - Chứng khoán DNSE", "desc": "Rule-based: Tỷ lệ cho vay bất động sản Techcombank đã tăng lên 32%, sẽ đưa về 30% vào cuối năm Chứng khoán DNSE Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Chứng khoán DNSE", "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPTjl6Rjlsd3VQdElRVjBpZk4zT0o1SVdUR05SWnpvNm1YMVFsYnJCLUlLakh0OTNLWDhEd18xTHpsMG1CekQyMEtYVlpBM0lSUnFNOV9La09qeXJ0Mnd4RDdSbmx4Vm1iY1ZldGFVeHdvSnJKUXNaOHJmQU5TaW1CMXl5alFFZUhhQ2hqV1VJamRBS0hvTUVLY0Y5OWtKM3NhUVdkaFZuVkVQY0hTQWdCbEt3a2VfSzNlNGlvQWpfQWtvQ00ydlNBNWF3elg1NW1hM1E?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "c16a157597d3aa2f", "factor": "supply", "impact": 1, "date": "2026-07-28", "srcDate": "28/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "TP.HCM: Bùng nổ nguồn cung nhà ở đủ điều kiện mở bán - Nhadautu.vn", "desc": "Rule-based: TP.HCM: Bùng nổ nguồn cung nhà ở đủ điều kiện mở bán Nhadautu.vn Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Nhadautu.vn", "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOcWFuVzZsbkRPYnBxcE5NR1kzRnR0TTVIM0d5LXhBaUtfS1lnTHlBNjRQZExWUFMxSlBjU0l1OHRCWk9wQkltTkhrNGViQWoyZDBocUdmay12M2Ztck1VRXVwSFpTeUxhT0h5dV9yckptSTZvVlYwRzJzRWlJWlFONWRGUXc1d2c?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "bfb90a35f8d6cb5f", "factor": "infra", "impact": 1, "date": "2026-07-28", "srcDate": "28/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Phát triển đơn vị tự vệ trong doanh nghiệp FDI - Báo Quảng Ninh điện tử", "desc": "Rule-based: Phát triển đơn vị tự vệ trong doanh nghiệp FDI Báo Quảng Ninh điện tử Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Báo Quảng Ninh điện tử", "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNR21SUlNqNTVrY3BubV9HRVQ3SjRZUkpicHMtaUFKUVFKYnp3aVdzVTZiWmNINTRkS2xlMHlRUE00Unc0Y1ZWVWloaWRzNE9MVHFFdkVGR2g5Tk5UWUVJVlhxcV9Lb005VXJneUM1djA1bVpFOUw5MGpRZjlwR1RzSEc2a1J2RjcyakJN?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "ea779f06926bdf4c", "factor": "credit", "impact": 1, "date": "2026-07-28", "srcDate": "28/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Ngân hàng nửa cuối 2026: Nóng chuyện lãi suất, khó bài toán lợi nhuận - VietnamFinance", "desc": "Rule-based: Ngân hàng nửa cuối 2026: Nóng chuyện lãi suất, khó bài toán lợi nhuận VietnamFinance Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "VietnamFinance", "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNeFA2dHBNdDRIMklLMHNSUGRCTmtURElHaWVXdDVuZzBULUZCZ1djSXEwc3V1dlcyN0hWcVJBVXF4aXl2aE1TT1dqUHpWRjl2MkdfVEkwbVAzOG0zcXRDYVFIU1NkWmRBT0lWYW1jdUhqMnZpSjEtZ1RLU3lHbUoxLTlHZG55N0tEdTBlZXdBcWNYUVNkTlFXWVFDdHdaZ004bTVhOFIxelRxdw?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "53defebcfdbf76b2", "factor": "supply", "impact": 1, "date": "2026-07-28", "srcDate": "28/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Nguồn cung nhà ở TP.HCM tái định hình, cuộc đua bất động sản chuyển sang các cực tăng trưởng mới - Thế giới tiếp thị", "desc": "Rule-based: Nguồn cung nhà ở TP.HCM tái định hình, cuộc đua bất động sản chuyển sang các cực tăng trưởng mới Thế giới tiếp thị Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Thế giới tiếp thị", "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOM0tXZ1BjQ212cXNQZkV1aGhYbDY1ZlV2NFNjYTJrQmw5S2VHcFpXb2xiTUNWcDg5NDNiQTQyeS1MWGd5OGMwVDNQQU5OWGhBb0YzR0l4OWFVN3I0QkhHbUpVYmppcF8yLVItSExDZ2VFV2VsVzI0UzI3RzNZc1FabFp0WWhtSkIwTDJIRzR4VXA0ckZuVzk5SVd4dGdqSFBiZVlOZ19CN09YS01aX0ZZOHQ4bUN6bWMwYmI1bkZCdTR4OW1mVFR2WnVqMFZ0dHp0TEdTZFd0dV93dw?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "1c1aaf72abd21478", "factor": "market", "impact": 1, "date": "2026-07-27", "srcDate": "27/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Vietnam industrial park developers face sharp divergence in profit growth - Theinvestor", "desc": "Rule-based: Vietnam industrial park developers face sharp divergence in profit growth Theinvestor Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Theinvestor", "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNR0ctR2I1cV8wV0l6SFZ5d09lS1oxak5uVmFJcDI5Z1JORGlnN3lhZHZlY1Q5SjF4bUlza3YzYjExcUItWXZ4aUp2OC12cmR0ZHpXLUNYM0M5QlhWT2ZoVWFqTnoyUWdsZXdpcDhQaFltRmFHN00xRjV5Mmg1cWxJbE1VcHp5Q0RhZ1cwTmV3NndxdjJmQVNCdV9ldDRFNjJCSUlmemd5dllUYnU1?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "b6b97b755bd39407", "factor": "market", "impact": 0, "date": "2026-07-24", "srcDate": "24/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Land value assessment - Vietnam Economic Times", "desc": "Rule-based: Land value assessment Vietnam Economic Times Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam Economic Times", "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE8xeHJ0WllEcGlPRHRsOFNQb2ZySUlRdlpBeXpFNmNGZHg5cWRYWE9Rb3MxYXhpdDEwODQ4NjFuSkVLNi1GR0VlZTdtVlpZOTZDVmJTbDJaRVFJWnozTGc?oc=5", "src": "news", "sourceScope": "intl"}
  ],
  // </NEWS-ITEMS>
  valuechain: [
    ["Quỹ đất & pháp lý", "Pháp lý dự án; tiền sử dụng đất; đủ điều kiện bán", "VHM, NLG, KDH, DXG, DIG, KBC", "Quỹ đất sạch; pháp lý đủ điều kiện mở bán; tiền SDĐ xác định"],
    ["Phát triển & xây dựng", "Tiến độ; suất đầu tư; nhà thầu", "Chủ đầu tư + nhà thầu xây lắp", "Tiến độ đúng; chi phí kiểm soát; bàn giao đúng hẹn"],
    ["Mở bán & presales", "Tỷ lệ hấp thụ; giá bán sơ cấp", "VHM, NLG, KDH, DXG, PDR", "Hấp thụ cao; giá tốt; thanh khoản thị trường"],
    ["Bàn giao & ghi nhận DT", "Backlog; lịch bàn giao; biên gộp", "VHM, NLG, KDH", "Bàn giao đúng tiến độ; backlog dày; biên cao"],
    ["BĐS KCN / cho thuê", "Tỷ lệ lấp đầy; giá thuê; FDI", "KBC, VRE (TTTM)", "FDI vào; lấp đầy tăng; giá thuê tăng"],
    ["Tài chính & cơ cấu vốn", "Đòn bẩy; đáo hạn trái phiếu; dòng tiền", "NVL, PDR, DIG, DXG", "Cơ cấu nợ lành mạnh; giãn/đảo nợ thành công; dòng tiền dương"]
  ],
  tickers: [
    ["VHM", "Presales đại đô thị (Ocean Park, Cổ Loa, Wonder City); bàn giao; biên gộp", "Presales tăng mạnh; mở bán đúng kế hoạch; dòng tiền tốt", "Presales chậm; pha loãng; áp lực bán hàng"],
    ["VRE", "Tỷ lệ lấp đầy TTTM; giá thuê; mở mới; tiêu dùng", "Lấp đầy cao; tiêu dùng hồi phục; mở thêm mặt bằng", "Tiêu dùng yếu; giảm giá thuê; chậm mở mới"],
    ["NLG", "Presales (Akari, Mizuki, Izumi, Southgate); bàn giao; JV Nhật", "Presales tốt; đối tác Nhật giải ngân; pháp lý thông", "Hấp thụ chậm; vướng pháp lý Đồng Nai; chi phí"],
    ["KDH", "Quỹ đất TP.HCM sạch; mở bán (Privia, Emeria); biên cao", "Mở bán thành công; pháp lý sạch; biên cao", "Chậm mở bán; hàng tồn; thanh khoản yếu"],
    ["DXG", "Mở bán (Gem Sky World, Gem Riverside); môi giới DXS; nợ", "Gỡ pháp lý Gem Riverside; hấp thụ tốt; môi giới hồi", "Pháp lý chậm; áp lực nợ; pha loãng"],
    ["PDR", "Pháp lý Bắc Hà Thanh/Bình Định; cơ cấu nợ; bán hàng", "Gỡ pháp lý; bán hàng trở lại; giảm nợ", "Đáo hạn trái phiếu; pha loãng; dòng tiền âm"],
    ["DIG", "Quỹ đất Vũng Tàu/Đồng Nai; mở bán; hạ tầng Long Thành", "Bán hàng cải thiện; hưởng lợi sân bay Long Thành", "Đầu cơ; pha loãng; dòng tiền âm; pháp lý"],
    ["NVL", "Tái cấu trúc nợ/trái phiếu; pháp lý Aqua City/NovaWorld", "Gỡ pháp lý + giãn nợ thành công; bàn giao trở lại", "Áp lực đáo hạn; pha loãng lớn; pháp lý kéo dài"],
    ["HDG", "BĐS (Charm Villas) + thủy điện/điện gió; thủy văn", "Bàn giao Charm Villas; thủy văn tốt; dòng tiền điện", "Hết hàng bán; thủy văn xấu; giá điện"],
    ["KBC", "BĐS KCN (Quang Châu, Tràng Duệ, Nam Sơn–Hạp Lĩnh); FDI", "Ký cho thuê lớn; FDI Bắc Bộ mạnh; mở rộng quỹ đất KCN", "Chậm pháp lý KCN; FDI yếu; pha loãng"]
  ],
  sources: [
    ["Bộ Xây dựng – Nhà và thị trường BĐS", "https://moc.gov.vn/vn/Pages/chuyenmuctin.aspx?ChuyenmucID=1206&tieude=Nha-o-va-thi-truong-bds.aspx", "P1/Hàng ngày · Tin điều hành ngành; tháo gỡ dự án; báo cáo cung, giao dịch, tồn kho, giá; nhà ở xã hội. Trích: Nguồn cung; giao dịch; tồn kho; giá; dự án được tháo gỡ; NOXH. [Toàn ngành]"],
    ["Bộ Xây dựng – Dự thảo văn bản", "https://moc.gov.vn/vn/pages/DanhSachDuThaoVanBan.aspx", "P1/Hàng ngày · Dự thảo luật, nghị định, thông tư; bảng tiếp thu, giải trình; hồ sơ lấy ý kiến. Trích: Điều khoản sửa đổi; đối tượng áp dụng; chuyển tiếp; ngày hiệu lực; phiên bản dự thảo. [Toàn ngành]"],
    ["Bộ Xây dựng – Văn bản pháp luật", "https://moc.gov.vn/vn/Pages/Vanbanphapluat.aspx", "P1/Theo sự kiện · Quyết định, thông tư, văn bản hợp nhất và thủ tục hành chính thuộc lĩnh vực xây dựng/BĐS. Trích: Số văn bản; ngày ban hành; ngày hiệu lực; điều khoản liên quan nhà ở/KDBĐS. [Toàn ngành]"],
    ["Cổng Xây dựng Chính sách, Pháp luật", "https://xaydungchinhsach.chinhphu.vn/bat-dong-san.html", "P1/Hàng ngày · Giải thích chính sách; chỉ đạo Chính phủ; đề xuất luật, thuế, tín dụng, nhà ở xã hội. Trích: Chủ trương; cơ quan phụ trách; deadline; nhóm đối tượng chịu tác động. [Toàn ngành]"],
    ["Dự thảo Online – Quốc hội", "https://duthaoonline.quochoi.vn/", "P1/Theo sự kiện · Tờ trình, dự thảo luật, báo cáo thẩm tra, ý kiến đại biểu và phiên bản chỉnh lý. Trích: Lịch trình Quốc hội; nội dung còn tranh luận; điều khoản bị sửa hoặc loại bỏ. [Toàn ngành]"],
    ["Hệ thống văn bản Chính phủ", "https://vanban.chinhphu.vn/", "P1/Theo sự kiện · Luật, nghị định, quyết định, chỉ thị và văn bản chỉ đạo đã ban hành. Trích: Số văn bản; ngày ký; hiệu lực; điều khoản chuyển tiếp; văn bản hướng dẫn. [Toàn ngành]"],
    ["Cơ sở dữ liệu quốc gia về văn bản pháp luật", "https://vbpl.vn/", "P1/Theo sự kiện · Tra cứu hiệu lực, lịch sử sửa đổi, văn bản liên quan và văn bản thay thế. Trích: Tình trạng hiệu lực; văn bản sửa đổi/bãi bỏ; chuỗi văn bản hướng dẫn. [Toàn ngành]"],
    ["Ngân hàng Nhà nước Việt Nam", "https://sbv.gov.vn/", "P1/Hàng ngày · Lãi suất điều hành, tăng trưởng tín dụng, định hướng tín dụng BĐS, tỷ giá và thanh khoản ngân hàng. Trích: Tín dụng toàn hệ thống; lãi suất vay; room tín dụng; tín dụng BĐS; nợ xấu. [Nhà ở / Tài chính]"],
    ["Cục Đầu tư nước ngoài", "https://fia.mof.gov.vn/", "P1/Hàng tháng · FDI đăng ký, điều chỉnh, góp vốn và giải ngân theo ngành, quốc gia và địa phương. Trích: FDI chế biến chế tạo; FDI BĐS; dự án lớn; địa phương dẫn đầu. [KCN / Logistics]"],
    ["Ủy ban Chứng khoán Nhà nước", "https://ssc.gov.vn/", "P1/Hàng ngày · Quy định chứng khoán, xử phạt, phát hành, chào bán và thông tin quản lý thị trường vốn. Trích: Phê duyệt phát hành; xử phạt; quy định CBTT; huy động vốn. [Doanh nghiệp niêm yết]"],
    ["HOSE – Tin tổ chức niêm yết", "https://www.hsx.vn/vi/tin-tuc/tin-to-chuc-niem-yet", "P1/Hàng ngày · BCTC, nghị quyết HĐQT, ĐHĐCĐ, phát hành, giao dịch cổ đông và công bố bất thường. Trích: KQKD; kế hoạch năm; phát hành; thế chấp; chuyển nhượng; nhân sự. [Doanh nghiệp niêm yết]"],
    ["HNX – Công bố thông tin", "https://hnx.vn/", "P1/Hàng ngày · Công bố của doanh nghiệp niêm yết/UPCoM, trái phiếu và thông tin thị trường. Trích: BCTC; nghị quyết; giao dịch; vi phạm; cảnh báo; trái phiếu. [Doanh nghiệp niêm yết]"],
    ["HNX – Chuyên trang trái phiếu doanh nghiệp", "https://cbonds.hnx.vn/", "P1/Hàng ngày · Phát hành, điều khoản, lãi suất, mua lại, đáo hạn, thay đổi điều kiện và công bố thanh toán. Trích: Giá trị phát hành; kỳ hạn; coupon; đáo hạn; mua lại; tài sản bảo đảm. [Tài chính BĐS]"],
    ["Hệ thống mạng đấu thầu quốc gia", "https://muasamcong.mpi.gov.vn/", "P1/Hàng ngày · Danh mục dự án sử dụng đất, mời quan tâm, lựa chọn nhà đầu tư và kết quả đấu thầu. Trích: Tên dự án; vị trí; diện tích; tổng vốn; tiến độ; nhà đầu tư trúng thầu. [Nhà ở / KĐT / KCN]"],
    ["Sở Xây dựng TP.HCM", "https://soxaydung.hochiminhcity.gov.vn/", "P1/Hàng ngày · Dự án đủ điều kiện bán, nhà ở xã hội, giấy phép xây dựng, tháo gỡ pháp lý và công bố địa phương. Trích: Đủ điều kiện huy động vốn; giấy phép; danh sách dự án; giá NOXH. [TP.HCM]"],
    ["Sở Xây dựng Hà Nội", "https://soxaydung.hanoi.gov.vn/", "P1/Hàng ngày · Dự án đủ điều kiện bán, chương trình phát triển nhà ở, NOXH và quản lý thị trường địa phương. Trích: Nguồn cung; điều kiện bán; tiến độ dự án; giá/đối tượng NOXH. [Hà Nội]"],
    ["Cổng thông tin quy hoạch TP.HCM", "https://thongtinquyhoach.hochiminhcity.gov.vn/", "P1/Theo sự kiện · Thông tin quy hoạch, chức năng sử dụng đất, chỉ tiêu và ranh khu đất. Trích: Loại đất; tầng cao; mật độ; hệ số sử dụng đất; ranh quy hoạch. [TP.HCM]"],
    ["Khang Điền (KDH) – Quan hệ cổ đông", "https://www.khangdien.com.vn/en/shareholders-investors", "P1/Hàng ngày · ĐHĐCĐ, BCTC, báo cáo thường niên, nghị quyết, phát hành và cập nhật dự án. Trích: Presales; bàn giao; pháp lý; quỹ đất; nợ vay; kế hoạch lợi nhuận. [Nhà ở TP.HCM]"],
    ["Nam Long (NLG) – Investor Relations", "https://www.namlongvn.com/en/investor-relations/", "P1/Hàng ngày · BCTC, nghị quyết, tài liệu nhà đầu tư, trái phiếu, tài sản bảo đảm và giao dịch liên quan. Trích: Presales; backlog; project launches; divestment; nợ; tiền mặt. [Nhà ở / KĐT]"],
    ["Vinhomes (VHM) – Quan hệ cổ đông", "https://vinhomes.vn/vi/ir", "P1/Hàng ngày · BCTC, báo cáo thường niên, corporate presentation, thông tin dự án và công bố doanh nghiệp. Trích: Presales; bulk sales; bàn giao; cash collection; project pipeline; nợ. [Nhà ở / Đại đô thị]"],
    ["Phát Đạt (PDR) – Báo cáo tài chính/IR", "https://www.phatdat.com.vn/en/financial-statements", "P1/Hàng ngày · BCTC, báo cáo thường niên, IR newsletter và cập nhật tài chính. Trích: Chuyển nhượng dự án; thu tiền; nợ; trái phiếu; pháp lý; bàn giao. [Nhà ở / KĐT]"],
    ["Batdongsan.com.vn – Báo cáo thị trường", "https://wiki.batdongsan.com.vn/phan-tich-danh-gia/bao-cao-thi-truong", "P1/Hàng tháng · Giá chào bán, nguồn cung tin đăng, mức độ quan tâm tìm kiếm và xu hướng theo tỉnh/thành. Trích: Giá sơ/thứ cấp; lượt tìm kiếm; nguồn cung tin đăng; yield thuê. [Nhà ở]"],
    ["FiinRatings", "https://fiinratings.vn/en", "P1/Hàng tháng · Báo cáo TPDN, xếp hạng tín nhiệm, chất lượng tín dụng và rủi ro ngành. Trích: Phát hành; đáo hạn; chậm trả; tái cấu trúc; rating; leverage. [Tài chính BĐS]"],
    ["VBMA – Báo cáo thị trường trái phiếu", "https://vbma.org.vn/vi/reports/weekly", "P1/Hàng tuần · Bản tin trái phiếu Chính phủ, TPDN, lãi suất và hoạt động phát hành/mua lại. Trích: Phát hành; đáo hạn; yield; mua lại; cơ cấu ngành. [Tài chính BĐS]"],
    ["Báo Đấu thầu", "https://baodauthau.vn/", "P1/Hàng ngày · Đấu giá đất, lựa chọn nhà đầu tư, dự án sử dụng đất, tiến độ và vướng mắc dự án. Trích: Diện tích đất; giá khởi điểm; tổng vốn; nhà đầu tư; tiến độ. [Nhà ở / KĐT / KCN]"],
    ["Hệ thống thông tin nhà ở và thị trường BĐS", "https://bds.moc.gov.vn/", "P2/Hàng tuần · Cơ sở dữ liệu nhà ở, dự án và thị trường BĐS; phạm vi truy cập có thể yêu cầu tài khoản. Trích: Dự án; sản phẩm; giao dịch; tồn kho; dữ liệu địa phương. [Nhà ở]"],
    ["Cục Thống kê – Đầu tư và Xây dựng", "https://www.nso.gov.vn/dau-tu-va-xay-dung/", "P2/Hàng tháng · Vốn đầu tư xã hội, hoạt động xây dựng, GDP ngành, CPI vật liệu và dữ liệu địa phương. Trích: Vốn đầu tư; tăng trưởng xây dựng; chi phí vật liệu; đầu tư công. [Toàn ngành]"],
    ["VSDC – Tổng công ty Lưu ký và Bù trừ CK Việt Nam", "https://vsd.vn/", "P2/Theo sự kiện · Quyền mua, cổ tức, chốt danh sách, đăng ký chứng khoán và sự kiện doanh nghiệp. Trích: Ngày đăng ký cuối cùng; tỷ lệ quyền; ngày thanh toán; phát hành thêm. [Doanh nghiệp niêm yết]"],
    ["CBRE Vietnam – Insights", "https://www.cbrevietnam.com/insights", "P2/Hàng quý · Nguồn cung mới, giá sơ cấp, absorption, vacancy, rent và pipeline nhiều phân khúc. Trích: Launches; sold units; absorption; asking price; rent; occupancy; pipeline. [Nhà ở / Văn phòng / KCN / Bán lẻ]"],
    ["Savills Vietnam – Research", "https://www.savills.com.vn/insight-and-opinion/research.aspx", "P2/Hàng quý · Báo cáo quý về nhà ở, văn phòng, bán lẻ, khách sạn và công nghiệp. Trích: Nguồn cung; giá; hấp thụ; vacancy; rent; triển vọng. [Đa phân khúc]"],
    ["JLL Vietnam – Research", "https://www.jll.com/en-sea/insights/vietnam-property-market-brief", "P2/Hàng quý · Property market brief và phân tích vốn đầu tư, văn phòng, công nghiệp, logistics và nhà ở. Trích: Rent; vacancy; supply; transaction; cap rate; pipeline. [Thương mại / KCN / Nhà ở]"],
    ["VARS / VARS IRE – Báo cáo thị trường", "https://vars.com.vn/nghien-cuu-thi-truong/bao-cao-thi-truong", "P2/Hàng tuần · Nguồn cung, giao dịch, tỷ lệ hấp thụ và diễn biến thị trường theo vùng. Trích: Sản phẩm mở bán; giao dịch; absorption; cơ cấu phân khúc; tỉnh thành. [Nhà ở / Đất nền]"],
    ["HSC Research", "https://www.hsc.com.vn/en/research", "P2/Hàng ngày · Morning note, báo cáo ngành/doanh nghiệp, định giá, catalyst và risk. Trích: RNAV; P/B; presales; earnings; target price; catalyst. [Cổ phiếu BĐS]"],
    ["Vietcap Research Center", "https://www.vietcap.com.vn/en/research-center", "P2/Hàng tuần · Báo cáo ngành/doanh nghiệp, presales, RNAV, dự án và valuation. Trích: Presales; backlog; launch; RNAV; discount; forecast. [Cổ phiếu BĐS]"],
    ["SSI Research – Sector Report", "https://www.ssi.com.vn/en/organization-customer/sector-report", "P2/Hàng tuần · Báo cáo ngành, outlook, earnings và khuyến nghị doanh nghiệp. Trích: Earnings growth; presales; leverage; valuation; top picks. [Cổ phiếu BĐS]"],
    ["MBS Research – Industry Report", "https://www.mbs.com.vn/en/industry-report/", "P2/Hàng tuần · Outlook ngành, dự báo KQKD, phân tích dự án, trái phiếu và định giá. Trích: Earnings; presales; debt maturity; P/B; RNAV; catalyst. [Cổ phiếu BĐS]"],
    ["Reuters", "https://www.reuters.com/", "P2/Hàng ngày · Tin nhanh về chính sách, FDI, giao dịch lớn, vĩ mô và doanh nghiệp Việt Nam. Trích: Sự kiện; phát biểu; deal value; phản ứng thị trường. [Toàn ngành]"],
    ["Vietnam Investment Review (VIR)", "https://vir.com.vn/", "P2/Hàng ngày · FDI, M&A, dự án mới, KCN, logistics, khách sạn và chính sách đầu tư. Trích: Deal; FDI; dự án; quy mô vốn; đối tác; địa phương. [KCN / Thương mại / M&A]"],
    ["The Investor Vietnam", "https://theinvestor.vn/", "P2/Hàng ngày · Tin doanh nghiệp, FDI, tài chính, dự án và hoạt động nhà đầu tư nước ngoài. Trích: Deal; vốn đầu tư; đối tác; dự án; thời điểm triển khai. [Toàn ngành]"],
    ["Vietstock", "https://vietstock.vn/", "P3/Hàng ngày · Tin cổ phiếu, giao dịch nội bộ, BCTC, sự kiện và dữ liệu thị trường. Trích: Giá cổ phiếu; thanh khoản; giao dịch cổ đông; tin doanh nghiệp. [Cổ phiếu BĐS]"],
    ["VnEconomy", "https://vneconomy.vn/", "P3/Hàng ngày · Vĩ mô, chính sách, thị trường BĐS, doanh nghiệp và đầu tư công. Trích: Chính sách; tín dụng; giá nhà; dự án; hạ tầng. [Toàn ngành]"]
  ]
};
