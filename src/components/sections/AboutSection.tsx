import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, BookOpen, ShieldCheck, Heart, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-heritage-ivory text-heritage-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-heritage-gold/50 shadow-museum-lg">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"
                alt="Dong Nai Landscape"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-emerald-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-heritage-gold font-bold block">
                  {t('ĐỊA LINH NHÂN KIỆT', 'SACRED LAND & NOBLE MINDS')}
                </span>
                <h3 className="text-xl font-serif font-bold mt-1">
                  {t('Hơn 325 Năm Trầm Tích Văn Hiến', 'Over 325 Years of Cultural Heritage')}
                </h3>
              </div>
            </div>

            {/* Floating Achievement Seal */}
            <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-heritage-emerald-dark text-heritage-ivory border border-heritage-gold shadow-2xl max-w-[200px] hidden sm:block">
              <Award className="w-6 h-6 text-heritage-gold mb-2" />
              <span className="text-xs font-serif font-bold block text-heritage-gold">
                {t('Di Sản Quốc Gia & Thế Giới', 'National & Global Heritage')}
              </span>
              <span className="text-[10px] text-heritage-ivory/70 leading-tight block mt-1">
                {t('Bảo tồn số hóa 3D cho thế hệ tương lai', 'Preserving via 3D digitization for future generations')}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-heritage-emerald text-heritage-ivory text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Compass className="w-3.5 h-3.5 text-heritage-gold" />
              <span>{t('VỀ VÙNG ĐẤT ĐỒNG NAI', 'ABOUT DONG NAI')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-heritage-emerald-dark tracking-tight leading-snug">
              {t(
                'Cửa Ngõ Miền Đông – Nơi Dòng Sông Mẹ Bồi Đắp Phù Sa Lịch Sử',
                'Gateway to the East – Where the Mother River Nourishes Living History'
              )}
            </h2>

            <p className="text-base text-stone-700 font-light leading-relaxed">
              {t(
                'Năm Mậu Dần 1698, Thống suất Lễ Thành Hầu Nguyễn Hữu Cảnh thừa lệnh Chúa Nguyễn kinh lý phương Nam, chính thức thiết lập phủ Gia Định với hai huyện Phước Long (xứ Đồng Nai) và Tân Bình (xứ Sài Gòn). Trải qua hơn ba thế kỷ, Đồng Nai không chỉ là trung tâm kinh tế công nghiệp năng động hàng đầu cả nước mà còn là kho tàng di sản văn hóa đồ sộ với sự cộng cư hài hòa của các dân tộc Kinh, Hoa, Chơro, Mạ, Stiêng.',
                'In 1698, Marshal Nguyen Huu Canh was dispatched by the Nguyen Lord to the South, formally establishing Gia Dinh prefecture comprising Phuoc Long district (Dong Nai) and Tan Binh (Saigon). Across more than three centuries, Dong Nai thrives as both an economic powerhouse and a profound cultural sanctuary uniting Viet, Chinese, Choro, Ma, and Stieng communities.'
              )}
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
                <BookOpen className="w-5 h-5 text-heritage-gold mb-2" />
                <h4 className="text-sm font-bold text-heritage-emerald-dark mb-1">
                  {t('Văn Miếu Đầu Tiên', 'First Temple')}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {t('Văn miếu Trấn Biên 1715 ra đời sớm hơn cả Văn miếu Huế, tôn vinh đạo học phương Nam.', 'Tran Bien Temple 1715 preceded even Hue, honoring scholarship.')}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="text-sm font-bold text-heritage-emerald-dark mb-1">
                  {t('Thiên Nhiên UNESCO', 'UNESCO Sanctuary')}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {t('Cát Tiên lưu giữ lá phổi xanh nhiệt đới nguyên sinh và đầm lầy Ramsar Bàu Sấu.', 'Cat Tien safeguards primary tropical rainforests and Ramsar wetlands.')}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
                <Heart className="w-5 h-5 text-heritage-ruby mb-2" />
                <h4 className="text-sm font-bold text-heritage-emerald-dark mb-1">
                  {t('Làng Nghề & Hương Vị', 'Crafts & Flavors')}
                </h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {t('Gốm Biên Hòa men xanh đồng trổ bông cùng vị thanh ngọt của bưởi Tân Triều.', 'Vert de Bien Hoa ceramic glaze and heirloom Tan Trieu pomelo.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
