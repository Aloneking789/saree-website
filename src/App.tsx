import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import FeaturedCollections from './components/FeaturedCollections';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const products = [
  {
    id: '1',
    name: 'Pink Linen Saree',
    price: 3299,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=800',
    discount: 45
  },
  {
    id: '2',
    name: 'Beige Silk Saree',
    price: 3799,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=800',
    discount: 45
  },
  {
    id: '3',
    name: 'Blue Silk Saree',
    price: 3099,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=800',
    discount: 47
  },
  {
    id: '4',
    name: 'Purple Silk Saree',
    price: 3099,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=800',
    discount: 38
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-pink-600/70" />
        <div className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Discover Timeless Elegance
              </h1>
              <p className="text-xl text-white mb-8">
                Explore our collection of handcrafted sarees from India's finest artisans
              </p>
              <button className="bg-white text-pink-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-pink-50 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <FeaturedCollections />

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;