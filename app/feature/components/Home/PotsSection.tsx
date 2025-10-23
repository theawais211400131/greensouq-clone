import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export function PotsSection() {
  const products = [
    {
      id: 1,
      name: 'Rolled Rim Pot Outdoor Ceramic Pot, Trendy Outdoor Pot (Multi-colour)',
      image: 'https://images.unsplash.com/photo-1617567790012-c7c000b5515c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY2VyYW1pYyUyMHBvdHxlbnwxfHx8fDE3NjEyMTI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1617567790012-c7c000b5515c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY2VyYW1pYyUyMHBvdHxlbnwxfHx8fDE3NjEyMTI5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 255.00,
      currentPrice: 60.00,
      onSale: false,
    },
    {
      id: 2,
      name: 'Rectangular Planter All Sizes/ GRP Pot Modern Durable Outdoor Planter Box',
      image: 'https://images.unsplash.com/photo-1705893641943-23f2d474d209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJlY3Rhbmd1bGFyJTIwcGxhbnRlcnxlbnwxfHx8fDE3NjEyMTI5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1705893641943-23f2d474d209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJlY3Rhbmd1bGFyJTIwcGxhbnRlcnxlbnwxfHx8fDE3NjEyMTI5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 950.00,
      salePrice: 190.00,
      currentPrice: 100.00,
      finalPrice: 785.00,
      onSale: true,
    },
    {
      id: 3,
      name: 'Classic cylinder "Satin Finish"',
      image: 'https://images.unsplash.com/photo-1564220900499-70d5cd5bcb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGN5bGluZGVyJTIwcGxhbnRlcnxlbnwxfHx8fDE3NjEyMTI5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1564220900499-70d5cd5bcb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGN5bGluZGVyJTIwcGxhbnRlcnxlbnwxfHx8fDE3NjEyMTI5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 425.00,
      currentPrice: 140.00,
      onSale: false,
    },
    {
      id: 4,
      name: 'GRP Square Pot All Sizes',
      image: 'https://images.unsplash.com/photo-1718567933978-fffd8c540f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNxdWFyZSUyMHBsYW50ZXJ8ZW58MXx8fHwxNzYxMjEyOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1718567933978-fffd8c540f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNxdWFyZSUyMHBsYW50ZXJ8ZW58MXx8fHwxNzYxMjEyOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 1700.00,
      salePrice: 70.00,
      currentPrice: 60.00,
      onSale: false,
    },
    {
      id: 5,
      name: 'GRP Round Flower Pot All Sizes/ GRP Planter',
      image: 'https://images.unsplash.com/photo-1629103586290-aa4ee13e6baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMHdoaXRlJTIwcG90fGVufDF8fHx8MTc2MTIxMjk5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1629103586290-aa4ee13e6baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMHdoaXRlJTIwcG90fGVufDF8fHx8MTc2MTIxMjk5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 2920.00,
      currentPrice: 35.00,
      onSale: false,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          Top Selling Pots & Planters
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
