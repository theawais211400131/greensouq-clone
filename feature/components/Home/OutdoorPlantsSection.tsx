import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export function OutdoorPlantsSection() {
  const products = [
    {
      id: 1,
      name: 'Bougainvillea Specimen "Single Head"',
      image: 'https://images.unsplash.com/photo-1701010110994-256c8fe43d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VnYWludmlsbGVhJTIwZmxvd2VyJTIwdHJlZXxlbnwxfHx8fDE3NjEyMTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1701010110994-256c8fe43d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VnYWludmlsbGVhJTIwZmxvd2VyJTIwdHJlZXxlbnwxfHx8fDE3NjEyMTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 220.00,
      currentPrice: 220.00,
      finalPrice: 3800.00,
      onSale: false,
    },
    {
      id: 2,
      name: 'Opuntia Consolea | Road Kill Cactus',
      image: 'https://images.unsplash.com/photo-1648715841205-f884afc2c176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWN0dXMlMjBvdXRkb29yJTIwcG90fGVufDF8fHx8MTc2MTIxMDQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1648715841205-f884afc2c176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWN0dXMlMjBvdXRkb29yJTIwcG90fGVufDF8fHx8MTc2MTIxMDQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 52.00,
      currentPrice: 25.00,
      onSale: true,
    },
    {
      id: 3,
      name: 'Areca Palm 1.2-1.5m Outdoor In Fiber Glass Pot (GRP)(70x30x30)',
      image: 'https://images.unsplash.com/photo-1634474767672-3c3054f04a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFsbSUyMHBsYW50fGVufDF8fHx8MTc2MTIxMDQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1634474767672-3c3054f04a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGFsbSUyMHBsYW50fGVufDF8fHx8MTc2MTIxMDQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 650.00,
      salePrice: 950.00,
      currentPrice: 550.00,
      finalPrice: 575.00,
      onSale: true,
    },
    {
      id: 4,
      name: 'Portulaca Grandiflora | Rose Moss | 9cm pot',
      image: 'https://images.unsplash.com/photo-1688194384717-29bbbceead81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwbW9zcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzYxMjEwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1688194384717-29bbbceead81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwbW9zcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzYxMjEwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 20.00,
      salePrice: 52.00,
      currentPrice: 9.00,
      finalPrice: 38.00,
      onSale: true,
    },
    {
      id: 5,
      name: 'Bougainvillea Spectabilis "30 to 160cm" Dark Pink',
      image: 'https://images.unsplash.com/photo-1758182045326-4347ab39423a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYm91Z2FpbnZpbGxlYSUyMGJhbGNvbnl8ZW58MXx8fHwxNzYxMjEwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1758182045326-4347ab39423a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYm91Z2FpbnZpbGxlYSUyMGJhbGNvbnl8ZW58MXx8fHwxNzYxMjEwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 20.00,
      salePrice: 225.00,
      currentPrice: 14.00,
      finalPrice: 225.00,
      onSale: true,
    },
    {
      id: 6,
      name: 'Succulent Garden Mix "Multiple Varieties" 5-8cm pots',
      image: 'https://images.unsplash.com/photo-1672092590097-03fb0cfe3bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBvdXRkb29yJTIwZ2FyZGVufGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1672092590097-03fb0cfe3bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBvdXRkb29yJTIwZ2FyZGVufGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 45.00,
      currentPrice: 25.00,
      finalPrice: 38.00,
      onSale: true,
    },
    {
      id: 7,
      name: 'Jasmine Sambac "Arabian Jasmine" 30-40cm in 3L pot',
      image: 'https://images.unsplash.com/photo-1655924003439-36e3c2177dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXNtaW5lJTIwcGxhbnQlMjBvdXRkb29yfGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1655924003439-36e3c2177dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXNtaW5lJTIwcGxhbnQlMjBvdXRkb29yfGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 90.00,
      currentPrice: 50.00,
      finalPrice: 75.00,
      onSale: true,
    },
    {
      id: 8,
      name: 'Hibiscus rosa-sinensis "Red or Pink or Yellow" 50-70cm',
      image: 'https://images.unsplash.com/photo-1615927576018-32f6eacbd803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWJpc2N1cyUyMGZsb3dlciUyMHBsYW50fGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1615927576018-32f6eacbd803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWJpc2N1cyUyMGZsb3dlciUyMHBsYW50fGVufDF8fHx8MTc2MTIxMDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 65.00,
      finalPrice: 100.00,
      onSale: false,
    },
    {
      id: 9,
      name: 'Lantana Camara "Mixed Colors" Annual Flowering Plant 40-60cm',
      image: 'https://images.unsplash.com/photo-1688194384717-29bbbceead81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwbW9zcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzYxMjEwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1688194384717-29bbbceead81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwbW9zcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzYxMjEwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 55.00,
      currentPrice: 35.00,
      finalPrice: 45.00,
      onSale: true,
    },
    {
      id: 10,
      name: 'Bougainvillea "White or Orange" Climber Outdoor 80-100cm',
      image: 'https://images.unsplash.com/photo-1701010110994-256c8fe43d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VnYWludmlsbGVhJTIwZmxvd2VyJTIwdHJlZXxlbnwxfHx8fDE3NjEyMTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1701010110994-256c8fe43d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VnYWludmlsbGVhJTIwZmxvd2VyJTIwdHJlZXxlbnwxfHx8fDE3NjEyMTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 120.00,
      currentPrice: 80.00,
      finalPrice: 95.00,
      onSale: true,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          Top Selling Outdoor Plants
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
