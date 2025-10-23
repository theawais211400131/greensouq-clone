import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Money Tree Pachira Aquatica, "Twisted Trunk" 130 - 150cm - Upto 2m',
      image: 'https://images.unsplash.com/photo-1614887410788-e158d6efb3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjB3aGl0ZSUyMHBvdHxlbnwxfHx8fDE3NjEyMDkyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1673297352939-e308a901b5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWRkbGUlMjBsZWFmJTIwZmlnJTIwdHJlZXxlbnwxfHx8fDE3NjEyMDk5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 355.00,
      salePrice: 535.00,
      currentPrice: 250.00,
      finalPrice: 385.00,
      onSale: true,
    },
    {
      id: 2,
      name: 'Monstera Deliciosa "The Hurricane or Swiss Cheese Plant" Holland',
      image: 'https://images.unsplash.com/photo-1626929252164-27c26d107b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwaG9tZXxlbnwxfHx8fDE3NjExNzk5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1626929252164-27c26d107b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwaG9tZXxlbnwxfHx8fDE3NjExNzk5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 170.00,
      salePrice: 700.00,
      currentPrice: 160.00,
      finalPrice: 675.00,
      onSale: true,
    },
    {
      id: 3,
      name: 'Nephrolepis exaltata "Green Lady", Boston Fern or Sword Fern',
      image: 'https://images.unsplash.com/photo-1585589004375-73ccf9a2fea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJuJTIwcGxhbnQlMjBwb3R8ZW58MXx8fHwxNzYxMTUzNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1585589004375-73ccf9a2fea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJuJTIwcGxhbnQlMjBwb3R8ZW58MXx8fHwxNzYxMTUzNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 45.00,
      finalPrice: 165.00,
      onSale: false,
    },
    {
      id: 4,
      name: 'Peace Lily or Spathiphyllum or "زنبق السلام"',
      image: 'https://images.unsplash.com/photo-1621923164562-21d3118adae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZSUyMGxpbHklMjBwbGFudHxlbnwxfHx8fDE3NjExMjcyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1621923164562-21d3118adae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZSUyMGxpbHklMjBwbGFudHxlbnwxfHx8fDE3NjExMjcyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 60.00,
      salePrice: 500.00,
      currentPrice: 30.00,
      finalPrice: 325.00,
      onSale: true,
    },
    {
      id: 5,
      name: "Madagascar Traveller's Palm in Rolled Rim Pot - 1.0-1.3m",
      image: 'https://images.unsplash.com/photo-1732440643656-51df16f3a8a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwdHJlZSUyMHBvdHxlbnwxfHx8fDE3NjEyMDkyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1659624026761-17c5dda0f238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmVjYSUyMHBhbG0lMjBpbmRvb3J8ZW58MXx8fHwxNzYxMjA5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 375.00,
      onSale: false,
    },
    {
      id: 6,
      name: 'Snake Plant Deluxe: Sanseveria Trifasciata | Air Purifying indoor Plant',
      image: 'https://images.unsplash.com/photo-1668426231244-1827c29ef8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFrZSUyMHBsYW50JTIwaG9tZXxlbnwxfHx8fDE3NjExMjExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1668426231244-1827c29ef8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFrZSUyMHBsYW50JTIwaG9tZXxlbnwxfHx8fDE3NjExMjExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 80.00,
      salePrice: 200.00,
      currentPrice: 60.00,
      finalPrice: 200.00,
      onSale: true,
    },
    {
      id: 7,
      name: 'Scindapsus Marble Queen or Money Plant or Epipremnum aureum كريمة الرخام',
      image: 'https://images.unsplash.com/photo-1614887410788-e158d6efb3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjB3aGl0ZSUyMHBvdHxlbnwxfHx8fDE3NjEyMDkyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1614887410788-e158d6efb3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjB3aGl0ZSUyMHBvdHxlbnwxfHx8fDE3NjEyMDkyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 175.00,
      currentPrice: 160.00,
      finalPrice: 250.00,
      onSale: true,
    },
    {
      id: 8,
      name: 'White Orchids 50-70cm',
      image: 'https://images.unsplash.com/photo-1624998113087-37073f21bce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjB3aGl0ZSUyMGZsb3dlcnxlbnwxfHx8fDE3NjEyMDk5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1624998113087-37073f21bce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjB3aGl0ZSUyMGZsb3dlcnxlbnwxfHx8fDE3NjEyMDk5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 95.00,
      finalPrice: 145.00,
      onSale: false,
    },
    {
      id: 9,
      name: 'ZZ Plant indoor / Zamiocucas Zamifolia, Zanzibar Gem in Black Ceramic Pot 80-100cm',
      image: 'https://images.unsplash.com/photo-1668584036644-cd5824409a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6eiUyMHBsYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMjA5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1668584036644-cd5824409a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6eiUyMHBsYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMjA5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 800.00,
      currentPrice: 395.00,
      onSale: true,
    },
    {
      id: 10,
      name: 'Areca Palm Holland in Black Ceramic Pot - 1.1-1.2m',
      image: 'https://images.unsplash.com/photo-1659624026761-17c5dda0f238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmVjYSUyMHBhbG0lMjBpbmRvb3J8ZW58MXx8fHwxNzYxMjA5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1659624026761-17c5dda0f238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmVjYSUyMHBhbG0lMjBpbmRvb3J8ZW58MXx8fHwxNzYxMjA5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 750.00,
      currentPrice: 375.00,
      onSale: true,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          Top Selling Indoor Plants
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
