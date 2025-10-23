import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

export function GardeningAccessoriesSection() {
  const products = [
    {
      id: 1,
      name: 'Watering Can 5liters and 12 liters',
      image: 'https://images.unsplash.com/photo-1604309931632-31d906867612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3YXRlcmluZyUyMGNhbnxlbnwxfHx8fDE3NjEyMTIxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1604309931632-31d906867612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3YXRlcmluZyUyMGNhbnxlbnwxfHx8fDE3NjEyMTIxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 50.00,
      currentPrice: 25.00,
      finalPrice: 90.00,
      onSale: true,
    },
    {
      id: 2,
      name: '3 Piece Set Gardening Hand Tools',
      image: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBoYW5kJTIwdG9vbHMlMjBzZXR8ZW58MXx8fHwxNzYxMjEyMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBoYW5kJTIwdG9vbHMlMjBzZXR8ZW58MXx8fHwxNzYxMjEyMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      currentPrice: 45.00,
      onSale: false,
    },
    {
      id: 3,
      name: 'Garden Bamboo Reed Privacy Fence, durable outdoor privacy, balcony privacy fence, boundry privacy fence',
      image: 'https://images.unsplash.com/photo-1562766057-90f7061eeff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmZW5jZSUyMHJvbGx8ZW58MXx8fHwxNzYxMjEyMTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1562766057-90f7061eeff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmZW5jZSUyMHJvbGx8ZW58MXx8fHwxNzYxMjEyMTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 190.00,
      currentPrice: 145.00,
      finalPrice: 395.00,
      onSale: true,
    },
    {
      id: 4,
      name: 'Garden Shade Net 73% with 6 Years Warranty "Made in Korea"',
      image: 'https://images.unsplash.com/photo-1650167157052-ddb9b7cc5a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBzaGFkZSUyMG5ldHxlbnwxfHx8fDE3NjEyMTIxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1650167157052-ddb9b7cc5a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBzaGFkZSUyMG5ldHxlbnwxfHx8fDE3NjEyMTIxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 28.00,
      currentPrice: 16.00,
      finalPrice: 1250.00,
      onSale: true,
    },
    {
      id: 5,
      name: 'Garden Gloves with Claw "Hands Protection, Garden Safety Gloves, Easy Seeding and Garden Works"',
      image: 'https://images.unsplash.com/photo-1639654771880-5fa903b98cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBnbG92ZXMlMjBjbGF3fGVufDF8fHx8MTc2MTIxMjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      hoverImage: 'https://images.unsplash.com/photo-1639654771880-5fa903b98cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBnbG92ZXMlMjBjbGF3fGVufDF8fHx8MTc2MTIxMjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 14.00,
      currentPrice: 12.50,
      onSale: true,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          Gardening Accessories
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
