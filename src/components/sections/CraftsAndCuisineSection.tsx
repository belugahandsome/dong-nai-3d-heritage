import React, { useState } from 'react';
import { CRAFTS_DATA, CUISINE_DATA } from '../../data/craftsAndCuisineData';
import { CraftVillage, CuisineItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Utensils, Hammer, Quote, MapPin, CheckCircle2, Camera, Heart, Users, Compass, Eye, X } from 'lucide-react';

export const CraftsAndCuisineSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<'crafts' | 'cuisine'>('crafts');
  const [selectedCraft, setSelectedCraft] = useState<CraftVillage>(CRAFTS_DATA[0]);
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineItem>(CUISINE_DATA[0]);
  const [activePhotoModal, setActivePhotoModal] = useState<string | null>(null);

  // Experiential pottery gallery photos uploaded by user
  const potteryExperiencePhotos = [
    {
      src: '/images/trai-nghiem-gom-1.jpg',
      title: {
        vi: 'Tác Phẩm Gốm Men Độc Bản',
        en: 'Custom Glazed Ceramic Piece',
      },
      desc: {
        vi: 'Bạn học sinh hào hứng khoe chiếc chậu gốm men xanh đồng trổ bông tự tay hoàn thiện với hoa văn mặt trời và sóng nước rực rỡ.',
        en: 'Student proudly displaying a hand-glazed ceramic bowl featuring traditional sunburst and wave motifs.',
      },
      tag: { vi: 'Thành Phẩm Sáng Tạo', en: 'Handcrafted Piece' },
    },
    {
      src: '/images/trai-nghiem-gom-2.jpg',
      title: {
        vi: 'Nụ Cười Rạng Rỡ Tuổi Học Trò',
        en: 'Youth Joy & Craftsmanship',
      },
      desc: {
        vi: 'Nhóm bạn nữ sinh rạng ngời bên những chiếc chén gốm vẽ tay vừa hoàn thành tại kệ trưng bày của xưởng gốm cổ truyền.',
        en: 'Students smiling brightly with their newly finished hand-painted ceramic bowls on the traditional pottery racks.',
      },
      tag: { vi: 'Kỷ Niệm Trải Nghiệm', en: 'Workshop Memory' },
    },
    {
      src: '/images/trai-nghiem-gom-3.jpg',
      title: {
        vi: 'Khoảnh Khắc Check-in Lưu Niệm',
        en: 'Cherished Group Moment',
      },
      desc: {
        vi: 'Nụ cười tươi tắn của các bạn trẻ cùng tạo dáng vui nhộn, lưu giữ kỷ niệm chuyến dã ngoại trải nghiệm di sản văn hóa Đồng Nai.',
        en: 'Cheerful group selfie capturing unforgettable memories during the cultural heritage field trip to Dong Nai pottery village.',
      },
      tag: { vi: 'Hành Trình Thanh Xuân', en: 'Heritage Field Trip' },
    },
    {
      src: '/images/trai-nghiem-gom-4.jpg',
      title: {
        vi: 'Chiêm Ngưỡng Tinh Hoa Men Màu',
        en: 'Admiring Polychrome Glazes',
      },
      desc: {
        vi: 'Khám phá gian trưng bày các mẫu đôn chậu, bình gốm men Vert de Bien Hoa trứ danh được chế tác công phu qua nhiều công đoạn.',
        en: 'Exploring the exquisite display of renowned Vert de Bien Hoa ceramic planters, urns, and decorative bowls.',
      },
      tag: { vi: 'Không Gian Gốm Xưa', en: 'Artisan Workshop' },
    },
  ];

  return (
    <section id="crafts-cuisine" className="py-24 bg-[#0d1612] text-heritage-ivory relative overflow-hidden">
      {/* Decorative background glow & museum textures */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-heritage-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{t('GÓC 2 – KHÔNG GIAN VĂN HÓA SỐNG', 'SECTION 2 – LIVING CULTURAL HERITAGE')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-heritage-ivory tracking-tight mb-5">
            {t('Làng Nghề Truyền Thống & Ẩm Thực Đồng Nai', 'Traditional Crafts & Gastronomy of Dong Nai')}
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            {t(
              'Từ dòng men gốm xanh đồng vang bóng năm châu đến hương vị tinh tế của bưởi Tân Triều và nghệ thuật ẩm thực xôi chiên phồng kỷ lục Châu Á.',
              'From celebrated copper-green ceramics echoing through global exhibitions to the sublime citrus sweetness of Tan Trieu and record-holding culinary artistry.'
            )}
          </p>

          {/* Toggle between Crafts and Cuisine */}
          <div className="inline-flex p-1.5 rounded-full bg-stone-800/90 border border-heritage-gold/30 mt-8 shadow-lg">
            <button
              onClick={() => setActiveSection('crafts')}
              className={`flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
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
              className={`flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
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
          <div className="space-y-16">
            {/* Quick Craft Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CRAFTS_DATA.map((craft) => {
                const isSelected = selectedCraft.id === craft.id;
                return (
                  <button
                    key={craft.id}
                    onClick={() => setSelectedCraft(craft)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
                      isSelected
                        ? 'bg-heritage-emerald/80 border-heritage-gold shadow-glow-gold ring-1 ring-heritage-gold/50'
                        : 'bg-stone-800/60 border-stone-700/60 hover:border-heritage-gold/40 hover:bg-stone-800'
                    }`}
                  >
                    <img
                      src={craft.image}
                      alt={craft.name.vi}
                      className="w-20 h-20 rounded-xl object-cover border border-white/20 flex-shrink-0"
                    />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-heritage-gold block mb-1">
                        {craft.age}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                        {language === 'vi' ? craft.name.vi : craft.name.en}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Craft In-Depth Magazine Feature */}
            <div className="bg-stone-800/70 rounded-3xl border border-heritage-gold/40 p-8 lg:p-12 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Visual Showcase */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-heritage-gold/40 shadow-xl">
                    <img
                      src={selectedCraft.image}
                      alt={selectedCraft.name.vi}
                      className="w-full h-84 object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-xs font-bold text-heritage-gold border border-heritage-gold/30">
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
                        className="w-full h-24 rounded-xl object-cover border border-white/15 hover:border-heritage-gold transition-all cursor-pointer"
                        onClick={() => setActivePhotoModal(img)}
                      />
                    ))}
                  </div>

                  {/* Artisan Quote */}
                  {selectedCraft.artisanQuote && (
                    <div className="p-6 rounded-2xl bg-heritage-emerald-dark/90 border border-heritage-gold/40 backdrop-blur-md shadow-lg">
                      <Quote className="w-6 h-6 text-heritage-gold mb-2.5" />
                      <p className="text-sm sm:text-base font-serif italic text-heritage-ivory leading-relaxed">
                        "{language === 'vi' ? selectedCraft.artisanQuote.text.vi : selectedCraft.artisanQuote.text.en}"
                      </p>
                      <span className="block text-xs sm:text-sm font-bold text-heritage-gold mt-3">
                        — {selectedCraft.artisanQuote.author}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Column: Narrative & Process Steps */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-heritage-gold mb-2">
                      <MapPin className="w-4 h-4 text-heritage-gold" />
                      <span>{language === 'vi' ? selectedCraft.location.vi : selectedCraft.location.en}</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                      {language === 'vi' ? selectedCraft.name.vi : selectedCraft.name.en}
                    </h3>
                    <p className="text-base sm:text-lg font-serif italic text-heritage-gold mb-4 leading-relaxed">
                      "{language === 'vi' ? selectedCraft.subtitle.vi : selectedCraft.subtitle.en}"
                    </p>
                    <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
                      {language === 'vi' ? selectedCraft.description.vi : selectedCraft.description.en}
                    </p>
                  </div>

                  {/* Craft Process Steps */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-heritage-gold mb-4 flex items-center gap-2">
                      <Hammer className="w-4 h-4" />
                      <span>{t('QUY TRÌNH CHẾ TÁC THỦ CÔNG', 'ARTISANAL PRODUCTION PROCESS')}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedCraft.processSteps.map((step) => (
                        <div key={step.step} className="p-4 rounded-xl bg-stone-900/80 border border-white/15">
                          <div className="flex items-center gap-2.5 mb-2">
                            <span className="w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {step.step}
                            </span>
                            <span className="text-sm font-bold text-heritage-ivory">
                              {language === 'vi' ? step.title.vi : step.title.en}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed pl-9">
                            {language === 'vi' ? step.desc.vi : step.desc.en}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cultural Value */}
                  <div className="p-5 rounded-2xl bg-heritage-gold/15 border border-heritage-gold/40">
                    <span className="text-xs sm:text-sm font-bold text-heritage-gold uppercase tracking-wider block mb-2">
                      {t('GIÁ TRỊ DI SẢN VĂN HÓA', 'CULTURAL HERITAGE SIGNIFICANCE')}
                    </span>
                    <p className="text-sm sm:text-base text-heritage-ivory leading-relaxed font-light">
                      {language === 'vi' ? selectedCraft.culturalValue.vi : selectedCraft.culturalValue.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DEDICATED EXPERIENTIAL SECTION: TRẢI NGHIỆM THỰC TẾ LÀNG GỐM BIÊN HÒA */}
            <div className="rounded-3xl bg-gradient-to-b from-stone-800/90 via-[#0A261A]/90 to-stone-900 border-2 border-heritage-gold/50 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              {/* Background ambient badge */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-gold text-xs font-bold uppercase tracking-wider mb-2">
                    <Camera className="w-3.5 h-3.5" />
                    <span>{t('DU LỊCH TRẢI NGHIỆM THỰC TẾ', 'HANDS-ON HERITAGE EXPERIENCE')}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-heritage-ivory tracking-tight">
                    {t('Trải Nghiệm Thực Tế Tại Làng Gốm Biên Hòa', 'Experiential Hands-On Tour at Bien Hoa Pottery Village')}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-300 font-light mt-2 max-w-2xl leading-relaxed">
                    {t(
                      'Cùng các bạn học sinh, sinh viên và du khách trải nghiệm trực tiếp quá trình làm gốm truyền thống: tự tay nặn đất, xoay bàn gốm, vẽ men màu Vert de Bien Hoa và lưu giữ khoảnh khắc thanh xuân rạng rỡ.',
                      'Join students and visitors experiencing the authentic pottery craft: shaping raw clay on wheels, painting signature jade glazes, and cherishing radiant youth memories.'
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-black/60 border border-heritage-gold/30 text-center">
                    <span className="block text-xl font-bold text-heritage-gold font-serif">300+</span>
                    <span className="text-[11px] text-stone-300 uppercase tracking-wider">{t('Năm Lịch Sử', 'Years of Heritage')}</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-black/60 border border-heritage-gold/30 text-center">
                    <span className="block text-xl font-bold text-heritage-gold font-serif">100%</span>
                    <span className="text-[11px] text-stone-300 uppercase tracking-wider">{t('Tự Tay Sáng Tạo', 'Handmade by You')}</span>
                  </div>
                </div>
              </div>

              {/* 4 Experiential Photos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {potteryExperiencePhotos.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActivePhotoModal(item.src)}
                    className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-heritage-gold/30 hover:border-heritage-gold transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title.vi}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />

                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-heritage-gold border border-heritage-gold/30">
                        {language === 'vi' ? item.tag.vi : item.tag.en}
                      </span>

                      <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-heritage-gold/90 text-heritage-emerald-dark flex items-center justify-center shadow-glow-gold opacity-90 group-hover:scale-110 transition-transform">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between bg-stone-900/90">
                      <div>
                        <h4 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-heritage-gold transition-colors leading-snug mb-1">
                          {language === 'vi' ? item.title.vi : item.title.en}
                        </h4>
                        <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed font-light">
                          {language === 'vi' ? item.desc.vi : item.desc.en}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Experiential Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-white/10">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-heritage-gold/20 border border-heritage-gold/40 flex items-center justify-center text-heritage-gold mb-3">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-bold text-heritage-ivory mb-1">
                    {t('1. Tự Tay Vuốt Gốm Bàn Xoay', '1. Wheel Throwing Workshop')}
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {t(
                      'Được các nghệ nhân kỳ cựu trực tiếp hướng dẫn đặt tay, cân tâm đất sét và tạo hình những chiếc bình, chậu, ly gốm theo ý muốn.',
                      'Guided by master potters to center clay, regulate rotation speed, and shape custom bowls, cups, and vases.'
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-heritage-gold/20 border border-heritage-gold/40 flex items-center justify-center text-heritage-gold mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-bold text-heritage-ivory mb-1">
                    {t('2. Vẽ Men Màu & Khắc Họa Tiết', '2. Polychrome Glazing & Carving')}
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {t(
                      'Dùng bút lông chấm men xanh đồng Vert de Bien Hoa truyền thống, men hoa cúc, men rồng phượng để thổi hồn vào sản phẩm.',
                      'Apply traditional copper celadon glazes and hand-paint floral or dragon motifs onto your ceramic creation.'
                    )}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-heritage-gold/20 border border-heritage-gold/40 flex items-center justify-center text-heritage-gold mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-bold text-heritage-ivory mb-1">
                    {t('3. Mang Về Thành Phẩm Độc Bản', '3. Take Home Your Masterpiece')}
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {t(
                      'Sau khi nung qua lò củi truyền thống, bạn sẽ được mang về tác phẩm gốm kỷ niệm mang đậm dấu ấn cá nhân và tình yêu di sản.',
                      'After kiln firing, take home your one-of-a-kind ceramic artifact celebrating heritage craftsmanship.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION B: DONG NAI CUISINE SHOWCASE */}
        {activeSection === 'cuisine' && (
          <div className="space-y-16">
            {/* Quick Cuisine Selector Strip */}
            <div className="flex items-center gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {CUISINE_DATA.map((dish) => {
                const isSelected = selectedCuisine.id === dish.id;
                return (
                  <button
                    key={dish.id}
                    onClick={() => setSelectedCuisine(dish)}
                    className={`px-6 py-4 rounded-2xl border text-left whitespace-nowrap transition-all duration-300 flex items-center gap-3.5 flex-shrink-0 ${
                      isSelected
                        ? 'bg-heritage-gold text-heritage-emerald-dark font-bold border-white shadow-glow-gold'
                        : 'bg-stone-800 text-stone-300 border-stone-700 hover:border-stone-500'
                    }`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name.vi}
                      className="w-12 h-12 rounded-xl object-cover border border-black/20"
                    />
                    <span className="text-sm sm:text-base font-semibold">
                      {language === 'vi' ? dish.name.vi : dish.name.en}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Dish Deep Dive */}
            <div className="bg-stone-800/70 rounded-3xl border border-heritage-gold/40 p-8 lg:p-12 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Food Photography */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-heritage-gold/40 shadow-2xl">
                    <img
                      src={selectedCuisine.image}
                      alt={selectedCuisine.name.vi}
                      className="w-full h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-heritage-gold block mb-1">
                        {language === 'vi' ? selectedCuisine.region.vi : selectedCuisine.region.en}
                      </span>
                      <h4 className="text-xl sm:text-3xl font-serif font-bold text-white">
                        {language === 'vi' ? selectedCuisine.name.vi : selectedCuisine.name.en}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Dish Information */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="px-3.5 py-1.5 rounded-full bg-heritage-ruby text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                      {t('ĐẶC SẢN ĐỒNG NAI', 'DONG NAI SIGNATURE')}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-3 mb-1.5 leading-tight">
                      {language === 'vi' ? selectedCuisine.name.vi : selectedCuisine.name.en}
                    </h3>
                    <p className="text-base sm:text-lg font-serif italic text-heritage-gold mb-4 leading-relaxed">
                      "{language === 'vi' ? selectedCuisine.tagline.vi : selectedCuisine.tagline.en}"
                    </p>
                    <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
                      {language === 'vi' ? selectedCuisine.description.vi : selectedCuisine.description.en}
                    </p>
                  </div>

                  {/* Flavor Profile */}
                  <div className="p-5 rounded-2xl bg-stone-900/80 border border-white/15">
                    <span className="text-xs sm:text-sm font-bold text-heritage-gold uppercase tracking-wider block mb-1.5">
                      {t('HƯƠNG VỊ ĐẶC TRƯNG', 'FLAVOR PROFILE')}
                    </span>
                    <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
                      {language === 'vi' ? selectedCuisine.tasteProfile.vi : selectedCuisine.tasteProfile.en}
                    </p>
                  </div>

                  {/* Ingredients Checklist */}
                  <div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-heritage-gold block mb-3">
                      {t('NGUYÊN LIỆU TRUYỀN THỐNG CHỌN LỌC', 'KEY INGREDIENTS')}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(language === 'vi' ? selectedCuisine.ingredients.vi : selectedCuisine.ingredients.en).map((ing, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm sm:text-base text-stone-200">
                          <CheckCircle2 className="w-4 h-4 text-heritage-gold flex-shrink-0" />
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cultural Significance */}
                  <div className="p-5 rounded-2xl bg-heritage-gold/15 border border-heritage-gold/40">
                    <span className="text-xs sm:text-sm font-bold text-heritage-gold uppercase tracking-wider block mb-1.5">
                      {t('Ý NGHĨA VĂN HÓA ẨM THỰC', 'CULTURAL SIGNIFICANCE')}
                    </span>
                    <p className="text-sm sm:text-base text-heritage-ivory font-light leading-relaxed">
                      {language === 'vi' ? selectedCuisine.culturalSignificance.vi : selectedCuisine.culturalSignificance.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Preview Lightbox Modal */}
      {activePhotoModal && (
        <div
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-heritage-gold/50 shadow-2xl">
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhotoModal}
              alt="Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
