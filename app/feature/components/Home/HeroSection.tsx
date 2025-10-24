import heroImage from 'figma:asset/7c8d5958620378223190414b3b22d50c840acbb2.png';

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-green-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-green-700">
              Transform Your Space with Fresh Plants
            </h1>
            <p className="text-gray-600">
              Discover our wide selection of indoor and outdoor plants, delivered fresh to your doorstep across the UAE.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Shop Now
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
  src={heroImage.src}
  alt="Beautiful indoor plants"
  className="w-full h-auto rounded-lg shadow-lg"
/>

          </div>
        </div>
      </div>
    </section>
  );
}
