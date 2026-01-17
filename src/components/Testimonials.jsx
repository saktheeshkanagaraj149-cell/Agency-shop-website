import React from 'react'

const reviews = [
  {id:1, text: 'Best quality pipes and prompt delivery. S. Sakthi Vinayagam sir provides excellent guidance.', name: 'Ravi', rating:5},
  {id:2, text: 'Genuine products with warranty. Trusted supplier for all our construction needs.', name: 'Meena', rating:5},
  {id:3, text: 'Great prices and authentic brands. Highly recommend Sri Balaji Agency!', name: 'Kumar', rating:5}
]

export default function Testimonials(){
  return (
    <section className="w-full py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-6">Customer Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(r=> (
            <div key={r.id} className="p-6 rounded-lg shadow-sm">
              <div className="text-yellow-500">★★★★★</div>
              <p className="mt-3 text-gray-700">"{r.text}"</p>
              <div className="mt-3 text-sm font-semibold">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
