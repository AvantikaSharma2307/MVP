import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import MyImage from '../assets/Screenshot 2024-10-24 150339.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white backdrop-blur-md z-50 border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-[#FE5000]"><img src={MyImage} className='h-16'></img></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-[#FE5000] transition-colors">Home</a>
            <a href="#" className="text-gray-900 hover:text-[#FE5000] transition-colors">Products</a>
            <a href="#" className="text-gray-900 hover:text-[#FE5000] transition-colors">About</a>
            <a href="#" className="text-gray-900 hover:text-[#FE5000] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">About</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}