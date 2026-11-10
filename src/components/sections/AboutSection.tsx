import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, BookOpen, ShieldCheck, Heart, Award, MapPin, Globe, Sparkles, Navigation } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-heritage-ivory text-heritage-charcoal relative overflow-hidden">
      {/* Decorative background watermarks */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-heritage-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {/* 1. Slogan Banner: "OUR CULTURE, OUR FUTURE" */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-heritage-emerald-dark text-heritage-gold text-xs sm:text-sm font-bold uppercase tracking-widest border border-heritage-gold shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-heritage-gold" />
            <span>"OUR CULTURE, OUR FUTURE"</span>
            <span className="text-heritage-ivory/80 font-normal hidden sm:inline">
              — {t('Di sản của chúng ta, Tương lai của chúng ta', 'Our Heritage, Our Horizon')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-heritage-emerald-dark tracking-tight mb-4">
            {t('Đồng Nai: Vị Thế Bản Đồ & Bối Cảnh Hình Thành', 'Dong Nai: Geographic Position & Historical Genesis')}
          </h2>
          <p className="text-base text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            {t(
              'Từ mốc son xác lập chủ quyền năm 1698 thời Lễ Thành Hầu Nguyễn Hữu Cảnh đến vị thế trung tâm liên kết vùng kinh tế trọng điểm phía Nam sau sắp xếp, sáp nhập tinh gọn.',
              'From the historic sovereignty milestone of 1698 under Marshal Nguyen Huu Canh to its role as the pivotal economic gateway of Southern Vietnam following administrative consolidation.'
            )}
          </p>
        </div>

        {/* 2. Grid: Vị trí trên bản đồ Việt Nam (Sau Sát Nhập) & Bối Cảnh Lịch Sử */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Card A: Vị trí trên bản đồ Việt Nam & Địa giới sau sát nhập */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-stone-200 shadow-museum-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-heritage-gold-dark mb-2">
                <Globe className="w-4 h-4 text-heritage-emerald" />
                <span>{t('ĐỊA LÝ & ĐỊA GIỚI HÀNH CHÍNH MỚI', 'GEOGRAPHY & CONSOLIDATED ADMINISTRATIVE BOUNDARIES')}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-heritage-emerald-dark mb-3">
                {t('Vị Trí Chiến Lược Trên Bản Đồ Việt Nam', 'Strategic Hub on Vietnam’s Map')}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-light mb-4">
                {t(
                  'Đồng Nai nằm ở trung tâm vùng Đông Nam Bộ và Vùng kinh tế trọng điểm phía Nam. Tỉnh tiếp giáp 6 tỉnh thành: phía Tây giáp TP. Hồ Chí Minh và Bình Dương, phía Bắc giáp Bình Phước và Lâm Đồng, phía Đông giáp Bình Thuận, phía Nam giáp Bà Rịa - Vũng Tàu. Đây là cửa ngõ giao thương đường bộ, đường thủy, đường sắt huyết mạch kết nối Nam Bộ với Tây Nguyên và Duyên hải miền Trung.',
                  'Dong Nai occupies the heart of the Southeastern Key Economic Zone, bordering Ho Chi Minh City, Binh Duong, Binh Phuoc, Lam Dong, Binh Thuan, and Ba Ria - Vung Tau. It functions as the nation’s prime transit nexus connecting the South with the Central Highlands and South Central Coast.'
                )}
              </p>

              {/* Administrative Consolidation Highlights */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 mb-4">
                <span className="text-xs font-bold text-heritage-emerald-dark flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-heritage-ruby" />
                  {t('Sắp xếp, Sáp nhập Đơn vị Hành chính (Giai đoạn 2023 - 2025):', 'Administrative Realignment & Consolidation (2023 - 2025):')}
                </span>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {t(
                    'Thực hiện Nghị quyết của Ủy ban Thường vụ Quốc hội, tỉnh Đồng Nai và TP. Biên Hòa đã hoàn thành sáp nhập các phường trung tâm (như sáp nhập phường Hòa Bình, Thanh Bình, Quyết Thắng, Quang Vinh...) nhằm tinh gọn bộ máy, mở rộng không gian phát triển đô thị dịch vụ, du lịch văn hóa và công nghiệp hiện đại.',
                    'Under National Assembly resolutions, Dong Nai Province and Bien Hoa City successfully consolidated central urban wards to streamline governance and unlock expanded urban corridors for high-tech industry, services, and cultural tourism.'
                  )}
                </p>
              </div>

              {/* Mega-Infrastructure Hub */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="font-bold text-emerald-900 block">{t('Sân Bay Long Thành', 'Long Thanh Intl Airport')}</span>
                  <span className="text-[11px] text-emerald-700">{t('Đại dự án cảng hàng không quốc tế thế kỷ', 'Mega aviation transit gateway')}</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="font-bold text-amber-900 block">{t('Sông Đồng Nai', 'Dong Nai Riverway')}</span>
                  <span className="text-[11px] text-amber-700">{t('Huyết mạch phù sa và văn hóa nghìn đời', 'Historic alluvium mother river')}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-heritage-gold" />
                {t('Tọa độ: 10°30′03″B - 11°34′57″B', 'Coordinates: 10°30′N - 11°34′N')}
              </span>
              <span className="font-semibold text-heritage-emerald-dark">{t('Diện tích: ~5.907 km²', 'Area: ~5,907 km²')}</span>
            </div>
          </div>

          {/* Card B: Bối Cảnh Hình Thành Vùng Đất Hơn 325 Năm */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-heritage-emerald-dark text-heritage-ivory border border-heritage-gold/40 shadow-museum-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-heritage-gold mb-2">
                <BookOpen className="w-4 h-4 text-heritage-gold" />
                <span>{t('BỐI CẢNH LỊCH SỬ HÌNH THÀNH (1698 - 2026)', 'HISTORICAL GENESIS & FORMATION')}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-heritage-ivory mb-3">
                {t('Hơn 325 Năm Khai Mở Đàng Trong', 'Over 325 Years of Pioneering Heritage')}
              </h3>
              <p className="text-sm text-heritage-ivory/80 leading-relaxed font-light mb-4">
                {t(
                  'Vào mùa xuân năm Mậu Dần 1698, chúa Nguyễn Phúc Chu cử Thống suất Lễ Thành Hầu Nguyễn Hữu Cảnh vào kinh lược phương Nam, chính thức xác lập chủ quyền và lập ra phủ Gia Định. Vùng đất Đồng Nai được tổ chức thành huyện Phước Long với dinh Trấn Biên, đánh dấu cột mốc lịch sử đưa vùng đất trù phú phương Nam vào cương vực Đại Việt.',
                  'In the spring of 1698, Lord Nguyen Phuc Chu commissioned Marshal Nguyen Huu Canh on a southern royal expedition, formally asserting sovereignty and establishing Gia Dinh prefecture. Dong Nai was organized as Phuoc Long district with Tran Bien headquarters, permanently integrating this fertile southern realm into Dai Viet territory.'
                )}
              </p>

              {/* 3 Pillars of Genesis */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h5 className="text-xs font-bold text-heritage-gold">{t('Cái Nôi Nho Học & Văn Hiến', 'Cradle of Southern Scholarship')}</h5>
                    <p className="text-[11px] text-heritage-ivory/70 font-light">{t('Năm 1715, Văn Miếu Trấn Biên ra đời sớm nhất xứ Đàng Trong, phụng thờ Khổng Tử và tôn vinh đạo học.', 'Tran Bien Temple was built in 1715 as the first Confucian academy in the South.')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h5 className="text-xs font-bold text-heritage-gold">{t('Giao Thoa Đa Văn Hóa', 'Crossroads of Diverse Cultures')}</h5>
                    <p className="text-[11px] text-heritage-ivory/70 font-light">{t('Sự hòa quyện giữa văn hóa người Việt, người Hoa, người M’Nông, Chơro, Mạ cùng các nghề gốm men xanh đồng và dệt thổ cẩm di sản.', 'Harmonious coexistence of Viet, Chinese, M’Nong, Choro, and Ma ethnic communities.')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h5 className="text-xs font-bold text-heritage-gold">{t('Đất Lành Chim Đậu & Phù Sa Màu Mỡ', 'Fertile Alluvium & Abundant Harvests')}</h5>
                    <p className="text-[11px] text-heritage-ivory/70 font-light">{t('Đất đỏ bazan và sông Đồng Nai nuôi dưỡng những miệt vườn bưởi Tân Triều, thủ phủ điều và đại ngàn Cát Tiên.', 'Volcanic basalt earth nourishing Tan Trieu pomelo orchards and global cashew plantations.')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-heritage-gold">
              <span>{t('Biên Hòa - Đồng Nai 1698 - 2026', 'Bien Hoa - Dong Nai 1698 - 2026')}</span>
              <span className="font-semibold uppercase tracking-wider">{t('Địa Linh Nhân Kiệt', 'Sacred Realm')}</span>
            </div>
          </div>
        </div>

        {/* 3. Bộ sưu tập ảnh tư liệu di sản thực tế theo thứ tự */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-heritage-bronze block">
                {t('BỘ SƯU TẬP ẢNH TƯ LIỆU THỰC TẾ', 'ARCHIVAL PHOTOGRAPHIC EXHIBIT')}
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-heritage-emerald-dark">
                {t('Dấu Ấn Danh Thắng & Di Sản Đồng Nai', 'Imprints of Dong Nai Landmarks & Heritage')}
              </h4>
            </div>
            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              15 {t('Tác phẩm ảnh', 'Photographs')}
            </span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: '/images/cattien-cong-chinh.jpg', title: { vi: 'Cổng VQG Cát Tiên', en: 'Cat Tien National Park Gate' } },
              { src: '/images/cattien-cay-tung.jpg', title: { vi: 'Cây Tung cổ thụ rễ bạnh vè', en: 'Giant Tung Tree Buttress' } },
              { src: '/images/cattien-bo-tot.jpg', title: { vi: 'Bầy bò tót hoang dã Cát Tiên', en: 'Wild Gaur Herds' } },
              { src: '/images/cattien-dap-xe.jpg', title: { vi: 'Đạp xe xuyên rừng Cát Tiên', en: 'Rainforest Cycling' } },
              { src: '/images/cattien-ho-xanh.jpg', title: { vi: 'Vực nước xanh & xích đu rừng', en: 'Emerald River Pool' } },
              { src: '/images/cattien-suoi.jpg', title: { vi: 'Suối rừng nhiệt đới trong vắt', en: 'Crystal Forest Stream' } },
              { src: '/images/cattien-suong-mai.jpg', title: { vi: 'Sương mai trên suối Cát Tiên', en: 'Morning Stream Mist' } },
              { src: '/images/bu-gia-map-cong.jpg', title: { vi: 'Đại ngàn Bù Gia Mập giáp ranh', en: 'Bu Gia Map Woodland' } },
              { src: '/images/buulong-hoang-hon.jpg', title: { vi: 'Hoàng hôn hồ Long Ẩn Bửu Long', en: 'Long An Sunset Lake' } },
              { src: '/images/buulong-thuyen-thien-nga.jpg', title: { vi: 'Thuyền thiên nga KDL Bửu Long', en: 'Buu Long Swan Boats' } },
              { src: '/images/buulong-cau-treo.jpg', title: { vi: 'Cầu treo ngắm hồ sen Bửu Long', en: 'Buu Long Suspension Bridge' } },
              { src: '/images/chua-quang-minh-tamquan.jpg', title: { vi: 'Cổng Tam Quan Chùa Quang Minh', en: 'Quang Minh Pagoda Gate' } },
              { src: '/images/chua-quang-minh-thap.jpg', title: { vi: 'Bảo tháp Chùa Quang Minh', en: 'Quang Minh Pagoda Stupa' } },
              { src: '/images/giang-dien-cong.jpg', title: { vi: 'Cổng KDL Sinh Thái Giang Điền', en: 'Giang Dien Eco Gateway' } },
              { src: '/images/giang-dien-thac.jpg', title: { vi: 'Thác Giang Điền tuôn trào', en: 'Giang Dien Waterfall Cascades' } },
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-stone-300 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 bg-stone-900"
              >
                <img
                  src={img.src}
                  alt={img.title.vi}
                  className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] text-heritage-gold font-mono block">#{idx + 1}</span>
                  <span className="text-[11px] font-semibold text-white line-clamp-1">
                    {language === 'vi' ? img.title.vi : img.title.en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
