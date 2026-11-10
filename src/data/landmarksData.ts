import { Landmark } from '../types';

export const LANDMARKS: Landmark[] = [
  {
    id: 'van-mieu-tran-bien',
    slug: 'van-mieu-tran-bien',
    name: {
      vi: 'Văn Miếu Trấn Biên',
      en: 'Tran Bien Temple of Literature',
    },
    subtitle: {
      vi: 'Biểu tượng ngời sáng của truyền thống hiếu học và văn hiến phương Nam',
      en: 'The radiant symbol of scholarly tradition and cultural heritage of Southern Vietnam',
    },
    category: 'historical',
    location: {
      vi: 'Phường Bửu Long, TP. Biên Hòa, Tỉnh Đồng Nai (trung tâm kết nối văn hóa đô thị)',
      en: 'Buu Long Ward, Bien Hoa City, Dong Nai Province',
    },
    established: '1715 (thời Chúa Nguyễn Phúc Chu)',
    coordinates: [10.9705, 106.8042],
    heroImage: '/images/chua-quang-minh-thap.jpg',
    gallery: [
      '/images/chua-quang-minh-thap.jpg',
      '/images/chua-quang-minh-tamquan.jpg',
      '/images/buulong-hoang-hon.jpg',
      '/images/buulong-cau-treo.jpg',
    ],
    shortDesc: {
      vi: 'Văn miếu Trấn Biên là văn miếu đầu tiên được xây dựng tại xứ Đàng Trong vào năm 1715, tiêu biểu cho truyền thống hiếu học, tôn sư trọng đạo và tinh thần khai hoang mở cõi hơn 325 năm của Đồng Nai.',
      en: 'Tran Bien Temple of Literature was the first Confucian temple founded in Southern Vietnam in 1715, embodying the veneration of scholarship, education, and pioneering spirit.',
    },
    fullDesc: {
      vi: 'Tọa lạc trên đồi cao thoai thoải thuộc phường Bửu Long, Văn Miếu Trấn Biên soi bóng xuống hồ nước trong xanh. Được xây dựng dưới thời chúa Nguyễn Phúc Chu (năm 1715), đây là nơi phụng thờ Khổng Tử cùng các danh nhân văn hóa, hiền triết Việt Nam như Chu Văn An, Nguyễn Trãi, Lê Quý Đôn, Võ Trường Toản và Lễ Thành Hầu Nguyễn Hữu Cảnh. Quần thể kết nối hài hòa cùng các kiến trúc Phật giáo tâm linh uy nghiêm như Chùa Quang Minh và Chùa Bửu Phong, được xếp hạng Di tích Lịch sử cấp Quốc gia năm 2016.',
      en: 'Perched upon a scenic hilltop in Buu Long Ward overlooking a tranquil lake, Tran Bien Temple of Literature was commissioned in 1715 by Lord Nguyen Phuc Chu. It venerates Confucius alongside towering Vietnamese scholars such as Chu Van An, Nguyen Trai, Le Quy Don, Vo Truong Toan, and Marshal Nguyen Huu Canh. It stands alongside sacred Buddhist architectures including Quang Minh Pagoda, designated as a National Historical Relic in 2016.',
    },
    historicalSignificance: {
      vi: 'Được mệnh danh là "Quốc Tử Giám của phương Nam", Văn miếu Trấn Biên ra đời sớm hơn cả Văn miếu Huế và là cột mốc khẳng định chủ quyền văn hóa dân tộc tại vùng đất phương Nam màu mỡ.',
      en: 'Known as the "Imperial Academy of the South", Tran Bien preceded even the Hue Temple of Literature, affirming Vietnamese cultural sovereignty and philosophical devotion in the southern realm.',
    },
    architectureOrEcosystem: {
      vi: 'Kiến trúc phỏng theo Quốc Tử Giám Hà Nội kết hợp nét phóng khoáng Nam Bộ: Cổng Tam Quan, Nhà bia, Khuê Văn Các, Đại Thành Môn, và Nhà bái đường uy nghiêm với mái ngói lưu ly xanh ngọc bích đặc trưng gốm Biên Hòa.',
      en: 'Architectural layout inspired by Hanoi Temple of Literature paired with Southern Vietnamese characteristics: Tam Quan Gate, Stele Pavilion, Khue Van Cac, Dai Thanh Gate, and Main Sanctuary adorned with emerald-glazed ceramic tiles unique to Bien Hoa pottery.',
    },
    timeline: [
      {
        year: '1715',
        event: {
          vi: 'Chúa Nguyễn Phúc Chu hạ lệnh xây dựng Văn miếu Trấn Biên tại thôn Tân Lại, huyện Phước Long.',
          en: 'Lord Nguyen Phuc Chu ordered the construction of Tran Bien Temple in Tan Lai village.',
        },
      },
      {
        year: '1794',
        event: {
          vi: 'Chúa Nguyễn Ánh cho trùng tu và mở rộng Văn miếu khang trang hơn.',
          en: 'Lord Nguyen Anh restored and expanded the temple grounds.',
        },
      },
      {
        year: '1998',
        event: {
          vi: 'Khởi công tái thiết toàn diện Văn miếu trên diện tích gần 15 hecta nhân kỷ niệm 300 năm Biên Hòa - Đồng Nai.',
          en: 'Comprehensive reconstruction began on 15 hectares marking the 300th anniversary of Bien Hoa.',
        },
      },
      {
        year: '2016',
        event: {
          vi: 'Bộ Văn hóa, Thể thao và Du lịch chính thức công nhận là Di tích Lịch sử cấp Quốc gia.',
          en: 'Officially classified as a National Historical Relic by the Ministry of Culture, Sports and Tourism.',
        },
      },
    ],
    visitorInfo: {
      openingHours: '07:00 – 17:30 (Mở cửa tất cả các ngày)',
      ticketPrice: {
        vi: 'Miễn phí tham quan',
        en: 'Free admission',
      },
      bestTimeToVisit: {
        vi: 'Sáng sớm hoặc chiều tà; đặc biệt vào dịp Tết Nguyên Đán và Ngày Thơ Việt Nam',
        en: 'Early morning or late afternoon; especially during Lunar New Year and Vietnam Poetry Day',
      },
    },
    modelType: 'van-mieu',
    hotspots: [
      {
        id: 'tam-quan',
        position: [0, 1.2, 3],
        title: {
          vi: 'Cổng Tam Quan',
          en: 'Tam Quan Triple Gate',
        },
        description: {
          vi: 'Cổng chính với 3 lối đi uy nghiêm lợp ngói âm dương xanh thẫm, tượng trưng cho Thiên - Địa - Nhân.',
          en: 'The grand three-arched entryway crowned with emerald-glazed tiles representing Heaven, Earth, and Humanity.',
        },
      },
      {
        id: 'khue-van-cac',
        position: [0, 2.5, 0.5],
        title: {
          vi: 'Khuê Văn Các',
          en: 'Khue Van Pavilion',
        },
        description: {
          vi: 'Lầu chuông sao Khuê tỏa sáng, nơi hội tụ linh khí văn chương và giao lưu thi phú tao nhã.',
          en: 'Pavilion of Literary Constellation, symbol of brilliance, literary gatherings, and poetic excellence.',
        },
      },
      {
        id: 'dai-thanh-dien',
        position: [0, 3.2, -2.5],
        title: {
          vi: 'Đại Thành Điện (Chính Điện)',
          en: 'Great Central Sanctuary',
        },
        description: {
          vi: 'Nơi tôn nghiêm nhất phụng thờ Chủ tịch Hồ Chí Minh, Khổng Tử, và các bậc tiền nhân có công khai phá Đàng Trong.',
          en: 'The sacred heart enshrining Confucius, national heroes, and southern pioneer scholars.',
        },
      },
    ],
    panoUrl: '/images/chua-quang-minh-tamquan.jpg',
  },
  {
    id: 'thanh-co-bien-hoa',
    slug: 'thanh-co-bien-hoa',
    name: {
      vi: 'Thành Cổ Biên Hòa',
      en: 'Bien Hoa Ancient Citadel',
    },
    subtitle: {
      vi: 'Thành lũy quân sự cổ nhất còn hiện diện trên đất phương Nam',
      en: 'The oldest surviving military bastion citadel in Southern Vietnam',
    },
    category: 'historical',
    location: {
      vi: 'Phường Quang Vinh (sau sắp xếp sáp nhập đơn vị hành chính), TP. Biên Hòa, Tỉnh Đồng Nai',
      en: 'Quang Vinh Ward, Bien Hoa City, Dong Nai Province',
    },
    established: '1790 (Thành Kèn) & 1834 (Minh Mạng xây bằng đá ong)',
    coordinates: [10.9525, 106.8180],
    heroImage: '/images/chua-quang-minh-tamquan.jpg',
    gallery: [
      '/images/chua-quang-minh-tamquan.jpg',
      '/images/chua-quang-minh-thap.jpg',
      '/images/buulong-hoang-hon.jpg',
    ],
    shortDesc: {
      vi: 'Thành cổ Biên Hòa (Thành Kèn) là công trình phòng thủ quân sự cổ kính duy nhất thời Nguyễn còn sót lại tại Nam Bộ, chứng tích oai hùng của lịch sử kháng chiến giữ nước qua nhiều thời kỳ.',
      en: 'Bien Hoa Ancient Citadel is the sole surviving Nguyen Dynasty military fortification in Southern Vietnam, a monumental testament to regional defense and heroic resistance history.',
    },
    fullDesc: {
      vi: 'Thành cổ Biên Hòa có nguồn gốc từ năm 1790 khi Nguyễn Ánh xây dựng thành đất. Đến năm 1834, vua Minh Mạng cho đại trùng tu kiên cố bằng đá ong và gạch thẻ theo đồ án kiến trúc quân sự Vauban phòng thủ với 4 cửa mở ra 4 hướng. Tòa thành từng chứng kiến những trận chiến ác liệt chống thực dân Pháp thế kỷ XIX, phong trào khởi nghĩa yêu nước của Trương Định, Nguyễn Tri Phương và là căn cứ quân sự quan trọng trong hai cuộc kháng chiến chống Pháp và chống Mỹ.',
      en: 'Colloquially known as "Thanh Ken" (Trumpet Citadel), it originated in 1790 as an earthen fort built by Nguyen Anh. In 1834, Emperor Minh Mang fortified it into a formidable Vauban-style citadel constructed from laterite stone and kiln brick with four cardinal gates. It bore witness to fierce 19th-century anti-colonial battles and stands as a National Historical Monument recognized in 2013.',
    },
    historicalSignificance: {
      vi: 'Là di tích thành lũy thời phong kiến duy nhất của Nam Bộ còn giữ được một phần diện tích và kiến trúc gốc bằng đá ong nguyên khối, minh chứng cho nghệ thuật phòng thủ quân sự của cha ông.',
      en: 'As the only remaining imperial-era fortress in the South preserving original monolithic laterite ramparts, it embodies ancient Vietnamese military architecture and resilience.',
    },
    architectureOrEcosystem: {
      vi: 'Thành hình bát giác mang âm hưởng Vauban kết hợp thành lũy truyền thống, tường dày đắp bằng đá ong đỏ Bửu Long xen lẫn gạch nung, có hào lũy sâu bao bọc và ụ súng thần công phòng thủ.',
      en: 'Octagonal Vauban-influenced layout built with durable Buu Long red laterite blocks and fired bricks, surrounded by protective moats, watch posts, and historical cannon platforms.',
    },
    timeline: [
      {
        year: '1790',
        event: {
          vi: 'Chúa Nguyễn Ánh cho đắp lũy đất phòng vệ quân sự, dân gian gọi là Thành Cựu.',
          en: 'Nguyen Anh erected the initial earthen defense ramparts, known as the Old Citadel.',
        },
      },
      {
        year: '1834',
        event: {
          vi: 'Vua Minh Mạng cho đại tu, xây dựng kiên cố bằng đá ong và gạch với chu vi gần 1.500m.',
          en: 'Emperor Minh Mang rebuilt the fortress with durable laterite with a perimeter of nearly 1,500m.',
        },
      },
      {
        year: '2013',
        event: {
          vi: 'Được xếp hạng Di tích Lịch sử cấp Quốc gia, khởi động các đề án trùng tu bảo tồn.',
          en: 'Classified as a National Historical Relic with comprehensive conservation initiatives.',
        },
      },
    ],
    visitorInfo: {
      openingHours: '07:30 – 17:00 (Thứ Hai – Chủ Nhật)',
      ticketPrice: {
        vi: 'Miễn phí tham quan',
        en: 'Free admission',
      },
      bestTimeToVisit: {
        vi: 'Các buổi sáng trong tuần, thích hợp cho người yêu nghiên cứu lịch sử và học sinh sinh viên',
        en: 'Weekday mornings, ideal for history enthusiasts and students',
      },
    },
    modelType: 'thanh-co',
    hotspots: [
      {
        id: 'tuong-da-ong',
        position: [-2.2, 1.2, 0],
        title: {
          vi: 'Tường thành đá ong cổ',
          en: 'Ancient Laterite Ramparts',
        },
        description: {
          vi: 'Những khối đá ong đỏ sẫm đặc trưng đất Biên Hòa kết dính bằng mật mía và vôi cát, bền bỉ qua gần 2 thế kỷ sương gió.',
          en: 'Centuries-old porous red laterite stone bonded with traditional lime-sugar mortar, resisting weather for nearly 200 years.',
        },
      },
      {
        id: 'u-phao-thu',
        position: [1.8, 1.5, 1.8],
        title: {
          vi: 'Ụ pháo thủ quân sự',
          en: 'Artillery Gun Emplacements',
        },
        description: {
          vi: 'Vị trí đặt các khẩu súng thần công bằng đồng hướng ra sông Đồng Nai để kiểm soát giao thông đường thủy chiến lược.',
          en: 'Emplacements holding historical bronze cannons aimed towards Dong Nai river to control maritime trade and defense.',
        },
      },
    ],
    panoUrl: '/images/chua-quang-minh-thap.jpg',
  },
  {
    id: 'khu-du-lich-buu-long',
    slug: 'khu-du-lich-buu-long',
    name: {
      vi: 'Khu Du Lịch Bửu Long',
      en: 'Buu Long Scenic Landscape',
    },
    subtitle: {
      vi: 'Tuyệt tác thiên nhiên được mệnh danh là "Vịnh Hạ Long của phương Nam"',
      en: 'A natural masterpiece praised as the "Ha Long Bay of Southern Vietnam"',
    },
    category: 'natural',
    location: {
      vi: 'Đường Huỳnh Văn Nghệ, Phường Bửu Long, TP. Biên Hòa, Tỉnh Đồng Nai',
      en: 'Huynh Van Nghe St., Buu Long Ward, Bien Hoa City, Dong Nai',
    },
    established: 'Di tích Danh thắng Quốc gia công nhận năm 1990',
    coordinates: [10.9650, 106.7989],
    heroImage: '/images/buulong-hoang-hon.jpg',
    gallery: [
      '/images/buulong-hoang-hon.jpg',
      '/images/buulong-thuyen-thien-nga.jpg',
      '/images/buulong-cau-treo.jpg',
      '/images/chua-quang-minh-tamquan.jpg',
    ],
    shortDesc: {
      vi: 'Bửu Long sở hữu bức tranh thủy mặc kỳ vĩ với hồ Long Ẩn trong veo, những mỏm đá vôi vươn thẳng giữa mặt nước, bến thuyền đạp vịt và cầu phao hoàng hôn rực rỡ.',
      en: 'Buu Long features an enchanting landscape with Long An Lake, majestic karst limestone towers emerging from clear emerald waters, and footbridges across romantic waters.',
    },
    fullDesc: {
      vi: 'Trải rộng trên diện tích 84 hecta quanh hai hồ nước kỳ vĩ là hồ Long Ẩn và hồ Long Vân, Khu du lịch Bửu Long được ví như "Vịnh Hạ Long thu nhỏ của miền Đông Nam Bộ". Nơi đây hòa quyện hài hòa giữa núi non điệp trùng, hồ nước mênh mông, thảm thực vật xanh mát và các công trình tâm linh linh thiêng như Chùa Cổ Bửu Phong (thế kỷ XVII), Chùa Quang Minh. Du khách đến đây có thể du thuyền đạp vịt trên hồ, dạo bước qua cầu phao tình yêu ngắm hoàng hôn rực rỡ, khám phá Bán đảo Long Sơn và chiêm ngưỡng toàn cảnh sông Đồng Nai thơ mộng.',
      en: 'Encompassing over 84 hectares around Long An and Long Van reflection lakes, Buu Long is celebrated as a miniature Ha Long Bay in the South. It harmoniously combines soaring limestone peaks, sparkling waters, lush forests, and sacred landmarks like 17th-century Buu Phong Pagoda and Quang Minh Pagoda. Visitors can paddle swan boats, cross sunset pontoon bridges, and admire panoramic vistas of the winding Dong Nai River.',
    },
    historicalSignificance: {
      vi: 'Vừa là thắng cảnh tự nhiên nổi tiếng được xếp hạng Di tích Danh thắng Quốc gia từ năm 1990, vừa gắn liền với di chỉ khảo cổ học Bình Đa và bề dày khai hoang lập nghiệp của cư dân Đồng Nai xưa.',
      en: 'Classified as a National Scenic Relic in 1990, it intertwines natural beauty with archaeological heritage dating back thousands of years to ancient Dong Nai settlers.',
    },
    architectureOrEcosystem: {
      vi: 'Địa hình karst đá vôi và đá hoa cương độc đáo nhô lên giữa lòng hồ nước ngọt sâu thẳm, bao bọc bởi hệ sinh thái bán ngập nước và những đồi cây cổ thụ xanh mát.',
      en: 'Distinctive granite and karst formations rising dramatically out of deep freshwater lakes, surrounded by semi-wetland ecosystems and ancient tropical shade trees.',
    },
    visitorInfo: {
      openingHours: '07:00 – 17:00 (Mở cửa quanh năm)',
      ticketPrice: {
        vi: 'Người lớn: 150.000 VNĐ | Trẻ em: 60.000 VNĐ (trọn gói trò chơi)',
        en: 'Adult: 150,000 VND | Child: 60,000 VND (all-inclusive package)',
      },
      bestTimeToVisit: {
        vi: 'Mùa khô từ tháng 11 đến tháng 4; thời điểm bình minh và hoàng hôn chụp ảnh hồ Long Ẩn đẹp nhất',
        en: 'Dry season from November to April; dawn and sunset offer the most picturesque lighting',
      },
    },
    modelType: 'buu-long',
    hotspots: [
      {
        id: 'ho-long-an',
        position: [0, 0.2, 0],
        title: {
          vi: 'Hồ Long Ẩn & Bến Thuyền Thiên Nga',
          en: 'Long An Lake & Swan Boats',
        },
        description: {
          vi: 'Mặt hồ phẳng lặng như gương rộng gần 20 hecta với các bến thuyền đạp vịt và cầu phao hoa đăng tuyệt đẹp.',
          en: 'Mirror-calm freshwater lake spanning 20 hectares with recreational paddle boats and pontoon bridges.',
        },
      },
      {
        id: 'nui-long-an',
        position: [-1.8, 2.2, -1],
        title: {
          vi: 'Vách Đá Núi Long Ẩn',
          en: 'Long An Karst Cliffs',
        },
        description: {
          vi: 'Khối đá granite sừng sững được tạc hình tự nhiên qua hàng triệu năm phong hóa địa chất.',
          en: 'Majestic rock pillars sculpted by nature over millions of years of geological evolution.',
        },
      },
    ],
    panoUrl: '/images/buulong-hoang-hon.jpg',
  },
  {
    id: 'vuon-quoc-gia-cat-tien',
    slug: 'vuon-quoc-gia-cat-tien',
    name: {
      vi: 'Vườn Quốc Gia Cát Tiên',
      en: 'Cat Tien National Park',
    },
    subtitle: {
      vi: 'Khu Dự trữ Sinh quyển Thế giới UNESCO - Vương quốc hoang dã của rừng mưa nhiệt đới',
      en: 'UNESCO World Biosphere Reserve - The wild tropical rainforest kingdom of Vietnam',
    },
    category: 'natural',
    location: {
      vi: 'Huyện Tân Phú & Vĩnh Cửu, Tỉnh Đồng Nai (tiếp giáp vùng sinh thái Bù Gia Mập & Nam Cát Tiên)',
      en: 'Tan Phu & Vinh Cuu Districts, Dong Nai Province (bordering Bu Gia Map ecological zone)',
    },
    established: 'UNESCO công nhận Khu Dự trữ Sinh quyển năm 2001 & Di tích Quốc gia Đặc biệt 2012',
    coordinates: [11.4239, 107.4293],
    heroImage: '/images/cattien-cong-chinh.jpg',
    gallery: [
      '/images/cattien-cong-chinh.jpg',
      '/images/cattien-cay-tung.jpg',
      '/images/cattien-bo-tot.jpg',
      '/images/cattien-dap-xe.jpg',
      '/images/cattien-ho-xanh.jpg',
      '/images/cattien-suoi.jpg',
      '/images/cattien-suong-mai.jpg',
      '/images/bu-gia-map-cong.jpg',
    ],
    shortDesc: {
      vi: 'Cát Tiên là lá phổi xanh khổng lồ của miền Nam, nơi bảo tồn bầy bò tót hoang dã, cây Tung cổ thụ nghìn năm tuổi, dòng suối trong vắt và tuyến đường đạp xe xuyên rừng kỳ thú.',
      en: 'Cat Tien is Southern Vietnam’s colossal green lung, conserving wild gaur herds, ancient Tung trees, crystal rainforest streams, and pristine cycling trails.',
    },
    fullDesc: {
      vi: 'Với diện tích hơn 71.000 hecta, Vườn quốc gia Cát Tiên là một trong những khu bảo tồn thiên nhiên quan trọng nhất thế giới. Nơi đây sở hữu hàng ngàn loài thực vật gỗ quý, cây Tung đại thụ với bộ rễ bạnh vè khổng lồ cao vút, cùng quần thể động vật hoang dã quý hiếm gồm bầy bò tót khổng lồ, voi châu Á, voọc chà vá chân đen, và cá sấu xiêm tại đầm lầy Bàu Sấu. Vùng đệm sinh thái tiếp giáp đại ngàn Bù Gia Mập tạo nên hành lang bảo tồn đa dạng sinh học vô giá.',
      en: 'Covering more than 71,000 hectares, Cat Tien National Park is among the foremost biosphere reserves globally. It shelters thousands of rare flora species including colossal giant Tung trees with mammoth buttress roots, wild gaur herds, Asian elephants, and Siamese crocodiles. Together with the bordering Bu Gia Map forests, it forms an invaluable ecological sanctuary.',
    },
    historicalSignificance: {
      vi: 'Không chỉ là di sản sinh học quốc tế, Cát Tiên còn lưu giữ di chỉ khảo cổ học Cát Tiên thuộc vương quốc cổ Phù Nam / Champa bí ẩn với những đền đài phế tích bằng gạch nung hàng nghìn năm tuổi.',
      en: 'Beyond its international biological heritage, Cat Tien preserves ancient archaeological relics of the mystery Funan/Champa civilizations dating back over a millennium.',
    },
    architectureOrEcosystem: {
      vi: 'Rừng mưa ẩm nhiệt đới đất thấp đặc trưng Đông Dương với 5 tầng tán cây, đầm lầy ngập nước theo mùa Ramsar Bàu Sấu, và các ghềnh thác đá bazan uốn lượn theo sông Đồng Nai.',
      en: 'Multi-tiered lowland tropical evergreen rainforest ecosystem, seasonal Ramsar wetlands at Bau Sau, and volcanic basalt rapids flanked by the upper Dong Nai River.',
    },
    visitorInfo: {
      openingHours: 'Mở cửa 24/7 (Cần đăng ký tại Trung tâm du khách)',
      ticketPrice: {
        vi: 'Vé vào cổng: 60.000 VNĐ | Thuê xe đạp khám phá: 30.000 VNĐ/giờ',
        en: 'Park Entrance: 60,000 VND | Bike Rental: 30,000 VND/hour',
      },
      bestTimeToVisit: {
        vi: 'Từ tháng 12 đến tháng 5 năm sau (Mùa khô ráo, đường mòn đạp xe thuận tiện và dễ gặp bầy bò tót ra đồng cỏ)',
        en: 'December to May (Dry season, ideal trails for cycling and highest chances to observe wild gaurs)',
      },
    },
    modelType: 'cat-tien',
    hotspots: [
      {
        id: 'cay-tung-co-thu',
        position: [-1, 2.5, -0.5],
        title: {
          vi: 'Cây Tung Đại Thụ Rễ Bạnh Vè',
          en: 'Giant Tung Tree Buttress Roots',
        },
        description: {
          vi: 'Kỳ quan thiên nhiên với bộ rễ bạnh vè khổng lồ cao hơn 4 mét, vươn dài hàng chục mét như những bức tường thành vững chãi.',
          en: 'Natural wonder featuring colossal buttress roots over 4m tall, sprawling like fortress ramparts across the forest floor.',
        },
      },
      {
        id: 'dan-bo-tot',
        position: [1.5, 0.4, 1.2],
        title: {
          vi: 'Quần Thể Bò Tót Hoang Dã',
          en: 'Wild Gaur Herds Sanctuary',
        },
        description: {
          vi: 'Mái nhà bình yên của hàng trăm cá thể bò tót quý hiếm được bảo tồn nghiêm ngặt trong môi trường hoang dã tự nhiên.',
          en: 'Safe natural habitat for hundreds of endangered wild gaurs thriving under strict conservation protection.',
        },
      },
    ],
    panoUrl: '/images/cattien-ho-xanh.jpg',
  },
  {
    id: 'thac-giang-dien',
    slug: 'thac-giang-dien',
    name: {
      vi: 'Thác Giang Điền',
      en: 'Giang Dien Waterfall',
    },
    subtitle: {
      vi: 'Bản tình ca thiên nhiên lãng mạn giữa miền cao nguyên đất đỏ Trảng Bom',
      en: 'A romantic natural symphony in the red basalt highlands of Trang Bom',
    },
    category: 'natural',
    location: {
      vi: 'Xã Giang Điền, Huyện Trảng Bom, Tỉnh Đồng Nai',
      en: 'Giang Dien Commune, Trang Bom District, Dong Nai Province',
    },
    established: 'Khai thác du lịch sinh thái từ năm 2006',
    coordinates: [10.9231, 107.0125],
    heroImage: '/images/giang-dien-thac.jpg',
    gallery: [
      '/images/giang-dien-thac.jpg',
      '/images/giang-dien-cong.jpg',
      '/images/cattien-suoi.jpg',
      '/images/buulong-cau-treo.jpg',
    ],
    shortDesc: {
      vi: 'Thác Giang Điền nổi bật với cổng chào rực rỡ, dòng thác ba nhánh hùng vĩ đổ qua những thềm đá bazan ghập ghềnh và thảm cây xanh mát quanh năm.',
      en: 'Giang Dien Waterfall is steeped in romantic folklore, showcasing the untamed beauty of cascading streams tumbling over tiered basalt shelves.',
    },
    fullDesc: {
      vi: 'Được tạo hóa ban tặng từ sự hợp dòng của con sông Buông hiền hòa, Khu du lịch sinh thái Thác Giang Điền bao gồm 3 dòng thác kỳ vĩ: Thác Chàng, Thác Nàng và dòng thác chính Giang Điền. Theo truyền thuyết dân gian của đồng bào Mạ và M’Nông, nơi đây là minh chứng cho tình yêu thủy chung son sắt của đôi trai gái nguyện cùng hòa mình vào dòng nước để muôn đời bên nhau. Với bãi cỏ xanh ngút ngàn, cổng chào lễ hội rực rỡ và bọt nước tung trắng xóa mát lạnh, đây là điểm dừng chân dã ngoại sinh thái số một Đồng Nai.',
      en: 'Gifted by nature where the gentle Buong River converges, Giang Dien Eco-Tourism Resort encompasses three cascading tiers: Chang Fall (The Boy), Nang Fall (The Girl), and the central Giang Dien cataract. Steeped in folklore of ethnic lovers, with festive gateways, stepping basalt terraces, and cooling mist sprays, it provides a revitalizing eco-tourism getaway.',
    },
    historicalSignificance: {
      vi: 'Là danh thắng sinh thái gắn liền với kho tàng văn hóa dân gian truyền khẩu của các dân tộc bản địa Đông Nam Bộ, thể hiện sự hòa hợp mật thiết giữa con người và thiên nhiên.',
      en: 'A natural scenic destination intertwined with ethnic oral folklore of the Southeastern region, exemplifying harmony between humanity and riverine landscapes.',
    },
    architectureOrEcosystem: {
      vi: 'Địa mạo thác nước trên nền đá bazan phong hóa nhiều tầng bậc, thảm thực vật ven sông phong phú với rừng tre nứa, cỏ lau và vườn hoa nhiệt đới quy mô lớn.',
      en: 'Tiered cascades flowing over weathered dark basalt terraces, lined by riverine bamboo groves, wild reeds, and landscaped botanical gardens.',
    },
    visitorInfo: {
      openingHours: '07:30 – 17:30 (Mở cửa tất cả các ngày trong tuần)',
      ticketPrice: {
        vi: 'Ngày thường: 80.000 VNĐ | Cuối tuần & Lễ: 120.000 VNĐ',
        en: 'Weekdays: 80,000 VND | Weekends & Holidays: 120,000 VND',
      },
      bestTimeToVisit: {
        vi: 'Tháng 10 đến tháng 4 (Nước trong xanh, thời tiết nắng ấm dịu dàng)',
        en: 'October to April (Crystal-clear waters and pleasant dry weather)',
      },
    },
    modelType: 'giang-dien',
    hotspots: [
      {
        id: 'thac-chang-nang',
        position: [0, 1.4, 0],
        title: {
          vi: 'Dòng Thác Chàng & Thác Nàng',
          en: 'Chang & Nang Twin Streams',
        },
        description: {
          vi: 'Hai nhánh thác song song chảy xiết qua các gộp đá bazan, tượng trưng cho tình yêu vĩnh cửu gắn bó.',
          en: 'Two parallel cascades flowing passionately over rocky terraces, symbolizing eternal love.',
        },
      },
      {
        id: 'cong-giang-dien',
        position: [-1.8, 1.8, 1.5],
        title: {
          vi: 'Cổng Chào Sinh Thái Giang Điền',
          en: 'Giang Dien Eco Gateway',
        },
        description: {
          vi: 'Cổng tam giác mái rợp cờ hoa truyền thống rực rỡ đón chào du khách muôn phương.',
          en: 'Festive wooden triangular gateway welcoming visitors from across Vietnam.',
        },
      },
    ],
    panoUrl: '/images/giang-dien-thac.jpg',
  },
];
