import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Landmark } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, RotateCw, Eye, Sparkles } from 'lucide-react';

interface Virtual360ModalProps {
  landmark: Landmark;
  onClose: () => void;
}

// 360 Sphere Panorama Inner Mesh
function SpherePanorama({ url, isAutoRotate }: { url: string; isAutoRotate: boolean }) {
  const texture = useTexture(url);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (isAutoRotate && meshRef.current) {
      meshRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export const Virtual360Modal: React.FC<Virtual360ModalProps> = ({ landmark, onClose }) => {
  const { language, t } = useLanguage();
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [currentVantage, setCurrentVantage] = useState<number>(0);

  // High-res equirectangular panoramic image choices
  const vantageImages = landmark.gallery.length > 0 ? landmark.gallery : [landmark.heroImage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 md:p-6 select-none animate-fadeIn">
      <div className="relative w-full h-full max-w-7xl max-h-[92vh] bg-black rounded-2xl border border-heritage-gold/50 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Floating Control Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-heritage-gold flex items-center justify-center bg-heritage-emerald-dark/80 backdrop-blur-md shadow-glow-gold">
              <Compass className="w-5 h-5 text-heritage-gold animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-heritage-gold bg-heritage-gold/20 px-2.5 py-0.5 rounded-full border border-heritage-gold/40">
                  {t('KHÁM PHÁ TOÀN CẢNH 360°', '360° VIRTUAL PANORAMA')}
                </span>
                <span className="text-xs text-white/70">
                  {t('Điểm ngắm', 'Vantage point')} #{currentVantage + 1}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mt-0.5">
                {language === 'vi' ? landmark.name.vi : landmark.name.en}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Auto Rotation */}
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
                isAutoRotate
                  ? 'bg-heritage-gold text-heritage-emerald-dark border-white font-bold'
                  : 'bg-white/10 text-white/80 border-white/20 hover:border-white'
              }`}
              title={t('Tự động xoay toàn cảnh', 'Auto Rotate Panorama')}
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-heritage-ruby text-white font-semibold text-xs hover:bg-red-700 transition-all shadow-lg"
            >
              {t('Thoát 360°', 'Exit 360°')} ✕
            </button>
          </div>
        </div>

        {/* 360 Canvas */}
        <div className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
            <Suspense fallback={null}>
              <SpherePanorama
                url={vantageImages[currentVantage] || landmark.heroImage}
                isAutoRotate={isAutoRotate}
              />
            </Suspense>
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              rotateSpeed={-0.5}
              minDistance={1}
              maxDistance={100}
            />
          </Canvas>

          {/* Compass / Orientation Indicator in bottom center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-heritage-gold/30 backdrop-blur-md text-xs text-heritage-ivory/90">
              <Eye className="w-3.5 h-3.5 text-heritage-gold" />
              <span>{t('Kéo chuột tự do 360 độ để khám phá không gian', 'Drag freely 360° to explore the environment')}</span>
            </div>
          </div>

          {/* Vantage switcher pills bottom right */}
          {vantageImages.length > 1 && (
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/60 p-2 rounded-2xl border border-white/15 backdrop-blur-md">
              <span className="text-[11px] text-white/60 px-2 font-mono">{t('Góc nhìn', 'View')}:</span>
              {vantageImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVantage(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    currentVantage === idx
                      ? 'bg-heritage-gold text-heritage-emerald-dark shadow-glow-gold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}

          {/* WebXR Badge */}
          <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-heritage-emerald-dark/80 border border-heritage-gold/30 backdrop-blur-md text-xs text-heritage-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Hỗ trợ chế độ thực tế ảo WebXR / VR Headsets', 'WebXR / VR Headset Immersive Ready')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
