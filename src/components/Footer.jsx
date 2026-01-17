import React from 'react'
import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="w-full bg-gray-800 text-gray-200 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <div className="text-white font-bold text-sm sm:text-base">SRI BALAJI AGENCY</div>
          <p className="text-xs sm:text-sm mt-2">Your trusted partner for industrial supplies in Sivakasi since 2008. Authorized dealer for 25+ premium brands.</p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.instagram.com/sribalajiagency2010?igsh=MWZnNjFyY2dtNHht" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-400 transition flex items-center gap-1">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/919443962675" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition flex items-center gap-1">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 text-sm">
            <li>All Products</li>
            <li>Brands We Deal</li>
            <li>Warranty Information</li>
            <li>Delivery Policy</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Product Categories</div>
          <ul className="mt-2 text-sm">
            <li>PVC Pipes & Fittings</li>
            <li>Water Tanks</li>
            <li>Paints & Electrical</li>
            <li>Motors & Pumps</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm">Phone: 9443962675</div>
          <div className="text-sm">Address: 112B, Subramaniapuram Colony, Bypass Road, Sivakasi</div>
          <div className="text-sm">Email: info@sribalajiagency.com</div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">© 2024 Sri Balaji Agency | Proprietor: S. Sakthi Vinayagam | All Rights Reserved</div>
    </footer>
  )
}
