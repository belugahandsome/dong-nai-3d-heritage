import { CraftVillage, CuisineItem } from '../types';

export const CRAFTS_DATA: CraftVillage[] = [
  {
    id: 'gom-bien-hoa',
    name: {
      vi: 'Gốm Mỹ Nghệ Biên Hòa',
      en: 'Bien Hoa Artistic Ceramics & Pottery',
    },
    subtitle: {
      vi: 'Dòng men xanh đồng trổ bông lừng danh vang bóng hơn ba thế kỷ',
      en: 'The legendary "Vert de Bien Hoa" copper jade glaze renowned across continents for over three centuries',
    },
    location: {
      vi: 'Dọc hữu ngạn sông Đồng Nai (Phường Bửu Long, Tân Vạn, Hóa An, TP. Biên Hòa)',
      en: 'Along the banks of Dong Nai River (Buu Long, Tan Van, Hoa An Wards, Bien Hoa City)',
    },
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
    ],
    age: 'Hơn 300 năm hình thành và phát triển',
    description: {
      vi: 'Gốm Biên Hòa là sự giao thoa văn hóa độc đáo giữa kỹ thuật gốm truyền thống bản địa của người Việt, phong cách gốm Cây Mai của người Hoa và kỹ thuật tạo dáng, phối men phương Tây từ Trường Mỹ nghệ Thực hành Biên Hòa (thành lập 1903). Điểm đặc sắc nhất là men "Vert de Bien Hoa" (men xanh đồng trổ bông) được chế tác từ tro rơm, đá ong và oxit đồng, khi nung ở nhiệt độ cao sẽ cho ra sắc xanh ngọc bích lấp lánh như men ngọc cổ.',
      en: 'Bien Hoa pottery represents a unique cultural synthesis between ancient Vietnamese craftsmanship, Chinese Cay Mai ceramic tradition, and French fine arts techniques introduced by the Bien Hoa School of Applied Arts (founded in 1903). Its signature hallmark is the celebrated "Vert de Bien Hoa" glaze—a copper-tinted celadon formulation using rice husk ash, local laterite, and copper oxide that vitrifies into an iridescent jade-emerald hue.',
    },
    processSteps: [
      {
        step: 1,
        title: { vi: 'Chọn & Xử Lý Đất Sét', en: 'Clay Sourcing & Refining' },
        desc: {
          vi: 'Khai thác đất sét dẻo mịn từ phù sa sông Đồng Nai, ủ lắng và lọc kỹ để loại bỏ tạp chất.',
          en: 'Extracting fine plastic clay from Dong Nai river silt, aged and filtered meticulously for elasticity.',
        },
      },
      {
        step: 2,
        title: { vi: 'Chuốt Gốm & Khắc Nét', en: 'Wheel Throwing & Incising' },
        desc: {
          vi: 'Nghệ nhân dùng bàn xoay tạo hình thủ công hoặc đúc khuôn chamotte, sau đó khắc chìm họa tiết rồng phượng, hoa sen tinh xảo.',
          en: 'Artisans shape pieces on potter wheels or chamotte molds, followed by hand-incising intricate dragons, phoenixes, and lotus motifs.',
        },
      },
      {
        step: 3,
        title: { vi: 'Chấm Men Đa Sắc', en: 'Polychrome Glazing' },
        desc: {
          vi: 'Dùng bút lông chấm men xanh đồng, men đá đỏ và men thủy tinh theo từng ô khắc chìm để tạo độ tương phản.',
          en: 'Applying copper-green, red laterite, and glass glazes within incised contours creating brilliant contrast.',
        },
      },
      {
        step: 4,
        title: { vi: 'Nung Lò Củi Truyền Thống', en: 'High-Temperature Firing' },
        desc: {
          vi: 'Nung trong các lò bầu, lò rồng với nhiệt độ trên 1.200°C liên tục suốt 48 giờ để men trổ hoa văn kỳ ảo.',
          en: 'Firing in traditional dragon wood-fired kilns above 1,200°C for 48 hours to reveal crystalline glaze blossoms.',
        },
      },
    ],
    culturalValue: {
      vi: 'Từng đoạt huy chương vàng danh giá tại các kỳ triển lãm thế giới ở Paris (1925, 1932), sản phẩm gốm Biên Hòa đã vượt ra khỏi biên giới quốc gia, trở thành cổ vật quý giá trong nhiều viện bảo tàng trên thế giới.',
      en: 'Awarded gold medals at the prestigious Paris International Exhibitions (1925, 1932), Bien Hoa pottery transcended borders to become prized artifacts featured in premier museums worldwide.',
    },
    artisanQuote: {
      text: {
        vi: 'Men xanh đồng của gốm Biên Hòa mang cả hồn đất phù sa và giọt mồ hôi của người thợ qua bao đời gắn bó với dòng sông.',
        en: 'The copper-green glaze of Bien Hoa carries the soul of river alluvium and generations of artisan dedication along the Dong Nai River.',
      },
      author: 'Nghệ nhân Nhân dân Hoàng Ngọc Trảng',
    },
  },
  {
    id: 'lang-buoi-tan-trieu',
    name: {
      vi: 'Làng Bưởi Cổ Truyền Tân Triều',
      en: 'Tan Trieu Ancient Pomelo Village',
    },
    subtitle: {
      vi: 'Cù lao bưởi trĩu quả được phù sa sông Đồng Nai nghìn năm bồi đắp',
      en: 'An emerald island orchard nourished by fertile millennial alluvium of the Dong Nai River',
    },
    location: {
      vi: 'Xã Tân Bình, Huyện Vĩnh Cửu, Tỉnh Đồng Nai (Cù lao Tân Triều)',
      en: 'Tan Binh Commune, Vinh Cuu District, Dong Nai Province (Tan Trieu Islet)',
    },
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1200&q=80',
    ],
    age: 'Hình thành từ năm 1869 (hơn 150 năm lịch sử)',
    description: {
      vi: 'Cù lao Tân Triều được dòng sông Đồng Nai bao bọc như một ốc đảo trù phú. Cây bưởi được du nhập về làng từ năm 1869 bởi một linh mục người Pháp trồng tại khuôn viên nhà thờ Tân Triều. Nhờ nguồn đất phù sa màu mỡ và khí hậu ôn hòa, bưởi Tân Triều phát triển rực rỡ với các giống trứ danh: bưởi đường lá cam mọng nước, bưởi ổi giòn ngọt, bưởi thanh trà thanh mát. Không chỉ bán quả tươi, người dân nơi đây còn sáng tạo nên nghề ủ rượu bưởi thủ công đựng trong bình gốm độc đáo.',
      en: 'Surrounded by the serpentine Dong Nai River, Tan Trieu Islet is an agrarian paradise. Pomelo cultivation was initiated in 1869 when trees were planted at Tan Trieu church grounds. Nurtured by mineral-rich river silt, Tan Trieu gave rise to treasured heirloom cultivars: sweet Orange-leaf pomelo, crisp Guava pomelo, and fragrant Green-flesh varieties. Beyond fresh fruit, local families ferment artisanal pomelo wine aged gracefully in ceramic urns.',
    },
    processSteps: [
      {
        step: 1,
        title: { vi: 'Chăm Sóc Hữu Cơ', en: 'Alluvial Organic Nurturing' },
        desc: {
          vi: 'Bón bùn phù sa sông Đồng Nai hàng năm và nuôi kiến vàng để diệt trừ sâu bệnh tự nhiên.',
          en: 'Replenishing orchards with mineral river dredge mud annually and employing weaver ants for eco-friendly pest control.',
        },
      },
      {
        step: 2,
        title: { vi: 'Thu Hoạch Đúng Độ Chín', en: 'Selective Harvesting' },
        desc: {
          vi: 'Hái quả bằng tay lúc sương sớm tan, đảm bảo múi bưởi căng mọng và vỏ ngoài tinh dầu thơm nồng.',
          en: 'Hand-picking at optimal ripeness as morning mist clears, ensuring plump translucent vesicles and aromatic peel oils.',
        },
      },
      {
        step: 3,
        title: { vi: 'Nghề Ủ Rượu Bưởi', en: 'Artisanal Fermentation' },
        desc: {
          vi: 'Tách lấy múi bưởi chín, phối men tự nhiên và ủ trong vò gốm Biên Hòa suốt 6 đến 12 tháng.',
          en: 'Selecting prime pomelo segments, blending with natural yeast, and aging in Bien Hoa ceramic urns for 6 to 12 months.',
        },
      },
    ],
    culturalValue: {
      vi: 'Thương hiệu Bưởi Tân Triều đã được cấp chỉ dẫn địa lý quốc gia, trở thành niềm tự hào văn hóa ẩm thực và điểm hẹn du lịch sinh thái nông nghiệp bậc nhất của tỉnh Đồng Nai.',
      en: 'Granted National Protected Geographical Indication, Tan Trieu Pomelo stands as a hallmark of Southern Vietnamese agrotourism and cultural gastronomy.',
    },
  },
  {
    id: 'det-tho-cam-cho-ro',
    name: {
      vi: 'Dệt Thổ Cẩm & Đan Lát Chơro – Mạ',
      en: 'Choro & Ma Indigenous Weaving Crafts',
    },
    subtitle: {
      vi: 'Sợi chỉ hoa văn cất giữ truyền thuyết đại ngàn Chiến khu Đ',
      en: 'Woven geometric tapestries preserving the ancient myths of War Zone D jungle',
    },
    location: {
      vi: 'Xã Phú Lý, Huyện Vĩnh Cửu & Huyện Định Quán, Tỉnh Đồng Nai',
      en: 'Phu Ly Commune, Vinh Cuu District & Dinh Quan District, Dong Nai',
    },
    image: 'https://images.unsplash.com/photo-1606744888344-498238f01037?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606744888344-498238f01037?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    ],
    age: 'Di sản phi vật thể truyền đời hàng trăm năm',
    description: {
      vi: 'Người Chơro và người Mạ là những cư dân bản địa lâu đời sinh sống tại vùng rừng thiêng Đồng Nai. Phụ nữ dân tộc dệt thổ cẩm bằng khung dệt tay truyền thống, sử dụng sợi bông rừng nhuộm màu tự nhiên từ vỏ cây, rễ củ và lá rừng. Mỗi tấm thổ cẩm và chiếc gùi đan bằng mây tre là một tác phẩm nghệ thuật kể lại câu chuyện về thần rừng, tiếng chim chiing-choong và lễ hội Sayangva tạ ơn lúa mới.',
      en: 'The indigenous Choro and Ma peoples are the ancient native inhabitants of Dong Nai’s legendary woodlands. Women weave textiles on backstrap handlooms, dying organic cotton threads with natural forest pigments extracted from bark, roots, and indigo leaves. Each blanket, skirt, and woven rattan back-basket echoes legends of the forest spirit and joyful Sayangva harvest rituals.',
    },
    processSteps: [
      {
        step: 1,
        title: { vi: 'Nhuộm Màu Tự Nhiên', en: 'Botanical Dyeing' },
        desc: {
          vi: 'Nấu nước lá chàm cho màu xanh thẫm, vỏ cây bàng cho màu đen, củ nghệ cho sắc vàng óng.',
          en: 'Extracting deep blues from indigo leaves, rich blacks from forest bark, and vibrant yellows from turmeric.',
        },
      },
      {
        step: 2,
        title: { vi: 'Dệt Khung Lưng Truyền Thống', en: 'Backstrap Weaving' },
        desc: {
          vi: 'Luồn từng thoi chỉ tạo hoa văn hình thoi, răng cưa, chim muông và dòng suối biểu trưng cho thiên nhiên.',
          en: 'Interlacing weft threads across backstrap looms to construct geometric diamonds, birds, and rushing water motifs.',
        },
      },
    ],
    culturalValue: {
      vi: 'Bảo tồn bản sắc văn hóa phi vật thể của các cộng đồng thiểu số miền Đông Nam Bộ, được tôn vinh trong các không gian bảo tàng văn hóa dân tộc Đồng Nai.',
      en: 'Preserves the intangible heritage of Southeast Vietnam’s indigenous ethnic groups, prominently celebrated in provincial ethnographic exhibits.',
    },
  },
];

export const CUISINE_DATA: CuisineItem[] = [
  {
    id: 'goi-buoi-tan-trieu',
    name: {
      vi: 'Gỏi Bưởi Tân Triều',
      en: 'Tan Trieu Pomelo & River Prawn Salad',
    },
    tagline: {
      vi: 'Món khai vị trứ danh kết tinh vị ngọt lành phù sa sông Đồng Nai',
      en: 'The iconic appetizer capturing the crisp citrus freshness of Dong Nai River silt',
    },
    region: {
      vi: 'Cù lao Tân Triều, Huyện Vĩnh Cửu',
      en: 'Tan Trieu Islet, Vinh Cuu District',
    },
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    ingredients: {
      vi: ['Tép bưởi đường lá cam Tân Triều', 'Tôm càng sông Đồng Nai', 'Thịt ba rọi luộc thái mỏng', 'Rau răm, mè rang, đậu phộng', 'Nước mắm chua ngọt pha tỏi ớt', 'Bánh tráng mè nướng giòn rụm'],
      en: ['Tan Trieu orange-leaf pomelo vesicles', 'Fresh Dong Nai river prawns', 'Thinly sliced braised pork belly', 'Vietnamese coriander, toasted peanuts', 'Garlic-chili lime dressing', 'Toasted sesame rice crackers'],
    },
    description: {
      vi: 'Gỏi bưởi Tân Triều chinh phục thực khách bởi sự cân bằng hương vị hoàn hảo: múi bưởi mọng nước giòn sần sật có vị ngọt dịu thanh tao, hòa quyện với vị ngọt đậm đà của tôm sông Đồng Nai luộc đỏ au, chút béo ngậy của thịt heo, vị thơm nồng của rau răm và bùi bùi của đậu phộng rang. Ăn kèm miếng bánh tráng mè nướng giòn tan mang lại trải nghiệm ẩm thực khó quên.',
      en: 'Tan Trieu Pomelo Salad enchants gourmets with its pristine harmony of flavors: plump, jewel-like pomelo vesicles that burst with refreshing sweetness, paired with succulent fresh river prawns, tender pork belly, aromatic herbs, and roasted peanuts. Scooped upon golden crispy sesame crackers, it delivers an unforgettable taste of Southern riverine cuisine.',
    },
    tasteProfile: {
      vi: 'Chua thanh tao, ngọt dịu tự nhiên, giòn mát, thơm lừng hương vỏ bưởi và vừng rang.',
      en: 'Crisp and refreshing with delicate sweet-tart notes, fragrant citrus essence, and nutty crunch.',
    },
    culturalSignificance: {
      vi: 'Món ăn đại diện cho nghệ thuật biến nông sản miệt vườn thành kiệt tác ẩm thực cung đình Nam Bộ, thường xuất hiện trong các yến tiệc tiếp đón quan khách quốc tế.',
      en: 'A culinary testament transforming orchard harvests into high gastronomic art, featured prominently in official state banquets.',
    },
  },
  {
    id: 'xoi-chien-phong-bien-hoa',
    name: {
      vi: 'Xôi Chiên Phồng Biên Hòa',
      en: 'Bien Hoa Fried Puffed Sticky Rice',
    },
    tagline: {
      vi: 'Tuyệt kỹ tạo hình xôi tròn phồng vàng ruộm nức tiếng ba miền',
      en: 'The culinary spectacle of golden puffed glutinous spheres perfected in Bien Hoa',
    },
    region: {
      vi: 'Thành phố Biên Hòa',
      en: 'Bien Hoa City',
    },
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    ingredients: {
      vi: ['Gạo nếp nương dẻo thơm', 'Đậu xanh cà vỏ tán mịn', 'Đường cát trắng, dầu ăn chất lượng cao', 'Ăn kèm gà nướng đất sét hoặc bồ câu quay'],
      en: ['Fragrant sticky rice', 'Steamed mashed mung beans', 'Pure cane sugar, high-grade oil', 'Served with clay-baked organic chicken or roasted squab'],
    },
    description: {
      vi: 'Xôi chiên phồng là đỉnh cao của kỹ thuật chế biến món nếp Việt Nam do các đầu bếp Biên Hòa sáng tạo nên từ những năm 1950. Từ một khối xôi nếp giã nhuyễn cùng đậu xanh và đường, qua đôi bàn tay khéo léo lăn đảo đều trên chảo dầu sôi, miếng xôi kỳ diệu phồng to dần thành hình cầu rỗng ruột căng tròn như trái bóng, vỏ ngoài vàng ruộm giòn tan nhưng bên trong vẫn giữ được lớp nếp dẻo quánh ngọt ngào.',
      en: 'Bien Hoa Fried Puffed Sticky Rice is a pinnacle of Vietnamese culinary craftsmanship born in the 1950s. Starting from a compacted blend of glutinous rice, sweet mung bean, and sugar, master cooks rhythmically press and rotate the dough in a hot wok. Like magic, the dough inflates into a golden hollow sphere—yielding a featherlight, crispy shell surrounding a melt-in-the-mouth chewy sweet lining.',
    },
    tasteProfile: {
      vi: 'Giòn rụm bên ngoài, dẻo thơm ngậy bên trong, vị ngọt bùi dịu nhẹ quyến rũ.',
      en: 'Crisp and paper-thin exterior, softly chewy and aromatic interior with comforting sweetness.',
    },
    culturalSignificance: {
      vi: 'Món ăn từng được vinh danh trong Kỷ lục Ẩm thực Việt Nam và Kỷ lục Châu Á, là niềm tự hào biểu tượng của nghệ thuật ẩm thực Đồng Nai.',
      en: 'Inducted into Vietnam and Asian Culinary Records, it represents an iconic symbol of Dong Nai gastronomic mastery.',
    },
  },
  {
    id: 'goi-ca-bien-hoa',
    name: {
      vi: 'Gỏi Cá Biên Hòa (Cù Lao Phố)',
      en: 'Bien Hoa River Fish Salad (Pho Islet)',
    },
    tagline: {
      vi: 'Món ngon sông nước với bản hòa ca của hơn 20 loại rau rừng quý',
      en: 'A riverine delicacy celebrated with a symphony of over 20 wild forest herbs',
    },
    region: {
      vi: 'Làng gỏi cá Tân Mai & Cù lao Phố, TP. Biên Hòa',
      en: 'Tan Mai & Pho Islet fish village, Bien Hoa City',
    },
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    ingredients: {
      vi: ['Cá chép hoặc cá trắm cỏ sông Đồng Nai tươi sống', 'Thính gạo rang thơm lừng', 'Nước sốt chấm gan cá nấu ấm nóng bí truyền', 'Hơn 20 loại rau: đinh lăng, lá cóc, lá sung, ngải cứu, mơ lông, vọng cách...'],
      en: ['Live Dong Nai river carp or grass carp fillets', 'Fragrant roasted golden rice powder (thinh)', 'Simmered warm spiced fish liver dipping sauce', 'Over 20 wild medicinal herbs: polyscias, wild fig, mugwort, sour starfruit'],
    },
    description: {
      vi: 'Nằm bên bờ sông Đồng Nai lộng gió, làng gỏi cá Biên Hòa có tuổi đời gần trăm năm. Cá tươi vừa đánh bắt được lạng phi lê thật mỏng, thấm khô rồi trộn đều với thính gạo vàng óng thơm phức. Điểm linh hồn của món ăn nằm ở nồi nước sốt chấm sền sệt nấu từ gan cá, trứng cá, sả, ớt và riềng thơm nức mũi. Thực khách cuốn cá cùng cả một "rừng thảo mộc" tươi non rồi chấm ngập sốt nóng.',
      en: 'Nestled along the sweeping banks of Dong Nai River, Bien Hoa’s fish salad village spans nearly a century. Freshly harvested river fish are carved into gossamer slices, patted dry, and tossed in fragrant roasted rice powder. The soul is the warm dipping broth simmered from fish liver, roe, galangal, lemongrass, and chili. Diners wrap the fish inside a rich bouquet of wild herbs and dip into the simmering sauce.',
    },
    tasteProfile: {
      vi: 'Thịt cá ngọt tươi không tanh, bùi bùi thính gạo, sốt chấm cay béo đậm đà kết hợp đủ vị chát cay nồng của rau rừng.',
      en: 'Pristinely sweet fish with zero gaminess, nutty roasted rice aroma, creamy spicy dipping sauce, and vibrant herbal bitterness.',
    },
    culturalSignificance: {
      vi: 'Được Tổ chức Kỷ lục Việt Nam xếp hạng vào Top 100 món ăn đặc sản Việt Nam, thể hiện lối sống chan hòa với thiên nhiên của người dân ven sông Đồng Nai.',
      en: 'Ranked in Vietnam’s Top 100 Specialty Dishes, showcasing the sustainable riverine lifestyle of local waterways.',
    },
  },
  {
    id: 'sau-rieng-long-khanh',
    name: {
      vi: 'Sầu Riêng & Chôm Chôm Long Khánh',
      en: 'Long Khanh Durian & Rambutan Haven',
    },
    tagline: {
      vi: 'Hương vị ngút ngàn từ thủ phủ trái cây đất đỏ bazan miền Đông',
      en: 'Exquisite volcanic richness from the fruit kingdom of red basalt soils',
    },
    region: {
      vi: 'Thành phố Long Khánh & Huyện Xuân Lộc',
      en: 'Long Khanh City & Xuan Loc District',
    },
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80',
    ingredients: {
      vi: ['Sầu riêng Ri6 & Chín Hóa chín cây tự nhiên', 'Chôm chôm nhãn giòn ngọt tróc hạt', 'Măng cụt ruột trắng như hoa sữa'],
      en: ['Tree-ripened Ri6 & Chin Hoa heirloom durian', 'Crisp sweet Java & Logan-flesh rambutan', 'Milky white sweet-tangy mangosteens'],
    },
    description: {
      vi: 'Long Khánh được thiên nhiên ưu đãi tầng đất đỏ bazan sâu màu mỡ hình thành từ núi lửa cổ xưa, giúp cây trái tại đây có độ ngọt đậm và mùi thơm nồng nàn khác biệt. Sầu riêng Long Khánh cơm vàng hạt lép, béo ngậy như kem bơ hạt dẻ, kết hợp cùng những chùm chôm chôm nhãn đỏ rực giòn sần sật tạo nên mùa lễ hội trái cây thu hút hàng trăm nghìn lượt du khách mỗi độ hè về.',
      en: 'Long Khanh is gifted with deep volcanic red basalt earth, giving its fruits an incomparable sweetness and intoxicating aroma. Long Khanh durians feature golden flesh, tiny seeds, and an intensely buttery, custard-like texture. Paired with succulent clusters of sweet rambutan, they anchor Dong Nai’s lively annual fruit festivals.',
    },
    tasteProfile: {
      vi: 'Béo ngậy như bơ sữa, ngọt lịm tan chảy trên đầu lưỡi, ngào ngạt hương thơm nhiệt đới.',
      en: 'Decadently creamy, intensely buttery, melting luxuriously with enchanting tropical perfume.',
    },
    culturalSignificance: {
      vi: 'Là trái cây chỉ dẫn địa lý tiêu biểu, biểu trưng cho sự trù phú và hào phóng của thiên nhiên dành tặng cho mảnh đất và con người Đồng Nai.',
      en: 'A premier geographical indication product exemplifying the fertile abundance and generous hospitality of Dong Nai.',
    },
  },
  {
    id: 'lau-kho-qua-rung-cat-tien',
    name: {
      vi: 'Lẩu Lá Khổ Qua Rừng Cát Tiên',
      en: 'Cat Tien Wild Bitter Melon Leaf Hotpot',
    },
    tagline: {
      vi: 'Món quà thanh nhiệt bổ dưỡng từ thảm thực vật đại ngàn',
      en: 'A therapeutic medicinal delicacy bestowed by the deep biosphere forest',
    },
    region: {
      vi: 'Huyện Tân Phú & Vườn Quốc gia Cát Tiên',
      en: 'Tan Phu District & Cat Tien Biosphere',
    },
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    ingredients: {
      vi: ['Đọt và lá khổ qua rừng tươi hái trong ngày', 'Cá lóc đồng hoặc cá thát lát quết dai', 'Nước dùng hầm từ xương cá sông ngọt thanh', 'Ớt hiểm rừng, tiêu sọ cay ấm'],
      en: ['Freshly foraged wild bitter melon tender leaves', 'Freshwater snakehead fish or bouncy featherback fish paste', 'Slow-simmered river fish bone broth', 'Forest wild chilies, cracked white pepper'],
    },
    description: {
      vi: 'Khổ qua rừng Cát Tiên mọc hoang dã dưới tán rừng nhiệt đới, lá nhỏ và vị đắng đậm đà hơn khổ qua thường nhưng để lại hậu ngọt sâu thẳm trong cuống họng. Nồi lẩu sôi sùng sục trên bếp lửa, thả những đọt lá xanh mướt cùng từng viên cá thát lát dai giòn vào nước dùng ngọt lịm từ cá sông. Đây không chỉ là món ăn ngon mà còn là bài thuốc quý giải nhiệt, thanh lọc cơ thể sau ngày dài trekking xuyên rừng.',
      en: 'Wild bitter melon thrives under Cat Tien’s jungle canopy. Its delicate young leaves offer a spirited herbal bitterness that quickly transforms into an exquisite lingering sweet aftertaste. Plunged briefly into a bubbling broth enriched with wild fish quenelles, it serves as both culinary celebration and restorative remedy after trekking through the wilderness.',
    },
    tasteProfile: {
      vi: 'Đắng dịu đầu lưỡi, hậu vị ngọt thanh mát kéo dài, thịt cá dai ngọt đậm đà.',
      en: 'Invigorating initial herbal bitterness yielding to a sublime cooling sweet finish with savory broth.',
    },
    culturalSignificance: {
      vi: 'Minh chứng cho tri thức ẩm thực dân gian trong việc sử dụng thảo mộc rừng tự nhiên làm thuốc bổ và món ngon của đồng bào bản địa.',
      en: 'Highlights the indigenous ecological wisdom of transforming wild forest botanicals into healing gastronomy.',
    },
  },
];
