import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { FooterSection } from '../sections/FooterSection';

const OurStoryPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&q=80"
            alt="Coffee Roasting"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0705]/50 via-transparent to-[#0D0705]"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
              Our Journey
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-[#FDF8F3]/70 font-light max-w-2xl mx-auto leading-relaxed">
              From a small garage roaster to a globally recognized artisan cafe, our passion has always been the same: crafting the perfect cup of coffee.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── The Timeline ── */}
      <section className="py-24 px-6 sm:px-12 relative">
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#8B5E3C]/30 transform sm:-translate-x-1/2"></div>

          <div className="space-y-24">
            {/* 2015 */}
            <FadeIn>
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between group">
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-[#D4A574] rounded-full transform -translate-x-1.5 sm:-translate-x-1.5 mt-2 sm:mt-0 shadow-[0_0_15px_rgba(212,165,116,0.5)]"></div>
                <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:text-right">
                  <h3 className="font-heading text-4xl text-white mb-2">2018</h3>
                  <h4 className="text-[#D4A574] font-medium tracking-wider text-sm uppercase mb-3">The Humble Beginnings</h4>
                  <p className="text-[#FDF8F3]/60 leading-relaxed text-sm sm:text-base">
                    Armed with a single 1kg roaster and a passion for ethically sourced beans, we started roasting in a tiny garage, selling our first batches at local farmer's markets.
                  </p>
                </div>
                <div className="hidden sm:block w-[45%]">
                  <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80" alt="Early Roasting" className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </FadeIn>

            {/* 2020 */}
            <FadeIn delay={0.1}>
              <div className="relative flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between group">
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-[#D4A574] rounded-full transform -translate-x-1.5 sm:-translate-x-1.5 mt-2 sm:mt-0 shadow-[0_0_15px_rgba(212,165,116,0.5)]"></div>
                <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                  <h3 className="font-heading text-4xl text-white mb-2">2021</h3>
                  <h4 className="text-[#D4A574] font-medium tracking-wider text-sm uppercase mb-3">The First Cafe</h4>
                  <p className="text-[#FDF8F3]/60 leading-relaxed text-sm sm:text-base">
                    We opened the doors to our first brick-and-mortar cafe. It was designed to be a sanctuary for coffee lovers, where the aroma of freshly roasted beans filled the air daily.
                  </p>
                </div>
                <div className="hidden sm:block w-[45%]">
                  <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80" alt="First Cafe" className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </FadeIn>

            {/* Today */}
            <FadeIn delay={0.2}>
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between group">
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-[#D4A574] rounded-full transform -translate-x-1.5 sm:-translate-x-1.5 mt-2 sm:mt-0 shadow-[0_0_15px_rgba(212,165,116,0.5)]"></div>
                <div className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:text-right">
                  <h3 className="font-heading text-4xl text-white mb-2">Today</h3>
                  <h4 className="text-[#D4A574] font-medium tracking-wider text-sm uppercase mb-3">A Global Community</h4>
                  <p className="text-[#FDF8F3]/60 leading-relaxed text-sm sm:text-base">
                    While our scale has changed, our philosophy hasn't. We still meticulously cup every roast and partner directly with farmers across the globe to bring you the perfect cup.
                  </p>
                </div>
                <div className="hidden sm:block w-[45%]">
                  <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80" alt="Current Cafe" className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 px-6 sm:px-12 bg-[#120A07]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-4xl sm:text-5xl text-center text-white mb-16">Our Philosophy</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <FadeIn delay={0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full border border-[#D4A574]/30 flex items-center justify-center mb-6 text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all duration-300">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-heading text-white mb-3">Ethical Sourcing</h3>
                <p className="text-[#FDF8F3]/50 text-sm leading-relaxed">
                  We work directly with farmers, ensuring fair wages and sustainable agricultural practices.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full border border-[#D4A574]/30 flex items-center justify-center mb-6 text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all duration-300">
                  <Coffee size={24} />
                </div>
                <h3 className="text-xl font-heading text-white mb-3">Artisan Roasting</h3>
                <p className="text-[#FDF8F3]/50 text-sm leading-relaxed">
                  Small batch roasting allows us to bring out the unique, delicate flavors of every single bean.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full border border-[#D4A574]/30 flex items-center justify-center mb-6 text-[#D4A574] group-hover:bg-[#D4A574] group-hover:text-white transition-all duration-300">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-heading text-white mb-3">Community First</h3>
                <p className="text-[#FDF8F3]/50 text-sm leading-relaxed">
                  Our cafes are designed to be warm, inviting spaces where people can connect, work, and relax.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <FooterSection />
    </div>
  );
};

export default OurStoryPage;
