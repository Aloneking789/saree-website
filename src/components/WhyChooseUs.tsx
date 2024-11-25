import React from 'react';
import { Truck, RefreshCcw, Shield, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders above ₹999"
  },
  {
    icon: RefreshCcw,
    title: "7-Day Returns",
    description: "Easy returns within 7 days of delivery"
  },
  {
    icon: Shield,
    title: "Authentic Quality",
    description: "100% authentic handcrafted sarees"
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Multiple secure payment options"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
                <feature.icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}