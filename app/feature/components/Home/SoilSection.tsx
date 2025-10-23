import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export function SoilSection() {
  const products = [
    {
      id: 1,
      name: 'Snow White Pebbles 20KG | Natural Decorative Rocks for Garden plants succulents Vase Landscape Outdoor stones',
      image: 'https://images.unsplash.com/photo-1713857188096-0849a125bf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBlYmJsZXMlMjBzdG9uZXN8ZW58MXx8fHwxNzYxMjEyOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1713857188096-0849a125bf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBlYmJsZXMlMjBzdG9uZXN8ZW58MXx8fHwxNzYxMjEyOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 50.00,
      currentPrice: 24.00,
      finalPrice: 26.00,
      onSale: true,
    },
    {
      id: 2,
      name: 'Garden Sweet Sand "Sweet Soil"',
      image: 'https://images.unsplash.com/photo-1641444448982-23bc354fb05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBzb2lsJTIwc2FuZHxlbnwxfHx8fDE3NjEyMTI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1641444448982-23bc354fb05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBzb2lsJTIwc2FuZHxlbnwxfHx8fDE3NjEyMTI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 35.00,
      currentPrice: 13.00,
      onSale: true,
    },
    {
      id: 3,
      name: 'GARDENER\'S Planting mix potting soil',
      image: 'https://images.unsplash.com/photo-1744842091496-39d669717ff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0aW5nJTIwc29pbCUyMGJhZ3xlbnwxfHx8fDE3NjEyMTI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1744842091496-39d669717ff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0aW5nJTIwc29pbCUyMGJhZ3xlbnwxfHx8fDE3NjEyMTI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 37.25,
      currentPrice: 13.50,
      onSale: false,
    },
    {
      id: 4,
      name: 'Organic Potting Soil By Shalimar',
      image: 'https://images.unsplash.com/photo-1757840981839-6d71bb4ba3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYmFnJTIwb3JnYW5pY3xlbnwxfHx8fDE3NjEyMTI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1757840981839-6d71bb4ba3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYmFnJTIwb3JnYW5pY3xlbnwxfHx8fDE3NjEyMTI5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 175.00,
      salePrice: 16.00,
      currentPrice: 18.00,
      finalPrice: 120.00,
      onSale: true,
    },
    {
      id: 5,
      name: 'Agricultural Clay | Garden soil | Clay Soil Bag التربة الطينية الزراعية',
      image: 'https://images.unsplash.com/photo-1662845114342-256fdc45981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwc29pbCUyMGhhbmRzfGVufDF8fHx8MTc2MTIxMjk5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1662845114342-256fdc45981d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwc29pbCUyMGhhbmRzfGVufDF8fHx8MTc2MTIxMjk5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 140.00,
      salePrice: 30.00,
      currentPrice: 25.00,
      finalPrice: 115.00,
      onSale: true,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          Best Selling Soil & Fertilisers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="default" 
            className="bg-black text-white px-8 py-3 hover:bg-gray-800"
            size="lg"
          >
            Shop collection
          </Button>
        </div>
      </div>
    </section>
  );
}
