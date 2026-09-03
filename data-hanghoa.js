// ====== DỮ LIỆU NGÀNH HÀNG HÓA (đường, sữa, sắn, ngô) — task "quet-nganh-hang-hoa" cập nhật file này mỗi sáng ======
// Chỉ sửa: lastUpdated, sentiment, items. GIỮ NGUYÊN: factors, valuechain, tickers, sources, meta.
window.SECTORS = window.SECTORS || {};
window.SECTORS.hanghoa = {
  id: "hanghoa",
  name: "Hàng hóa",
  icon: "🌾",
  order: 5,
  scope: "SBT, SLS, LSS, QNS, VNM, IDP, MCM, DBC, BAF, HAG",
  subtitle: "Sentiment nhóm hàng hóa nông nghiệp VN (đường, sữa, sắn, ngô/TĂCN) theo giá hàng hóa & chuỗi giá trị — giá đường, giá sữa bột, ngô & thức ăn chăn nuôi, sắn, chi phí đầu vào, tỷ giá, chính sách & phòng vệ TM, tài chính DN. Phạm vi: SBT, SLS, LSS, QNS, VNM, IDP, MCM, DBC, BAF, HAG. Chỉ tin có nguồn cập nhật ≤ 30 ngày.",
  lastUpdated: "2026-09-04T00:45:07+07:00",
  factors: {
    sugar: "Đường", milk: "Sữa", corn: "Ngô & TĂCN", cassava: "Sắn",
    input: "Chi phí đầu vào & logistics", fx: "Tỷ giá & nhập khẩu",
    policy: "Chính sách & phòng vệ TM", finance: "Tài chính DN", market: "Thị trường & dòng tiền"
  },
  sentiment: {
    score: -1, date: "2026-09-03",
    reason: "Tự động tổng hợp từ 9 tín hiệu mới nhất trong 3 ngày gần nhất. Tích cực: Prices rise by 0.9% at Global Dairy Trade - Irish Farmers Journal (Irish Farmers Journal, 01/09/2026). Tiêu cực: Đường thô ICE #11: 17.74 cent/lb (-5.1% phiên 03/09) (Yahoo Finance (SB=F), 03/09/2026 (truy xuất)); Nhóm hàng hóa phiên 03/09: 2 mã tăng / 6 mã giảm (vnstock (VCI), 03/09/2026 (truy xuất)). Có 6 tín hiệu trung tính/chờ kiểm chứng. Đây là chấm điểm rule-based từ tin/số liệu tự động; mở nguồn để kiểm chứng trước khi ra quyết định."
  },
  items: [
    { factor: "corn", impact: -1, date: "2026-06-29", srcDate: "29/06/2026 (truy xuất)", isNew: true, aff: ["DBC","BAF","HAG"], title: "Giá heo hơi tiếp tục giảm: miền Bắc 67–68k, miền Trung 62–67k, miền Nam 61–63k đ/kg", desc: "Ý nghĩa đầu tư: Heo hơi hạ nhiệt và giảm tuần thứ hai liên tiếp ép biên đầu ra của DBC/BAF/HAG; vùng giá 60–68k vẫn có lãi nhưng xu hướng giảm là tín hiệu thận trọng cho lợi nhuận quý 2–3.", srcName: "Thanh Niên", url: "https://thanhnien.vn/gia-heo-hoi-hom-nay-2962026-lai-tiep-tuc-giam-185260629081524846.htm" },
    { factor: "corn", impact: -1, date: "2026-06-25", srcDate: "25/06/2026", isNew: true, aff: ["DBC","BAF","HAG"], title: "ALERT: Bùng phát dịch tả heo châu Phi (ASF) ở Đồng Nai, tiêu hủy đàn ~1.942 con; báo động đỏ miền Bắc", desc: "Ý nghĩa đầu tư: Ổ dịch ASF mới + khuyến cáo tạm dừng tái đàn là rủi ro hai mặt cho DBC/BAF: tăng rủi ro thiệt hại đàn ngắn hạn, nhưng nếu lan rộng sẽ giảm cung và đỡ giá heo cuối năm. Theo dõi sát mức độ lan và tiến độ tái đàn.", srcName: "Một Thế Giới", url: "https://motthegioi.vn/gia-heo-hoi-mien-bac-asf/" },
    { factor: "corn", impact: 0, date: "2026-06-24", srcDate: "24/06/2026 (truy xuất)", isNew: true, aff: ["DBC","BAF","HAG"], title: "Giá ngô nhập ~248,8 USD/tấn (−3,6%); khô đậu tương ~475,9 USD/tấn (+5,2%)", desc: "Ý nghĩa đầu tư: Ngô rẻ hơn hỗ trợ giá thành thức ăn chăn nuôi nhưng khô đậu tăng bù trừ; nguồn cung khô đậu về nhiều tháng 6–7 có thể hạ nhiệt giá → trung tính với biên TĂCN của DBC/BAF.", srcName: "Nhà Bè Agri", url: "https://nhabeagri.com/gia-nong-san/gia-ngo-moi-nhat/" },
    { factor: "fx", impact: -1, date: "2026-06-17", srcDate: "17/06/2026", isNew: true, aff: ["VNM","IDP","MCM","DBC","BAF"], title: "USD/VND căng: tỷ giá trung tâm 25.165, NHTM bán USD kịch trần 26.433 đồng", desc: "Ý nghĩa đầu tư: USD mạnh, giá bán kịch trần làm tăng chi phí nhập bột sữa, ngô và khô đậu (tính bằng USD) → bất lợi biên cho nhóm nhập nguyên liệu VNM/IDP/MCM/DBC/BAF, bù trừ một phần lợi ích giá hàng hóa thế giới giảm.", srcName: "Thanh Niên", url: "https://thanhnien.vn/gia-usd-hom-nay-1662026-do-tu-do-bat-tang-18526061608200601.htm" },
    { factor: "sugar", impact: -1, date: "2026-06-12", srcDate: "12/06/2026", isNew: true, aff: ["SBT","SLS","LSS","QNS"], title: "Đường lậu, không rõ nguồn gốc vẫn tràn lan; VSSA dự báo dư cung kéo dài", desc: "Ý nghĩa đầu tư: Đường nhập lậu Campuchia/Lào (~16.300 đ/kg) cạnh tranh trực tiếp, dư cung tiếp diễn → rủi ro tồn kho và giá bán thấp cho doanh nghiệp đường, tiêu cực ngắn hạn cho SBT/LSS/SLS/QNS.", srcName: "Vietstock", url: "https://vietstock.vn/2026/06/duong-lau-khong-ro-nguon-goc-van-tran-lan-118-1453545.htm" },
    { factor: "cassava", impact: 0, date: "2026-06-12", srcDate: "12/06/2026", isNew: true, aff: ["HAG"], title: "Giá tinh bột sắn xuất khẩu neo cao (~515–540 USD/tấn) nhưng Trung Quốc giảm mua", desc: "Ý nghĩa đầu tư: Giá tinh bột sắn neo cao gần gấp đôi cùng kỳ hỗ trợ doanh nghiệp sắn, song cầu Trung Quốc giảm do bớt dùng cho ethanol là rủi ro đầu ra; tác động gián tiếp, nhẹ tới HAG và DN tinh bột.", srcName: "Vietnam.vn", url: "https://www.vietnam.vn/en/trung-quoc-cham-mua-hang-gia-mot-loai-tinh-bot-cua-viet-nam-giam-sau/" },
    { factor: "sugar", impact: -1, date: "2026-06-05", srcDate: "05/06/2026", isNew: true, aff: ["SBT","SLS","LSS","QNS"], title: "Giá đường nội địa chạm đáy 3 năm dù giá đường thế giới gần đỉnh 5 tháng", desc: "Ý nghĩa đầu tư: Đường kính trắng nội địa chỉ 15.800–16.600 đ/kg do dư cung + đường lậu, ép biên mảng đường của SBT/SLS/LSS/QNS bất chấp giá #11 thế giới cao; chưa thấy catalyst tăng giá nội địa rõ ràng.", srcName: "Dân trí", url: "https://dantri.com.vn/kinh-doanh/duong-lau-bua-vay-nganh-mia-duong-lao-dao-vi-gia-cham-day-20260605091744497.htm" },
    { factor: "milk", impact: 1, date: "2026-06-02", srcDate: "02/06/2026 (truy xuất)", isNew: true, aff: ["VNM","IDP","MCM"], title: "Đấu giá GDT: WMP −3,1% về 3.589 USD/tấn, SMP −3,6%, chỉ số chung −2,8%", desc: "Ý nghĩa đầu tư: Giá bột sữa nhập (WMP/SMP) giảm do dư cung toàn cầu = hạ giá vốn đầu vào, hỗ trợ biên gộp cho VNM/IDP/MCM; tuy nhiên cần bù trừ với tỷ giá USD/VND cao và sức mua trong nước còn yếu (Q1 giảm ~3,7%).", srcName: "GlobalDairyTrade / eDairyNews", url: "https://en.edairynews.com/supply-glut-slashes-global-dairy-auction-prices/" }
  ],
  // <PY-ITEMS> khối này do quant_update.py tự ghi mỗi sáng — ĐỪNG sửa tay
  itemsPY: [
    {"factor": "sugar", "impact": -1, "date": "2026-09-03", "srcDate": "03/09/2026 (truy xuất)", "isNew": true, "aff": ["SBT", "SLS", "LSS", "QNS"], "title": "Đường thô ICE #11: 17.74 cent/lb (-5.1% phiên 03/09)", "desc": "Ý nghĩa đầu tư: Giá đường thế giới giảm tạo áp lực tham chiếu lên giá bán và tồn kho của SBT/SLS/LSS/QNS.", "srcName": "Yahoo Finance (SB=F)", "url": "https://finance.yahoo.com/quote/SB=F", "src": "py"},
    {"factor": "corn", "impact": 0, "date": "2026-09-03", "srcDate": "03/09/2026 (truy xuất)", "isNew": false, "aff": ["DBC", "BAF", "HAG"], "title": "Ngô CBOT: 528.2 cent/bushel (+1.8% phiên 03/09)", "desc": "Ý nghĩa đầu tư: Giá ngô đi ngang, chi phí thức ăn chăn nuôi ổn định.", "srcName": "Yahoo Finance (ZC=F)", "url": "https://finance.yahoo.com/quote/ZC=F", "src": "py"},
    {"factor": "corn", "impact": 0, "date": "2026-09-03", "srcDate": "03/09/2026 (truy xuất)", "isNew": false, "aff": ["DBC", "BAF"], "title": "Khô đậu tương CBOT: 345.8 USD/tấn ngắn (+1.9% phiên 03/09)", "desc": "Ý nghĩa đầu tư: Khô đậu tương đi ngang.", "srcName": "Yahoo Finance (ZM=F)", "url": "https://finance.yahoo.com/quote/ZM=F", "src": "py"},
    {"factor": "fx", "impact": 0, "date": "2026-09-03", "srcDate": "03/09/2026 (truy xuất)", "isNew": false, "aff": ["VNM", "IDP", "MCM", "DBC", "BAF"], "title": "Tỷ giá USD/VND: 26067.0 đồng (-0.0% phiên 03/09)", "desc": "Ý nghĩa đầu tư: Tỷ giá USD/VND ổn định, ít tác động chi phí nhập khẩu.", "srcName": "Yahoo Finance (VND=X)", "url": "https://finance.yahoo.com/quote/VND=X", "src": "py"},
    {"factor": "market", "impact": -1, "date": "2026-09-03", "srcDate": "03/09/2026 (truy xuất)", "isNew": true, "aff": ["IDP", "SLS", "QNS", "DBC", "VNM", "LSS"], "title": "Nhóm hàng hóa phiên 03/09: 2 mã tăng / 6 mã giảm", "desc": "Ý nghĩa đầu tư: Diễn biến giá nhóm — IDP -38.8%; SLS +3.4%; QNS +2.5%; DBC -2.0%; VNM -1.8%; LSS -0.4%. Dùng để soi dòng tiền và xác nhận/tương phản với luận điểm cơ bản.", "srcName": "vnstock (VCI)", "url": "https://www.hsx.vn/", "src": "py"}
  ],
  // </PY-ITEMS>
  // <NEWS-ITEMS> khối này do news_update.py tự ghi — ĐỪNG sửa tay
  itemsNews: [
    {"id": "9f545f88b8e4b5bd", "factor": "milk", "impact": 0, "date": "2026-09-02", "srcDate": "02/09/2026", "isNew": true, "aff": ["SBT", "QNS", "VNM", "DBC", "BAF"], "title": "Skim Milk Powder Lifted the Global Dairy Trade Index - DairyNews.today", "desc": "Rule-based: Skim Milk Powder Lifted the Global Dairy Trade Index DairyNews.today Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "DairyNews.today", "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOZWZfUVg5c2RGd0Q4eF9RX2ZxcEgwTGxxY0UxZ21DV1U5ODlzN3lMaEZXYmVlUXZuTDlMRDFqc1VDVVY1VF9lcTlhNUhMQ1VIU2ZaMUZIVmtNY0RMMzloazV3VlBDY0pSYTRaaXpPSTVDN01GVC1jTE14eW5lYlY5T3FKb005N294TTFiMnFKYXMzd3VMTXFsY2lielpULWVUSWNN?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "d90417652acb6089", "factor": "milk", "impact": 0, "date": "2026-09-02", "srcDate": "02/09/2026", "isNew": true, "aff": ["SBT", "QNS", "VNM", "DBC", "BAF"], "title": "Global dairy prices holding steady, despite increase in seasonal supply - RNZ", "desc": "Rule-based: Global dairy prices holding steady, despite increase in seasonal supply RNZ Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "RNZ", "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQTmYwOEIxeXZTVFFZR0cxUkpVMUNJMDZIRkhSTGNQcEtsLUI2WlNBbGk1NHg1STc5MUJXOVdHMXRVRGlLd3MwaEhENEtjVmxfRmFkNU9zM1pIb0dMSE80OGlMYzh1UXJZY3BmOXBlY0VSSE52Z2VYT0lpTC1zVDUwYldpMVk1VGJMNW9xdlRHaFRiTVI4RzVJV21fYUpHZllvZC0zcXZBbE12elVTdE9YVGtnTQ?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "e8a353d692df56ee", "factor": "milk", "impact": 1, "date": "2026-09-01", "srcDate": "01/09/2026", "isNew": true, "aff": ["SBT", "QNS", "VNM", "DBC", "BAF"], "title": "Prices rise by 0.9% at Global Dairy Trade - Irish Farmers Journal", "desc": "Rule-based: Prices rise by 0.9% at Global Dairy Trade Irish Farmers Journal Tác động sơ bộ: tích cực theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "Irish Farmers Journal", "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQaU5URk5WbTJhWWVYTDBaMHFjcTY1RGxPVF8yb25KMWMyVDVubEVJZXNzSkNvVGI2Z2NwUE9iNVVyaGFINXd4TUYxQTZFVEhJU3pxRFJRdExUNVVRU0hJN0JudU45ajhXUWRDbEttTUozQzVrYml6dHppc1VKUkxhckNGbkdOUmI5X1V6YXpxOTk?oc=5", "src": "news", "sourceScope": "intl"},
    {"id": "f164b8074c98de33", "factor": "milk", "impact": 0, "date": "2026-09-01", "srcDate": "01/09/2026", "isNew": true, "aff": ["SBT", "QNS", "VNM", "DBC", "BAF"], "title": "Global Dairy Trade | GlobalDairyTrade Up 0.9%: Who Wins and Who Loses? - en.edairynews.com", "desc": "Rule-based: Global Dairy Trade | GlobalDairyTrade Up 0.9%: Who Wins and Who Loses? en.edairynews.com Tác động sơ bộ: trung tính/chờ kiểm chứng theo keyword; mở nguồn để kiểm chứng trước khi ra quyết định.", "srcName": "en.edairynews.com", "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9kME1JZkNHWmM0eG00alBWTmRBcUREZ2RPdTl6YVVKVXhpZ1NJUWt1Z3lzb1V4SU9MX2FtXzFqUWdkbXkzRHBYai1fYkZfQnkyWjVZQ1ptcWxuWUdmVlVObllZMlJudURpQmhJLTRPS1RWMXN3ZTdXY2stZEVSdw?oc=5", "src": "news", "sourceScope": "intl"}
  ],
  // </NEWS-ITEMS>
  valuechain: [
    ["Đường", "Vùng mía; giá đường thế giới (#11) & nội; nhập lậu; CBPG đường Thái", "SBT, SLS, LSS, QNS", "Giá đường cao; phòng vệ TM hiệu quả; vùng nguyên liệu ổn"],
    ["Sữa", "Giá bột sữa nhập (WMP/SMP); sức mua; đàn bò; thị phần", "VNM, IDP, MCM, QNS (sữa đậu nành)", "Giá bột nhập rẻ; sức mua hồi phục; giữ/tăng thị phần"],
    ["Ngô & thức ăn chăn nuôi", "Giá ngô/khô đậu nhập; giá heo; dịch bệnh; tái đàn", "DBC, BAF, HAG", "Giá heo cao + nguyên liệu rẻ = biên tốt; tái đàn thuận lợi"],
    ["Sắn", "Giá sắn lát/tinh bột; cầu Trung Quốc; ethanol", "HAG (nông nghiệp) + DN tinh bột", "Cầu TQ tốt; giá tinh bột cao; xuất khẩu thuận lợi"],
    ["Chi phí & logistics", "Cước vận tải; năng lượng; phân bón; tỷ giá nhập nguyên liệu", "Toàn nhóm", "Cước & năng lượng giảm; tỷ giá ổn định"]
  ],
  tickers: [
    ["SBT", "Đường (lớn nhất); vùng mía; xuất khẩu; giá đường", "Giá đường cao; vùng nguyên liệu mở rộng; xuất khẩu tốt", "Giá đường giảm; đường nhập lậu; tồn kho; đòn bẩy cao"],
    ["SLS", "Đường; vùng mía Sơn La; biên cao; cổ tức tiền mặt", "Giá đường cao; năng suất mía tốt; cổ tức lớn", "Giá đường giảm; thời tiết bất lợi; diện tích mía"],
    ["LSS", "Đường + sau đường (điện, cồn); đa dạng hóa", "Giá đường tốt; mảng sau đường đóng góp", "Giá đường yếu; cạnh tranh; chi phí"],
    ["QNS", "Sữa đậu nành Vinasoy + đường; giá đậu nành; thị phần", "Vinasoy giữ thị phần; đường có lãi; giá đậu nành rẻ", "Cạnh tranh sữa đậu; giá đường giảm; sức mua"],
    ["VNM", "Sữa (đầu ngành); giá bột nhập; thị phần; xuất khẩu", "Giá WMP/SMP rẻ; giữ/tăng thị phần; xuất khẩu Trung Đông", "Sức mua yếu; mất thị phần; giá bột nhập tăng"],
    ["IDP", "Sữa (nhãn Kun); tăng trưởng; biên; marketing", "Tăng trưởng nhãn Kun; biên cao; phân phối mở rộng", "Cạnh tranh gay gắt; chi phí marketing; sức mua"],
    ["MCM", "Sữa (Mộc Châu); đàn bò; vùng nguyên liệu; hợp lực VNM", "Sản lượng sữa tươi tăng; hợp lực Vinamilk; thương hiệu", "Giá nguyên liệu; cạnh tranh; sức mua yếu"],
    ["DBC", "3F (feed–farm–food); giá heo; giá ngô/khô đậu; tái đàn", "Giá heo cao + nguyên liệu rẻ; tái đàn; vắc-xin ASF", "Giá heo thấp; dịch ASF; giá ngô cao; đòn bẩy"],
    ["BAF", "Chăn nuôi heo; giá heo; mở rộng đàn; chuỗi khép kín", "Giá heo cao; mở trại mới; chuỗi khép kín hiệu quả", "Giá heo thấp; dịch bệnh; đòn bẩy; pha loãng"],
    ["HAG", "Chuối + heo (+ sầu riêng); giá heo/chuối; cơ cấu nợ", "Giá heo/chuối tốt; giảm nợ; dòng tiền cải thiện", "Giá nông sản yếu; đòn bẩy cao; pha loãng"]
  ],
  sources: [
    ["Giá đường – Trading Economics", "https://tradingeconomics.com/commodity/sugar", "Giá đường thế giới (#11), tham chiếu giá nội địa"],
    ["Giá ngô – Trading Economics", "https://tradingeconomics.com/commodity/corn", "Giá ngô thế giới (đầu vào thức ăn chăn nuôi)"],
    ["Global Dairy Trade", "https://www.globaldairytrade.info/", "Giá đấu giá sữa bột WMP/SMP toàn cầu"],
    ["Tổng cục Hải quan", "https://www.customs.gov.vn/", "Xuất khẩu sắn/tinh bột sắn, nhập khẩu ngô/đậu/sữa"],
    ["AgroMonitor", "https://agromonitor.vn/", "Dữ liệu & giá nông sản (đường, TĂCN, sắn) trong nước"],
    ["Bộ Nông nghiệp & Môi trường", "https://www.mard.gov.vn/", "Chính sách nông nghiệp, dịch bệnh chăn nuôi"],
    ["Chăn nuôi Việt Nam", "https://channuoivietnam.com/", "Giá heo hơi 3 miền, giá nguyên liệu TĂCN"],
    ["Vinamilk IR", "https://www.vinamilk.com.vn/", "IR: KQKD, thị phần, sản lượng sữa"]
  ]
};
