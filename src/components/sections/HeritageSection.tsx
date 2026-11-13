import React, { useState } from 'react';
import { LANDMARKS } from '../../data/landmarksData';
import { Landmark } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Box, Eye, Calendar, Clock, Ticket, Sparkles, MapPin, ChevronRight, Layers } from 'lucide-react';

interface HeritageSectionProps {
  onOpenLandmark3D: (landmark: Landmark) => void;
  onOpenVirtual360: (landmark: Landmark) => void;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({
  onOpenLandmark3D,
  onOpenVirtual360,
}) => {
  const { language, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'historical' | 'natural'>('all');
  const [activeTabByLandmark, setActiveTabByLandmark] = useState<{ [key: string]: 'overview' | 'history' | 'architecture' | 'visitor' }>({});

  const filteredLandmarks = selectedFilter === 'all'
    ? LANDMARKS
    : LANDMARKS.filter((l) => l.category === selectedFilter);

  const getActiveTab = (id: string) => activeTabByLandmark[id] || 'overview';
  const setActiveTab = (id: string, tab: 'overview' | 'history' | 'architecture' | 'visitor') => {
    setActiveTabByLandmark((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="heritage" className="py-24 bg-heritage-ivory text-heritage-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-heritage-emerald text-heritage-ivory text-xs font-semibold uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
            <span>{t('GÓC 1 – TRIỂN LÃM DI SẢN KỸ THUẬT SỐ', 'SECTION 1 – DIGITAL HERITAGE EXHIBITION')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-heritage-emerald-dark tracking-tight mb-4">
            {t('Di Sản & Danh Thắng Đồng Nai', 'Dong Nai Heritage & Landmarks')}
          </h2>
          <p className="text-base text-stone-600 font-light leading-relaxed">
            {t(
              '5 điểm đến tiêu biểu kết tinh chiều sâu văn hóa lịch sử và vẻ đẹp thiên nhiên trác tuyệt của vùng đất hơn 325 năm hình thành phát triển.',
              '5 featured destinations synthesizing the historical depth and majestic natural scenery across more than 325 years of Southern heritage.'
            )}
          </p>

          {/* Filter category pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                selectedFilter === 'all'
                  ? 'bg-heritage-emerald-dark text-heritage-gold shadow-md'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {t('Tất Cả 5 Di Sản', 'All 5 Landmarks')}
            </button>
            <button
              onClick={() => setSelectedFilter('historical')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                selectedFilter === 'historical'
                  ? 'bg-heritage-ruby text-white shadow-md'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {t('Di Tích Lịch Sử', 'Historical Relics')}
            </button>
            <button
              onClick={() => setSelectedFilter('natural')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                selectedFilter === 'natural'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {t('Danh Thắng Thiên Nhiên', 'Natural Wonders')}
            </button>
          </div>
        </div>

        {/* 5 Landmark Exhibition Showcase Cards */}
        <div className="flex flex-col gap-20">
          {filteredLandmarks.map((landmark, index) => {
            const currentTab = getActiveTab(landmark.id);
            const isReversed = index % 2 === 1;

            return (
              <div
                key={landmark.id}
                className="bg-white rounded-3xl border border-stone-200/80 shadow-museum-lg overflow-hidden transition-all duration-300 hover:border-heritage-gold/50"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Imagery & 3D Interactive Launchpad */}
                  <div className={`lg:col-span-6 relative min-h-[420px] lg:min-h-full overflow-hidden group ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={landmark.heroImage}
                      alt={landmark.name.vi}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Badge top-left */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md ${
                        landmark.category === 'historical' ? 'bg-heritage-ruby' : 'bg-emerald-700'
                      }`}>
                        {landmark.category === 'historical' ? t('Di Tích Lịch Sử', 'Historical Relic') : t('Danh Thắng Thiên Nhiên', 'Natural Landscape')}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white/90 backdrop-blur-md border border-white/20">
                        {landmark.established}
                      </span>
                    </div>

                    {/* Interactive 3D / 360 Action Buttons Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-3 z-10">
                      <button
                        onClick={() => onOpenLandmark3D(landmark)}
                        className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-heritage-gold hover:bg-yellow-400 text-heritage-emerald-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-black/40 hover:scale-105 transition-all"
                      >
                        <Box className="w-4 h-4" />
                        <span>{t('XEM MÔ HÌNH 3D TƯƠNG TÁC', 'VIEW INTERACTIVE 3D')}</span>
                      </button>

                      <button
                        onClick={() => onOpenVirtual360(landmark)}
                        className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-black/70 hover:bg-black/90 text-white border border-heritage-gold/50 backdrop-blur-md font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                      >
                        <Eye className="w-4 h-4 text-heritage-gold" />
                        <span>{t('KHÁM PHÁ 360°', '360° TOUR')}</span>
                      </button>
                    </div>
                  </div>

                  {/* Curated Editorial Information Section */}
                  <div className={`lg:col-span-6 p-8 lg:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      {/* Subtitle / Region */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-heritage-bronze mb-2">
                        <MapPin className="w-4 h-4 text-heritage-gold" />
                        <span>{language === 'vi' ? landmark.location.vi : landmark.location.en}</span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-4xl font-serif font-bold text-heritage-emerald-dark mb-2">
                        {language === 'vi' ? landmark.name.vi : landmark.name.en}
                      </h3>
                      <p className="text-base sm:text-lg font-serif italic text-heritage-gold-dark mb-6">
                        "{language === 'vi' ? landmark.subtitle.vi : landmark.subtitle.en}"
                      </p>

                      {/* Sub-navigation tabs inside card */}
                      <div className="flex items-center gap-3 border-b border-stone-200 pb-2.5 mb-5 overflow-x-auto">
                        <button
                          onClick={() => setActiveTab(landmark.id, 'overview')}
                          className={`text-sm sm:text-base font-semibold pb-1.5 border-b-2 transition-all whitespace-nowrap ${
                            currentTab === 'overview'
                              ? 'border-heritage-emerald-dark text-heritage-emerald-dark font-bold'
                              : 'border-transparent text-stone-500 hover:text-stone-800'
                          }`}
                        >
                          {t('Tổng Quan', 'Overview')}
                        </button>
                        <button
                          onClick={() => setActiveTab(landmark.id, 'history')}
                          className={`text-sm sm:text-base font-semibold pb-1.5 border-b-2 transition-all whitespace-nowrap ${
                            currentTab === 'history'
                              ? 'border-heritage-emerald-dark text-heritage-emerald-dark font-bold'
                              : 'border-transparent text-stone-500 hover:text-stone-800'
                          }`}
                        >
                          {t('Giá Trị Lịch Sử', 'Historical Value')}
                        </button>
                        <button
                          onClick={() => setActiveTab(landmark.id, 'architecture')}
                          className={`text-sm sm:text-base font-semibold pb-1.5 border-b-2 transition-all whitespace-nowrap ${
                            currentTab === 'architecture'
                              ? 'border-heritage-emerald-dark text-heritage-emerald-dark font-bold'
                              : 'border-transparent text-stone-500 hover:text-stone-800'
                          }`}
                        >
                          {landmark.category === 'historical' ? t('Kiến Trúc', 'Architecture') : t('Hệ Sinh Thái', 'Ecosystem')}
                        </button>
                        <button
                          onClick={() => setActiveTab(landmark.id, 'visitor')}
                          className={`text-sm sm:text-base font-semibold pb-1.5 border-b-2 transition-all whitespace-nowrap ${
                            currentTab === 'visitor'
                              ? 'border-heritage-emerald-dark text-heritage-emerald-dark font-bold'
                              : 'border-transparent text-stone-500 hover:text-stone-800'
                          }`}
                        >
                          {t('Thông Tin Tham Quan', 'Visitor Guide')}
                        </button>
                      </div>

                      {/* Tab Content Display */}
                      <div className="min-h-[150px] text-base sm:text-lg text-stone-800 leading-relaxed font-light">
                        {currentTab === 'overview' && (
                          <div>
                            <p className="mb-3">
                              {language === 'vi' ? landmark.shortDesc.vi : landmark.shortDesc.en}
                            </p>
                            <p className="text-sm sm:text-base text-stone-600 line-clamp-3">
                              {language === 'vi' ? landmark.fullDesc.vi : landmark.fullDesc.en}
                            </p>
                          </div>
                        )}

                        {currentTab === 'history' && (
                          <div>
                            <p className="mb-3 font-medium text-heritage-emerald-dark">
                              {language === 'vi' ? landmark.historicalSignificance.vi : landmark.historicalSignificance.en}
                            </p>
                            {landmark.timeline && (
                              <div className="space-y-2.5 mt-3 border-l-2 border-heritage-gold/50 pl-3.5">
                                {landmark.timeline.slice(0, 3).map((item, idx) => (
                                  <div key={idx} className="text-sm">
                                    <span className="font-bold text-heritage-bronze">{item.year}: </span>
                                    <span>{language === 'vi' ? item.event.vi : item.event.en}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {currentTab === 'architecture' && (
                          <div>
                            <p>
                              {language === 'vi' ? landmark.architectureOrEcosystem.vi : landmark.architectureOrEcosystem.en}
                            </p>
                          </div>
                        )}

                        {currentTab === 'visitor' && (
                          <div className="space-y-2.5 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                              <span className="font-semibold">{t('Giờ mở cửa', 'Opening Hours')}: </span>
                              <span>{landmark.visitorInfo.openingHours}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Ticket className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                              <span className="font-semibold">{t('Giá vé', 'Admission')}: </span>
                              <span>{language === 'vi' ? landmark.visitorInfo.ticketPrice.vi : landmark.visitorInfo.ticketPrice.en}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                              <span className="font-semibold">{t('Thời điểm lý tưởng', 'Best Time')}: </span>
                              <span>{language === 'vi' ? landmark.visitorInfo.bestTimeToVisit.vi : landmark.visitorInfo.bestTimeToVisit.en}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Gallery Thumbnail Strip & Hotspots pill */}
                    <div className="pt-6 border-t border-stone-200 mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                          {t('Ảnh tư liệu', 'Archival Gallery')}:
                        </span>
                        <div className="flex items-center gap-1.5">
                          {landmark.gallery.slice(0, 3).map((img, gIdx) => (
                            <img
                              key={gIdx}
                              src={img}
                              alt="Gallery thumbnail"
                              className="w-10 h-10 rounded-lg object-cover border border-stone-300"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenLandmark3D(landmark)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-heritage-emerald-dark hover:text-heritage-gold transition-colors"
                      >
                        <span>{t('Khám phá 3D chi tiết', 'Explore in 3D')}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
