import React from 'react';
import { Shield, Zap, Heart } from 'lucide-react';

export default function ProductFeature() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Crafted with the finest materials for lasting durability"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Shipping",
      description: "Free express delivery on all orders over $50"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer Love",
      description: "Rated 4.9/5 stars by over 10,000 happy customers"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 text-[#FE5000] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}