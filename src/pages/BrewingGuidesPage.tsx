import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Droplets, Thermometer, Timer, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { FooterSection } from '../sections/FooterSection';

// --- Types & Data ---
type BrewMethod = 'Chemex' | 'French Press' | 'V60';

interface BrewGuide {
  name: BrewMethod;
  description: string;
  image: string;
  stats: {
    ratio: string;
    grind: string;
    temp: string;
    time: string;
  };
  steps: {
    title: string;
    instruction: string;
  }[];
}

const guidesData: BrewGuide[] = [
  {
    name: 'Chemex',
    description: 'The elegant hourglass brewer produces a remarkably clean, bright cup of coffee thanks to its ultra-thick bonded paper filters.',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
    stats: {
      ratio: '1:16 (30g coffee to 480g water)',
      grind: 'Medium-Coarse (like sea salt)',
      temp: '205°F / 96°C',
      time: '4:00 - 4:30 Minutes',
    },
    steps: [
      { title: 'Prep', instruction: 'Place the filter in the Chemex with the 3-layered side facing the spout. Rinse thoroughly with hot water to remove papery taste and preheat the glass. Discard the rinse water.' },
      { title: 'The Bloom', instruction: 'Add 30g of coffee. Pour 60g of water in a circular motion to saturate all grounds. Wait 45 seconds to let the coffee degas (bloom).' },
      { title: 'First Pour', instruction: 'Starting from the center and spiraling outward, slowly pour 200g of water. Try to avoid pouring directly on the filter paper.' },
      { title: 'Second Pour', instruction: 'Once the water level drops by about an inch, pour the remaining 220g of water. Give the Chemex a gentle swirl to ensure a flat bed.' },
      { title: 'Serve', instruction: 'Let the water draw down completely. Remove the filter, give the coffee a swirl to aerate, and serve.' }
    ]
  },
  {
    name: 'French Press',
    description: 'A classic immersion brewer that yields a heavy-bodied, richly textured cup with intense flavor compounds.',
    image: 'https://loremflickr.com/800/1000/coffee,frenchpress?lock=42',
    stats: {
      ratio: '1:15 (34g coffee to 500g water)',
      grind: 'Coarse (like breadcrumbs)',
      temp: '200°F / 93°C',
      time: '4:00 Minutes',
    },
    steps: [
      { title: 'Prep', instruction: 'Preheat the French Press with hot water, then discard. Add 34g of coarsely ground coffee to the empty carafe.' },
      { title: 'The Pour', instruction: 'Start your timer and pour 500g of hot water evenly over the grounds, ensuring everything is saturated. Do not stir yet.' },
      { title: 'The Crust', instruction: 'A "crust" of coffee grounds will form at the top. Let it sit undisturbed for exactly 4 minutes.' },
      { title: 'The Break', instruction: 'At 4 minutes, use a spoon to gently break the crust and stir the top layer. The grounds will sink. Scoop off any remaining foam if you prefer a cleaner cup.' },
      { title: 'Plunge & Serve', instruction: 'Place the lid on and slowly, gently plunge. Pour the coffee immediately to stop the extraction process.' }
    ]
  },
  {
    name: 'V60',
    description: 'A conical pour-over brewer that offers absolute control over extraction, highlighting delicate floral and fruity notes.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    stats: {
      ratio: '1:16 (20g coffee to 320g water)',
      grind: 'Medium-Fine (like table salt)',
      temp: '205°F / 96°C',
      time: '3:00 - 3:30 Minutes',
    },
    steps: [
      { title: 'Prep', instruction: 'Fold the filter seam and place it in the V60. Rinse heavily with hot water to preheat the ceramic and discard the water. Add 20g of coffee and tap to level.' },
      { title: 'The Bloom', instruction: 'Pour 60g of water to saturate the bed. Gently swirl the V60 to ensure all grounds are wet. Wait 45 seconds.' },
      { title: 'Continuous Pour', instruction: 'In slow, concentric circles, continuously pour water until the scale reads 200g. Keep the water level relatively low.' },
      { title: 'Final Pour', instruction: 'Once the slurry drops slightly, pour the remaining 120g straight down the center to maintain temperature. Give it one final gentle swirl.' },
      { title: 'Serve', instruction: 'Allow the water to draw down. The coffee bed should look flat and muddy. Discard the filter and enjoy.' }
    ]
  }
];

// --- Main Component ---
const BrewingGuidesPage: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<BrewMethod>('Chemex');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeGuide = guidesData.find(g => g.name === activeMethod)!;

  return (
    <div className="min-h-screen bg-[#0D0705] font-body text-[#FDF8F3] selection:bg-[#D4A574] selection:text-white">
      
      {/* ── Navigation Bar ── */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 mix-blend-difference flex justify-between items-center">
        <Link to="/" className="text-white hover:text-[#D4A574] transition-colors flex items-center gap-2">
          <ArrowLeft size={24} />
          <span className="font-medium tracking-widest text-sm uppercase">Back Home</span>
        </Link>
        <div className="font-heading text-2xl text-white italic">Brew & Co.</div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="pt-32 pb-16 px-6 sm:px-12 max-w-5xl mx-auto z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="font-display font-black uppercase text-5xl sm:text-6xl md:text-7xl text-[#F5E6D3] tracking-tighter mb-4 leading-none">
              Master the <span className="text-[#D4A574] italic font-medium tracking-normal">Brew</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-[#FDF8F3]/60 font-light max-w-2xl mx-auto leading-relaxed">
              Great coffee starts with great beans, but the magic happens in the brewing. Explore our step-by-step guides for the perfect cup.
            </p>
          </FadeIn>
        </div>

        {/* ── Interactive Method Tabs ── */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-[#8B5E3C]/20 pb-6">
            {guidesData.map((guide) => (
              <button
                key={guide.name}
                onClick={() => setActiveMethod(guide.name)}
                className={`relative px-6 py-3 font-body text-sm sm:text-base uppercase tracking-widest transition-colors duration-300 ${
                  activeMethod === guide.name ? 'text-[#D4A574]' : 'text-[#F5E6D3]/40 hover:text-[#F5E6D3]'
                }`}
              >
                {guide.name}
                {activeMethod === guide.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-[-25px] left-0 right-0 h-[2px] bg-[#D4A574]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── Guide Content Container ── */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMethod}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
            >
              
              {/* Left Column: Image & Stats */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] relative group">
                  <div className="absolute inset-0 bg-[#D4A574]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={activeGuide.image} 
                    alt={`${activeGuide.name} brewing`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="bg-[#120A07] border border-[#8B5E3C]/20 rounded-3xl p-8 grid grid-cols-2 gap-y-8 gap-x-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#8B5E3C] mb-2">
                      <Scale size={16} />
                      <span className="uppercase text-xs tracking-widest font-semibold">Ratio</span>
                    </div>
                    <p className="text-sm text-[#F5E6D3]">{activeGuide.stats.ratio}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#8B5E3C] mb-2">
                      <Droplets size={16} />
                      <span className="uppercase text-xs tracking-widest font-semibold">Grind</span>
                    </div>
                    <p className="text-sm text-[#F5E6D3]">{activeGuide.stats.grind}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#8B5E3C] mb-2">
                      <Thermometer size={16} />
                      <span className="uppercase text-xs tracking-widest font-semibold">Temp</span>
                    </div>
                    <p className="text-sm text-[#F5E6D3]">{activeGuide.stats.temp}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#8B5E3C] mb-2">
                      <Timer size={16} />
                      <span className="uppercase text-xs tracking-widest font-semibold">Time</span>
                    </div>
                    <p className="text-sm text-[#F5E6D3]">{activeGuide.stats.time}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Steps */}
              <div className="lg:col-span-7 py-4">
                <h2 className="font-display italic text-[#D4A574] text-3xl sm:text-4xl mb-4">
                  The {activeGuide.name} Method
                </h2>
                <p className="text-[#FDF8F3]/60 leading-relaxed mb-12">
                  {activeGuide.description}
                </p>

                <div className="space-y-12">
                  {activeGuide.steps.map((step, index) => (
                    <div key={index} className="relative pl-12 sm:pl-16 group">
                      {/* Step Number Badge */}
                      <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D4A574]/30 flex items-center justify-center bg-[#0D0705] group-hover:bg-[#D4A574] group-hover:text-white transition-colors duration-300 z-10">
                        <span className="font-heading text-sm sm:text-base text-[#D4A574] group-hover:text-[#0D0705]">
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Connecting Line */}
                      {index !== activeGuide.steps.length - 1 && (
                        <div className="absolute left-4 sm:left-5 top-10 bottom-[-48px] w-px bg-[#8B5E3C]/20" />
                      )}

                      <h3 className="font-heading text-xl text-white mb-3">{step.title}</h3>
                      <p className="text-[#FDF8F3]/50 text-sm sm:text-base leading-relaxed">
                        {step.instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Footer ── */}
      <FooterSection />
    </div>
  );
};

export default BrewingGuidesPage;
