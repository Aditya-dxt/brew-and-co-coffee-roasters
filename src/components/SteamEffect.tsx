import React from 'react';
import { motion } from 'framer-motion';

interface SteamEffectProps {
  className?: string;
}

export const SteamEffect: React.FC<SteamEffectProps> = ({ className = '' }) => {
  const particles = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    delay: Math.random() * 2,
    duration: 2.5 + Math.random() * 2,
    size: 4 + Math.random() * 8,
  }));

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: 0,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, rgba(245, 230, 211, 0.3), transparent)',
            filter: 'blur(3px)',
          }}
          animate={{
            y: [-10, -80],
            opacity: [0, 0.4, 0],
            scale: [1, 2],
            x: [0, (Math.random() - 0.5) * 30],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};
