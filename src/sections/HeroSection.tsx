import { FadeIn } from '../components/FadeIn';
import { OrderButton } from '../components/Buttons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = ['Menu', 'Our Story', 'Blends', 'Contact'] as const;

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col bg-[#0D0705]"
      style={{ overflowX: 'clip' }}
    >
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(139,94,60,0.12) 0%, transparent 70%)',
        }}
      />

      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          <span className="font-display text-2xl italic text-[#D4A574] sm:text-3xl">
            Brew &amp; Co.
          </span>

          <div className="hidden sm:flex gap-6 md:gap-8">
            {navLinks.map((link) => {
              if (link === 'Menu') {
                return (
                  <Link
                    key={link}
                    to="/menu"
                    className="font-body text-sm font-medium uppercase tracking-wider text-[#F5E6D3] transition-opacity duration-200 hover:opacity-70 md:text-base lg:text-[1.1rem]"
                  >
                    {link}
                  </Link>
                );
              } else if (link === 'Our Story') {
                return (
                  <Link
                    key={link}
                    to="/our-story"
                    className="font-body text-sm font-medium uppercase tracking-wider text-[#F5E6D3] transition-opacity duration-200 hover:opacity-70 md:text-base lg:text-[1.1rem]"
                  >
                    {link}
                  </Link>
                );
              } else if (link === 'Blends') {
                return (
                  <Link
                    key={link}
                    to="/blends"
                    className="font-body text-sm font-medium uppercase tracking-wider text-[#F5E6D3] transition-opacity duration-200 hover:opacity-70 md:text-base lg:text-[1.1rem]"
                  >
                    {link}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="font-body text-sm font-medium uppercase tracking-wider text-[#F5E6D3] transition-opacity duration-200 hover:opacity-70 md:text-base lg:text-[1.1rem]"
                  >
                    {link}
                  </a>
                );
              }
            })}
          </div>
        </nav>
      </FadeIn>

      {/* ── Center Content ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6">
        {/* Small decorative label */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4A574]/50" />
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D4A574]">
              Artisan Coffee Roasters
            </span>
            <div className="h-px w-8 bg-[#D4A574]/50" />
          </div>
        </FadeIn>

        {/* Main Tagline */}
        <FadeIn delay={0.2} y={40}>
          <h2 className="font-display text-center text-3xl italic text-[#F5E6D3] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Where Every Cup
            <br />
            <span className="text-[#D4A574]">Tells a Story</span>
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.35} y={20}>
          <p className="mx-auto mt-6 max-w-lg text-center font-body text-sm text-[#F5E6D3]/60 sm:text-base md:text-lg leading-relaxed">
            Single-origin beans from the world&apos;s finest estates,
            <br className="hidden sm:block" />
            roasted with passion in small batches.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.5} y={20}>
          <div className="mt-8 flex items-center gap-4">
            <OrderButton />
            <Link
              to="/menu"
              className="font-body text-sm font-medium uppercase tracking-wider text-[#D4A574] transition-opacity duration-200 hover:opacity-70 sm:text-base"
            >
              View Menu →
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* ── Massive Hero Heading (bottom) ── */}
      <div className="relative z-10 overflow-hidden">
        <FadeIn delay={0.6} y={60}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center font-display font-black uppercase leading-[0.85] tracking-tight text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] pb-2">
            Brew &amp; Co.
          </h1>
        </FadeIn>
      </div>

      {/* ── Bottom Info Bar ── */}
      <div className="relative z-10 flex items-end justify-between px-6 pb-6 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.7} y={20}>
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
            <p
              className="font-body text-xs font-light uppercase tracking-wide text-[#F5E6D3]/50 sm:text-sm"
            >
              est. 2018
            </p>
            <div className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
            <p
              className="font-body text-xs font-light uppercase tracking-wide text-[#F5E6D3]/50 sm:text-sm"
            >
              single origin
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.8} y={20}>
          <motion.div
            className="hidden sm:flex items-center gap-2 text-[#F5E6D3]/40 font-body text-xs uppercase tracking-wider"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
