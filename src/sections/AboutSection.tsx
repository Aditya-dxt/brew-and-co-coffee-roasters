import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { OrderButton } from '../components/Buttons';

const cornerImages = [
  {
    src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80',
    alt: 'Coffee beans',
    className:
      'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[100px] sm:w-[140px] md:w-[180px] rounded-2xl object-cover opacity-60',
    fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&q=80',
    alt: 'Latte art',
    className:
      'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[80px] sm:w-[120px] md:w-[160px] rounded-2xl object-cover opacity-50',
    fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?w=300&q=80',
    alt: 'Coffee plant',
    className:
      'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[100px] sm:w-[140px] md:w-[180px] rounded-2xl object-cover opacity-60',
    fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&q=80',
    alt: 'Espresso',
    className:
      'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[100px] sm:w-[140px] md:w-[180px] rounded-2xl object-cover opacity-50',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
];

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ backgroundColor: '#0D0705' }}
    >
      {/* Decorative corner images */}
      {cornerImages.map((img, i) => (
        <FadeIn
          key={i}
          delay={img.fadeProps.delay}
          x={img.fadeProps.x}
          y={img.fadeProps.y}
          duration={img.fadeProps.duration}
          className={img.className}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto rounded-2xl object-cover"
            loading="lazy"
          />
        </FadeIn>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Heading + Text block */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-display font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Our Story
            </h2>
          </FadeIn>

          <AnimatedText
            text="From the misty highlands of Ethiopia to the volcanic soils of Guatemala, we source only the finest single-origin beans. Every cup is a journey — carefully roasted in small batches, brewed with precision, and served with love. We believe great coffee isn't just a drink, it's an experience that brings people together."
            className="font-body font-medium text-center leading-relaxed max-w-[560px] text-[#F5E6D3]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Button with larger gap */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <OrderButton 
            label="Visit Us" 
            onClick={() => navigate('/our-story')}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
