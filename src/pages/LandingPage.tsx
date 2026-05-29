import React, { useEffect, useRef } from 'react';
import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import MenuSection from '../sections/MenuSection';
import SpecialtiesSection from '../sections/SpecialtiesSection';
import { FooterSection } from '../sections/FooterSection';
const LandingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen font-body relative"
      style={{
        backgroundColor: '#0D0705',
        color: '#FDF8F3',
      }}
    >
      {/* 
        A subtle noise texture overlay to give that premium analog feel 
        using a mix-blend-mode trick 
      */}
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <MenuSection />
        <SpecialtiesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default LandingPage;
