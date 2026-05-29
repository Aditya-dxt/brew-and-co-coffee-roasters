import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { fullMenuData, type Category } from '../data/menuData';

const categories: Category[] = ['All', 'Espresso Bar', 'Pour Over', 'Cold Drinks', 'Pastries', 'Beans'];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Reset to page 1 whenever category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredMenu = fullMenuData.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
  const currentItems = filteredMenu.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Scroll back to the top of the menu grid
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] font-body text-[#1A0F08] selection:bg-[#D4A574] selection:text-white pb-32">
      
      {/* ── Navigation Bar ── */}
      <nav className="sticky top-0 z-50 bg-[#FDF8F3]/80 backdrop-blur-xl border-b border-[#8B5E3C]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-[#8B5E3C] hover:text-[#0D0705] transition-colors font-medium uppercase tracking-wider text-sm"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <span className="font-display text-xl sm:text-2xl italic text-[#0D0705]">
            Brew &amp; Co.
          </span>
        </div>
      </nav>

      {/* ── Header ── */}
      <header className="pt-20 pb-12 sm:pt-28 sm:pb-16 px-6 text-center">
        <FadeIn y={20}>
          <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A574] block mb-4">
            Curated Offerings
          </span>
          <h1 className="font-display font-black uppercase leading-none tracking-tight text-[#0D0705] text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
            The Full Menu
          </h1>
        </FadeIn>
      </header>

      {/* ── Categories Filter ── */}
      <div className="px-6 mb-16">
        <FadeIn delay={0.2} y={20}>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4 p-2 bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#8B5E3C]/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-body text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors z-10 ${
                  activeCategory === category ? 'text-white' : 'text-[#8B5E3C] hover:text-[#0D0705]'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[#0D0705] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ── Menu Grid ── */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group flex flex-col h-full bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(139,94,60,0.12)] transition-shadow duration-500 border border-[#8B5E3C]/10"
              >
                {/* Image Header */}
                <div className="relative w-full h-[260px] overflow-hidden bg-[#1A0F08]/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#8B5E3C]/10 shadow-sm">
                    <span className="font-display font-bold text-[#8B5E3C] text-lg leading-none">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
                  <div className="mb-4">
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#D4A574] mb-2 block">
                      {item.category}
                    </span>
                    <h3
                      className="font-display font-semibold uppercase leading-tight text-[#0D0705]"
                      style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  <p className="font-body font-light leading-relaxed text-[#1A0F08]/60 text-sm md:text-base flex-1 mb-8">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#FDF8F3] text-[#8B5E3C] border border-[#8B5E3C]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Pagination Controls ── */}
        {totalPages > 1 && (
          <FadeIn delay={0.2} y={20}>
            <div className="mt-16 flex items-center justify-center gap-2 sm:gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 1 
                    ? 'text-[#8B5E3C]/30 bg-transparent' 
                    : 'text-[#0D0705] bg-white shadow-sm hover:shadow-md border border-[#8B5E3C]/10'
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-1 sm:gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNumber = idx + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 rounded-full font-body text-sm font-medium transition-all ${
                        currentPage === pageNumber
                          ? 'bg-[#0D0705] text-white shadow-md'
                          : 'bg-transparent text-[#8B5E3C] hover:bg-white hover:shadow-sm border border-transparent hover:border-[#8B5E3C]/10'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages 
                    ? 'text-[#8B5E3C]/30 bg-transparent' 
                    : 'text-[#0D0705] bg-white shadow-sm hover:shadow-md border border-[#8B5E3C]/10'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </FadeIn>
        )}
      </div>

    </div>
  );
};

export default MenuPage;
