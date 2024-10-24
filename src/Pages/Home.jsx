import React from 'react'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testemonials'
import ProductFeature from '../Components/ProductFeature'
import Image1 from '../assets/BioAlpine Bio WPC Wildberries Front-Camera.png'
import Image2 from '../assets/BioAlpine Bio WPC Alpine Milk Chocolate Front.png'
import Image3 from '../assets/BioAlpine Bio WPC Espresso Roast FS-Camera.png'
import { Coffee, CupSoda } from 'lucide-react';

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-white">
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <Coffee className="w-10 h-10 text-amber-400" />
          <CupSoda className="w-10 h-10 text-amber-400" />
        </div>
        <h1 className=" mt-44text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Artisanal Coffee <br />& Luxury Chocolate
        </h1>
        <p className="text-xl text-amber-100 max-w-xl mb-8">
          Discover our handcrafted selection of premium coffees and artisanal chocolates,
          where every sip and bite tells a story of excellence.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
          Explore Our Collection
        </button>
      </div>
    </div>

                {/* Featured Products */}
                <div className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-center  text-orange-900">Featured Products</h1>
                        <h3 className='text-center text-orange-600 font-sans mb-12'>Carefully selected from the finest ingredients and crafted to perfection</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    image : Image1,
                                    title: "WildBerries",
                                    price: "$299"
                                },
                                {
                                    image: Image2,
                                    title: "Alpine Milk Chocolates",
                                    price: "$189"
                                },
                                {
                                    image: Image3,
                                    title: "Special Expresso Roast",
                                    price: "$249"
                                }
                            ].map((product, index) => (
                                <div key={index} className="group">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-semibold">{product.title}</h3>
                                        <p className="text-[#FE5000] font-medium">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ProductFeature />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}
