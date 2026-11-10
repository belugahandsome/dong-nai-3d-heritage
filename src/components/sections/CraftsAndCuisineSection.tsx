import React, { useState } from 'react';
import { CRAFTS_DATA, CUISINE_DATA } from '../../data/craftsAndCuisineData';
import { CraftVillage, CuisineItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Utensils, Hammer, Quote, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

export const CraftsAndCuisineSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<'crafts' | 'cuisine'>('crafts');
  const [selectedCraft, setSelectedCraft] = useState<CraftVillage>(CRAFTS_DATA[0]);
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineItem>(CUISINE_DATA[0]);

  return (
    <section id="crafts-cuisine" className="py-24 bg-stone-900 text-heritage-ivory relative overflow-hidden">
      {/* Decorative background glow & museum textures */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heritage-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('GÓC 2 – KHÔNG GIAN VĂN HÓA SỐNG', 'SECTION 2 – LIVING CULTURAL HERITAGE')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-heritage-ivory tracking-tight mb-4">
            {t('Làng Nghề Truyền Thống & Ẩm Thực Đồng Nai', 'Traditional Crafts & Gastronomy of Dong Nai')}
          </h2>
          <p className="text-base text-stone-300 font-light leading-relaxed">
            {t(
              'Từ dòng men gốm xanh đồng vang bóng năm châu đến hương vị tinh tế của bưởi Tân Triều và nghệ thuật xôi chiên phồng kỷ lục.',
              'From celebrated copper-green ceramics echoing through global exhibitions to the sublime citrus sweetness of Tan Trieu and record-holding culinary artistry.'
            )}
          </p>

          {/* Toggle between Crafts and Cuisine */}
          <div className="inline-flex p-1.5 rounded-full bg-stone-800/80 border border-stone-700 mt-8">
            <button
              onClick={() => setActiveSection('crafts')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === 'crafts'
                  ? 'bg-heritage-gold text-heritage-emerald-dark shadow-glow-gold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Hammer className="w-4 h-4" />
              <span>{t('Làng Nghề Truyền Thống', 'Traditional Crafts')}</span>
            </button>
            <button
              onClick={() => setActiveSection('cuisine')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === 'cuisine'
                  ? 'bg-heritage-gold text-heritage-emerald-dark shadow-glow-gold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>{t('Tinh Hoa Ẩm Thực', 'Culinary Specialties')}</span>
            </button>
          </div>
        </div>

        {/* SECTION A: TRADITIONAL CRAFTS SHOWCASE */}
        {activeSection === 'crafts' && (
          <div className="space-y-12">
            {/* Quick Craft Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CRAFTS_DATA.map((craft) => {
                const isSelected = selectedCraft.id === craft.id;
                return (
                  <button
                    key={craft.id}
                    onClick={() => setSelectedCraft(craft)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
                      isSelected
                        ? 'bg-heritage-forest/60 border-heritage-gold shadow-glow-gold'
                        : 'bg-stone-800/50 border-stone-700/60 hover:border-stone-500'
                    }`}
                  >
                    <img
                      src={craft.image}
                      alt={craft.name.vi}
                      className="w-16 h-16 rounded-xl object-cover border border-white/20 flex-shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-gold block">
                        {craft.age}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-white mt-0.5">
                        {language === 'vi' ? craft.name.vi : craft.name.en}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Craft In-Depth Magazine Feature */}
            <div className="bg-stone-800/60 rounded-3xl border border-heritage-gold/30 p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Visual Showcase */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden border border-heritage-gold/40 shadow-xl">
                    <img
                      src={selectedCraft.image}
                      alt={selectedCraft.name.vi}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-heritage-gold border border-heritage-gold/30">
                      {selectedCraft.age}
                    </div>
                  </div>

                  {/* Gallery thumbnails */}
                  <div className="grid grid-cols-3 gap-3">
                    {selectedCraft.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="Craft thumbnail"
                        className="w-full h-20 rounded-xl object-cover border border-white/10"
                      />
                    ))}
                  </div>

                  {/* Artisan Quote */}
                  {selectedCraft.artisanQuote && (
                    <div className="p-5 rounded-2xl bg-heritage-emerald-dark/80 border border-heritage-gold/30 backdrop-blur-md">
                      <Quote className="w-5 h-5 text-heritage-gold mb-2" />
                      <p className="text-xs font-serif italic text-heritage-ivory/90 leading-relaxed">
                        "{language === 'vi' ? selectedCraft.artisanQuote.text.vi : selectedCraft.artisanQuote.text.en}"
                      </p>
                      <span className="block text-[11px] font-bold text-heritage-gold mt-2">
                        — {selectedCraft.artisanQuote.author}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Column: Narrative & Process Steps */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-heritage-gold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{language === 'vi' ? selectedCraft.location.vi : selectedCraft.location.en}</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-2">
                      {language === 'vi' ? selectedCraft.name.vi : selectedCraft.name.en}
                    </h3>
                    <p className="text-sm font-serif italic text-heritage-gold mb-4">
                      "{language === 'vi' ? selectedCraft.subtitle.vi : selectedCraft.subtitle.en}"
                    </p>
                    <p className="text-sm text-stone-300 font-light leading-relaxed">
                      {language === 'vi' ? selectedCraft.description.vi : selectedCraft.description.en}
                    </p>
                  </div>

                  {/* Craft Process Steps */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-heritage-gold mb-4 flex items-center gap-2">
                      <Hammer className="w-4 h-4" />
                      <span>{t('QUY TRÌNH CHẾ TÁC THỦ CÔNG', 'ARTISANAL PRODUCTION PROCESS')}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedCraft.processSteps.map((step) => (
                        <div key={step.step} className="p-4 rounded-xl bg-stone-900/70 border border-white/10">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="w-6 h-6 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {step.step}
                            </span>
                            <span className="text-xs font-bold text-heritage-ivory">
                              {language === 'vi' ? step.title.vi : step.title.en}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-400 font-light leading-relaxed pl-8">
                            {language === 'vi' ? step.desc.vi : step.desc.en}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cultural Value */}
                  <div className="p-4 rounded-xl bg-heritage-gold/10 border border-heritage-gold/30">
                    <span className="text-xs font-bold text-heritage-gold block mb-1">
                      {t('GIÁ TRỊ DI SẢN VĂN HÓA', 'CULTURAL HERITAGE SIGNIFICANCE')}
                    </span>
                    <p className="text-xs text-heritage-ivory/80 leading-relaxed font-light">
                      {language === 'vi' ? selectedCraft.culturalValue.vi : selectedCraft.culturalValue.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION B: DONG NAI CUISINE SHOWCASE */}
        {activeSection === 'cuisine' && (
          <div className="space-y-12">
            {/* Quick Cuisine Selector Strip */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
              {CUISINE_DATA.map((dish) => {
                const isSelected = selectedCuisine.id === dish.id;
                return (
                  <button
                    key={dish.id}
                    onClick={() => setSelectedCuisine(dish)}
                    className={`px-5 py-3 rounded-2xl border text-left whitespace-nowrap transition-all duration-300 flex items-center gap-3 flex-shrink-0 ${
                      isSelected
                        ? 'bg-heritage-gold text-heritage-emerald-dark font-bold border-white shadow-glow-gold'
                        : 'bg-stone-800 text-stone-300 border-stone-700 hover:border-stone-500'
                    }`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name.vi}
                      className="w-10 h-10 rounded-xl object-cover border border-black/20"
                    />
                    <span className="text-xs">
                      {language === 'vi' ? dish.name.vi : dish.name.en}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Dish Deep Dive */}
            <div className="bg-stone-800/60 rounded-3xl border border-heritage-gold/30 p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Food Photography */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-heritage-gold/40 shadow-2xl">
                    <img
                      src={selectedCuisine.image}
                      alt={selectedCuisine.name.vi}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-heritage-gold block">
                        {language === 'vi' ? selectedCuisine.region.vi : selectedCuisine.region.en}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                        {language === 'vi' ? selectedCuisine.name.vi : selectedCuisine.name.en}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Dish Information */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-heritage-ruby text-white font-bold text-[10px] uppercase tracking-wider">
                      {t('ĐẶC SẢN ĐỒNG NAI', 'DONG NAI SIGNATURE')}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2 mb-1">
                      {language === 'vi' ? selectedCuisine.name.vi : selectedCuisine.name.en}
                    </h3>
                    <p className="text-sm font-serif italic text-heritage-gold mb-4">
                      "{language === 'vi' ? selectedCuisine.tagline.vi : selectedCuisine.tagline.en}"
                    </p>
                    <p className="text-sm text-stone-300 font-light leading-relaxed">
                      {language === 'vi' ? selectedCuisine.description.vi : selectedCuisine.description.en}
                    </p>
                  </div>

                  {/* Flavor Profile */}
                  <div className="p-4 rounded-xl bg-stone-900/80 border border-white/10">
                    <span className="text-xs font-bold text-heritage-gold uppercase tracking-wider block mb-1">
                      {t('HƯƠNG VỊ ĐẶC TRƯNG', 'FLAVOR PROFILE')}
                    </span>
                    <p className="text-xs text-stone-300 font-light">
                      {language === 'vi' ? selectedCuisine.tasteProfile.vi : selectedCuisine.tasteProfile.en}
                    </p>
                  </div>

                  {/* Ingredients Checklist */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-heritage-gold block mb-3">
                      {t('NGUYÊN LIỆU TRUYỀN THỐNG CHỌN LỌC', 'KEY INGREDIENTS')}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(language === 'vi' ? selectedCuisine.ingredients.vi : selectedCuisine.ingredients.en).map((ing, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-heritage-gold flex-shrink-0" />
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cultural Significance */}
                  <div className="p-4 rounded-xl bg-heritage-gold/10 border border-heritage-gold/30">
                    <span className="text-xs font-bold text-heritage-gold uppercase tracking-wider block mb-1">
                      {t('Ý NGHĨA VĂN HÓA ẨM THỰC', 'CULTURAL SIGNIFICANCE')}
                    </span>
                    <p className="text-xs text-heritage-ivory/80 font-light leading-relaxed">
                      {language === 'vi' ? selectedCuisine.culturalSignificance.vi : selectedCuisine.culturalSignificance.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
