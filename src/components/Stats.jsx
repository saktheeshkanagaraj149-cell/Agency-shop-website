import React from 'react'

export default function Stats(){
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-3xl font-extrabold">500+</div>
          <div className="mt-1 opacity-90">Products Available</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold">1000+</div>
          <div className="mt-1 opacity-90">Happy Customers</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold">25+</div>
          <div className="mt-1 opacity-90">Authorized Brands</div>
        </div>
      </div>
    </section>
  )
}
