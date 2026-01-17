import React, { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function Chatbot(){
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! 👋 Welcome to Sri Balaji Agency. How can we help you today?', sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const quickReplies = [
    'Product Info',
    'Pricing',
    'Delivery',
    'Contact Store',
    'Brands'
  ]

  const getBotResponse = (userText) => {
    const text = userText.toLowerCase()
    
    if (text.includes('product') || text.includes('pipe') || text.includes('tank') || text.includes('wire')) {
      return 'We have 500+ products including PVC pipes, water tanks, electrical supplies, motors, paints, and more! What specific product are you looking for?'
    }
    if (text.includes('price') || text.includes('cost') || text.includes('rupee') || text.includes('₹')) {
      return 'Our prices are very competitive! For specific pricing, please visit our Products section or call us at 9443962675. We offer the best quality at best rates!'
    }
    if (text.includes('deliver') || text.includes('shipping') || text.includes('fast')) {
      return 'We provide fast delivery in Sivakasi! For delivery details and timelines, please call us at 9443962675 or visit our store at 112B, Subramaniapuram Colony, Bypass Road.'
    }
    if (text.includes('contact') || text.includes('phone') || text.includes('call') || text.includes('store') || text.includes('address')) {
      return '📞 Phone: 9443962675\n📍 Address: 112B, Subramaniapuram Colony, Bypass Road, Sivakasi\n🕒 Hours: Mon-Sat: 9AM-8PM, Sun: 10AM-6PM'
    }
    if (text.includes('brand') || text.includes('dealer') || text.includes('authorized')) {
      return 'We are authorized dealers for 25+ premium brands including VAHINI, ASHIRVAD, FINOLEX, AQUATECH, ASIAN PAINTS, V-GUARD, ANCHOR, and many more! Which brand interests you?'
    }
    if (text.includes('warranty') || text.includes('guarantee')) {
      return '✅ We offer 10-year warranty on VAHINI & AQUATECH water tanks, 5-year warranty on AQUA GOLD tanks, and warranty on all authorized brands!'
    }
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
      return 'Hello! 👋 Welcome to Sri Balaji Agency. We provide quality industrial supplies with authorized brands. How can I assist you?'
    }
    return 'Thanks for your question! For more details, please call us at 9443962675 or visit our store. Our team is ready to help!'
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = { id: messages.length + 1, text: input, sender: 'user' }
    const botResponse = { id: messages.length + 2, text: getBotResponse(input), sender: 'bot' }

    setMessages([...messages, userMsg, botResponse])
    setInput('')
  }

  const handleQuickReply = (reply) => {
    const userMsg = { id: messages.length + 1, text: reply, sender: 'user' }
    const botResponse = { id: messages.length + 2, text: getBotResponse(reply), sender: 'bot' }
    setMessages([...messages, userMsg, botResponse])
  }

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-4 bottom-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 flex items-center gap-2"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm font-semibold">Chat</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed right-4 bottom-4 w-80 sm:w-96 rounded-lg shadow-2xl flex flex-col z-50 h-96 sm:h-screen sm:max-h-96">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm">Sri Balaji Support</h3>
              <p className="text-xs opacity-90">Usually replies instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-800 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-800 border border-gray-200'
                  }`}
                >
                  {msg.text.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t">
              <div className="text-xs text-gray-600 mb-2">Quick replies:</div>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map(reply => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t p-3 bg-white rounded-b-lg flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
