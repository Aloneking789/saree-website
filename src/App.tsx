import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
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
    image: 'https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 45
  },
  {
    id: '2',
    name: 'Beige Silk Saree',
    price: 3799,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1634715400668-2be61c363042?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 45
  },
  {
    id: '3',
    name: 'Blue Silk Saree',
    price: 3099,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 47
  },
  {
    id: '4',
    name: 'Purple Silk Saree',
    price: 3099,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1634715400668-2be61c363042?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 38
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ImageSlider />

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