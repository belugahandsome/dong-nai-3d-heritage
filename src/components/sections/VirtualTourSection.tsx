import React, { useState } from 'react';
import { LANDMARKS } from '../../data/landmarksData';
import { Landmark } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Eye, Glasses, Sparkles, Compass, ShieldCheck, MapPin, Layers } from 'lucide-react';

interface VirtualTourSectionProps {
  onOpenVirtual360: (landmark: Landmark) => void;
}

export const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({ onOpenVirtual360 }) => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'historical' | 'natural'>('all');

  // All 5 landmarks available for 360 virtual tour exploration
  const filteredLandmarks = filter === 'all'
    ? LANDMARKS
    : LANDMARKS.filter((l) => l.category === filter);

  return (
    <section id="virtual-tour" className="py-24 bg-gradient-to-b from-[#0A261A] via-[#05140D] to-[#0A261A] text-heritage-ivory relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-heritage-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Glasses className="w-4 h-4" />
            <span>{t('THỰC TẾ ẢO & TOÀN CẢNH 360°', 'VIRTUAL REALITY & 360° IMMERSION')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-heritage-ivory tracking-tight mb-4">
            {t('Không Gian Khám Phá Nhập Vai 360°', 'Immersive 360° Virtual Realm')}
          </h2>
          <p className="text-base text-heritage-ivory/70 font-light leading-relaxed">
            {t(
              'Trải nghiệm quan sát toàn cảnh 360° đa chiều tại tất cả các di tích lịch sử và danh lam thắng cảnh tiêu biểu của Đồng Nai. Xoay chuyển góc nhìn tự do, chiêm ngưỡng kiến trúc và thiên nhiên như đang hiện diện tại chỗ.',
              'Experience multi-dimensional 360° panoramic observation across all historic relics and natural landmarks of Dong Nai. Rotate your viewpoint freely to admire architecture and nature as if standing on site.'
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-heritage-gold">
            <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-heritage-gold/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t('Hỗ trợ PC, Tablet, Smartphone & Kính VR WebXR', 'Supports PC, Tablet, Smartphone & VR Headsets')}
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                filter === 'all'
                  ? 'bg-heritage-gold text-heritage-emerald-dark border-white shadow-glow-gold'
                  : 'bg-white/5 text-heritage-ivory/70 border-white/10 hover:border-heritage-gold/40 hover:text-white'
              }`}
            >
              {t('Tất Cả Danh Thắng (5)', 'All Landmarks (5)')}
            </button>
            <button
              onClick={() => setFilter('historical')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                filter === 'historical'
                  ? 'bg-heritage-gold text-heritage-emerald-dark border-white shadow-glow-gold'
                  : 'bg-white/5 text-heritage-ivory/70 border-white/10 hover:border-heritage-gold/40 hover:text-white'
              }`}
            >
              {t('Di Tích Lịch Sử (2)', 'Historical Relics (2)')}
            </button>
            <button
              onClick={() => setFilter('natural')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                filter === 'natural'
                  ? 'bg-heritage-gold text-heritage-emerald-dark border-white shadow-glow-gold'
                  : 'bg-white/5 text-heritage-ivory/70 border-white/10 hover:border-heritage-gold/40 hover:text-white'
              }`}
            >
              {t('Danh Thắng Thiên Nhiên (3)', 'Natural Landmarks (3)')}
            </button>
          </div>
        </div>

        {/* 360 Observation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLandmarks.map((landmark, index) => {
            const vantageCount = landmark.gallery.length > 0 ? landmark.gallery.length : 1;
            return (
              <div
                key={landmark.id}
                className="group relative rounded-3xl overflow-hidden bg-stone-900 border border-heritage-gold/30 shadow-2xl flex flex-col justify-between hover:border-heritage-gold transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image Preview with 360 badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={landmark.heroImage}
                    alt={landmark.name.vi}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/50" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs flex items-center justify-center shadow-lg">
                      #{index + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-heritage-gold border border-heritage-gold/30">
                      {landmark.category === 'historical'
                        ? t('Di Tích Lịch Sử', 'Historical')
                        : t('Thắng Cảnh Tự Nhiên', 'Natural')}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-heritage-ivory/90 border border-white/20 flex items-center gap-1">
                    <Compass className="w-3 h-3 text-heritage-gold" />
                    <span>{vantageCount} {t('Góc 360°', '360° Views')}</span>
                  </div>

                  <button
                    onClick={() => onOpenVirtual360(landmark)}
                    className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-heritage-gold/90 text-heritage-emerald-dark flex items-center justify-center shadow-glow-gold group-hover:scale-110 transition-transform"
                    title={t('Mở quan sát 360°', 'Open 360° Observation')}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-heritage-gold/90 mb-1">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{language === 'vi' ? landmark.location.vi : landmark.location.en}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-heritage-gold transition-colors">
                      {language === 'vi' ? landmark.name.vi : landmark.name.en}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-2 font-light mb-5 leading-relaxed">
                      {language === 'vi' ? landmark.shortDesc.vi : landmark.shortDesc.en}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenVirtual360(landmark)}
                    className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-heritage-gold hover:text-heritage-emerald-dark text-white font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-white transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Glasses className="w-4 h-4" />
                    <span>{t('QUAN SÁT TOÀN CẢNH 360°', 'ENTER 360° OBSERVATION')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
