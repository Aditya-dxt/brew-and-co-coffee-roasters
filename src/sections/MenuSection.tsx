import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { OrderButton } from '../components/Buttons';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  number: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

const menuItems: MenuItem[] = [
  {
    number: '01',
    name: 'Espresso',
    description:
      'Our signature single-origin espresso, roasted to perfection. Bold, rich, and complex with notes of dark chocolate and caramel.',
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    tags: ['Bold', 'Single Origin'],
  },
  {
    number: '02',
    name: 'Pour Over',
    description:
      'Hand-poured precision brewing that highlights the unique characteristics of each bean. Clean, bright, and aromatic.',
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80',
    tags: ['Light', 'Aromatic'],
  },
  {
    number: '03',
    name: 'Cold Brew',
    description:
      'Steeped for 24 hours in cold water, our cold brew is impossibly smooth with a naturally sweet finish and low acidity.',
    price: '₹250',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80',
    tags: ['Smooth', '24hr Steeped'],
  },
  {
    number: '04',
    name: 'Latte Art',
    description:
      'Velvety steamed milk meets our espresso in perfect harmony. Available with oat, almond, or classic dairy.',
    price: '₹240',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    tags: ['Creamy', 'Oat / Almond'],
  },
  {
    number: '05',
    name: 'Specialty Blends',
    description:
      'Seasonal rotating blends crafted by our master roasters. Each tells a story of origin, process, and passion.',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80',
    tags: ['Seasonal', 'Limited'],
  },
  {
    number: '06',
    name: 'Coffee Beans',
    description:
      'Take the experience home. Our freshly roasted beans are available in whole bean or ground, in 250g and 500g bags.',
    price: '₹450',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
    tags: ['Whole Bean', 'Ground'],
  },
];

const MenuSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="menu"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#FDF8F3' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-display font-black uppercase text-center mb-6 leading-none tracking-tight"
          style={{
            color: '#0D0705',
            fontSize: 'clamp(3rem, 12vw, 160px)',
          }}
        >
          Our Menu
        </h2>
        <p
          className="text-center font-body font-light max-w-lg mx-auto mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#1A0F08', opacity: 0.5, fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
        >
          Each drink is crafted with precision using our freshly roasted single-origin beans. Every sip is an experience.
        </p>
      </FadeIn>

      {/* Grid Layout for Menu Items */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {menuItems.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1} y={30}>
            <div
              className="group flex flex-col h-full bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(139,94,60,0.12)] transition-shadow duration-500 border border-[#8B5E3C]/10"
            >
              {/* Image Header */}
              <div className="relative w-full h-[240px] overflow-hidden bg-[#1A0F08]/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full">
                  <span className="font-display font-black text-[#0D0705] text-lg leading-none">
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3
                    className="font-display font-semibold uppercase leading-tight text-[#0D0705]"
                    style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="font-display font-semibold text-[#8B5E3C] mt-1"
                    style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.4rem)' }}
                  >
                    {item.price}
                  </span>
                </div>

                <p className="font-body font-light leading-relaxed text-[#1A0F08]/60 text-sm md:text-base flex-1 mb-6">
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
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Explore More Button */}
      <FadeIn delay={0.2} y={30}>
        <div className="mt-16 sm:mt-20 flex justify-center">
          <OrderButton 
            label="Explore Full Menu" 
            onClick={() => navigate('/menu')} 
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default MenuSection;
