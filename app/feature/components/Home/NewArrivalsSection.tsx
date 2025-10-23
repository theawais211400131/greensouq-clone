import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export function NewArrivalsSection() {
  const products = [
    {
      id: 1,
      name: 'SPRAYON 2 Litre Hand Pressure Sprayer (Model: SOM-52)',
      image: 'https://images.unsplash.com/photo-1704039672588-eb93629b83bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcHJlc3N1cmUlMjBzcHJheWVyJTIwZ2FyZGVufGVufDF8fHx8MTc2MTIxMTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1704039672588-eb93629b83bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcHJlc3N1cmUlMjBzcHJheWVyJTIwZ2FyZGVufGVufDF8fHx8MTc2MTIxMTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 25.00,
      onSale: false,
    },
    {
      id: 2,
      name: 'Poweron 1 Litre Battery Sprayer – Model PO5801',
      image: 'https://images.unsplash.com/photo-1635766054474-ebaba5355bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwc3ByYXllciUyMHRvb2x8ZW58MXx8fHwxNzYxMjExOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1635766054474-ebaba5355bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwc3ByYXllciUyMHRvb2x8ZW58MXx8fHwxNzYxMjExOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 58.00,
      onSale: false,
    },
    {
      id: 3,
      name: 'Lady Finger Plant (Okra) 30-50cm',
      image: 'https://images.unsplash.com/photo-1759860002366-0d8dd828742c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxva3JhJTIwcGxhbnQlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzYxMjExOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1759860002366-0d8dd828742c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxva3JhJTIwcGxhbnQlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzYxMjExOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 150.00,
      currentPrice: 60.00,
      finalPrice: 200.00,
      onSale: true,
    },
    {
      id: 4,
      name: 'Premium Office Bundle in Black ceramic Pot',
      image: 'https://images.unsplash.com/photo-1554936198-b66e9f8ec01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwbGFudHMlMjBkZXNrfGVufDF8fHx8MTc2MTIxMTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1554936198-b66e9f8ec01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwbGFudHMlMjBkZXNrfGVufDF8fHx8MTc2MTIxMTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 2000.00,
      currentPrice: 1200.00,
      onSale: true,
    },
    {
      id: 5,
      name: 'Set of 2 Traveler Palms in GRP Pot | 2.5–3.0m Tall',
      image: 'https://images.unsplash.com/photo-1549727636-36589a0cf6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWxlciUyMHBhbG0lMjB0cmVlfGVufDF8fHx8MTc2MTIxMTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1549727636-36589a0cf6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWxlciUyMHBhbG0lMjB0cmVlfGVufDF8fHx8MTc2MTIxMTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 4300.00,
      currentPrice: 2150.00,
      onSale: true,
    },
    {
      id: 6,
      name: 'Spinach (Palak) 15-20 cm Overall Height Corn',
      image: 'https://images.unsplash.com/photo-1602193815349-525071f27564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwcGxhbnQlMjBvcmdhbmljfGVufDF8fHx8MTc2MTIxMTk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1602193815349-525071f27564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwcGxhbnQlMjBvcmdhbmljfGVufDF8fHx8MTc2MTIxMTk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 28.00,
      currentPrice: 18.00,
      onSale: true,
    },
    {
      id: 7,
      name: 'Lucky Bamboo Arrangement in Ceramic Pot',
      image: 'https://images.unsplash.com/photo-1674461875598-41f69d6549b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdWNreSUyMGJhbWJvbyUyMHBsYW50fGVufDF8fHx8MTc2MTE1NjI0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1674461875598-41f69d6549b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdWNreSUyMGJhbWJvbyUyMHBsYW50fGVufDF8fHx8MTc2MTE1NjI0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 120.00,
      currentPrice: 85.00,
      onSale: true,
    },
    {
      id: 8,
      name: 'Mini Cactus Collection - Set of 5 varieties',
      image: 'https://images.unsplash.com/photo-1758633831324-35fb15bac35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGNhY3R1cyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzYxMjExOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1758633831324-35fb15bac35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGNhY3R1cyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzYxMjExOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 125.00,
      finalPrice: 175.00,
      onSale: false,
    },
    {
      id: 9,
      name: 'Philodendron Selloum "Tree Philodendron" 60-80cm',
      image: 'https://images.unsplash.com/photo-1614887410788-e158d6efb3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjB3aGl0ZSUyMHBvdHxlbnwxfHx8fDE3NjEyMDkyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1614887410788-e158d6efb3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjB3aGl0ZSUyMHBvdHxlbnwxfHx8fDE3NjEyMDkyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 250.00,
      currentPrice: 195.00,
      onSale: true,
    },
    {
      id: 10,
      name: 'Aloe Vera Plant in Terracotta Pot - 30cm',
      image: 'https://images.unsplash.com/photo-1672092590097-03fb0cfe3bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBvdXRkb29yJTIwZ2FyZGVufGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1672092590097-03fb0cfe3bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBvdXRkb29yJTIwZ2FyZGVufGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 45.00,
      onSale: false,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 px-8 py-3 hover:bg-green-50"
            size="lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
