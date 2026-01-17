import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="w-full bg-gradient-to-b from-blue-50 via-purple-50 to-transparent">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fadeInLeft">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-semibold animate-fadeInUp">📍 Sivakasi, Tamil Nadu</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.1s'}}>Your Trusted Industrial Supply Partner in Sivakasi</h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>Premium quality pipes, tanks, electrical supplies, and building materials from authorized dealers.</p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <a href="#products" className="text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold">Shop Now</a>
              <a href="tel:9443962675" className="text-center border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 font-bold">📞 Call</a>
            </div>
            <div className="mt-8 text-sm text-gray-600 font-semibold animate-fadeInUp" style={{animationDelay: '0.4s'}}>✓ Authorized dealer for top brands — expert guidance & fast delivery.</div>
          </div>
          <div className="flex justify-center order-first sm:order-last animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <img src={'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&q=60'} alt="industrial materials" className="w-full max-w-sm sm:max-w-lg rounded-2xl shadow-2xl object-cover relative z-10 transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
