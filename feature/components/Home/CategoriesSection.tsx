export function CategoriesSection() {
  const categories = [
    {
      id: 1,
      name: 'Plant Bundles',
      image:
        'https://images.unsplash.com/photo-1751445384422-4a70245dbf65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Fruit Plants',
      image:
        'https://images.unsplash.com/photo-1708366409198-604ca80f3e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Clearance sale',
      image:
        'https://images.unsplash.com/photo-1614887410788-e158d6efb3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 4,
      name: 'Olive Trees',
      image:
        'https://images.unsplash.com/photo-1759722666783-fdbc48b0b606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 text-3xl font-semibold text-gray-800">
          Top Categories this Week
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-lg font-medium group-hover:text-green-600 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
