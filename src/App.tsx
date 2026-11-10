import React, { useState } from 'react';
import { CinematicIntro } from './components/cinematic/CinematicIntro';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { HeritageSection } from './components/sections/HeritageSection';
import { CraftsAndCuisineSection } from './components/sections/CraftsAndCuisineSection';
import { InteractiveMapSection } from './components/sections/InteractiveMapSection';
import { VirtualTourSection } from './components/sections/VirtualTourSection';
import { AboutSection } from './components/sections/AboutSection';
import { Footer } from './components/sections/Footer';
import { Landmark3DViewer } from './components/modals/Landmark3DViewer';
import { Virtual360Modal } from './components/modals/Virtual360Modal';
import { LANDMARKS } from './data/landmarksData';
import { Landmark } from './types';
import { AnimatePresence, motion } from 'framer-motion';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activeLandmark3D, setActiveLandmark3D] = useState<Landmark | null>(null);
  const [activeVirtual360, setActiveVirtual360] = useState<Landmark | null>(null);

  const handleOpenLandmark3DById = (id: string) => {
    const found = LANDMARKS.find((l) => l.id === id);
    if (found) {
      setActiveLandmark3D(found);
    }
  };

  const handleScrollToHeritage = () => {
    const el = document.getElementById('heritage');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-heritage-ivory text-heritage-charcoal">
      {/* 1. CINEMATIC 3D INTRO MODAL / COVER */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="cinematic-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <CinematicIntro onEnterSite={() => setShowIntro(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN WEBSITE UI */}
      {!showIntro && (
        <motion.div
          key="main-website"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col min-h-screen"
        >
          {/* Navigation */}
          <Navbar onOpenIntro={() => setShowIntro(true)} />

          <main className="flex-1">
            {/* Hero Section */}
            <Hero
              onOpenIntro={() => setShowIntro(true)}
              onExploreHeritage={handleScrollToHeritage}
            />

            {/* Section 1: Di Sản & Danh Thắng (5 Destinations) */}
            <HeritageSection
              onOpenLandmark3D={(landmark) => setActiveLandmark3D(landmark)}
              onOpenVirtual360={(landmark) => setActiveVirtual360(landmark)}
            />

            {/* Section 2: Làng Nghề & Ẩm Thực */}
            <CraftsAndCuisineSection />

            {/* Interactive Tourism Map */}
            <InteractiveMapSection
              onOpenLandmark3D={handleOpenLandmark3DById}
            />

            {/* Virtual Reality 360 Tour */}
            <VirtualTourSection
              onOpenVirtual360={(landmark) => setActiveVirtual360(landmark)}
            />

            {/* About Dong Nai */}
            <AboutSection />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}

      {/* 3. INTERACTIVE 3D LANDMARK MODAL */}
      {activeLandmark3D && (
        <Landmark3DViewer
          landmark={activeLandmark3D}
          onClose={() => setActiveLandmark3D(null)}
        />
      )}

      {/* 4. VIRTUAL 360 PANORAMA MODAL */}
      {activeVirtual360 && (
        <Virtual360Modal
          landmark={activeVirtual360}
          onClose={() => setActiveVirtual360(null)}
        />
      )}
    </div>
  );
};

export default App;
