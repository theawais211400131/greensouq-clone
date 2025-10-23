'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
  originalPrice?: number;
  salePrice?: number;
  currentPrice: number;
  finalPrice?: number;
  onSale: boolean;
}

export function ProductCard({
  name,
  image,
  hoverImage,
  originalPrice,
  salePrice,
  currentPrice,
  finalPrice,
  onSale,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {onSale && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white z-10 hover:bg-red-500">
            Sale
          </Badge>
        )}
        
        {/* Image container */}
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={hoverImage}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Hover buttons */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <Button 
            variant="outline" 
            className="w-full bg-white hover:bg-gray-100 border-gray-300"
            size="sm"
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick shop
          </Button>
          <Button 
            className="w-full bg-black hover:bg-gray-800 text-white"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Choose options
          </Button>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="text-gray-800 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        
        {originalPrice && salePrice && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-400 line-through">
              Dhs. {originalPrice.toFixed(2)}
            </span>
            <span className="text-gray-400">
              - Dhs. {salePrice.toFixed(2)}
            </span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <span className="text-green-600">
            Dhs. {currentPrice.toFixed(2)}
          </span>
          {finalPrice && (
            <>
              <span className="text-gray-400">-</span>
              <span className="text-green-600">
                Dhs. {finalPrice.toFixed(2)}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
