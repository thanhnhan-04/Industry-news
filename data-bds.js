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
  lastUpdated: "2026-07-21T06:33:22+07:00",
  factors: {
    legal: "Pháp lý & gỡ vướng", supply: "Nguồn cung & mở bán", demand: "Cầu & giá",
    credit: "Tín dụng & lãi suất", bond: "Trái phiếu & đáo hạn", infra: "Hạ tầng & quy hoạch",
    finance: "Tài chính DN", market: "Thị trường & dòng tiền"
  },
  sentiment: {
    score: -1, date: "2026-07-21",
    reason: "Tự động tổng hợp từ 7 tín hiệu mới nhất trong 3 ngày gần nhất. Tích cực: Thị trường bất động sản TP Hồ Chí Minh tăng tốc phục hồi - Doanh nghiệp Cuộc sống (Doanh nghiệp Cuộc sống, 20/07/2026); Quyết định 4216/QĐ-UBND TP Hồ Chí Minh 2026 giao kế hoạch đầu tư công hỗ trợ lãi vay - LuatVietnam (LuatVietnam, 20/07/2026). Tiêu cực: VN-Index bốc hơi 44 điểm, SHB giảm sàn, cổ phiếu lao dốc diện rộng - Vietnam.vn (Vietnam.vn, 20/07/2026); Nhóm bất động sản phiên 20/07: 0 mã tăng / 10 mã giảm (vnstock (VCI), 20/07/2026 (truy xuất)). Có 3 tín hiệu trung tính/chờ kiểm chứng. Đây là chấm điểm rule-based từ tin/số liệu tự động; mở nguồn để kiểm chứng trước khi ra quyết định."
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
    {"factor": "market", "impact": -1, "date": "2026-07-20", "srcDate": "20/07/2026 (truy xuất)", "isNew": true, "aff": ["DXG", "DIG", "HDG", "PDR", "VRE", "NLG"], "title": "Nhóm bất động sản phiên 20/07: 0 mã tăng / 10 mã giảm", "desc": "Ý nghĩa đầu tư: Diễn biến giá nhóm — DXG -7.0%; DIG -6.6%; HDG -5.6%; PDR -5.6%; VRE -5.3%; NLG -4.6%. Dùng để soi dòng tiền và xác nhận/tương phản với luận điểm cơ bản.", "srcName": "vnstock (VCI)", "url": "https://www.hsx.vn/", "src": "py"}
  ],
  // </PY-ITEMS>
  // <NEWS-ITEMS> khối này do news_update.py tự ghi — ĐỪNG sửa tay
  itemsNews: [
    {"id": "cbce4199780e3af4", "factor": "infra", "impact": 0, "date": "2026-07-21", "srcDate": "21/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Tập đoàn GELEX (GEX): Đón “sóng kép” từ dòng vốn hàng tỷ USD đổ vào hạ tầng điện, sản xuất chế tạo - Vietnam.vn", "desc": "Rule-based: Tập đoàn GELEX (GEX): Đón “sóng kép” từ dòng vốn hàng tỷ USD đổ vào hạ tầng điện, sản xuất chế tạo Vietnam.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam.vn", "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPODctVWFCQXV3WUlxVW1LSUxUYVl5WHBpOFNnTEJOSzAwcHlNYUM4NVkydTlXeFNMN2xMNzdIZ0NVbnNXR0RneHJMMW5odnhQaUNrczNfT21BSThmaDNWZUc3dHhFdVlYaGhuY1dUY3Fqallrd3Z1N3lCZndTWWJZVG9teHBRYTlIRHZEcnU3Zmc1WHhQV2RYRUZRVFl3TnljejZuZmNac29kQy1qajFrRC1KOV9Wdw?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "93fb3dfb5468bd09", "factor": "market", "impact": 0, "date": "2026-07-21", "srcDate": "21/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Môi giới bán nhà sau sáp nhập: 'Từ giờ anh mua là nhà TPHCM rồi!' - Vietnam.vn", "desc": "Rule-based: Môi giới bán nhà sau sáp nhập: 'Từ giờ anh mua là nhà TPHCM rồi!' Vietnam.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam.vn", "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQZ1BMUUl3Y283ZXdjbV9Ma2QwTGRjWnZKT1A3alBNNGsxa1JuS0hRZ1hhc0lLU3lQUVpvdzAtaUEzU1dhSzlubEtNeDhoZDhjQmhSUFRqZVFXbmNidHV4WFRYUE9ZZ2g1WjQ5V3U4Z0ZBQ0xzUVhsWHp2MWwySTh0MHVleFlXMTl0Y0NLRQ?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "dbb9a609e6fbc073", "factor": "legal", "impact": 0, "date": "2026-07-21", "srcDate": "21/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Hơn 750.000 căn nhà ở xã hội đang triển khai, gói tín dụng 145.000 tỷ đồng giải ngân được bao nhiêu? - Vietnam.vn", "desc": "Rule-based: Hơn 750.000 căn nhà ở xã hội đang triển khai, gói tín dụng 145.000 tỷ đồng giải ngân được bao nhiêu? Vietnam.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam.vn", "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQNWdjVlBZRk85VGtyU0FZeXJrWDltQzVCa3BYWVRRNHJvcVJmbi03RVF1V0RQNVplWGR6ZzBnMC1NdVY4TkY0TW1scVRodDlnRVRnWHI0RURLXy1SaFF4WkV3bGFhcVphNGgyQUg4ZGk2bklqM08zcW16RFZVLWtJeEZ5aEZ0U3JUMU50YzBMSnZiQWYxdlJweEVUOVZnZ1ktdElnWW1YWllKdW9ydnE3UTd3NHBlUHJDb0VXM2JB?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "0a7edd4b2373f703", "factor": "market", "impact": -2, "date": "2026-07-20", "srcDate": "20/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "VN-Index bốc hơi 44 điểm, SHB giảm sàn, cổ phiếu lao dốc diện rộng - Vietnam.vn", "desc": "Rule-based: VN-Index bốc hơi 44 điểm, SHB giảm sàn, cổ phiếu lao dốc diện rộng Vietnam.vn Tác động sơ bộ: tiêu cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Vietnam.vn", "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPQzExV2p2eUNRNEVSd1FJLUFFYTF6aTBSM24tOHFiZTB6SVVfSDRxWE9aVXdUMmp2LUhvMWZfQTRQd0dLOVZjUzJ4cEFxSklOVnhmOFlDZ2tLM0tJZjRLVTlvVThyVU52SGYxTi1VNEI0bVNsc0EwdkUwNXI2RlZxdGpYZ0gtWlpUTU8yZE5lVWk?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "5872f34375978f6e", "factor": "market", "impact": 1, "date": "2026-07-20", "srcDate": "20/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Thị trường bất động sản TP Hồ Chí Minh tăng tốc phục hồi - Doanh nghiệp Cuộc sống", "desc": "Rule-based: Thị trường bất động sản TP Hồ Chí Minh tăng tốc phục hồi Doanh nghiệp Cuộc sống Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Doanh nghiệp Cuộc sống", "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNZWhFc3V3QnhnVFlTLUt0b3ZHUXVXN1YzT28zTmprZGNfQVlheXdMcmlhb1pZeUNFcGxoQk5qTWdhWXRXeDZKUVdfSkgtbG5vVzdLcWRaNzkyVWJMTEVCX2VwS3Uya3IwN0VCN3BzSUpEWll6RHJFdWhkb1I1eXFpTnZadFZpZEhJYzljVUFSelpjSGRaTTFITGV1Y0drRzh2UXc?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "22850ff5c9a91e7f", "factor": "infra", "impact": 1, "date": "2026-07-20", "srcDate": "20/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Quyết định 4216/QĐ-UBND TP Hồ Chí Minh 2026 giao kế hoạch đầu tư công hỗ trợ lãi vay - LuatVietnam", "desc": "Rule-based: Quyết định 4216/QĐ-UBND TP Hồ Chí Minh 2026 giao kế hoạch đầu tư công hỗ trợ lãi vay LuatVietnam Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "LuatVietnam", "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQN0ZLd1dWWEE5amFVRmZPeDRJUmotUFNXckktelcyTjhDaDliUUJPVGhTV0pDZEE2b01ud2RPV3BTS1B2dmU3OXdKbU5MbUhBV0IyUElZZk5fQ3JXNXpUT3RONUg1a1N2RWFsRk95Yklod19YaU5aYTYyQVVqTDIxakpVSmFNUFhpYUVVWGdvM3hVNXJyRGpLSjhFa0ZZU1lmblVaRWRmZWk1WjBsemhzSG9KbHhxX1p1bVEyX01KWW9HVXlMMkJmbQ?oc=5", "src": "news", "sourceScope": "local"},
    {"id": "32ecebba6d2e629c", "factor": "bond", "impact": 0, "date": "2026-07-18", "srcDate": "18/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Over $8 bln flows into Vietnam's corporate bond market in Q2 - Theinvestor", "desc": "Rule-based: Over $8 bln flows into Vietnam's corporate bond market in Q2 Theinvestor Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Theinvestor", "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNSW53OEc0YVRnYWNxazFwNFRKVHZhUFI4dTBjd1VFR2hZTTA5endjWnJuSm8zcmZKMEpVVjlCQ2xTVGxLVFQyZXlsMmt2WGxkV0dkX0FpRm1yWjVyVlh5RUZBV0ZidEJtQjd1ZXd5MUphVTVjcTJDaElsZEh6cWZUVENxamVFR2FDOUNVb3k3OG95UjFneEh3Mw?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "0a19add1c824f9a8", "factor": "market", "impact": 0, "date": "2026-07-14", "srcDate": "14/07/2026", "isNew": true, "aff": ["VHM", "NLG", "KDH", "DXG", "KBC"], "title": "Stronger incentives drafted to unlock marine economy - vietnamnews.vn", "desc": "Rule-based: Stronger incentives drafted to unlock marine economy vietnamnews.vn Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "vietnamnews.vn", "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWnBPNnNpcTcweUNyQm5HZnVvbGUtU3BwcFhvbGM3dVE1VHJrNEJWdnd3eTNwWUZjSkN3R3hILThkNW1mMV84WlJXWUdBd0liOUU2eWt1SEdUTTAwT196MHotLW02SENYdkxCb1FqUndpN0JseXl0MXJFU3ZVaHFIeUREWFgwN1FuYkloeVRrVnM5amQ5QWQtODJMR3Y?oc=5", "src": "news", "sourceScope": "intl"}
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
