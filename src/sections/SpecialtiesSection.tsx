import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { GhostButton } from '../components/Buttons';

interface BlendData {
  number: string;
  name: string;
  category: string;
  description: string;
  origin: string;
  roastLevel: string;
  notes: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

const blends: BlendData[] = [
  {
    number: '01',
    name: 'Ethiopian Yirgacheffe',
    category: 'Single Origin',
    description:
      'Grown at elevations of 1,700–2,200m in the birthplace of coffee. This light roast reveals delicate floral aromas with vibrant citrus undertones — a cup that dances on your palate.',
    origin: 'Yirgacheffe, Ethiopia',
    roastLevel: 'Light',
    notes: 'Jasmine, Bergamot, Lemon Zest',
    images: {
      col1Top: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
      col1Bottom: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80',
      col2: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    },
  },
  {
    number: '02',
    name: 'Colombian Supremo',
    category: 'House Blend',
    description:
      'Our flagship house blend sourced from the lush mountains of Huila. Medium-roasted to unlock a rich, balanced sweetness — perfect for any time of day.',
    origin: 'Huila, Colombia',
    roastLevel: 'Medium',
    notes: 'Milk Chocolate, Walnut, Caramel',
    images: {
      col1Top: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
      col1Bottom: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80',
      col2: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    },
  },
  {
    number: '03',
    name: 'Sumatra Mandheling',
    category: 'Dark Roast',
    description:
      'From the volcanic soils of North Sumatra, this bold dark roast delivers a full-bodied, earthy complexity with a smooth, lingering finish that true coffee lovers crave.',
    origin: 'Mandheling, Sumatra',
    roastLevel: 'Dark',
    notes: 'Dark Cocoa, Cedar, Spice',
    images: {
      col1Top: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
      col1Bottom: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
      col2: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80',
    },
  },
  {
    number: '04',
    name: 'Costa Rica Tarrazu',
    category: 'Single Origin',
    description:
      'A brilliantly clean, sweet cup from the high-altitude Tarrazu region. Expect bright acidity with notes of honey and green apple that make for a refreshing morning brew.',
    origin: 'Tarrazu, Costa Rica',
    roastLevel: 'Medium-Light',
    notes: 'Honey, Green Apple, Citrus',
    images: {
      col1Top: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80',
      col1Bottom: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80',
      col2: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=80',
    },
  },
  {
    number: '05',
    name: 'Guatemala Antigua',
    category: 'Single Origin',
    description:
      'Grown in nutrient-rich volcanic soil, this coffee offers a complex, full-bodied profile with a distinctive smoky sweetness and a velvety finish you won\'t forget.',
    origin: 'Antigua, Guatemala',
    roastLevel: 'Medium',
    notes: 'Cocoa, Smoky Spice, Caramel',
    images: {
      col1Top: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
      col1Bottom: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80',
      col2: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=600&q=80',
    },
  },
];

const TOTAL_CARDS = blends.length;

interface SpecialtyCardProps {
  blend: BlendData;
  index: number;
  totalCards: number;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ blend, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="mb-8 md:mb-0 md:h-[90vh]"
      style={{ position: 'relative' }}
    >
      <motion.div
        className="md:sticky origin-top"
        style={{
          scale,
          top: `calc(6rem + ${index * 24}px)`,
        }}
      >
        <div
          className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden shadow-2xl"
          style={{
            backgroundColor: '#1A0F08',
            borderColor: 'rgba(212, 165, 116, 0.2)',
          }}
        >
          {/* Layout: Horizontal on Desktop, Vertical on Mobile */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left side: Content */}
            <div className="w-full lg:w-[45%] flex flex-col justify-between">
              <div>
                {/* Number & Category */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="font-display font-black text-[#D4A574] leading-none"
                    style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
                  >
                    {blend.number}
                  </span>
                  <span className="font-body uppercase text-xs tracking-widest px-4 py-1.5 rounded-full border border-[#D4A574]/30 text-[#D4A574]">
                    {blend.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F5E6D3] mb-6 leading-tight">
                  {blend.name}
                </h3>

                {/* Description */}
                <p className="font-body text-[#F5E6D3]/70 leading-relaxed text-base sm:text-lg mb-8 max-w-lg">
                  {blend.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                  <div>
                    <span className="font-body text-[11px] uppercase tracking-widest text-[#D4A574] block mb-1">
                      Origin
                    </span>
                    <span className="font-body text-sm text-[#F5E6D3]/90">
                      {blend.origin}
                    </span>
                  </div>
                  <div>
                    <span className="font-body text-[11px] uppercase tracking-widest text-[#D4A574] block mb-1">
                      Roast
                    </span>
                    <span className="font-body text-sm text-[#F5E6D3]/90">
                      {blend.roastLevel}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="font-body text-[11px] uppercase tracking-widest text-[#D4A574] block mb-1">
                      Notes
                    </span>
                    <span className="font-body text-sm text-[#F5E6D3]/90">
                      {blend.notes}
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div>
                <GhostButton label="Shop Now" />
              </div>
            </div>

            {/* Right side: Images */}
            <div className="w-full lg:w-[55%] flex gap-3 sm:gap-4 h-[300px] sm:h-[400px] lg:h-[500px]">
              <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
                <div className="h-[45%] rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#D4A574]/10">
                  <img
                    src={blend.images.col1Top}
                    alt={`${blend.name} top view`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="h-[55%] rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#D4A574]/10">
                  <img
                    src={blend.images.col1Bottom}
                    alt={`${blend.name} bottom view`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-[60%] rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#D4A574]/10">
                <img
                  src={blend.images.col2}
                  alt={`${blend.name} main view`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SpecialtiesSection: React.FC = () => {
  return (
    <section
      id="specialties"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0D0705' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-display font-black uppercase text-center leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Our Blends
        </h2>
        <p
          className="text-center font-body font-light max-w-lg mx-auto mb-16 sm:mb-20 md:mb-28"
          style={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
        >
          Hand-selected beans from premier growing regions, roasted to reveal their unique character.
        </p>
      </FadeIn>

      {/* Sticky-stacking cards */}
      <div className="max-w-7xl mx-auto">
        {blends.map((blend, i) => (
          <SpecialtyCard
            key={blend.number}
            blend={blend}
            index={i}
            totalCards={TOTAL_CARDS}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialtiesSection;
