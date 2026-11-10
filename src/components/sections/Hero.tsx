import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, Sparkles, MapPin, ArrowDown, Box } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenIntro: () => void;
  onExploreHeritage: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntro, onExploreHeritage }) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#031109] via-[#082116] to-[#0B2A1C] text-heritage-ivory pt-24 pb-16">
      {/* Background Cinematic Texture & Layers */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Ambient glowing radial orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-heritage-gold/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Editorial Subtitle Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-heritage-gold/15 border border-heritage-gold/40 text-heritage-gold-light text-xs font-semibold uppercase tracking-widest mb-6 shadow-glow-gold"
        >
          <Compass className="w-4 h-4 text-heritage-gold animate-spin-slow" />
          <span>{t('BẢO TÀNG KỸ THUẬT SỐ & DU LỊCH VĂN HÓA 3D', 'DIGITAL MUSEUM & 3D CULTURAL TOURISM')}</span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-heritage-ivory tracking-tight leading-[1.08] mb-4"
        >
          {t('ĐỒNG NAI', 'DONG NAI')}
          <span className="block text-2xl sm:text-4xl md:text-5xl font-serif font-light text-heritage-gold italic mt-2">
            {t('Miền Di Sản, Sắc Màu Văn Hóa', 'A Land of Heritage & Living Culture')}
          </span>
        </motion.h1>

        {/* Lead Narrative Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-sm sm:text-base md:text-lg text-heritage-ivory/80 font-light leading-relaxed mb-10"
        >
          {t(
            'Khởi hành chuyến viễn du tương tác không gian 3D qua hơn 325 năm trầm tích lịch sử xứ Trấn Biên. Nơi dòng sông Đồng Nai cuộn chảy nuôi dưỡng những cổ tự trang nghiêm, cánh rừng mưa nhiệt đới di sản thế giới Cát Tiên, làng gốm men ngọc danh tiếng và nền ẩm thực phương Nam trác tuyệt.',
            'Embark on an immersive 3D digital voyage across over 325 years of Tran Bien historical chronicles. Where the winding Dong Nai River nourishes venerated temples, UNESCO biosphere rainforests, legendary copper-green ceramics, and refined Southern gastronomy.'
          )}
        </motion.p>

        {/* Dual Primary Call-to-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onExploreHeritage}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-heritage-gold via-yellow-400 to-heritage-gold-dark text-heritage-emerald-dark font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:shadow-glow-gold hover:scale-105 transition-all duration-300"
          >
            <span>{t('KHÁM PHÁ DI TÍCH & DANH THẮNG', 'EXPLORE HERITAGE & LANDMARKS')}</span>
            <Sparkles className="w-4 h-4 text-heritage-emerald-dark" />
          </button>

          <button
            onClick={onOpenIntro}
            className="flex items-center gap-2.5 px-7 py-4 rounded-full border border-heritage-gold/50 bg-white/5 backdrop-blur-md text-heritage-ivory hover:text-heritage-gold hover:border-heritage-gold hover:bg-white/10 font-semibold text-sm sm:text-base tracking-wider transition-all duration-300"
          >
            <Box className="w-4 h-4 text-heritage-gold" />
            <span>{t('XEM SA BÀN 3D INTRO', 'VIEW 3D MINIATURE DIORAMA')}</span>
          </button>
        </motion.div>

        {/* Quick Museum Historical Milestones Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-heritage-emerald-dark/60 border border-heritage-gold/30 backdrop-blur-lg shadow-2xl"
        >
          <div className="flex flex-col items-center text-center p-3">
            <span className="text-2xl sm:text-4xl font-serif font-bold text-heritage-gold">
              325+
            </span>
            <span className="text-[11px] uppercase tracking-wider text-heritage-ivory/70 mt-1 font-medium">
              {t('Năm Khai Mở Đàng Trong (1698)', 'Years Southern Heritage')}
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 border-l border-white/10">
            <span className="text-2xl sm:text-4xl font-serif font-bold text-heritage-gold">
              5
            </span>
            <span className="text-[11px] uppercase tracking-wider text-heritage-ivory/70 mt-1 font-medium">
              {t('Di Sản 3D Tương Tác', 'Interactive 3D Landmarks')}
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 border-l-0 md:border-l border-white/10">
            <span className="text-2xl sm:text-4xl font-serif font-bold text-heritage-gold">
              UNESCO
            </span>
            <span className="text-[11px] uppercase tracking-wider text-heritage-ivory/70 mt-1 font-medium">
              {t('Khu Dự Trữ Sinh Quyển (Cát Tiên)', 'World Biosphere Reserve')}
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 border-l border-white/10">
            <span className="text-2xl sm:text-4xl font-serif font-bold text-heritage-gold">
              300+
            </span>
            <span className="text-[11px] uppercase tracking-wider text-heritage-ivory/70 mt-1 font-medium">
              {t('Năm Gốm Men Xanh Đồng', 'Years Ceramic Heritage')}
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <a
          href="#heritage"
          className="mt-12 flex flex-col items-center text-heritage-ivory/50 hover:text-heritage-gold transition-colors text-xs tracking-widest uppercase font-light"
        >
          <span>{t('Cuộn để khám phá', 'Scroll to explore')}</span>
          <ArrowDown className="w-4 h-4 mt-2 animate-bounce text-heritage-gold" />
        </a>
      </div>
    </section>
  );
};
