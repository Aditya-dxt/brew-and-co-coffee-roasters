import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { OrderButton } from '../components/Buttons';
import { Coffee, MapPin, Clock, Globe, Send, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  explore: [
    { label: 'Our Menu', href: '/menu' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Our Blends', href: '/blends' },
    { label: 'Brewing Guides', href: '/brewing-guides' },
  ],
  visit: [
    { label: 'Locations', href: '/visit#locations' },
    { label: 'Hours & Info', href: '/visit#locations' },
    { label: 'Private Events', href: '/visit#events' },
    { label: 'Catering', href: '/visit#events' },
  ],
  connect: [
    { label: 'Instagram', href: '#', icon: Send },
    { label: 'Twitter / X', href: '#', icon: Globe },
    { label: 'Email Us', href: '#', icon: Mail },
  ],
};

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-30 bg-[#0D0705] border-t border-[#8B5E3C]/20">
      {/* Newsletter Section */}
      <div className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0} y={40}>
            <div className="text-center mb-16 sm:mb-20">
              <h2
                className="font-display font-black uppercase leading-none tracking-tight hero-heading"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              >
                Stay Brewing
              </h2>
              <p className="font-body text-[#F5E6D3]/70 mt-6 text-base sm:text-lg max-w-md mx-auto">
                Subscribe for exclusive blends, brewing tips, and early access to seasonal specials.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full sm:w-80 px-6 py-3.5 rounded-full bg-[#1A0F08] border border-[#8B5E3C]/30 text-[#F5E6D3] font-body placeholder:text-[#8B5E3C]/50 focus:outline-none focus:border-[#D4A574] transition-colors duration-300"
                />
                <OrderButton label="Subscribe" />
              </div>
            </div>
          </FadeIn>

          {/* Divider */}
          <div className="animated-line w-full mb-12 sm:mb-16" />

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <FadeIn delay={0.1} y={20}>
              <div>
                <h3 className="font-display italic text-[#D4A574] text-2xl mb-4">
                  Brew & Co.
                </h3>
                <p className="font-body text-[#F5E6D3]/60 text-sm leading-relaxed mb-6">
                  Artisan coffee roasters crafting exceptional single-origin coffees since 2018.
                </p>
                <div className="flex items-center gap-2 text-[#F5E6D3]/50 text-sm font-body">
                  <MapPin size={14} className="text-[#D4A574]" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5E6D3]/50 text-sm font-body mt-2">
                  <Clock size={14} className="text-[#D4A574]" />
                  <span>Mon-Sun: 7AM - 10PM</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5E6D3]/50 text-sm font-body mt-2">
                  <Coffee size={14} className="text-[#D4A574]" />
                  <span>Freshly Roasted Daily</span>
                </div>
              </div>
            </FadeIn>

            {/* Explore Column */}
            <FadeIn delay={0.2} y={20}>
              <div>
                <h4 className="font-display font-semibold text-[#F5E6D3] uppercase tracking-wider text-sm mb-5">
                  Explore
                </h4>
                <ul className="space-y-3">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="font-body text-[#F5E6D3]/50 hover:text-[#D4A574] transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Visit Column */}
            <FadeIn delay={0.3} y={20}>
              <div>
                <h4 className="font-display font-semibold text-[#F5E6D3] uppercase tracking-wider text-sm mb-5">
                  Visit Us
                </h4>
                <ul className="space-y-3">
                  {footerLinks.visit.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="font-body text-[#F5E6D3]/50 hover:text-[#D4A574] transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Connect Column */}
            <FadeIn delay={0.4} y={20}>
              <div>
                <h4 className="font-display font-semibold text-[#F5E6D3] uppercase tracking-wider text-sm mb-5">
                  Connect
                </h4>
                <ul className="space-y-3">
                  {footerLinks.connect.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-body text-[#F5E6D3]/50 hover:text-[#D4A574] transition-colors duration-200 text-sm flex items-center gap-2"
                      >
                        {link.icon && <link.icon size={16} />}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Bottom Bar */}
          <div className="animated-line w-full mt-12 sm:mt-16 mb-6" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-[#F5E6D3]/30 text-xs sm:text-sm">
              © 2024 Brew & Co. All rights reserved. Crafted with ☕ and passion.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#D4A574] font-body text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
