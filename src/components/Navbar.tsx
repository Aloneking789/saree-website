import { useState } from 'react';
import { ShoppingBag, Heart, User, Search } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import CartModal from './CartModal';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-pink-600">देवा</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-pink-600">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-pink-600">Banarasi</a>
              <a href="#" className="text-gray-700 hover:text-pink-600">Silk</a>
              <a href="#" className="text-gray-700 hover:text-pink-600">Wedding</a>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-pink-600">
                <Search className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-pink-600">
                <User className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-pink-600">
                <Heart className="h-6 w-6" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-pink-600 relative"
              >
                <ShoppingBag className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}