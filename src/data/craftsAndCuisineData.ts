import { CraftVillage, CuisineItem } from '../types';

export const CRAFTS_DATA: CraftVillage[] = [
  {
    id: 'det-tho-cam-mnong',
    name: {
      vi: 'Nghề Dệt Thổ Cẩm Người M’Nông (Di Sản Quốc Gia)',
      en: "M'Nong Traditional Brocade Weaving (National Intangible Heritage)",
    },
    subtitle: {
      vi: 'Di sản văn hóa phi vật thể quốc gia lưu giữ linh hồn và hoa văn đại ngàn',
      en: 'National Intangible Cultural Heritage preserving the sacred motifs and soul of the primeval highlands',
    },
    location: {
      vi: 'Đồng Nai & Vùng phụ cận đại ngàn Cát Tiên',
      en: 'Dong Nai & Neighboring Highland Woodlands of Cat Tien',
    },
    image: '/images/tho-cam-mnong.jpg',
    gallery: [
      '/images/tho-cam-mnong.jpg',
      '/images/tho-cam-mnong-2.jpg',
    ],
    age: 'Di sản văn hóa phi vật thể quốc gia',
    description: {
      vi: 'Nghề dệt thổ cẩm truyền thống của người M’Nông là Di sản văn hóa phi vật thể quốc gia được Bộ Văn hóa, Thể thao và Du lịch chính thức công nhận. Trải qua bao thế hệ cư trú ven rừng thiêng Đồng Nai, người phụ nữ M’Nông sử dụng khung dệt lưng thủ công để tạo nên những tấm vải dệt kỳ công. Từng sợi chỉ bông được nhuộm hoàn toàn bằng nguyên liệu tự nhiên từ vỏ cây rừng, củ nghệ, lá chàm và đất son. Hoa văn thổ cẩm M’Nông là một cuốn biên niên sử sinh động khắc họa thần rừng, chim muông, dòng suối và những nương rẫy trù phú.',
      en: "The traditional brocade weaving craft of the M'Nong people has been formally designated as a National Intangible Cultural Heritage by Vietnam's Ministry of Culture, Sports and Tourism. Across generations residing along Dong Nai's ancient forests, M'Nong women employ backstrap handlooms to produce intricate textiles. Organic cotton threads are tinted purely with botanical forest dyes extracted from bark, turmeric, and indigo. M'Nong woven motifs serve as a living chronicle echoing forest spirits, wildlife, sacred streams, and fertile terraced harvests.",
    },
    processSteps: [
      {
        step: 1,
        title: { vi: 'Khai Thác Thảo Mộc Nhuộm Màu', en: 'Botanical Color Extraction' },
        desc: {
          vi: 'Thu hái vỏ cây tràm, lá chàm rừng, củ nghệ và bùn suối để nấu nước nhuộm màu thủ công không hóa chất.',
          en: 'Gathering indigenous forest bark, wild indigo, turmeric, and mineral clay for natural, chemical-free dyeing.',
        },
      },
      {
        step: 2,
        title: { vi: 'Kéo Sợi & Lên Khung Dệt Lưng', en: 'Spinning & Backstrap Loom Mounting' },
        desc: {
          vi: 'Bông rừng sau khi bật tơi được kéo thành sợi đều tăm tắp, mắc vào khung dệt lưng tựa người để căng chỉ.',
          en: 'Carded organic cotton is spun into uniform yarns, then mounted onto traditional body-tensioned backstrap looms.',
        },
      },
      {
        step: 3,
        title: { vi: 'Tạo Tác Hoa Văn Thần Rừng', en: 'Weaving Sacred Forest Motifs' },
        desc: {
          vi: 'Dùng que tre luồn sợi tạo hoa văn hình thoi, mắt chim, sừng trâu và ngọn lửa biểu trưng cho vũ trụ M’Nông.',
          en: 'Interlacing bamboo picks to create diamond geometric patterns, bird eyes, water currents, and sacred celestial flames.',
        },
      },
      {
        step: 4,
        title: { vi: 'Hoàn Thiện Trang Phục Lễ Hội', en: 'Ceremonial Garment Finishing' },
        desc: {
          vi: 'Khâu ghép thành áo váy, khố, túi gùi và khăn choàng dùng trong các nghi lễ cúng thần rừng và tết lúa mới.',
          en: 'Stitching brocade panels into ceremonial tunics, loincloths, and shawls for harvest thanksgiving rituals.',
        },
      },
    ],
    culturalValue: {
      vi: 'Thổ cẩm M’Nông không chỉ là trang phục thường ngày mà là biểu tượng văn hóa linh thiêng gắn kết cộng đồng dân tộc thiểu số tại Đồng Nai, minh chứng cho bàn tay tài hoa và tri thức dân gian hàng trăm năm được nhà nước tôn vinh là Di sản Văn hóa phi vật thể Quốc gia.',
      en: "M'Nong brocade transcends attire to become a spiritual symbol linking indigenous communities in Dong Nai, standing as living proof of centuries of indigenous craftsmanship officially honored as a National Intangible Cultural Heritage.",
    },
    artisanQuote: {
      text: {
        vi: 'Khung dệt gắn chặt vào lưng người đàn bà M’Nông từ lúc con gái đến khi mắt mờ tóc bạc. Tiếng thoi gõ nhịp là nhịp thở của rừng, hoa văn dệt ra là linh hồn của tổ tiên để lại.',
        en: 'The loom rests against an M’Nong woman’s spine from youth until her hair silvers. The rhythm of the batten is the forest’s breath, and each motif weaves the eternal spirit of our ancestors.',
      },
      author: 'Nghệ nhân Thổ cẩm M’Nông - Vùng đệm Cát Tiên Đồng Nai',
    },
  },
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
      vi: 'Phường Bửu Long, Tân Vạn, Hóa An (dọc hữu ngạn sông Đồng Nai)',
      en: 'Buu Long, Tan Van, Hoa An Wards (along the banks of Dong Nai River)',
    },
    image: '/images/gom-bien-hoa.jpg',
    gallery: [
      '/images/gom-bien-hoa.jpg',
      '/images/gom-bien-hoa-2.jpg',
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
      en: 'Winning prestigious gold medals at the Universal Exhibitions in Paris (1925, 1932), Bien Hoa ceramics transcend borders and are treasured in international museum collections worldwide.',
    },
    artisanQuote: {
      text: {
        vi: 'Đất sông Đồng Nai nuôi sống bao thế hệ thợ gốm. Lửa lò rực đỏ thâu đêm suốt sáng, thổi hồn men đồng xanh biếc vào từng thớ gốm trường tồn với thời gian.',
        en: 'The clay of Dong Nai River has nurtured generations of ceramic masters. The kiln flames burn night and day, infusing the immortal jade copper glaze into eternal pottery.',
      },
      author: 'Nghệ nhân ưu tú gốm mỹ nghệ Biên Hòa',
    },
  },
  {
    id: 'lang-buoi-tan-trieu',
    name: {
      vi: 'Làng Bưởi & Rượu Bưởi Tân Triều',
      en: 'Tan Trieu Pomelo Village & Artisanal Wine',
    },
    subtitle: {
      vi: 'Ốc đảo phù sa ngọt ngào nức tiếng phương Nam hơn 150 năm tuổi',
      en: 'The century-old fertile pomelo island blessed by the alluvium of the Dong Nai River',
    },
    location: {
      vi: 'Cù lao Tân Triều, Xã Tân Bình, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
      en: 'Tan Trieu Islet, Tan Binh Commune, Vinh Cuu District, Dong Nai',
    },
    image: '/images/buoi-tan-trieu.jpg',
    gallery: [
      '/images/buoi-tan-trieu.jpg',
      '/images/goi-buoi-salad.jpg',
    ],
    age: 'Từ năm 1869 (hơn 150 năm lịch sử)',
    description: {
      vi: 'Cù lao Tân Triều được dòng sông Đồng Nai bao bọc như một ốc đảo trù phú. Cây bưởi được du nhập về làng từ năm 1869 và phát triển rực rỡ nhờ nguồn đất phù sa màu mỡ. Bưởi Tân Triều trứ danh với bưởi đường lá cam mọng nước, bưởi ổi giòn ngọt, bưởi da xanh thanh mát. Người dân nơi đây còn sáng tạo nên nghề ủ rượu bưởi thủ công đựng trong bình gốm Biên Hòa độc đáo.',
      en: 'Surrounded by the serpentine Dong Nai River, Tan Trieu Islet is an agrarian paradise. Pomelo cultivation was initiated in 1869. Nurtured by mineral-rich river silt, Tan Trieu gave rise to treasured heirloom cultivars: sweet Orange-leaf pomelo, crisp Guava pomelo, and fragrant Green-flesh varieties, paired with artisanal ceramic-aged pomelo wine.',
    },
    processSteps: [
      {
        step: 1,
        title: { vi: 'Chăm Sóc Hữu Cơ Phù Sa', en: 'Alluvial Organic Nurturing' },
        desc: {
          vi: 'Bồi đắp bùn phù sa sông Đồng Nai hàng năm và nuôi kiến vàng để diệt trừ sâu bệnh tự nhiên.',
          en: 'Replenishing orchards with river dredge mud annually and employing weaver ants for eco-friendly pest control.',
        },
      },
      {
        step: 2,
        title: { vi: 'Nghề Ủ Rượu Bưởi Vò Gốm', en: 'Ceramic Urn Wine Aging' },
        desc: {
          vi: 'Tách lấy múi bưởi chín, phối men tự nhiên và ủ trong vò gốm Biên Hòa suốt 6 đến 12 tháng.',
          en: 'Selecting prime pomelo segments, blending with natural yeast, and aging in Bien Hoa ceramic urns.',
        },
      },
    ],
    culturalValue: {
      vi: 'Thương hiệu Bưởi Tân Triều đã được cấp chỉ dẫn địa lý quốc gia, trở thành niềm tự hào văn hóa ẩm thực và điểm hẹn du lịch sinh thái nông nghiệp bậc nhất của tỉnh Đồng Nai.',
      en: 'Granted National Protected Geographical Indication, Tan Trieu Pomelo stands as a hallmark of Southern Vietnamese agrotourism and cultural gastronomy.',
    },
  },
];

export const CUISINE_DATA: CuisineItem[] = [
  {
    id: 'buoi-tan-trieu-va-ruou-buoi',
    name: {
      vi: 'Bưởi Tân Triều (Gỏi Bưởi & Rượu Bưởi)',
      en: 'Tan Trieu Pomelo, Salad & Artisanal Wine',
    },
    tagline: {
      vi: 'Món quà ngọt thanh kết tinh từ dòng phù sa màu mỡ sông Đồng Nai',
      en: 'The iconic citrus delicacy capturing the crisp natural sweetness of Dong Nai river silt',
    },
    region: {
      vi: 'Cù lao Tân Triều, Huyện Vĩnh Cửu',
      en: 'Tan Trieu Islet, Vinh Cuu District',
    },
    image: '/images/goi-buoi-salad.jpg',
    ingredients: {
      vi: ['Tép bưởi đường lá cam Tân Triều mọng nước', 'Tôm càng sông Đồng Nai tươi sống', 'Thịt ba rọi luộc thái mỏng', 'Rượu bưởi lên men tự nhiên vò gốm', 'Rau răm, đậu phộng rang, bánh tráng nướng'],
      en: ['Tan Trieu orange-leaf pomelo vesicles', 'Fresh Dong Nai river prawns', 'Braised pork belly slices', 'Natural pomelo wine fermented in ceramic gourds', 'Vietnamese coriander, roasted peanuts, sesame rice crackers'],
    },
    description: {
      vi: 'Bưởi Tân Triều là danh phẩm nông nghiệp số 1 của Đồng Nai. Trái bưởi đường lá cam múi mọng nước, tép vàng ươm, vị ngọt thanh mát không hạt. Nổi tiếng nhất là món Gỏi bưởi tôm sông - sự hòa quyện hoàn hảo giữa tép bưởi giòn sần sật, tôm sông ngọt đậm đà, đậu phộng bùi bùi và bánh tráng mè nướng giòn rụm. Đi kèm là Rượu bưởi Tân Triều ủ men truyền thống trong bình gốm Biên Hòa hương thơm nồng nàn dịu êm.',
      en: 'Tan Trieu Pomelo is Dong Nai’s premier agricultural specialty. The prized orange-leaf pomelo features plump, seedless amber segments bursting with crisp sweetness. Its quintessential expression is the Gourmet Pomelo River Shrimp Salad—a harmonious pairing of refreshing pomelo pulp, sweet river prawns, and roasted peanuts served with crispy sesame crackers, accompanied by fragrant aged pomelo wine.',
    },
    tasteProfile: {
      vi: 'Chua thanh dịu nhẹ, ngọt hậu tự nhiên, giòn sần sật và cay the nhẹ nơi đầu lưỡi.',
      en: 'Subtly tangy, naturally sweet finish, satisfyingly crisp texture with aromatic citrus notes.',
    },
    culturalSignificance: {
      vi: 'Đặc sản biểu trưng cho lòng hiếu khách của người Đồng Nai, đạt chuẩn Chỉ dẫn địa lý quốc gia và phục vụ trong các tiệc ngoại giao quốc tế.',
      en: 'Represents the generous hospitality of Dong Nai people, protected under national geographic certification and served at international state banquets.',
    },
  },
  {
    id: 'hat-dieu-dong-nai',
    name: {
      vi: 'Hạt Điều Đồng Nai (Rang Muối Vỏ Lụa)',
      en: 'Dong Nai Salt-Roasted Cashew Nuts',
    },
    tagline: {
      vi: 'Thủ phủ hạt điều Việt Nam với hương vị bùi béo ngậy nức tiếng toàn cầu',
      en: 'The cashew capital of Vietnam renowned worldwide for unmatched rich and buttery kernels',
    },
    region: {
      vi: 'Định Quán, Xuân Lộc, Long Khánh',
      en: 'Dinh Quan, Xuan Loc, Long Khanh',
    },
    image: '/images/hat-dieu-dong-nai.jpg',
    ingredients: {
      vi: ['Hạt điều loại 1 chọn lọc nguyên hạt', 'Muối biển tự nhiên tinh khiết', 'Vỏ lụa tự nhiên giữ trọn hương vị'],
      en: ['Grade-A premium whole cashews', 'Pure natural sea salt', 'Natural inner skin preserving aroma'],
    },
    description: {
      vi: 'Đồng Nai là một trong những thủ phủ trồng và chế biến hạt điều lớn nhất Việt Nam. Được nuôi dưỡng trên tầng đất đỏ bazan màu mỡ và nắng ấm chan hòa, hạt điều Đồng Nai có kích thước hạt tròn đều, mẩy chắc, vị bùi béo ngậy đậm đà vượt trội. Món Hạt điều rang muối còn nguyên vỏ lụa rang củi thủ công là món quà đặc sản nức tiếng cả nước và xuất khẩu đến hơn 30 quốc gia trên thế giới, đạt chuẩn OCOP chất lượng cao.',
      en: 'Dong Nai stands as a foundational capital of cashew cultivation in Vietnam. Thriving on fertile volcanic red soils and abundant tropical sunshine, Dong Nai cashews boast plump kernels, unmatched natural crunch, and an intensely creamy nutty richness. Roasted with artisanal wood fires over sea salt, it represents a celebrated specialty exported globally to over 30 countries.',
    },
    tasteProfile: {
      vi: 'Giòn rụm tan trong miệng, bùi béo ngậy tự nhiên, hậu vị mằn mặn ngọt sâu lắng.',
      en: 'Irresistibly crispy, luxuriously buttery and nutty with a gentle savory-sweet finish.',
    },
    culturalSignificance: {
      vi: 'Minh chứng cho sức sống bền bỉ của người nông dân Đồng Nai biến vùng đất đỏ gồ ghề thành những đồn điền điều trù phú mang tầm quốc tế.',
      en: 'Reflects the industrious pioneer spirit of Dong Nai farmers transforming basalt highlands into internationally acclaimed agricultural treasures.',
    },
  },
  {
    id: 'xoi-chien-phong-bien-hoa',
    name: {
      vi: 'Xôi Chiên Phồng Biên Hòa',
      en: 'Bien Hoa Fried Puffed Sticky Rice',
    },
    tagline: {
      vi: 'Tuyệt kỹ tạo hình xôi tròn phồng vàng ruộm nức tiếng ba miền (Kỷ lục Châu Á)',
      en: 'The culinary spectacle of golden puffed glutinous spheres perfected in Bien Hoa (Asian Record)',
    },
    region: {
      vi: 'Thành phố Biên Hòa',
      en: 'Bien Hoa City',
    },
    image: '/images/xoi-chien-phong.jpg',
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
];
