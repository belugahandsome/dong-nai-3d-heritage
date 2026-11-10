import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Compass, Sparkles, ArrowRight, Eye, FastForward } from 'lucide-react';
import { DongNaiMiniatureScene, MINI_LANDMARKS } from './DongNaiMiniatureScene';
import { useLanguage } from '../../context/LanguageContext';
import { ambientSound } from '../../utils/audioGenerator';

interface CinematicIntroProps {
  onEnterSite: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onEnterSite }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeLandmark, setActiveLandmark] = useState<number>(0);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [webGLError, setWebGLError] = useState<boolean>(false);

  // Simulated smooth loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsReady(true), 400);
          return 100;
        }
        return prev + 15;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Cycle landmarks periodically if user doesn't click
  useEffect(() => {
    if (!isReady) return;
    const interval = setInterval(() => {
      setActiveLandmark((prev) => (prev + 1) % MINI_LANDMARKS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isReady]);

  const toggleSound = () => {
    const playing = ambientSound.toggle();
    setIsAudioActive(playing);
  };

  // WebGL Fallback detection
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLError(true);
      }
    } catch {
      setWebGLError(true);
    }
  }, []);

  const currentHighlight = MINI_LANDMARKS[activeLandmark];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#04100B] via-[#081B12] to-[#0A261A] text-heritage-ivory select-none">
      {/* Top Bar Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-heritage-gold/50 flex items-center justify-center bg-heritage-emerald-dark/60 backdrop-blur-md shadow-glow-gold">
            <Compass className="w-5 h-5 text-heritage-gold animate-spin-slow" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-heritage-gold font-semibold block">
              {t('TRẢI NGHIỆM 3D DI SẢN', '3D HERITAGE EXPERIENCE')}
            </span>
            <span className="text-sm font-serif tracking-wider text-heritage-ivory/80">
              ĐỒNG NAI VIỆT NAM
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className={`p-2.5 rounded-full border transition-all duration-300 backdrop-blur-md ${
              isAudioActive
                ? 'bg-heritage-gold text-heritage-emerald-dark border-white shadow-glow-gold'
                : 'bg-black/40 text-heritage-ivory/80 border-heritage-gold/30 hover:border-heritage-gold'
            }`}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-3.5 py-1.5 rounded-full border border-heritage-gold/40 bg-black/40 backdrop-blur-md hover:border-heritage-gold text-xs font-semibold tracking-wider transition-all"
          >
            {language === 'vi' ? 'VI 🇻🇳' : 'EN 🇬🇧'}
          </button>

          {/* Quick Skip Intro Button */}
          <button
            onClick={onEnterSite}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-heritage-ivory/20 bg-white/5 backdrop-blur-md hover:bg-white/15 text-xs text-heritage-ivory/80 hover:text-white transition-all"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>{t('Bỏ qua giới thiệu', 'Skip Intro')}</span>
          </button>
        </div>
      </div>

      {/* Loading Screen Overlay */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#05140D]"
          >
            <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
              <div className="w-20 h-20 mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-heritage-gold/20 animate-ping" />
                <div className="w-16 h-16 rounded-full border-2 border-heritage-gold border-t-transparent animate-spin" />
                <Sparkles className="w-6 h-6 text-heritage-gold absolute" />
              </div>

              <h2 className="text-xl md:text-2xl font-serif text-heritage-ivory mb-2 tracking-wide">
                {t('Khởi tạo không gian Di sản 3D...', 'Initializing 3D Heritage Realm...')}
              </h2>
              <p className="text-xs text-heritage-ivory/60 mb-6 font-light">
                {t('Tải dữ liệu sa bàn tương tác Đồng Nai', 'Loading Dong Nai interactive diorama')}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-heritage-gold to-yellow-200"
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>
              <span className="text-[10px] text-heritage-gold font-mono mt-2">
                {loadingProgress}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Scene Viewport or WebGL Fallback */}
      <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
        {!webGLError ? (
          <Canvas shadows dpr={[1, 2]}>
            <fog attach="fog" args={['#05150E', 7, 24]} />
            <PerspectiveCamera makeDefault position={[0, 4.8, 7.5]} fov={45} />
            <Suspense fallback={null}>
              <DongNaiMiniatureScene
                activeLandmarkIndex={activeLandmark}
                onSelectLandmark={(idx) => setActiveLandmark(idx)}
                language={language}
              />
            </Suspense>
            <OrbitControls
              enablePan={false}
              maxPolarAngle={Math.PI / 2.1}
              minPolarAngle={Math.PI / 6}
              minDistance={5}
              maxDistance={12}
              rotateSpeed={0.6}
            />
          </Canvas>
        ) : (
          /* WebGL Fallback View */
          <div className="w-full h-full flex items-center justify-center bg-heritage-emerald-dark p-8">
            <div className="max-w-md text-center p-8 rounded-2xl bg-white/5 border border-heritage-gold/30 backdrop-blur-md">
              <Eye className="w-12 h-12 text-heritage-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif text-heritage-ivory mb-2">
                {t('Chế độ hiển thị tương thích', 'Compatible Display Mode')}
              </h3>
              <p className="text-sm text-heritage-ivory/70 mb-4">
                {t(
                  'Trình duyệt đang sử dụng chế độ giao diện đồ họa 2.5D. Tất cả tính năng di sản vẫn hoạt động đầy đủ.',
                  'Your browser is using the 2.5D visual mode. All heritage features are fully accessible.'
                )}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Main Content Overlay & Call to Action */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-gradient-to-t from-[#04100B] via-[#04100B]/80 to-transparent">
        {/* Title and Vietnamese subtitle */}
        <div className="max-w-xl pointer-events-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-heritage-gold/30 via-yellow-400/20 to-heritage-gold/30 border border-heritage-gold text-heritage-gold text-xs font-bold uppercase tracking-widest shadow-glow-gold">
              "OUR CULTURE, OUR FUTURE"
            </span>
            <span className="text-xs text-heritage-ivory/70 italic hidden sm:inline">
              | {language === 'vi' ? `Tiêu điểm: ${currentHighlight.name.vi}` : `Focusing: ${currentHighlight.name.en}`}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-heritage-ivory leading-tight tracking-tight drop-shadow-md">
            DONG NAI
          </h1>
          <p className="text-sm md:text-lg font-serif text-heritage-gold-light mt-1 tracking-wide italic">
            "Đồng Nai – Miền di sản, sắc màu văn hóa"
          </p>
          <p className="text-xs md:text-sm text-heritage-ivory/70 mt-2 font-light line-clamp-2 max-w-lg">
            {t(
              'Hành trình tương tác 3D đưa bạn khám phá hơn 325 năm trầm tích lịch sử, danh thắng tráng lệ, làng nghề gốm trứ danh và tinh hoa ẩm thực miền đất đỏ phương Nam.',
              'An interactive 3D voyage exploring over 325 years of rich historical chronicles, majestic landscapes, legendary ceramics, and refined culinary heritage.'
            )}
          </p>

          {/* Quick Landmark Thumbnails */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
            {MINI_LANDMARKS.map((lm, idx) => (
              <button
                key={lm.id}
                onClick={() => setActiveLandmark(idx)}
                className={`text-[11px] px-3 py-1.5 rounded-full border transition-all whitespace-nowrap ${
                  activeLandmark === idx
                    ? 'bg-heritage-gold text-heritage-emerald-dark border-white font-bold shadow-glow-gold'
                    : 'bg-black/40 text-heritage-ivory/70 border-white/10 hover:border-heritage-gold/50'
                }`}
              >
                {language === 'vi' ? lm.name.vi : lm.name.en}
              </button>
            ))}
          </div>
        </div>

        {/* Enter Site Button */}
        <div className="pointer-events-auto flex flex-col items-center md:items-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onEnterSite}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-heritage-gold via-yellow-400 to-heritage-gold-dark text-heritage-emerald-dark font-bold text-base md:text-lg tracking-wider uppercase shadow-2xl shadow-yellow-500/25 hover:shadow-glow-gold transition-all duration-300"
          >
            <span>{t('KHÁM PHÁ ĐỒNG NAI', 'EXPLORE DONG NAI')}</span>
            <div className="w-8 h-8 rounded-full bg-heritage-emerald-dark/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 text-heritage-emerald-dark" />
            </div>
          </motion.button>

          <span className="text-[11px] text-heritage-ivory/50 mt-2 flex items-center gap-1 font-light">
            <span>{t('Kéo chuột để xoay sa bàn 3D', 'Drag mouse to rotate 3D diorama')}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
