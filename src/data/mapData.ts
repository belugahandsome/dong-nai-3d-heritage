import { MapDestination } from '../types';

export const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: 'van-mieu-tran-bien',
    name: {
      vi: 'Văn Miếu Trấn Biên',
      en: 'Tran Bien Temple of Literature',
    },
    category: 'historical',
    coordinates: [10.9644, 106.8013],
    image: '/images/van-mieu-tran-bien.jpg',
    address: {
      vi: 'Tổ 31, Khu phố 2, Phường Bửu Long, TP. Biên Hòa, Tỉnh Đồng Nai',
      en: 'Quarter 2, Buu Long Ward, Bien Hoa City, Dong Nai Province',
    },
    distanceFromHcmc: '32 km (khoảng 45 phút lái xe)',
    shortSummary: {
      vi: 'Quốc Tử Giám phương Nam thành lập năm 1715, phụng thờ Khổng Tử và danh nhân hiền triết.',
      en: 'The first Confucian Temple in the South, established 1715 honoring scholars and sages.',
    },
    landmarkRefId: 'van-mieu-tran-bien',
  },
  {
    id: 'thanh-co-bien-hoa',
    name: {
      vi: 'Thành Cổ Biên Hòa',
      en: 'Bien Hoa Ancient Citadel',
    },
    category: 'historical',
    coordinates: [10.9492, 106.8161],
    image: '/images/thanh-co-bien-hoa.jpg',
    address: {
      vi: '129 Đường Phan Chu Trinh, Phường Quang Vinh, TP. Biên Hòa, Tỉnh Đồng Nai',
      en: '129 Phan Chu Trinh St, Quang Vinh Ward, Bien Hoa City',
    },
    distanceFromHcmc: '30 km (khoảng 40 phút lái xe)',
    shortSummary: {
      vi: 'Thành lũy quân sự đá ong cổ nhất Nam Bộ thời Nguyễn còn sót lại với kiến trúc Vauban.',
      en: 'The oldest surviving Nguyen Dynasty laterite military fortress in the South.',
    },
    landmarkRefId: 'thanh-co-bien-hoa',
  },
  {
    id: 'khu-du-lich-buu-long',
    name: {
      vi: 'Khu Du Lịch Bửu Long',
      en: 'Buu Long Scenic Area',
    },
    category: 'natural',
    coordinates: [10.9630, 106.7944],
    image: '/images/buulong-hoang-hon.jpg',
    address: {
      vi: 'Đường Huỳnh Văn Nghệ, Khu phố 4, Phường Bửu Long, TP. Biên Hòa, Tỉnh Đồng Nai',
      en: 'Huynh Van Nghe St, Quarter 4, Buu Long Ward, Bien Hoa City',
    },
    distanceFromHcmc: '31 km (khoảng 45 phút)',
    shortSummary: {
      vi: '"Vịnh Hạ Long của miền Nam" với hồ Long Ẩn, thuyền thiên nga và cầu phao hoàng hôn.',
      en: '"Ha Long Bay of the South" featuring Long An Lake, swan pedal boats and sunset pontoon bridge.',
    },
    landmarkRefId: 'khu-du-lich-buu-long',
  },
  {
    id: 'vuon-quoc-gia-cat-tien',
    name: {
      vi: 'Vườn Quốc Gia Cát Tiên',
      en: 'Cat Tien National Park',
    },
    category: 'natural',
    coordinates: [11.4247, 107.4286],
    image: '/images/cattien-cong-chinh.jpg',
    address: {
      vi: 'Bến phà & Trung tâm du khách Nam Cát Tiên, Huyện Tân Phú, Tỉnh Đồng Nai',
      en: 'Ferry Station & Visitor Center, Nam Cat Tien, Tan Phu District, Dong Nai',
    },
    distanceFromHcmc: '150 km (khoảng 3 giờ lái xe)',
    shortSummary: {
      vi: 'Khu Dự trữ Sinh quyển Thế giới UNESCO, cây Tung đại thụ rễ bạnh vè và bầy bò tót quý hiếm.',
      en: 'UNESCO Biosphere Reserve, giant Tung trees, pristine cycling trails and wild gaur herds.',
    },
    landmarkRefId: 'vuon-quoc-gia-cat-tien',
  },
  {
    id: 'thac-giang-dien',
    name: {
      vi: 'Thác Giang Điền',
      en: 'Giang Dien Waterfall',
    },
    category: 'natural',
    coordinates: [10.9153, 106.9936],
    image: '/images/giang-dien-thac.jpg',
    address: {
      vi: '104/4 Ấp Hòa Bình, Xã Giang Điền, Huyện Trảng Bom, Tỉnh Đồng Nai',
      en: '104/4 Hoa Binh Hamlet, Giang Dien Commune, Trang Bom District, Dong Nai',
    },
    distanceFromHcmc: '45 km (khoảng 1 giờ lái xe)',
    shortSummary: {
      vi: 'Dòng thác ba nhánh huyền thoại Thác Chàng - Thác Nàng tung bọt trắng xóa giữa thiên nhiên xanh ngát.',
      en: 'Legendary three-tiered cascading waterfall tumbling over volcanic rock shelves.',
    },
    landmarkRefId: 'thac-giang-dien',
  },
  {
    id: 'ho-tri-an',
    name: {
      vi: 'Hồ Trị An & Rừng Chiến Khu Đ',
      en: 'Tri An Lake & War Zone D Nature',
    },
    category: 'natural',
    coordinates: [11.1053, 106.9844],
    image: '/images/cattien-ho-xanh.jpg',
    address: {
      vi: 'Thị trấn Vĩnh An, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
      en: 'Vinh An Town, Vinh Cuu District, Dong Nai Province',
    },
    distanceFromHcmc: '65 km (khoảng 1 giờ 30 phút)',
    shortSummary: {
      vi: 'Hồ nước nhân tạo mênh mông, thiên đường cắm trại dã ngoại ngắm hoàng hôn giữa lòng ốc đảo.',
      en: 'Vast reservoir lake offering idyllic island camping, cycling, and stunning sunset reflections.',
    },
  },
  {
    id: 'tho-cam-mnong',
    name: {
      vi: 'Nghề Dệt Thổ Cẩm M’Nông (Di Sản Quốc Gia)',
      en: "M'Nong Brocade Weaving Cultural Space",
    },
    category: 'craft',
    coordinates: [11.3644, 107.3608],
    image: '/images/tho-cam-mnong.jpg',
    address: {
      vi: 'Làng thổ cẩm dân tộc Tà Lài, Xã Tà Lài, Huyện Tân Phú, Tỉnh Đồng Nai',
      en: 'Ta Lai Ethnic Weaving Village, Ta Lai Commune, Tan Phu District, Dong Nai',
    },
    distanceFromHcmc: '140 km (khoảng 2 giờ 45 phút)',
    shortSummary: {
      vi: 'Di sản văn hóa phi vật thể quốc gia lưu giữ tri thức dệt sợi thảo mộc của người M’Nông.',
      en: "National Intangible Cultural Heritage preserving M'Nong botanical weaving wisdom.",
    },
  },
  {
    id: 'lang-gom-bien-hoa',
    name: {
      vi: 'Làng Gốm Tân Vạn - Bửu Long',
      en: 'Bien Hoa Pottery Heritage Village',
    },
    category: 'craft',
    coordinates: [10.9250, 106.8360],
    image: '/images/gom-bien-hoa.jpg',
    address: {
      vi: 'Đường Bùi Hữu Nghĩa, Phường Tân Vạn, TP. Biên Hòa, Tỉnh Đồng Nai',
      en: 'Bui Huu Nghia St, Tan Van Ward, Bien Hoa City',
    },
    distanceFromHcmc: '28 km (khoảng 35 phút)',
    shortSummary: {
      vi: 'Làng nghề gốm hơn 300 năm tuổi nức tiếng với men xanh đồng Vert de Bien Hoa.',
      en: '300-year-old ceramic heritage celebrated for its Vert de Bien Hoa copper glaze.',
    },
  },
  {
    id: 'cu-lao-buoi-tan-trieu',
    name: {
      vi: 'Làng Bưởi Tân Triều & Rượu Bưởi',
      en: 'Tan Trieu Pomelo & Wine Islet',
    },
    category: 'cuisine',
    coordinates: [10.9928, 106.7794],
    image: '/images/buoi-tan-trieu.jpg',
    address: {
      vi: '109/7 Hương Lộ 9, Ấp Vĩnh Hiệp, Xã Tân Bình, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
      en: '109/7 Huong Lo 9, Tan Binh Commune, Vinh Cuu District, Dong Nai',
    },
    distanceFromHcmc: '35 km (khoảng 50 phút)',
    shortSummary: {
      vi: 'Ốc đảo bưởi trù phú phù sa sông Đồng Nai, đặc sản gỏi bưởi tôm sông & rượu bưởi vò gốm.',
      en: 'Lush riverine pomelo orchards, legendary pomelo shrimp salads & ceramic wine.',
    },
  },
  {
    id: 'vung-dieu-dong-nai',
    name: {
      vi: 'Thủ Phủ Hạt Điều Đồng Nai',
      en: 'Dong Nai Cashew Capital (Roasted Cashews)',
    },
    category: 'cuisine',
    coordinates: [11.1903, 107.3482],
    image: '/images/hat-dieu-dong-nai.jpg',
    address: {
      vi: 'Quốc Lộ 20, Thị trấn Định Quán, Huyện Định Quán, Tỉnh Đồng Nai',
      en: 'National Route 20, Dinh Quan Town, Dinh Quan District, Dong Nai',
    },
    distanceFromHcmc: '75 km (khoảng 1 giờ 30 phút)',
    shortSummary: {
      vi: 'Vùng đất đỏ bazan bạt ngàn cây điều, nông sản vàng đạt chuẩn OCOP xuất khẩu toàn cầu.',
      en: 'Basalt plateau cashew orchards producing world-renowned crispy roasted salted cashews.',
    },
  },
  {
    id: 'xoi-chien-phong-bien-hoa',
    name: {
      vi: 'Xôi Chiên Phồng Biên Hòa',
      en: 'Bien Hoa Fried Puffed Sticky Rice',
    },
    category: 'cuisine',
    coordinates: [10.9452, 106.8228],
    image: '/images/xoi-chien-phong.jpg',
    address: {
      vi: 'Đường Hà Huy Giáp, Phường Quyết Thắng & Thống Nhất, TP. Biên Hòa, Tỉnh Đồng Nai',
      en: 'Ha Huy Giap St, Quyet Thang Ward, Bien Hoa City, Dong Nai Province',
    },
    distanceFromHcmc: '30 km (khoảng 40 phút)',
    shortSummary: {
      vi: 'Đặc sản ẩm thực đạt Kỷ lục Châu Á với quả cầu xôi phồng vàng giòn rụm bên ngoài dẻo ngọt bên trong.',
      en: 'Asian Record culinary masterpiece with golden puffed sticky rice globes.',
    },
  },
];
