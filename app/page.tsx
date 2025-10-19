"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Define the 4 main images
  const mainImages = {
    image1: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=500&fit=crop",
    image2: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200&h=200&fit=crop&crop=center",
    image3: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=center",
    image4: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=200&h=200&fit=crop&crop=center"
  };

  // Define hover images
  const hoverImages = {
    hover1: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=200&h=200&fit=crop&crop=center",
    hover2: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=300&h=300&fit=crop",
    hover3: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=300&h=300&fit=crop",
    hover4: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop"
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock API call to check if email exists
      const mockEmailDatabase = [
        "user1@example.com",
        "test@example.com", 
        "customer@greensouq.com",
        "plantlover@gmail.com"
      ];

      const emailExists = mockEmailDatabase.includes(email.toLowerCase());
      
      if (!emailExists) {
        setError("Email not found. Please check your email address or sign up first.");
        return;
      }

      console.log("Subscribed email:", email);
      
      // If email exists, proceed with subscription
      setIsSubscribed(true);
      setEmail("");
      
    } catch (error) {
      console.error("Subscription error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Hero section images
  const heroImages = [
    {
      id: 1,
      url: mainImages.image1,
      hoverUrl: hoverImages.hover1,
      big: true
    },
    {
      id: 2,
      url: mainImages.image2,
      hoverUrl: hoverImages.hover2,
      big: false
    },
    {
      id: 3,
      url: mainImages.image3,
      hoverUrl: hoverImages.hover3,
      big: false
    },
    {
      id: 4,
      url: mainImages.image4,
      hoverUrl: hoverImages.hover4,
      big: false
    },
    {
      id: 5,
      url: mainImages.image1,
      hoverUrl: hoverImages.hover1,
      big: false
    }
  ];

  // Top categories - using same 4 images
  const topCategories = [
    {
      id: 1,
      name: "Indoor Plants",
      url: mainImages.image1,
      hoverUrl: hoverImages.hover1
    },
    {
      id: 2,
      name: "Flowering Plants",
      url: mainImages.image2,
      hoverUrl: hoverImages.hover2
    },
    {
      id: 3,
      name: "Succulents",
      url: mainImages.image3,
      hoverUrl: hoverImages.hover3
    },
    {
      id: 4,
      name: "Gardening Tools",
      url: mainImages.image4,
      hoverUrl: hoverImages.hover4
    },
    {
      id: 5,
      name: "Plant Pots",
      url: mainImages.image1,
      hoverUrl: hoverImages.hover1
    },
    {
      id: 6,
      name: "Fertilizers",
      url: mainImages.image2,
      hoverUrl: hoverImages.hover2
    }
  ];

  // Products using same 4 images
  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: "$45.99",
      category: "Indoor",
      url: mainImages.image1,
      hoverUrl: hoverImages.hover1
    },
    {
      id: 2,
      name: "Snake Plant",
      price: "$32.50",
      category: "Indoor",
      url: mainImages.image2,
      hoverUrl: hoverImages.hover2
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: "$89.99",
      category: "Indoor",
      url: mainImages.image3,
      hoverUrl: hoverImages.hover3
    },
    {
      id: 4,
      name: "Peace Lily",
      price: "$28.75",
      category: "Indoor",
      url: mainImages.image4,
      hoverUrl: hoverImages.hover4
    },
    {
      id: 5,
      name: "Rose Bush",
      price: "$24.99",
      category: "Outdoor",
      url: mainImages.image1,
      hoverUrl: hoverImages.hover1
    },
    {
      id: 6,
      name: "Lavender Plant",
      price: "$18.50",
      category: "Outdoor",
      url: mainImages.image2,
      hoverUrl: hoverImages.hover2
    },
    {
      id: 7,
      name: "Tomato Plant",
      price: "$15.99",
      category: "Outdoor",
      url: mainImages.image3,
      hoverUrl: hoverImages.hover3
    },
    {
      id: 8,
      name: "Herb Garden Set",
      price: "$35.00",
      category: "Outdoor",
      url: mainImages.image4,
      hoverUrl: hoverImages.hover4
    }
  ];

  const indoorPlants = products.filter(p => p.category === "Indoor");
  const outdoorPlants = products.filter(p => p.category === "Outdoor");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {/* Big Image */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative">
              <Image
                src={heroImages[0].url}
                alt="Featured Plant"
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <Image
                src={heroImages[0].hoverUrl}
                alt="Featured Plant Hover"
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            {/* Sale Banner */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg z-10">
              🌟 50% OFF SALE
            </div>
            {/* Shop Now Button */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10">
              <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroImages.slice(1, 5).map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-md h-32 sm:h-40 md:h-48"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={image.url}
                    alt={`Plant ${image.id}`}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <Image
                    src={image.hoverUrl}
                    alt={`Plant ${image.id} Hover`}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Top Categories This Week
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {topCategories.map((category) => (
            <div key={category.id} className="text-center group cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-2 sm:mb-3 md:mb-4 overflow-hidden rounded-full border-2 sm:border-4 border-green-100 group-hover:border-green-400 transition-all duration-300 shadow-lg group-hover:shadow-xl relative">
                <Image
                  src={category.url}
                  alt={category.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
                <Image
                  src={category.hoverUrl}
                  alt={category.name}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </div>
              <h3 className="font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-300 text-xs sm:text-sm md:text-base">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Featured Plants
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Indoor Plants Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Indoor Plants
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {indoorPlants.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Outdoor Plants Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Outdoor Plants
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {outdoorPlants.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Updated Newsletter Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-12 sm:py-16 mt-8 sm:mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with GreenSouq
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Get the latest offers, gardening tips, and new plant arrivals delivered to your inbox.
          </p>
          
          {/* Updated Email Subscription Component */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(""); // Clear error when user starts typing
                      }}
                      className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 ${
                        error 
                          ? "border-red-300 focus:ring-red-500 hover:border-red-400" 
                          : "border-gray-300 focus:ring-green-500 focus:border-transparent hover:border-green-400"
                      }`}
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base flex items-center justify-center gap-2 whitespace-nowrap min-w-[140px]"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Checking...
                      </>
                    ) : (
                      <>
                        <span>📧</span>
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
                
                {/* Error Message */}
                {error && (
                  <div className="animate-fade-in">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-left">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 text-lg flex-shrink-0">⚠️</span>
                        <div>
                          <p className="text-red-800 font-medium text-sm">{error}</p>
                          <p className="text-red-600 text-xs mt-1">
                            Don't have an account?{" "}
                            <button 
                              type="button" 
                              className="underline hover:text-red-700 font-medium"
                              onClick={() => {
                                // You can add signup logic here
                                console.log("Redirect to signup");
                              }}
                            >
                              Sign up here
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
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

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <Image
          src={product.url}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
        <Image
          src={product.hoverUrl}
          alt={product.name}
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
        
        {/* Hover Buttons - Bottom Center */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
          <div className="flex flex-col gap-2 transform translate-y-8 sm:translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-lg font-medium w-full hover:scale-105 transition-transform duration-200 shadow-lg text-xs sm:text-sm">
              Quick Shop
            </button>
            <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg font-medium w-full hover:scale-105 transition-transform duration-200 shadow-lg text-xs sm:text-sm">
              Choose Options
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-gray-800 mb-1 truncate text-sm sm:text-base md:text-lg">
          {product.name}
        </h3>
        <p className="text-green-600 font-bold text-lg sm:text-xl">{product.price}</p>
      </div>
    </div>
  );
}