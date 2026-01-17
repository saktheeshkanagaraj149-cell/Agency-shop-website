import React, { useState, useMemo } from 'react'
import productsData from '../data/products'

const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })

function Star({score}){
  const full = Math.floor(score)
  return <div className="text-yellow-500">{'★'.repeat(full)}{'☆'.repeat(5-full)}</div>
}

export default function Products({ search, categoryFilter, brandFilter }){
  const [wish, setWish] = useState([])

  const items = useMemo(()=>{
    return productsData.filter(p => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
      if (categoryFilter && categoryFilter !== 'All' && p.category !== categoryFilter) return false
      if (brandFilter && brandFilter !== 'All' && p.brand !== brandFilter) return false
      return true
    })
  },[search, categoryFilter, brandFilter])

  return (
    <section id="products" className="w-full py-12 sm:py-16 bg-gradient-to-b from-blue-50 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10 animate-fadeInUp">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Products</h3>
            <p className="text-gray-600 mt-2 text-sm">Discover our premium selection of industrial supplies</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-500 bg-blue-100 px-4 py-2 rounded-full font-semibold">{items.length} products</div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((p, idx) => (
            <div key={p.id} className="animate-fadeInUp rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {p.badge && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    {p.badge}
                  </div>
                )}
              </div>
              <div className="p-5 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{p.name}</div>
                    <div className="text-xs text-gray-500 mt-1 font-semibold">{p.brand}</div>
                  </div>
                  <button 
                    onClick={()=> setWish(w => w.includes(p.id) ? w.filter(x=>x!==p.id) : [...w,p.id])} 
                    className={`text-xl transition-all duration-300 transform hover:scale-125 ${wish.includes(p.id) ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
                  >
                    ♥
                  </button>
                </div>
                <div className="text-lg font-bold text-blue-600 mb-3">{currency.format(p.price)}</div>
                <div className="flex items-center gap-2 mb-4">
                  <Star score={p.rating} />
                  <span className="text-xs text-gray-500 font-semibold">{p.rating}/5</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm">Add to cart</button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold transition-all duration-300 text-sm">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
