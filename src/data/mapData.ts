import { MapDestination } from '../types';

export const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: 'van-mieu-tran-bien',
    name: {
      vi: 'Văn Miếu Trấn Biên',
      en: 'Tran Bien Temple of Literature',
    },
    category: 'historical',
    coordinates: [10.9705, 106.8042],
    image: '/images/chua-quang-minh-thap.jpg',
    address: {
      vi: 'Phường Bửu Long, TP. Biên Hòa',
      en: 'Buu Long Ward, Bien Hoa City',
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
    coordinates: [10.9525, 106.8180],
    image: '/images/chua-quang-minh-tamquan.jpg',
    address: {
      vi: 'Phường Quang Vinh (sau sáp nhập hành chính), TP. Biên Hòa',
      en: 'Quang Vinh Ward, Bien Hoa City',
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
    coordinates: [10.9650, 106.7989],
    image: '/images/buulong-hoang-hon.jpg',
    address: {
      vi: 'Phường Bửu Long, TP. Biên Hòa',
      en: 'Buu Long Ward, Bien Hoa City',
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
    coordinates: [11.4239, 107.4293],
    image: '/images/cattien-cong-chinh.jpg',
    address: {
      vi: 'Huyện Tân Phú, Tỉnh Đồng Nai (giáp ranh đại ngàn Bù Gia Mập)',
      en: 'Tan Phu District, Dong Nai Province (bordering Bu Gia Map highland forests)',
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
    coordinates: [10.9231, 107.0125],
    image: '/images/giang-dien-thac.jpg',
    address: {
      vi: 'Xã Giang Điền, Huyện Trảng Bom',
      en: 'Giang Dien Commune, Trang Bom District',
    },
    distanceFromHcmc: '45 km (khoảng 1 giờ lái xe)',
    shortSummary: {
      vi: 'Dòng thác ba nhánh hùng vĩ đổ qua ghềnh đá bazan và cổng chào sinh thái rực rỡ.',
      en: 'Majestic three-tier waterfall cascading over basalt shelves with festive park grounds.',
    },
    landmarkRefId: 'thac-giang-dien',
  },
  {
    id: 'tho-cam-mnong',
    name: {
      vi: 'Không Gian Thổ Cẩm M’Nông (Di Sản Quốc Gia)',
      en: "M'Nong Brocade Weaving Cultural Space",
    },
    category: 'craft',
    coordinates: [11.3850, 107.3820],
    image: '/images/cattien-suong-mai.jpg',
    address: {
      vi: 'Vùng đệm rừng Cát Tiên & Huyện Tân Phú, Định Quán',
      en: 'Cat Tien Buffer Zone, Tan Phu & Dinh Quan Districts',
    },
    distanceFromHcmc: '140 km (khoảng 2 giờ 45 phút)',
    shortSummary: {
      vi: 'Di sản văn hóa phi vật thể quốc gia lưu giữ tri thức dệt sợi thảo mộc của người M’Nông.',
      en: "National Intangible Cultural Heritage preserving M'Nong botanical weaving wisdom.",
    },
  },
  {
    id: 'cu-lao-buoi-tan-trieu',
    name: {
      vi: 'Làng Bưởi Tân Triều & Rượu Bưởi',
      en: 'Tan Trieu Pomelo & Wine Islet',
    },
    category: 'cuisine',
    coordinates: [10.9850, 106.7820],
    image: '/images/buulong-cau-treo.jpg',
    address: {
      vi: 'Cù lao Tân Triều, Xã Tân Bình, Huyện Vĩnh Cửu',
      en: 'Tan Trieu Islet, Tan Binh Commune, Vinh Cuu District',
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
      vi: 'Thủ Phủ Cây Điều Đồng Nai (Hạt Điều Rang Muối)',
      en: 'Dong Nai Cashew Capital (Roasted Cashews)',
    },
    category: 'cuisine',
    coordinates: [11.1250, 107.1820],
    image: '/images/giang-dien-cong.jpg',
    address: {
      vi: 'Huyện Định Quán, Xuân Lộc & Thống Nhất',
      en: 'Dinh Quan, Xuan Loc & Thong Nhat Districts',
    },
    distanceFromHcmc: '75 km (khoảng 1 giờ 30 phút)',
    shortSummary: {
      vi: 'Vùng đất đỏ bazan bạt ngàn cây điều, nông sản vàng đạt chuẩn OCOP xuất khẩu toàn cầu.',
      en: 'Basalt plateau cashew orchards producing world-renowned crispy roasted salted cashews.',
    },
  },
];
