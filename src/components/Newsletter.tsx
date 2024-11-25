import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-pink-600 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
          Stay updated with our latest collections, exclusive offers, and styling tips.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-white text-pink-600 px-6 py-3 rounded-md hover:bg-pink-50 transition-colors flex items-center gap-2"
          >
            Subscribe
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}