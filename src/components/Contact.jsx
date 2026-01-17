import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">Visit Our Store or Call Us Today</h3>
          <div className="mt-4 text-xs sm:text-sm space-y-2">
            <div>📞 Phone: 9443962675</div>
            <div>📍 Address: 112B, Subramaniapuram Colony, Bypass Road, Sivakasi</div>
            <div>📧 Email: info@sribalajiagency.com</div>
            <div>🕒 Hours: Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM</div>
          </div>
          <div className="mt-6">
            <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent — we will contact you soon')}} className="grid grid-cols-1 gap-3">
              <input required placeholder="Your name" className="p-2 rounded text-gray-800" />
              <input required type="email" placeholder="Email" className="p-2 rounded text-gray-800" />
              <textarea required placeholder="Message" rows={4} className="p-2 rounded text-gray-800" />
              <button className="bg-blue-600 px-4 py-2 rounded text-white">Send Message</button>
            </form>
          </div>
        </div>
        <div>
          <iframe title="sivakasi-map" className="w-full h-72 rounded" src="https://www.google.com/maps?q=Sivakasi&output=embed"></iframe>
        </div>
      </div>
    </section>
  )
}
