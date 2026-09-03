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
  lastUpdated: "2026-09-03T20:59:37+07:00",
  factors: {
    legal: "Pháp lý & gỡ vướng", supply: "Nguồn cung & mở bán", demand: "Cầu & giá",
    credit: "Tín dụng & lãi suất", bond: "Trái phiếu & đáo hạn", infra: "Hạ tầng & quy hoạch",
    finance: "Tài chính DN", market: "Thị trường & dòng tiền"
  },
  sentiment: {
    score: 1, date: "2026-09-03",
    reason: "Tự động tổng hợp từ 9 tín hiệu mới nhất trong 3 ngày gần nhất. Tích cực: HoREA đề xuất gỡ vướng pháp lý cho bất động sản lưu trú - Laodong.vn (Laodong.vn, 03/09/2026); Thủ tướng Lê Minh Hưng: Đẩy mạnh xuất khẩu, kiểm soát nhập siêu, thúc đẩy tăng trưởng 2 con số - Vietnam… (Vietnam.vn, 03/09/2026). Tiêu cực: ‘Cơn đau đầu’ của FECON: Nợ đọng lớn, tồn kho cao, áp lực vốn nặng nề - VietnamFinance (VietnamFinance, 03/09/2026); Cách xác định nguồn gốc đất để được giảm 70% tiền sử dụng đất - Laodong.vn (Laodong.vn, 03/09/2026). Có 2 tín hiệu trung tính/chờ kiểm chứng. Đây là chấm điểm rule-based từ tin/số liệu tự động; mở nguồn để kiểm chứng trước khi ra quyết định."
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
    {"factor": "market", "impact": 0, "date": "2026-09-03", "srcDate": "03/09/2026 (truy xuất)", "isNew": true, "aff": ["KDH", "DXG", "DIG", "KBC", "NLG", "PDR"], "title": "Nhóm bất động sản phiên 03/09: 5 mã tăng / 5 mã giảm", "desc": "Ý nghĩa đầu tư: Diễn biến giá nhóm — KDH -3.3%; DXG -2.5%; DIG -1.3%; KBC -1.3%; NLG +1.2%; PDR -1.2%. Dùng để soi dòng tiền và xác nhận/tương phản với luận điểm cơ bản.", "srcName": "vnstock (VCI)", "url": "https://www.hsx.vn/", "src": "py"}
  ],
  // </PY-ITEMS>
  // <NEWS-ITEMS> khối này do news_update.py tự ghi — ĐỪNG sửa tay
  itemsNews: [
    {"id": "c5e353148ed684be", "factor": "legal", "impact": 2, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "HoREA đề xuất gỡ vướng pháp lý cho bất động sản lưu trú - Laodong.vn", "desc": "Rule-based: HoREA đề xuất gỡ vướng pháp lý cho bất động sản lưu trú Laodong.vn Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Laodong.vn", "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQRTNLUW4tWUc4REVXa2E5WWZFVWVvbUVDR2NaeFhadGxsMW9LLVh4WUJodnV6MWN5YWNOcU1ldkhpdVVUck1rNFJPM3pKeWh2VWF6dXV3YXZ6dDA5VUZ2ak5lWkJBRXZzYnRSNUwwZjl4ZTVyWlZ1b0ZIYWdEdnNmX0ZiWXUxMlM4ZC1NNExYVG1lN3cyVkliWTR1a0Z1czVk?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "d04018ddcf5e9f84", "factor": "market", "impact": -1, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "‘Cơn đau đầu’ của FECON: Nợ đọng lớn, tồn kho cao, áp lực vốn nặng nề - VietnamFinance", "desc": "Rule-based: ‘Cơn đau đầu’ của FECON: Nợ đọng lớn, tồn kho cao, áp lực vốn nặng nề VietnamFinance Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "VietnamFinance", "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNbnRmZWVSQjNZazU5U1cxaEZXTHZ1Vi1hX1pXWUotZmJ0QlVha3NyR3FpdnAzdEZkVlFhdlRtTk9Kbi11dUdkLXJyZTh4NzdVVnZ5cFpqNUlXWW5tNUJXcmhkeEREdVZNbmV0TmV3cGJmVTZ1eENoMTZFckVSYjhXTHBrd1RHdnFremxlY0V2QUk3aktib1VVZ0xuV0owUGFGbWxNd1l3?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "814520751d7a25e5", "factor": "market", "impact": 1, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Thủ tướng Lê Minh Hưng: Đẩy mạnh xuất khẩu, kiểm soát nhập siêu, thúc đẩy tăng trưởng 2 con số - Vietnam.vn", "desc": "Rule-based: Thủ tướng Lê Minh Hưng: Đẩy mạnh xuất khẩu, kiểm soát nhập siêu, thúc đẩy tăng trưởng 2 con số Vietnam.vn Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam.vn", "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNRWk5Y2dpajFpaWQ2YTVWVG8yaHVZNC1rMkRNbVd1bU90aU0zdUxQaDcyTWlCaEZCSzRBRVVlUXVDYmhieS1MSnVHTEZzaFlXVjBYTVIydkZNcjdXdi1IcFBXQXA0dkU0LVZyNlpLQ0FyQTc0OFFlMmtnMXNwdWxrZE5OT0w2RmVZaVp0NHdRSklnaWUxMEFwUkN3RzVJWDVlcDFZYk54eUVzaGpQYjZsNFBlT3c?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "7fa632702b5d5e6f", "factor": "market", "impact": 1, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Thủ tướng Lê Minh Hưng: Tăng tốc, bứt phá, quyết tâm cao nhất hoàn thành mục tiêu năm 2026 - VnEconomy", "desc": "Rule-based: Thủ tướng Lê Minh Hưng: Tăng tốc, bứt phá, quyết tâm cao nhất hoàn thành mục tiêu năm 2026 VnEconomy Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "VnEconomy", "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOdGthaFhkbjZHRlVfeGdNREtoUjBDV1dHV1ZpbkI1NmhKR3lFLXZHUDE3R3VSVm9jNWRZcDhYZHBwTkhiQmFObXpLOERUaE92Z3FTNTZPUnM3SUtyc25LVGY2Sk5rcnpOUW14QnB1VFdvYkdkYWUzWnNHcWhGakliSzVscHBLUUNhM0J5eFU4OWdzTF8wOFI0SzhfRVJ2RHE3dXdjWFg4dElhQkpJMmxGbWNn?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "232a8c43d965e5c5", "factor": "market", "impact": 1, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Nghịch lý thị trường bất động sản: Tồn kho tăng vọt, giá vẫn \"leo thang\" - diendandoanhnghiep.vn", "desc": "Rule-based: Nghịch lý thị trường bất động sản: Tồn kho tăng vọt, giá vẫn \"leo thang\" diendandoanhnghiep.vn Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "diendandoanhnghiep.vn", "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOS09oVzdYd280VlRRSzJGZUgta2ZZZmpJcWo5Sm5MVkVtRU9hM3JkMGJYLUhqOGFTd0ZpalZ4czdNcmlFUnVRVElEMFhJck85UEU1YnFzR2xXS1V4MHNDelk1djB4SUJZN1hjVkdYMEtodHNPTXZoTjl5ci1qQ21rMlM4Yk94WEJLbmZuZWxfaGFjYWxkMzZiSE5iR1hWYTl4bFkyODZHTkZaVm5OVDJYVGhR?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "e20e7aa6672f6dcd", "factor": "legal", "impact": -1, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Cách xác định nguồn gốc đất để được giảm 70% tiền sử dụng đất - Laodong.vn", "desc": "Rule-based: Cách xác định nguồn gốc đất để được giảm 70% tiền sử dụng đất Laodong.vn Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Laodong.vn", "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPU0xvV2E2ODNqSDNXQ1oteC1vMlpELXRqU1p3b3EzcTl3MUxuWnRGVUhTOEtFaWdIakw5aUh5TWFfWVo4aHQzdW5jODhOVWt6NFVwZ2FPRTJWUnE4V29zWUNUOHZoRTdLeW1FdUZPSkF2NDhwU0h1bmpSbUJMaHozUFVJUEJHcnBSY2dJMldHRkN0dWZfTWpTUDFOVTF3MzlZa2RqaXF1MA?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "b0972d7e20c72b1f", "factor": "bond", "impact": -1, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Bài toán mới của thị trường bất động: Tái cấu trúc hướng vào người mua ở thực - Một Thế Giới", "desc": "Rule-based: Bài toán mới của thị trường bất động: Tái cấu trúc hướng vào người mua ở thực Một Thế Giới Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Một Thế Giới", "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNLTdJXzVXRUEtN0xjNFB0eU1yVUhhemMzRk0tZEY0LWI2cGtjWmdDRGNCY0FXVFVURzJxUWdIZ1pMN1ltODRUSFQ5Q0s2bTJGTUZqS3FaVzZEa2NURm5Sb01QNVI4SmMwWEVCZVh3bkRfSW5yMTBzZ1hveU5IaEhLLVl3RlhPbDF0cTVvZkY3eENZMUJuQktCZ0lldTMzb0NxYTBWWW4zWnJGSWJP?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "b41bdc8702bb676a", "factor": "legal", "impact": 0, "date": "2026-09-03", "srcDate": "03/09/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Đồng Nai công bố thông tin dự án nhà ở xã hội mới cao 21 tầng tại phường trung tâm - cafeland.vn", "desc": "Rule-based: Đồng Nai công bố thông tin dự án nhà ở xã hội mới cao 21 tầng tại phường trung tâm cafeland.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "cafeland.vn", "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNRTBsVHNmdnd5bElMWmw4VzFUVndscG9hSnV1dGZTY0kwRDk0VTNqM3ZlV2NmY1JSR3hONWd2bzlpbThUelVkZ0ZYLWlvbXI1M3gxZ3l4ckNrd01SdVBuUUVGa09rMUY4cVYxbzJpNDdoWW1sa2JhQXFqcjFhZGxOTWRkTzN2aVZYaVJPMi1OcGFVUTdjMDRWNGxxVnZkUnRwTlk5MkdobWRxZHdLMVJEb0lLSzZGRVVRSHZBWThVYw?oc=5", "src": "news", "sourceScope": "local"}
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
