import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#05140D] text-heritage-ivory border-t border-heritage-gold/30 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-heritage-gold flex items-center justify-center bg-heritage-emerald shadow-glow-gold">
                <Compass className="w-5 h-5 text-heritage-gold" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-heritage-ivory tracking-wider block">
                  ĐỒNG NAI 3D HERITAGE
                </span>
                <span className="text-[10px] tracking-widest uppercase text-heritage-gold font-semibold">
                  {t('KHÔNG GIAN TRẢI NGHIỆM DU LỊCH VĂN HÓA KỸ THUẬT SỐ', 'DIGITAL CULTURAL TOURISM EXPERIENCE')}
                </span>
              </div>
            </div>
            <p className="text-xs text-heritage-ivory/70 font-light leading-relaxed max-w-md">
              {t(
                'Dự án triển lãm số hóa di sản, danh thắng, làng nghề truyền thống và tinh hoa ẩm thực tỉnh Đồng Nai. Được thiết kế với định dạng bảo tàng ảo 3D tương tác đa chiều, phục vụ nghiên cứu, giáo dục và quảng bá du lịch văn hóa Việt Nam.',
                'A digital exhibition project honoring the tangible and intangible heritage, natural wonders, artisan villages, and cuisine of Dong Nai Province, Vietnam. Crafted as an interactive 3D virtual museum for research, education, and cultural tourism promotion.'
              )}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-heritage-gold">
              {t('DI SẢN TRỌNG ĐIỂM', 'KEY LANDMARKS')}
            </h4>
            <ul className="space-y-2 text-xs text-heritage-ivory/70">
              <li><a href="#heritage" className="hover:text-heritage-gold transition-colors">{t('Văn Miếu Trấn Biên', 'Tran Bien Temple of Literature')}</a></li>
              <li><a href="#heritage" className="hover:text-heritage-gold transition-colors">{t('Thành Cổ Biên Hòa', 'Bien Hoa Ancient Citadel')}</a></li>
              <li><a href="#heritage" className="hover:text-heritage-gold transition-colors">{t('Khu Du Lịch Bửu Long', 'Buu Long Scenic Area')}</a></li>
              <li><a href="#heritage" className="hover:text-heritage-gold transition-colors">{t('Vườn Quốc Gia Cát Tiên', 'Cat Tien National Park')}</a></li>
              <li><a href="#heritage" className="hover:text-heritage-gold transition-colors">{t('Thác Giang Điền', 'Giang Dien Waterfall')}</a></li>
            </ul>
          </div>

          {/* Craft & Cuisine Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-heritage-gold">
              {t('LÀNG NGHỀ & ẨM THỰC', 'CRAFTS & GASTRONOMY')}
            </h4>
            <ul className="space-y-2 text-xs text-heritage-ivory/70">
              <li><a href="#crafts-cuisine" className="hover:text-heritage-gold transition-colors">{t('Gốm Mỹ Nghệ Biên Hòa', 'Bien Hoa Ceramics')}</a></li>
              <li><a href="#crafts-cuisine" className="hover:text-heritage-gold transition-colors">{t('Làng Bưởi Cổ Truyền Tân Triều', 'Tan Trieu Pomelo Village')}</a></li>
              <li><a href="#crafts-cuisine" className="hover:text-heritage-gold transition-colors">{t('Xôi Chiên Phồng Biên Hòa', 'Fried Puffed Sticky Rice')}</a></li>
              <li><a href="#crafts-cuisine" className="hover:text-heritage-gold transition-colors">{t('Gỏi Cá Sông Đồng Nai', 'Dong Nai River Fish Salad')}</a></li>
              <li><a href="#map" className="hover:text-heritage-gold transition-colors">{t('Bản Đồ Di Sản Tương Tác', 'Interactive Heritage Map')}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-heritage-ivory/60">
          <p>
            © {new Date().getFullYear()} Dong Nai 3D Cultural Heritage Project. {t('Bảo lưu mọi quyền.', 'All rights reserved.')}
          </p>
          <div className="flex items-center gap-2">
            <span>{t('Thiết kế với niềm tự hào di sản Việt Nam', 'Crafted with pride in Vietnamese heritage')}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
