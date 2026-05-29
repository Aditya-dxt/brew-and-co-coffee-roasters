// src/data/menuData.ts

export type Category = 'All' | 'Espresso Bar' | 'Pour Over' | 'Cold Drinks' | 'Pastries' | 'Beans';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  tags: string[];
}

const imagePool = {
  'Espresso Bar': [
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&q=80',
    'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80',
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
    'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  ],
  'Pour Over': [
    'https://images.unsplash.com/photo-1497515114583-0debc1b3a0f0?w=600&q=80',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80',
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80',
  ],
  'Cold Drinks': [
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80',
    'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=80',
    'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80',
    'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&q=80',
  ],
  'Pastries': [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80',
    'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600&q=80',
  ],
  'Beans': [
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80',
    'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&q=80',
  ],
};

const descriptors = {
  'Espresso Bar': [
    { name: 'Single Origin', desc: 'A beautifully complex, bright shot pulled from our rotating seasonal beans.', price: 180, tags: ['Bright', 'Seasonal'] },
    { name: 'Classic Macchiato', desc: 'Our signature espresso marked with a delicate dollop of silky micro-foam.', price: 200, tags: ['Traditional', 'Intense'] },
    { name: 'Flat White', desc: 'Perfectly textured micro-foam milk poured over a double ristretto shot.', price: 240, tags: ['Creamy', 'Balanced'] },
    { name: 'Mocha Latte', desc: 'Rich dark chocolate ganache melted into espresso and velvety steamed milk.', price: 280, tags: ['Sweet', 'Dark Cocoa'] },
    { name: 'Cortado', desc: 'Equal parts espresso and warmly steamed milk. A balanced, punchy classic.', price: 210, tags: ['Balanced', 'Classic'] },
    { name: 'Americano', desc: 'Hot water pulled over our signature espresso blend. Smooth and approachable.', price: 170, tags: ['Smooth', 'Hot'] },
    { name: 'Cappuccino', desc: 'A perfect third of espresso, steamed milk, and thick, pillowy foam.', price: 230, tags: ['Foamy', 'Classic'] },
    { name: 'Caramel Macchiato', desc: 'Vanilla syrup, steamed milk, espresso, and a rich caramel drizzle.', price: 260, tags: ['Sweet', 'Caramel'] },
    { name: 'Hazelnut Latte', desc: 'Our classic latte infused with toasted hazelnut essence.', price: 270, tags: ['Nutty', 'Sweet'] },
    { name: 'Double Espresso', desc: 'For those who need an extra kick. Two shots of our darkest roast.', price: 210, tags: ['Intense', 'Dark'] },
  ],
  'Pour Over': [
    { name: 'Ethiopian Yirgacheffe', desc: 'Delicate floral aromas with vibrant citrus undertones.', price: 220, tags: ['Light Roast', 'Floral'] },
    { name: 'Costa Rica Tarrazu', desc: 'A brilliantly clean, sweet cup with bright acidity and notes of honey.', price: 240, tags: ['Medium-Light', 'Honey'] },
    { name: 'Guatemala Antigua', desc: 'Complex, full-bodied profile with a distinctive smoky sweetness.', price: 230, tags: ['Smoky', 'Medium Roast'] },
    { name: 'Colombia Supremo', desc: 'Rich, balanced sweetness. Milk chocolate and walnut notes.', price: 210, tags: ['Balanced', 'Chocolate'] },
    { name: 'Kenya AA', desc: 'Bright, wine-like acidity with bold dark berry flavors.', price: 250, tags: ['Fruity', 'Light Roast'] },
    { name: 'Sumatra Mandheling', desc: 'Bold, earthy, and syrupy with notes of cedar and dark cocoa.', price: 240, tags: ['Earthy', 'Dark Roast'] },
    { name: 'Panama Geisha', desc: 'The crown jewel of coffees. Incredibly floral, tea-like, and delicate.', price: 350, tags: ['Premium', 'Floral'] },
    { name: 'Brazil Cerrado', desc: 'Nutty, low-acidity, with a heavy body and caramel finish.', price: 200, tags: ['Nutty', 'Smooth'] },
  ],
  'Cold Drinks': [
    { name: '24Hr Cold Brew', desc: 'Impossibly smooth, naturally sweet, steeped for 24 hours in cold water.', price: 250, tags: ['Smooth', 'Low Acidity'] },
    { name: 'Iced Vanilla Latte', desc: 'Our house espresso poured over ice and milk, sweetened with Madagascar vanilla.', price: 260, tags: ['Refreshing', 'Sweet'] },
    { name: 'Coffee Tonic', desc: 'A double shot of espresso poured over artisanal tonic water and ice with a citrus twist.', price: 280, tags: ['Bubbly', 'Zesty'] },
    { name: 'Iced Americano', desc: 'Chilled water and ice mixed with our signature espresso blend.', price: 200, tags: ['Crisp', 'Refreshing'] },
    { name: 'Nitro Cold Brew', desc: 'Our 24Hr Cold Brew infused with nitrogen for a creamy, Guinness-like cascade.', price: 290, tags: ['Creamy', 'Draft'] },
    { name: 'Iced Caramel Macchiato', desc: 'Milk, ice, vanilla, espresso, and a generous caramel drizzle.', price: 280, tags: ['Sweet', 'Caramel'] },
    { name: 'Frappé Roast', desc: 'Blended ice, milk, and coffee with a dollop of whipped cream.', price: 300, tags: ['Blended', 'Sweet'] },
    { name: 'Cold Brew Oat Latte', desc: 'Our smooth cold brew mixed with creamy, earthy oat milk.', price: 270, tags: ['Dairy-Free', 'Smooth'] },
  ],
  'Pastries': [
    { name: 'Butter Croissant', desc: 'Flaky, buttery, and baked fresh every morning by our in-house pastry chef.', price: 150, tags: ['Fresh', 'Flaky'] },
    { name: 'Almond Biscotti', desc: 'Twice-baked almond biscuits, the perfect crunchy companion to your espresso.', price: 120, tags: ['Crunchy', 'Nutty'] },
    { name: 'Pain au Chocolat', desc: 'Golden, flaky pastry dough wrapped around rich dark chocolate batons.', price: 180, tags: ['Chocolate', 'Flaky'] },
    { name: 'Blueberry Muffin', desc: 'Loaded with wild blueberries and topped with a buttery streusel crunch.', price: 160, tags: ['Fruity', 'Soft'] },
    { name: 'Cinnamon Roll', desc: 'Warm, gooey cinnamon swirls topped with a rich cream cheese frosting.', price: 200, tags: ['Sweet', 'Warm'] },
    { name: 'Lemon Pound Cake', desc: 'Dense, moist cake with a bright lemon zest glaze.', price: 170, tags: ['Citrus', 'Sweet'] },
    { name: 'Banana Walnut Bread', desc: 'A hearty, thick slice of banana bread studded with toasted walnuts.', price: 160, tags: ['Nutty', 'Hearty'] },
    { name: 'Chocolate Chip Cookie', desc: 'Oversized, chewy on the inside, crispy on the edges, loaded with dark chocolate.', price: 140, tags: ['Chewy', 'Chocolate'] },
  ],
  'Beans': [
    { name: 'House Blend', desc: 'Our signature medium roast. Milk chocolate, walnut, and caramel notes.', price: 450, tags: ['Medium', 'Balanced'] },
    { name: 'Sumatra Dark', desc: 'Bold dark roast delivering a full-bodied, earthy complexity.', price: 480, tags: ['Dark', 'Earthy'] },
    { name: 'Ethiopia Light', desc: 'Bright and floral with a delicate tea-like body and citrus finish.', price: 500, tags: ['Light', 'Floral'] },
    { name: 'Colombia Decaf', desc: 'Swiss Water processed. All the rich flavor of Colombia without the caffeine.', price: 470, tags: ['Decaf', 'Medium'] },
    { name: 'Espresso Roast', desc: 'Specifically crafted to produce a thick crema and punchy flavor profile.', price: 460, tags: ['Dark', 'Intense'] },
    { name: 'Holiday Blend', desc: 'Seasonal notes of nutmeg, dark cherry, and cedar.', price: 520, tags: ['Seasonal', 'Spiced'] },
    { name: 'Moka Java', desc: 'The world\'s oldest blend. Fruity Ethiopian beans mixed with earthy Javanese.', price: 490, tags: ['Historic', 'Complex'] },
    { name: 'French Roast', desc: 'Our darkest offering. Intense, smoky, and bittersweet.', price: 450, tags: ['Very Dark', 'Smoky'] },
  ],
};

// Generate 100 items by looping through the descriptors and adding variants
export const generateMenuData = (): MenuItem[] => {
  const items: MenuItem[] = [];
  let idCounter = 1;

  const categories: Exclude<Category, 'All'>[] = ['Espresso Bar', 'Pour Over', 'Cold Drinks', 'Pastries', 'Beans'];

  // We want 100 items, so 20 items per category.
  categories.forEach(category => {
    const catDescriptors = descriptors[category];
    const catImages = imagePool[category];
    
    for (let i = 0; i < 20; i++) {
      const baseItem = catDescriptors[i % catDescriptors.length];
      const image = catImages[i % catImages.length];
      
      const variantSuffix = i >= catDescriptors.length ? (i % 2 === 0 ? ' (Reserve)' : ' (Large)') : '';
      const priceMultiplier = i >= catDescriptors.length ? (i % 2 === 0 ? 1.3 : 1.2) : 1;
      
      let finalName = baseItem.name + variantSuffix;
      let finalTags = [...baseItem.tags];
      
      if (category === 'Beans') {
        finalName = baseItem.name + (i >= catDescriptors.length ? ' (500g)' : ' (250g)');
        if (i >= catDescriptors.length && !finalTags.includes('Large Bag')) {
            finalTags.push('Large Bag');
        }
      }

      items.push({
        id: `item-${idCounter++}`,
        name: finalName,
        description: baseItem.desc,
        price: `₹${Math.round(baseItem.price * priceMultiplier)}`,
        category: category,
        image: image,
        tags: finalTags,
      });
    }
  });

  return items;
};

export const fullMenuData = generateMenuData();
