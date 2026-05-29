import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const OrderButton: React.FC<ButtonProps> = ({
  label = 'Order Now',
  onClick,
  className = '',
}) => {
  return (
    <motion.button
      className={`relative rounded-full font-body font-medium uppercase tracking-widest text-[#F5E6D3] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(123deg, #1A0F08 7%, #8B5E3C 37%, #C4864D 72%, #D4A574 100%)',
        boxShadow: '0px 4px 4px rgba(139, 94, 60, 0.25), 4px 4px 12px #8B5E3C inset',
        outline: '2px solid rgba(245, 230, 211, 0.5)',
        outlineOffset: '-3px',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export const GhostButton: React.FC<ButtonProps> = ({
  label = 'View Menu',
  onClick,
  className = '',
}) => {
  return (
    <motion.button
      className={`rounded-full border-2 border-[#D4A574] text-[#F5E6D3] font-body font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D4A574]/10 transition-colors duration-300 cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};
