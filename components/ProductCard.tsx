import Link from "next/link";

export default function ProductCard({ id, name, price, img }: any) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{price}</p>
        <Link
          href="/product"
          className="inline-block mt-3 bg-green-600 text-white px-3 py-1 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
}
