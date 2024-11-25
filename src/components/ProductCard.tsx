import { Heart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  discount: number;
}

export default function ProductCard({ id, name, price, originalPrice, image, discount }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group relative">
      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            -{discount}%
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-pink-50">
          <Heart className="h-5 w-5 text-gray-600 hover:text-pink-600" />
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{name}</h3>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-gray-900">₹{price.toLocaleString()}</p>
            {originalPrice > price && (
              <p className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</p>
            )}
          </div>
        </div>
        <button
          onClick={() => addItem({ id, name, price, image })}
          className="bg-pink-600 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}