import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Volume2, VolumeX, Menu, X, Compass, Globe, Sparkles } from 'lucide-react';
import { ambientSound } from '../../utils/audioGenerator';

interface NavbarProps {
  onOpenIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenIntro }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const playing = ambientSound.toggle();
    setIsAudioActive(playing);
  };

  const navLinks = [
    { href: '#heritage', label: { vi: 'Di Tích & Danh Thắng', en: 'Heritage & Landmarks' } },
    { href: '#crafts-cuisine', label: { vi: 'Làng Nghề & Ẩm Thực', en: 'Crafts & Gastronomy' } },
    { href: '#map', label: { vi: 'Bản Đồ Di Sản', en: 'Interactive Map' } },
    { href: '#virtual-tour', label: { vi: 'Khám Phá 360° VR', en: 'Virtual 360° VR' } },
    { href: '#about', label: { vi: 'Về Đồng Nai', en: 'About Dong Nai' } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 select-none ${
        isScrolled
          ? 'bg-heritage-emerald-dark/95 backdrop-blur-md py-3 border-b border-heritage-gold/30 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-heritage-gold flex items-center justify-center bg-heritage-forest/60 group-hover:scale-105 transition-transform shadow-glow-gold">
            <Compass className="w-5 h-5 text-heritage-gold" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg md:text-xl text-heritage-ivory tracking-wider group-hover:text-heritage-gold transition-colors">
                ĐỒNG NAI
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-heritage-gold px-1.5 py-0.5 rounded bg-heritage-gold/20 border border-heritage-gold/40">
                3D
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-heritage-gold font-medium block">
              "OUR CULTURE, OUR FUTURE"
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-heritage-ivory/80 hover:text-heritage-gold font-medium transition-colors relative py-1 group"
            >
              {language === 'vi' ? link.label.vi : link.label.en}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-heritage-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Controls & Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Sound Ambiance Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className={`p-2 rounded-full border transition-all duration-300 backdrop-blur-md ${
              isAudioActive
                ? 'bg-heritage-gold text-heritage-emerald-dark border-white shadow-glow-gold'
                : 'bg-white/10 text-heritage-ivory/80 border-heritage-gold/30 hover:border-heritage-gold'
            }`}
            title={isAudioActive ? t('Tắt âm thanh sông nước & đàn tranh', 'Mute ambient soundscape') : t('Bật âm thanh sông nước & đàn tranh', 'Play ambient soundscape')}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Bilingual Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-heritage-gold/40 bg-white/5 backdrop-blur-md hover:border-heritage-gold text-xs font-semibold text-heritage-ivory tracking-wider transition-all"
            title={t('Chuyển đổi ngôn ngữ', 'Switch language')}
          >
            <Globe className="w-3.5 h-3.5 text-heritage-gold" />
            <span>{language === 'vi' ? 'VI' : 'EN'}</span>
          </button>

          {/* Re-enter 3D Intro Button */}
          <button
            onClick={onOpenIntro}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-heritage-gold bg-heritage-gold/15 hover:bg-heritage-gold hover:text-heritage-emerald-dark text-xs font-semibold text-heritage-gold transition-all duration-300 shadow-glow-gold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Sa bàn 3D', '3D Diorama')}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/20 text-heritage-ivory"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-heritage-emerald-dark/98 border-b border-heritage-gold/30 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-heritage-ivory hover:text-heritage-gold py-1"
              >
                {language === 'vi' ? link.label.vi : link.label.en}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  onOpenIntro();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xs font-semibold text-heritage-gold"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t('Mở lại Sa bàn 3D Intro', 'Open 3D Intro Diorama')}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
