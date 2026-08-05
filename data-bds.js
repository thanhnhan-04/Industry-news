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
  lastUpdated: "2026-08-05T21:57:32+07:00",
  factors: {
    legal: "Pháp lý & gỡ vướng", supply: "Nguồn cung & mở bán", demand: "Cầu & giá",
    credit: "Tín dụng & lãi suất", bond: "Trái phiếu & đáo hạn", infra: "Hạ tầng & quy hoạch",
    finance: "Tài chính DN", market: "Thị trường & dòng tiền"
  },
  sentiment: {
    score: 1, date: "2026-08-05",
    reason: "Tự động tổng hợp từ 9 tín hiệu mới nhất trong 3 ngày gần nhất. Tích cực: Loạt dự án bất động sản tại Gia Lai được cho phép mở bán - baodautu (baodautu, 05/08/2026); Hà Nội khởi công 114 dự án nhà ở xã hội - Báo và Phát thanh Truyền hình Hà Nội (Báo và Phát thanh Truyền hình Hà Nội, 05/08/2026). Tiêu cực: Tái cấu trúc thị trường bất động sản Bài 1: Chung cư không còn là tài sản 'vĩnh viễn'? - Một Thế Giới (Một Thế Giới, 05/08/2026); Helios hé lộ tình trạng 2 lô trái phiếu 4.000 tỷ đồng sau thời điểm đáo hạn - Người Đưa Tin (Người Đưa Tin, 05/08/2026). Có 4 tín hiệu trung tính/chờ kiểm chứng. Đây là chấm điểm rule-based từ tin/số liệu tự động; mở nguồn để kiểm chứng trước khi ra quyết định."
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
    {"factor": "market", "impact": 0, "date": "2026-08-05", "srcDate": "05/08/2026 (truy xuất)", "isNew": true, "aff": ["NVL", "DXG", "HDG", "KDH", "PDR", "KBC"], "title": "Nhóm bất động sản phiên 05/08: 5 mã tăng / 4 mã giảm", "desc": "Ý nghĩa đầu tư: Diễn biến giá nhóm — NVL +3.7%; DXG -0.9%; HDG +0.9%; KDH +0.8%; PDR -0.8%; KBC -0.5%. Dùng để soi dòng tiền và xác nhận/tương phản với luận điểm cơ bản.", "srcName": "vnstock (VCI)", "url": "https://www.hsx.vn/", "src": "py"}
  ],
  // </PY-ITEMS>
  // <NEWS-ITEMS> khối này do news_update.py tự ghi — ĐỪNG sửa tay
  itemsNews: [
    {"id": "a4faa81ea68884d7", "factor": "bond", "impact": -1, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Tái cấu trúc thị trường bất động sản Bài 1: Chung cư không còn là tài sản 'vĩnh viễn'? - Một Thế Giới", "desc": "Rule-based: Tái cấu trúc thị trường bất động sản Bài 1: Chung cư không còn là tài sản 'vĩnh viễn'? Một Thế Giới Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Một Thế Giới", "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQbzFRYXJScTNpbkxjTVB0UU1EbE1ZdHlGUWlTV25xWTF1al9TWmoybm1DMFh4OGZ6czhGcXB4cjNCaWs5dVk5OFJPYzBnOHdfZ1ZzMHBkRHd4WEpPMkU4MmNnWW9FN3NkTHVGSXZIM1FKRUtha24wOHl1VFJMSnVLTW5vVS16RjRjT0Fsa1IwTlE3MnNTdlNzRXVXQkxaSTJGazVUM1RIUUpUOTM3d3ByTzRud00?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "04deffd19f0709fd", "factor": "supply", "impact": 1, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Loạt dự án bất động sản tại Gia Lai được cho phép mở bán - baodautu", "desc": "Rule-based: Loạt dự án bất động sản tại Gia Lai được cho phép mở bán baodautu Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "baodautu", "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOVS1SUk84bDZwNDNQdGJCYVVQTEc5N2FSbkk3MUhmYzFRbHVtaW9JeXlhaDNMUzNwdDNZcG50cm1rV3pWSC1DQnU0UHlsT2o5dkdIdDdSQU0yMWpCMzFHRTljV1ZmeHhPN0pRMXBuZUpvMVB3RndMVVFhUVlBYkJySTIzZzZpZW54bk1OaWVQRUgxQ09IOTdLQnRmbUliN3gyLXc?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "748e3d9285c56d24", "factor": "legal", "impact": 1, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Hà Nội khởi công 114 dự án nhà ở xã hội - Báo và Phát thanh Truyền hình Hà Nội", "desc": "Rule-based: Hà Nội khởi công 114 dự án nhà ở xã hội Báo và Phát thanh Truyền hình Hà Nội Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Báo và Phát thanh Truyền hình Hà Nội", "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE03UmludUplRy16cFZzQkNHUWwzcEdiQ1BXV3d2NzhYXy1ITVV1TmRLOFByWUlYUU54RENsYlhQVzlpYVBHcW9SdFFqZGUwcjgzVkdxRjFodlFoRDltdXpzd1VVMU9iNlh1M241cDhITERVLXh1WW42eXRhQ3lpQQ?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "66c85c1121cefab1", "factor": "bond", "impact": -1, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Helios hé lộ tình trạng 2 lô trái phiếu 4.000 tỷ đồng sau thời điểm đáo hạn - Người Đưa Tin", "desc": "Rule-based: Helios hé lộ tình trạng 2 lô trái phiếu 4.000 tỷ đồng sau thời điểm đáo hạn Người Đưa Tin Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Người Đưa Tin", "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQT2N0al8tRWZTNDhIZnVXR0VoVnk4S1BJTW93Z1RWQUZZOVdIaDhFVTBqY01weDB0Rk5sZTBfZGxDbjFUZ1RSbENfS0VnMnJUV1F0eWNWTFFXUTZGYVBfTlp4VkpRLWN0aXJkS0tJLVQtQk5oNm5FdW5rb2lmRUptSUN1cVctbHdaVmpuYU5jUXVPcTQwQUhsci1BRmZiNElYYXZSVXRObmRrQW1MSEVjcmlXY20wVHRzMHk0SGxvQ0dwQQ?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "86a1607603548583", "factor": "infra", "impact": 1, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "FDI đổ mạnh vào bất động sản, doanh nghiệp ngoại chủ động tìm đến Việt Nam - congluan.vn", "desc": "Rule-based: FDI đổ mạnh vào bất động sản, doanh nghiệp ngoại chủ động tìm đến Việt Nam congluan.vn Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "congluan.vn", "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNWDg4VW9yMlBDSEhONGRfbVZfZHg0OTBiU3lsTXcySHFmMWw1dWNrZy01RG1tckJuXzF3SG1zbC0wSzNzQWVqcTd0cGdQV1lQbW1hZ0N5a1ZMeFNoSEtISHlueF93eU9pdC1jd2pxV3RrRWlkNUhQdlBWazlnVjZ5OTNHeVhFbTF3ZkhhUnh6RVNnb3pUaXRtdmpXdmp5aXZETnlIT0xLeEJ5aXhZS3c?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "1554e5c22b49238c", "factor": "market", "impact": 0, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Đưa condotel vào Luật Nhà ở: Không cần đổi tên tài sản để bảo vệ người mua - Tạp chí Điện tử Luật sư Việt Nam", "desc": "Rule-based: Đưa condotel vào Luật Nhà ở: Không cần đổi tên tài sản để bảo vệ người mua Tạp chí Điện tử Luật sư Việt Nam Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Tạp chí Điện tử Luật sư Việt Nam", "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOX0FSa1BmZnFWSkE2TnU4SzFkVFF4QmhjZGVNcUhNQUZUOW9fa3NQN2g0UDJCNDBTblgxb0IyeXFFbHBFMjJoZk1oSk5MMzNlWjNybWFSakZXbFQ4ZjNWWmtMdjl0OEUxQ25FVk5YNjdVbnNVQzdWRS1Odm0xcm1qZExFQ2o3ZWVQMkZ3YlFpLXBaS3VleUFiN25tUmtrcGVVeklrMA?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "f6152c204671208d", "factor": "finance", "impact": 0, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Noi Bai Airport adjusts service vehicle pick-up lanes at Terminal T1 following passenger feedback. - Vietnam.vn", "desc": "Rule-based: Noi Bai Airport adjusts service vehicle pick-up lanes at Terminal T1 following passenger feedback. Vietnam.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam.vn", "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPVER3MnNHbXVSakdBTVdsOVVtQ2lraW5BOG0zV3pTM3JfbHVSbEFZWmJOeVc4cUNjejNOMGZRWUNPSWJ6YldTVVZnRllEbDVzU1ItcE5qOVNjV3F3TDYxUmpJSTdrQU5wYlhCVkFBNGwxcF9wZkFnTVduN2VlT2VXdHczUkhvcS1nUXVjX3otMXpMZWZYRzlTQ01BRE5aaXZTUEIyMDRVNzRZTmFCSkxHU3ZBUTlyNk1J?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "124918a4297bd311", "factor": "market", "impact": 0, "date": "2026-08-05", "srcDate": "05/08/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Lesson 4: Transparent governance, unlocking housing resources - Vietnam.vn", "desc": "Rule-based: Lesson 4: Transparent governance, unlocking housing resources Vietnam.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam.vn", "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNTmcyUE9Gb3I1d3VFcjc0bHF5OU12dGtFd3ZlcGV6d3R3ZnM3YnBEd2Z0UW5vdE4xTkcwZzBjRjJMSU56bGJGN0hqYjJhMjhtSGRrak9HdXBLR05Ta2xRZHREM3d5dEZwMGIyWFZWYzk4bHBVVEk2SGZ4aXpGSmNZcHp3?oc=5", "src": "news", "sourceScope": "intl"}
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
