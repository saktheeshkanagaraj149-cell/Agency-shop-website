import React from 'react'
import Chatbot from './Chatbot'

export default function FloatingButtons(){
  return (
    <div>
      <Chatbot />
      <a href="tel:9443962675" className="fixed left-4 bottom-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 sm:hidden flex items-center justify-center">
        📞
      </a>
    </div>
  )
}
