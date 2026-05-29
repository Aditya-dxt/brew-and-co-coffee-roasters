import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { FooterSection } from '../sections/FooterSection';

// --- 3D Tilt Card Component ---
const TiltCard: React.FC<{
  blend: any;
  index: number;
}> = ({ blend, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the card center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Convert to percentage (-1 to 1)
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    
    // Apply rotation based on position
    setRotateX(yPct * -15); // Max tilt 15 degrees
    setRotateY(xPct * 15);
  };

  const handleMouseLeave = () => {
    // Reset to flat
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <FadeIn delay={index * 0.15} y={40}>
      <motion.div
        className="relative group perspective-[1500px]"
        style={{ perspective: 1500 }}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX, rotateY }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
          className="relative bg-gradient-to-b from-[#1A0F08] to-[#120A07] border border-[#8B5E3C]/20 rounded-3xl p-8 sm:p-10 flex flex-col h-full transform-style-3d cursor-pointer shadow-2xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Inner glassmorphism glow that moves opposite to the tilt for a parallax highlight */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl pointer-events-none"
            animate={{ 
              x: rotateY * -1, 
              y: rotateX * -1,
              opacity: (Math.abs(rotateX) + Math.abs(rotateY)) / 30 + 0.1 
            }}
          />

          <div className="relative z-10 transform-style-3d" style={{ transform: 'translateZ(50px)' }}>
            <h3 className="font-display italic text-[#D4A574] text-3xl sm:text-4xl mb-2">{blend.name}</h3>
            <p className="font-body text-[#F5E6D3]/40 tracking-widest uppercase text-xs sm:text-sm mb-6">{blend.category}</p>
            
            <p className="font-body text-[#F5E6D3]/70 leading-relaxed mb-8">
              {blend.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-auto">
              <div>
                <p className="text-[#8B5E3C] uppercase text-xs tracking-widest mb-1">Origin</p>
                <p className="text-[#F5E6D3] text-sm">{blend.origin}</p>
              </div>
              <div>
                <p className="text-[#8B5E3C] uppercase text-xs tracking-widest mb-1">Roast</p>
                <p className="text-[#F5E6D3] text-sm">{blend.roast}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[#8B5E3C] uppercase text-xs tracking-widest mb-1">Tasting Notes</p>
                <p className="text-[#F5E6D3] text-sm">{blend.notes}</p>
              </div>
            </div>
          </div>
          
          {/* Decorative floating image element (simulating a bag or prominent bean) */}
          <motion.div 
            className="absolute -right-10 -top-10 w-40 h-40 opacity-30 rounded-full blur-xl pointer-events-none"
            style={{ 
              background: blend.color,
              transform: 'translateZ(20px)'
            }}
            animate={{ 
              x: rotateY * 2, 
              y: rotateX * 2,
            }}
          />
        </motion.div>
      </motion.div>
    </FadeIn>
  );
};

// --- Main Page Component ---
const BlendsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blendsData = [
    {
      name: 'Midnight Espresso',
      category: 'Signature Blend',
      description: 'Our award-winning house espresso blend. Rich, syrupy, and incredibly balanced. Designed to cut through milk beautifully while remaining complex and sweet as a straight shot.',
      origin: 'Brazil, Colombia, Ethiopia',
      roast: 'Medium-Dark',
      notes: 'Dark Chocolate, Molasses, Hazelnut',
      color: 'radial-gradient(circle, #5c2c16 0%, transparent 70%)'
    },
    {
      name: 'Ethiopia Yirgacheffe',
      category: 'Single Origin',
      description: 'A delicate, tea-like coffee from the birthplace of coffee itself. Expect vibrant floral aromatics and a sparkling, clean acidity that dances on the palate.',
      origin: 'Yirgacheffe, Ethiopia',
      roast: 'Light',
      notes: 'Jasmine, Bergamot, Meyer Lemon',
      color: 'radial-gradient(circle, #c4995c 0%, transparent 70%)'
    },
    {
      name: 'Sumatra Mandheling',
      category: 'Single Origin',
      description: 'Earthy, intensely full-bodied, and incredibly smooth. This wet-hulled Indonesian classic brings deep savory notes and a lingering, almost spicy finish.',
      origin: 'Sumatra, Indonesia',
      roast: 'Dark',
      notes: 'Cedar, Pipe Tobacco, Baker\'s Chocolate',
      color: 'radial-gradient(circle, #3a2218 0%, transparent 70%)'
    },
    {
      name: 'Dawn Patrol',
      category: 'Morning Blend',
      description: 'Bright and punchy to wake you up. A higher acidity blend designed for filter brewing. Crisp fruit notes balance out a sweet caramel foundation.',
      origin: 'Kenya, Costa Rica',
      roast: 'Light-Medium',
      notes: 'Green Apple, Honey, Caramel',
      color: 'radial-gradient(circle, #d47e45 0%, transparent 70%)'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0705] font-body text-[#FDF8F3] selection:bg-[#D4A574] selection:text-white relative overflow-hidden">
      
      {/* --- Ambient Drifting Background Elements --- */}
      <motion.div 
        className="fixed top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#8B5E3C] opacity-[0.03] blur-[100px] pointer-events-none"
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="fixed bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#D4A574] opacity-[0.02] blur-[120px] pointer-events-none"
        animate={{ 
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Navigation Bar ── */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 mix-blend-difference flex justify-between items-center">
        <Link to="/" className="text-white hover:text-[#D4A574] transition-colors flex items-center gap-2">
          <ArrowLeft size={24} />
          <span className="font-medium tracking-widest text-sm uppercase">Back Home</span>
        </Link>
        <div className="font-heading text-2xl text-white italic">Brew & Co.</div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-20 px-6 sm:px-12 max-w-7xl mx-auto z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h1 className="font-display font-black uppercase text-6xl sm:text-7xl md:text-8xl text-[#F5E6D3] tracking-tighter mb-6 leading-none">
              Signature <span className="text-[#D4A574] italic font-medium tracking-normal">Blends</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-[#FDF8F3]/60 font-light max-w-2xl mx-auto leading-relaxed">
              Hover over our carefully curated selection to explore the complex origins, meticulous roasting profiles, and distinct tasting notes of our finest coffees.
            </p>
          </FadeIn>
        </div>

        {/* ── 3D Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
          {blendsData.map((blend, i) => (
            <TiltCard key={blend.name} blend={blend} index={i} />
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <FooterSection />
    </div>
  );
};

export default BlendsPage;
