import { useEffect, useRef, useState } from 'react';

const coffeeImages = [
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80',
  'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&q=80',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&q=80',
  'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400&q=80',
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80',
  'https://images.unsplash.com/photo-1497515114583-0debc1b3a0f0?w=400&q=80',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80',
  'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
  'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80',
  'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&q=80',
  'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
  'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80',
  'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
  'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
];

// 10 images per row for generous coverage
const row1Images = coffeeImages.slice(0, 10);
const row2Images = coffeeImages.slice(10, 20);

// Triple each row for seamless visual continuity
const row1Tripled = [...row1Images, ...row1Images, ...row1Images];
const row2Tripled = [...row2Images, ...row2Images, ...row2Images];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0D0705] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      {/* ── Row 1 — moves RIGHT ── */}
      <div className="flex gap-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 400}px)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
              className="h-[180px] w-[280px] flex-shrink-0 rounded-xl border border-[#8B5E3C]/20 object-cover sm:h-[200px] sm:w-[300px] md:h-[220px] md:w-[340px]"
            />
          ))}
        </div>
      </div>

      {/* Gap between rows */}
      <div className="h-3" />

      {/* ── Row 2 — moves LEFT ── */}
      <div className="flex gap-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 400)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
              className="h-[180px] w-[280px] flex-shrink-0 rounded-xl border border-[#8B5E3C]/20 object-cover sm:h-[200px] sm:w-[300px] md:h-[220px] md:w-[340px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
