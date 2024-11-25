import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    comment: "The quality of the silk sarees is exceptional. I received so many compliments at my sister's wedding!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=400"
  },
  {
    name: "Anjali R.",
    location: "Delhi",
    comment: "Beautiful collection and excellent customer service. The saree looked even better than the pictures!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=400"
  },
  {
    name: "Meera P.",
    location: "Bangalore",
    comment: "Fast delivery and the packaging was perfect. Will definitely shop again!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610030469668-8e9f638121dd?w=400"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}