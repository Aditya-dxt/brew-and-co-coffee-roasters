import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { FooterSection } from '../sections/FooterSection';
import { OrderButton } from '../components/Buttons';

const VisitPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#0D0705] font-body text-[#FDF8F3] selection:bg-[#D4A574] selection:text-white">
      
      {/* ── Navigation Bar ── */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 mix-blend-difference flex justify-between items-center bg-gradient-to-b from-[#0D0705]/80 to-transparent">
        <Link to="/" className="text-white hover:text-[#D4A574] transition-colors flex items-center gap-2">
          <ArrowLeft size={24} />
          <span className="font-medium tracking-widest text-sm uppercase">Back Home</span>
        </Link>
        <div className="font-heading text-2xl text-white italic">Brew & Co.</div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="pt-32 pb-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="font-display font-black uppercase text-5xl sm:text-6xl md:text-7xl text-[#F5E6D3] tracking-tighter mb-4 leading-none">
              Come Say <span className="text-[#D4A574] italic font-medium tracking-normal">Hello</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-[#FDF8F3]/60 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you're grabbing your morning espresso or planning a private event, we'd love to host you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Locations & Hours (ID: locations) ── */}
      <section id="locations" className="py-16 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-32">
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image/Map Placeholder */}
            <div className="rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] relative group">
              <div className="absolute inset-0 bg-[#D4A574]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#1A0F08]/90 backdrop-blur-md border border-[#8B5E3C]/30 p-6 rounded-2xl z-20">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-[#D4A574]" size={20} />
                  <h3 className="font-heading text-xl text-white">Flagship Roastery</h3>
                </div>
                <p className="text-[#FDF8F3]/60 text-sm ml-8">
                  123 Artisan Coffee Lane<br/>
                  Bandra West, Mumbai 400050
                </p>
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display italic text-[#D4A574] text-3xl sm:text-4xl mb-8">
                Hours & Info
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Clock className="text-[#8B5E3C] mt-1" size={24} />
                  <div>
                    <h4 className="font-heading text-xl text-white mb-2">Opening Hours</h4>
                    <p className="text-[#FDF8F3]/60">Monday - Friday: 7:00 AM - 9:00 PM</p>
                    <p className="text-[#FDF8F3]/60">Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-[#8B5E3C] mt-1" size={24} />
                  <div>
                    <h4 className="font-heading text-xl text-white mb-2">Contact</h4>
                    <p className="text-[#FDF8F3]/60">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#8B5E3C] mt-1" size={24} />
                  <div>
                    <h4 className="font-heading text-xl text-white mb-2">General Inquiries</h4>
                    <p className="text-[#FDF8F3]/60">hello@brewandco.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* ── Private Events & Catering (ID: events) ── */}
      <section id="events" className="py-24 px-6 sm:px-12 bg-[#120A07] scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Calendar className="text-[#D4A574] mx-auto mb-6" size={40} />
              <h2 className="font-display italic text-[#D4A574] text-3xl sm:text-4xl md:text-5xl mb-4">
                Private Events & Catering
              </h2>
              <p className="text-[#FDF8F3]/60 max-w-2xl mx-auto">
                Elevate your next gathering with our artisan coffee cart, or host a private tasting event at our flagship roastery. Fill out the form below and our events coordinator will be in touch.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="bg-[#1A0F08] border border-[#8B5E3C]/20 rounded-3xl p-8 sm:p-12 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#8B5E3C] mb-2 font-semibold">First Name</label>
                  <input type="text" className="w-full bg-[#0D0705] border border-[#8B5E3C]/30 rounded-xl px-4 py-3 text-[#FDF8F3] focus:outline-none focus:border-[#D4A574] transition-colors" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#8B5E3C] mb-2 font-semibold">Last Name</label>
                  <input type="text" className="w-full bg-[#0D0705] border border-[#8B5E3C]/30 rounded-xl px-4 py-3 text-[#FDF8F3] focus:outline-none focus:border-[#D4A574] transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-[#8B5E3C] mb-2 font-semibold">Email Address</label>
                <input type="email" className="w-full bg-[#0D0705] border border-[#8B5E3C]/30 rounded-xl px-4 py-3 text-[#FDF8F3] focus:outline-none focus:border-[#D4A574] transition-colors" placeholder="jane@example.com" />
              </div>

              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-[#8B5E3C] mb-2 font-semibold">Inquiry Type</label>
                <select className="w-full bg-[#0D0705] border border-[#8B5E3C]/30 rounded-xl px-4 py-3 text-[#FDF8F3]/60 focus:outline-none focus:border-[#D4A574] transition-colors appearance-none">
                  <option>Coffee Cart Catering</option>
                  <option>Private Venue Booking</option>
                  <option>Corporate Gifting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-xs uppercase tracking-widest text-[#8B5E3C] mb-2 font-semibold">Message</label>
                <textarea rows={4} className="w-full bg-[#0D0705] border border-[#8B5E3C]/30 rounded-xl px-4 py-3 text-[#FDF8F3] focus:outline-none focus:border-[#D4A574] transition-colors resize-none" placeholder="Tell us about your event..."></textarea>
              </div>

              <OrderButton label="Submit Inquiry" className="w-full" />
            </form>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <FooterSection />
    </div>
  );
};

export default VisitPage;
