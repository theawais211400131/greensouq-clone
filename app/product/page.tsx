"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Subscribed email:", email);
      
      setIsSubscribed(true);
      setEmail("");
      
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Main product data
  const mainProduct = {
    id: 0,
    name: "Fresh Indoor Plant",
    price: "$25.00",
    originalPrice: "$35.00",
    discount: "28% OFF",
    badge: "🌿 Best Seller",
    description: "Bring nature inside with this beautiful green indoor plant. Perfect for your office or home setup. Low maintenance and adds a touch of freshness to any space.",
    details: {
      careLevel: "Easy - Perfect for beginners",
      water: "Once a week",
      light: "Bright indirect sunlight",
      size: "12-18 inches tall",
      placement: "Indoor, living room, office"
    },
    images: {
      main: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
      hover: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
      thumbnail1: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop",
      thumbnail2: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=150&h=150&fit=crop"
    },
    rating: 5,
    reviews: 128
  };

  // Related products with hover images
  const relatedProducts = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: "$45.99",
      originalPrice: "$55.99",
      discount: "18% OFF",
      badge: "🌱 Popular",
      description: "Large tropical plant with unique split leaves that add a dramatic touch to any space.",
      details: {
        careLevel: "Moderate",
        water: "Every 1-2 weeks",
        light: "Medium to bright indirect light",
        size: "24-36 inches tall",
        placement: "Living room, corner spaces"
      },
      images: {
        main: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop"
      },
      rating: 5,
      reviews: 89
    },
    {
      id: 2,
      name: "Snake Plant",
      price: "$32.50",
      originalPrice: "$40.00",
      discount: "19% OFF",
      badge: "💚 Air Purifier",
      description: "Extremely hardy plant that thrives on neglect and purifies indoor air effectively.",
      details: {
        careLevel: "Very Easy",
        water: "Every 2-3 weeks",
        light: "Low to bright indirect light",
        size: "18-24 inches tall",
        placement: "Bedroom, office, bathroom"
      },
      images: {
        main: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&h=600&fit=crop"
      },
      rating: 4,
      reviews: 156
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: "$89.99",
      originalPrice: "$120.00",
      discount: "25% OFF",
      badge: "🎨 Statement Piece",
      description: "Trendy plant with large, violin-shaped leaves that makes a bold interior statement.",
      details: {
        careLevel: "Moderate to Difficult",
        water: "Once a week",
        light: "Bright indirect light",
        size: "36-48 inches tall",
        placement: "Bright living areas"
      },
      images: {
        main: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop"
      },
      rating: 4,
      reviews: 67
    },
    {
      id: 4,
      name: "Peace Lily",
      price: "$28.75",
      originalPrice: "$35.00",
      discount: "18% OFF",
      badge: "🌸 Blooming",
      description: "Beautiful flowering plant that also helps purify the air in your home or office.",
      details: {
        careLevel: "Easy",
        water: "When soil is dry",
        light: "Low to medium indirect light",
        size: "14-20 inches tall",
        placement: "Office, bedroom, living room"
      },
      images: {
        main: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop"
      },
      rating: 5,
      reviews: 203
    },
    {
      id: 5,
      name: "Rose Bush",
      price: "$24.99",
      originalPrice: "$32.00",
      discount: "22% OFF",
      badge: "🌹 Fragrant",
      description: "Classic flowering bush that brings beauty and fragrance to your outdoor space.",
      details: {
        careLevel: "Moderate",
        water: "2-3 times per week",
        light: "Full sun",
        size: "24-36 inches tall",
        placement: "Garden, patio, balcony"
      },
      images: {
        main: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop"
      },
      rating: 4,
      reviews: 134
    },
    {
      id: 6,
      name: "Lavender Plant",
      price: "$18.50",
      originalPrice: "$25.00",
      discount: "26% OFF",
      badge: "💜 Calming",
      description: "Aromatic herb known for its soothing fragrance and beautiful purple flowers.",
      details: {
        careLevel: "Easy",
        water: "When soil is dry",
        light: "Full sun",
        size: "12-18 inches tall",
        placement: "Garden, windowsill, balcony"
      },
      images: {
        main: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&h=600&fit=crop"
      },
      rating: 5,
      reviews: 98
    },
    {
      id: 7,
      name: "Tomato Plant",
      price: "$15.99",
      originalPrice: "$22.00",
      discount: "27% OFF",
      badge: "🍅 Edible",
      description: "Grow your own fresh, organic tomatoes right at home with this easy-to-care plant.",
      details: {
        careLevel: "Easy",
        water: "Daily in summer",
        light: "Full sun",
        size: "36-48 inches tall",
        placement: "Garden, patio, balcony"
      },
      images: {
        main: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop"
      },
      rating: 4,
      reviews: 167
    },
    {
      id: 8,
      name: "Herb Garden Set",
      price: "$35.00",
      originalPrice: "$45.00",
      discount: "22% OFF",
      badge: "🌿 Kitchen Set",
      description: "Complete set of culinary herbs including basil, mint, and parsley for your kitchen.",
      details: {
        careLevel: "Easy",
        water: "When soil is dry",
        light: "Bright indirect light",
        size: "6-12 inches tall",
        placement: "Kitchen, windowsill"
      },
      images: {
        main: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&h=600&fit=crop",
        hover: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop"
      },
      rating: 5,
      reviews: 89
    }
  ];

  // Current product being displayed (main or selected from related)
  const currentProduct = selectedProduct || mainProduct;

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowMore(false);
    setQuantity(1);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl shadow-green-200/50 overflow-hidden md:flex border border-green-100">
          {/* Left Side - Images */}
          <div className="md:w-1/2 p-6 sm:p-8">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-64 sm:h-80 md:h-96 relative">
                  <Image
                    src={currentProduct.images.main}
                    alt={currentProduct.name}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <Image
                    src={currentProduct.images.hover}
                    alt={`${currentProduct.name} Hover`}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-4 mt-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-green-300 cursor-pointer">
                  <Image
                    src={currentProduct.images.thumbnail1 || currentProduct.images.main}
                    alt="Thumbnail 1"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-300 cursor-pointer hover:border-green-300 transition-colors">
                  <Image
                    src={currentProduct.images.thumbnail2 || currentProduct.images.hover}
                    alt="Thumbnail 2"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {currentProduct.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {currentProduct.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(currentProduct.rating)}
              </div>
              <span className="text-gray-600 text-sm">({currentProduct.reviews} reviews)</span>
            </div>

            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              {currentProduct.description}
            </p>

            {/* Show More Section */}
            {showMore && (
              <div className="animate-fade-in">
                <div className="space-y-3 text-gray-600 mb-6">
                  <p><span className="font-semibold">🌱 Care Level:</span> {currentProduct.details.careLevel}</p>
                  <p><span className="font-semibold">💧 Water:</span> {currentProduct.details.water}</p>
                  <p><span className="font-semibold">☀️ Light:</span> {currentProduct.details.light}</p>
                  <p><span className="font-semibold">📏 Size:</span> {currentProduct.details.size}</p>
                  <p><span className="font-semibold">🏡 Placement:</span> {currentProduct.details.placement}</p>
                </div>
              </div>
            )}

            {/* Show More Button */}
            <button
              onClick={handleShowMoreInfo}
              className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6 transition-colors group"
            >
              <span>{showMore ? "Show Less" : "Show More Info"}</span>
              <span className={`transform transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-green-600">{currentProduct.price}</span>
              <span className="text-gray-500 line-through ml-2">{currentProduct.originalPrice}</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium ml-2">
                {currentProduct.discount}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                <button
                  onClick={handleDecrease}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-xl bg-white shadow-md hover:bg-gray-50 transition-all duration-200 hover:scale-110"
                >
                  -
                </button>
                <span className="text-lg font-bold min-w-8 text-center">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-xl bg-white shadow-md hover:bg-gray-50 transition-all duration-200 hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 mb-4 flex items-center justify-center gap-2">
              <span>🛒</span>
              Add to Cart - {currentProduct.price}
            </button>

            {/* Buy Now Button */}
            <button className="w-full bg-black text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 mb-6">
              Buy Now
            </button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">🚚</span>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">💳</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">🌱</span>
                <span>Easy Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          You May Also Like
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <Image
                  src={product.images.hover}
                  alt={product.name}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                
                {/* Quick View Button */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    👁️
                  </div>
                </div>

                {/* Product Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 truncate text-lg">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 font-bold text-xl">{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                </div>
                <button className="w-full bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated Newsletter Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with GreenSouq
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get the latest offers, gardening tips, and new plant arrivals delivered to your inbox.
          </p>
          
          {/* Updated Email Subscription Component */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            {!isSubscribed ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all duration-300 hover:border-green-400"
                  required
                />
                <button 
                  onClick={handleSubscribe}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <span>📧</span>
                      Subscribe
                    </>
                  )}
                </button>
              </>
            ) : (
              <div className="w-full bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 text-center animate-fade-in">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-lg">✅</span>
                  </div>
                  <div className="text-left">
                    <p className="text-green-800 font-semibold text-sm sm:text-base">
                      Thank you for subscribing!
                    </p>
                    <p className="text-green-600 text-xs sm:text-sm">
                      Welcome to the GreenSouq community 🌱
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}