import React from 'react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Silk Elegance",
    description: "Luxurious silk sarees for special occasions",
    image: "https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=800",
    link: "#"
  },
  {
    title: "Designer Drapes",
    description: "Contemporary designs meet traditional aesthetics",
    image: "https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=800",
    link: "#"
  },
  {
    title: "Daily Wear Comfort",
    description: "Comfortable and stylish everyday sarees",
    image: "https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=800",
    link: "#"
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.title} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] relative">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-sm mb-4">{collection.description}</p>
                  <a
                    href={collection.link}
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}