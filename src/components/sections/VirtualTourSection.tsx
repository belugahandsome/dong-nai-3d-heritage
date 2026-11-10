import React from 'react';
import { LANDMARKS } from '../../data/landmarksData';
import { Landmark } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Eye, Glasses, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface VirtualTourSectionProps {
  onOpenVirtual360: (landmark: Landmark) => void;
}

export const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({ onOpenVirtual360 }) => {
  const { language, t } = useLanguage();

  // Prioritized 3 landmarks as requested:
  // 1. Buu Long
  // 2. Van Mieu Tran Bien
  // 3. Cat Tien National Park
  const vrPrioritized = [
    LANDMARKS.find((l) => l.id === 'khu-du-lich-buu-long')!,
    LANDMARKS.find((l) => l.id === 'van-mieu-tran-bien')!,
    LANDMARKS.find((l) => l.id === 'vuon-quoc-gia-cat-tien')!,
  ].filter(Boolean);

  return (
    <section id="virtual-tour" className="py-24 bg-gradient-to-b from-[#0A261A] via-[#05140D] to-[#0A261A] text-heritage-ivory relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Glasses className="w-4 h-4" />
            <span>{t('THỰC TẾ ẢO & TOÀN CẢNH 360°', 'VIRTUAL REALITY & 360° IMMERSION')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-heritage-ivory tracking-tight mb-4">
            {t('Không Gian Khám Phá Nhập Vai 360°', 'Immersive 360° Virtual Realm')}
          </h2>
          <p className="text-base text-heritage-ivory/70 font-light leading-relaxed">
            {t(
              'Trải nghiệm cảm giác đứng giữa lòng danh thắng Bửu Long, thâm nghiêm trước Văn Miếu Trấn Biên và hòa mình vào thảm rừng mưa nguyên sinh Cát Tiên bằng công nghệ tương tác 360° đa chiều.',
              'Experience the sensation of standing amidst Buu Long’s reflection lake, venerating Tran Bien Temple, and wandering ancient Cat Tien rainforest canopy via interactive multi-dimensional 360° exploration.'
            )}
          </p>

          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-heritage-gold">
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-heritage-gold/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t('Tương thích PC, Tablet & Kính VR', 'Compatible with PC, Mobile & VR Headsets')}
            </span>
          </div>
        </div>

        {/* 3 Prioritized VR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vrPrioritized.map((landmark, index) => (
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/40" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs flex items-center justify-center shadow-lg">
                    #{index + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-heritage-gold border border-heritage-gold/30">
                    {t('Ưu tiên VR', 'VR Priority')}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-heritage-gold/90 text-heritage-emerald-dark flex items-center justify-center shadow-glow-gold group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-heritage-gold transition-colors">
                    {language === 'vi' ? landmark.name.vi : landmark.name.en}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 font-light mb-4">
                    {language === 'vi' ? landmark.shortDesc.vi : landmark.shortDesc.en}
                  </p>
                </div>

                <button
                  onClick={() => onOpenVirtual360(landmark)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-heritage-gold hover:text-heritage-emerald-dark text-white font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-white transition-all flex items-center justify-center gap-2"
                >
                  <Glasses className="w-4 h-4" />
                  <span>{t('BẮT ĐẦU THAM QUAN 360°', 'ENTER 360° EXPERIENCE')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
