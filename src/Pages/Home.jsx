import React from 'react'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testemonials'
import ProductFeature from '../Components/ProductFeature'

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="relative pt-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="Hero background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Elevate Your Everyday
                            </h1>
                            <p className="text-xl text-gray-200 mb-8">
                                Discover our collection of premium essentials designed for modern living.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-3 bg-[#FE5000] text-white font-semibold rounded-md hover:bg-[#e64800] transition-colors">
                                    Shop Now
                                </button>
                                <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Products */}
                <div className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                    title: "Premium Watch",
                                    price: "$299"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                    title: "Classic Sneakers",
                                    price: "$189"
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                                    title: "Leather Bag",
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
