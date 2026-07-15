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
  lastUpdated: "2026-07-15T13:25:14+07:00",
  factors: {
    legal: "Pháp lý & gỡ vướng", supply: "Nguồn cung & mở bán", demand: "Cầu & giá",
    credit: "Tín dụng & lãi suất", bond: "Trái phiếu & đáo hạn", infra: "Hạ tầng & quy hoạch",
    finance: "Tài chính DN", market: "Thị trường & dòng tiền"
  },
  sentiment: {
    score: -1, date: "2026-06-30",
    reason: "Dòng tiền ngắn hạn thận trọng: cổ phiếu BĐS bị bán mạnh phiên 29/6 (VN-Index −17 điểm), khối ngoại xả trụ VHM ~420 tỷ. Lãi suất vay mua nhà neo cao (ưu đãi 8–10%, thả nổi 12–15%) đang làm chậm cầu ở thực. Điểm sáng đến từ BĐS KCN (FDI 5T +145%, KBC chờ bàn giao lớn cho Luxshare). Tổng thể nghiêng nhẹ tiêu cực, phân hóa rõ theo phân khúc."
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
    {"factor": "market", "impact": -1, "date": "2026-07-15", "srcDate": "15/07/2026 (truy xuất)", "isNew": true, "aff": ["VHM", "PDR", "DIG", "KDH", "VRE", "DXG"], "title": "Nhóm bất động sản phiên 15/07: 0 mã tăng / 10 mã giảm", "desc": "Ý nghĩa đầu tư: Diễn biến giá nhóm — VHM -2.3%; PDR -2.2%; DIG -2.0%; KDH -1.5%; VRE -1.4%; DXG -0.8%. Dùng để soi dòng tiền và xác nhận/tương phản với luận điểm cơ bản.", "srcName": "vnstock (VCI)", "url": "https://www.hsx.vn/", "src": "py"}
  ],
  // </PY-ITEMS>
  // <NEWS-ITEMS> khối này do news_update.py tự ghi — ĐỪNG sửa tay
  itemsNews: [
    {"id": "750047ae77c3b991", "factor": "market", "impact": 1, "date": "2026-07-15", "srcDate": "15/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Hanoi's 100-year master plan set to redirect real estate investment beyond historic core - Theinvestor", "desc": "Rule-based: Hanoi's 100-year master plan set to redirect real estate investment beyond historic core Theinvestor Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Theinvestor", "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPb1JHNWcyVUhyTjhXVWk5NUczRzhWczRrT0VtUEZDWGVOSnI4Z05UY1JLZ1JSUlB5Yll6Z3R5ZTdMbzJXbS1iWVo1NHR4QVN5Y09feVR0aGZJcmQ5aDFnVnQ4bzkyV2JfSldWaGxScEN0amlGek5rZDZwQU9aNm1lSXJCQWFfUlZTVERsMHpmc3lfcjcwdUtOQnJfZFRzWkRkSFVBMjhUZEc3R3lHdUtHdWN0bVZlZkJkb2NTTGh4QQ?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "f2ff7d438b5ef57f", "factor": "market", "impact": 1, "date": "2026-07-15", "srcDate": "15/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Cổ phiếu khu công nghiệp phân hóa trong chu kỳ tăng trưởng mới - Tin nhanh chứng khoán", "desc": "Rule-based: Cổ phiếu khu công nghiệp phân hóa trong chu kỳ tăng trưởng mới Tin nhanh chứng khoán Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Tin nhanh chứng khoán", "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNWE1TV2t0OTdEb3N3cHRWbXN4S2RiNHBkMmFmdTJYejVQc2d6RW54Q3ZUaWp6RlZNZU5lS3FkY3BCSWxJa25EN18yTzdJWE45TWY2amhDREhjcjdadTZ1bkk4eE9jVHg0SXV6cUVzenl2MVJOSkJRZHJ6UEJ3WGplZUloWFNqN1Jrdld4NlZvY050WmFHX19WTE91SWpHTG5UcXZSUGFLeEoxaHhpbDZZazNn0gGuAUFVX3lxTE9tLXdUX0JVUDNyQ1NfRms5UnhsTFZRS182XzRHeVQ3cHhwb3kyU0sxaGxTWExKSW1uSGc1LWVmaWZOb3g0cW1yYmxfSWo0U3dSUHBHWjVfdkFtQk9OSThIMFM0S3M2dGdOS1RBRlZZLXE0UDU3cUdEa3cwbHNvMUMydEM3MXBZbi1BYVFNMk9aSTc2NFRBMnBYa0djMENhOVJ6WFRPNmpjeEluMGoxUQ?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "e86afc0571f34c53", "factor": "credit", "impact": 0, "date": "2026-07-15", "srcDate": "15/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Người mua \"ngấm đòn\" lãi suất, thanh khoản bất động sản giảm kỷ lục - diendandoanhnghiep.vn", "desc": "Rule-based: Người mua \"ngấm đòn\" lãi suất, thanh khoản bất động sản giảm kỷ lục diendandoanhnghiep.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "diendandoanhnghiep.vn", "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPSE1IMXRpV1RqWi1wQmxhRjc4LU5lNzZuVzBsN0I4UGR1Ql93bjhDUDlJUHpIVHBwdTFLTDliTmhrQjZSTU52eGRPRXZNXzJBamNUNnBOb3ExRHRjek9QS2U3WkNLOWtacV95azVyVTZkOGV4NkNJZlEySEljY2R5S3c3YjZUTGdGTDNFdS1PMkl6WkZmUWdYSDBhWVFMcE5qZ1UzMVlTZmo2VG9J?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "a2d2436909e83d3e", "factor": "market", "impact": 0, "date": "2026-07-15", "srcDate": "15/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "NKN Media Creates Unprecedented Global Real Estate Opportunities for Indian Investors - India's News.Net", "desc": "Rule-based: NKN Media Creates Unprecedented Global Real Estate Opportunities for Indian Investors India's News.Net Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "India's News.Net", "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOdGRuRGxrd1M5OFFxSFZHRTFUb3dLak1ESWJxSW9CSnFzUG1SQXJJcEdQR0cyMmZ6TmdsdmVhWHZiOV84UkxZdXh4Z0ZTaWoxOGpLQmNqMzFaN01QQXlrUldIMU82eUxRVW1VLUZ3TjZmZU5lN3BUWUlBNzFBdmFhY0I0SnJtNHhRQkJlWm50VFl3dnd2QzdhVk1LNHZGaFhZX3AzVnFmZXhjMWhEMi1ZRHJPdVUxa2w2alMwYlBZaUo3MEV4aXc?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "b039694a878a71d0", "factor": "market", "impact": -1, "date": "2026-07-14", "srcDate": "14/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Tâm lý thận trọng kéo thanh khoản bất động sản giảm mạnh - Thương gia", "desc": "Rule-based: Tâm lý thận trọng kéo thanh khoản bất động sản giảm mạnh Thương gia Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Thương gia", "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOZE1kSmx3T2cyYVM1XzFtNGNMS2lfOVJTUDBWLVJVN3pTRms1TDNCQmxYVVpnOGlaTTBiNl9zU1FpRHZhOVNnMXlfUzN1OVA4blJDanRBYnFBZnJQX09HTWFJRXF6ZWMyQWkyelY1MkxOU0RybWQzdFJycFpkWjhmSFRXSjktWHJBYkJoeC04d2pabzdCOU1YcklrSGkxcWvSAZ8BQVVfeXFMTmRNZEpsd09nMmFTNV8xbTRjTEtpXzlSU1AwVi1SVTd6U0ZrNUwzQkJsWFVaZzhpWk0wYjZfc1NRaUR2YTlTZzF5X1MzdTlQOG5SQ2p0QWJxQWZyUF9PR01hSUVxemVjMkFpMnpWNTJMTlNEcm1kM3RScnBaZFo4ZkhUV0o5LVhyQWJCaHgtOHdqWm83QjlNWHJJa0hpMXFr?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "12f98792f74e0a1a", "factor": "market", "impact": -1, "date": "2026-07-14", "srcDate": "14/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Thị trường nhà ở Mỹ dự báo giảm giá trong năm tới - Báo Tuổi Trẻ", "desc": "Rule-based: Thị trường nhà ở Mỹ dự báo giảm giá trong năm tới Báo Tuổi Trẻ Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Báo Tuổi Trẻ", "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQdEo3YkF5OHlLREtXSGV2M29PREdNUzl4Unl5R0JmamVUMXU5bFFiOU4wOERGZFFPMXF4VVVKbExJWGl6VnBNMzZjZHhPdURrU2RLb01RdDdCX2cwWVcyZmhleV9SVl9JOGZTM0V1NHlxc01tWWR6QjF2MTBTdUZ6eTFmXzlEeHlZeVJ4UW1sZVNPNm5HdEE?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "62ed55310dcb3687", "factor": "supply", "impact": -1, "date": "2026-07-14", "srcDate": "14/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Thanh khoản giảm nhưng doanh nghiệp vẫn đẩy mạnh nguồn cung: Điều gì đang diễn ra với bất động sản phía Nam? - Thế giới tiếp thị", "desc": "Rule-based: Thanh khoản giảm nhưng doanh nghiệp vẫn đẩy mạnh nguồn cung: Điều gì đang diễn ra với bất động sản phía Nam? Thế giới tiếp thị Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Thế giới tiếp thị", "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxOa0k3VXA0WG93YVhEYlNMRVVpNnJJdmEycHEyQXFnVFRCQ011V0lzdnFVNVV1RENjWHVYbXpZdUZSRHJkY2tyWEsyemJXYl9PdVZDOW9NcVZ6T1JBbFhxNWx3NWplT1lfRjlKRTgwcjJGdVFoX3JQMEVlNlVpRHZEVGIzU2VXNFZGeUpXNWxOYVRrQnBVemxxMUZ5aGdidzEwWHZmT01IUnB6Qm1UaWEwNW1acUhzOExfblRaYXhXdmhYcjFLT3RCSVNsRW1aQ0xkN3ViLUlHQVpzWFVDaW5WemZPY3BuREo5UHc?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "4081198125ecb595", "factor": "market", "impact": 1, "date": "2026-07-14", "srcDate": "14/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "MBS gọi tên 3 cổ phiếu khu công nghiệp đáng chú ý trong chu kỳ tăng trưởng mới - Nhịp sống kinh doanh", "desc": "Rule-based: MBS gọi tên 3 cổ phiếu khu công nghiệp đáng chú ý trong chu kỳ tăng trưởng mới Nhịp sống kinh doanh Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Nhịp sống kinh doanh", "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNb2RjdmtncE5lY1N3Sl9HWW5lVEZrd2tHeXBPbzgyWEpCaDNvNHhkeEtZMzAzN0NvNVc3YURWYkZyX01tOVFzZ0QyYW5Ea1haS3RxS1AyUTBLVzZ2VnhrZnpxQkhDMnBSa2hsUzRucVFFWVZzenduS3hwSWVCU0VYV0pRemJSM2JDNzQ4cENBMEJid0NiUlk0WWhiTTRyWFZNYS1ORWNPMWMxbFNtTGNMNHY3dmNQS29k?oc=5", "src": "news", "sourceScope": "local"}
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
    ["Bộ Xây dựng", "https://moc.gov.vn/", "Chính sách nhà ở, báo cáo thị trường BĐS theo quý"],
    ["Hội Môi giới BĐS VN (VARS)", "https://vars.com.vn/", "Báo cáo cung – cầu, tỷ lệ hấp thụ toàn thị trường"],
    ["CBRE Vietnam", "https://www.cbre.com/vi-vn", "Báo cáo thị trường sơ cấp/thứ cấp, giá, nguồn cung"],
    ["Savills Vietnam", "https://www.savills.com.vn/", "Báo cáo thị trường nhà ở, văn phòng, KCN"],
    ["HoREA", "https://horea.org.vn/", "Kiến nghị, vướng mắc pháp lý dự án (TP.HCM)"],
    ["Cổng TTĐT Chính phủ", "https://baochinhphu.vn/", "Luật Đất đai 2024, Nhà ở 2023, KDBĐS 2023, nghị định"],
    ["Batdongsan.com.vn", "https://batdongsan.com.vn/", "Chỉ số giá, mức độ quan tâm thị trường thứ cấp"],
    ["CafeLand", "https://cafeland.vn/", "Tin tức thị trường, pháp lý dự án"]
  ]
};
