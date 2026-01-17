import React, { useState } from 'react'
import { Phone, Search, User, Menu, X } from 'lucide-react'
import logo from '../assets/logo sri balaji agency.svg'

export default function Header({ onSearch }){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="shadow-lg sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4 sm:gap-6 flex-1">
            <div className="bg-blue-50 p-1 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
              <img src={logo} alt="Sri Balaji Agency" className="w-full h-full object-contain rounded-full" />
            </div>
            <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
              <a href="#home" className="hover:text-blue-700 transition-colors duration-300 font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">Home</a>
              <a href="#products" className="hover:text-blue-700 transition-colors duration-300 font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">Products</a>
              <a href="#brands" className="hover:text-blue-700 transition-colors duration-300 font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">Brands</a>
              <a href="#about" className="hover:text-blue-700 transition-colors duration-300 font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">About</a>
              <a href="#contact" className="hover:text-blue-700 transition-colors duration-300 font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all">Contact</a>
            </nav>
          </div>

          <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-2 py-1">
            <Search className="w-4 h-4 text-gray-500" />
            <input onChange={(e)=> onSearch && onSearch(e.target.value)} placeholder="Search" className="bg-transparent outline-none ml-2 text-sm w-32" />
          </div>

          <a href="tel:9443962675" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm">
            <Phone className="w-4 h-4" />
            <span>9443962675</span>
          </a>

          <a href="tel:9443962675" className="sm:hidden flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 text-white p-2 rounded-full">
            <Phone className="w-5 h-5" />
          </a>

          <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 md:hidden">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 border-t">
            <a href="#home" className="block px-2 py-2 hover:bg-gray-100 rounded">Home</a>
            <a href="#products" className="block px-2 py-2 hover:bg-gray-100 rounded">Products</a>
            <a href="#brands" className="block px-2 py-2 hover:bg-gray-100 rounded">Brands</a>
            <a href="#about" className="block px-2 py-2 hover:bg-gray-100 rounded">About</a>
            <a href="#contact" className="block px-2 py-2 hover:bg-gray-100 rounded">Contact</a>
            <input placeholder="Search products" onChange={(e)=> onSearch && onSearch(e.target.value)} className="mx-2 p-2 border rounded w-auto" />
          </nav>
        )}
      </div>
    </header>
  )
}
