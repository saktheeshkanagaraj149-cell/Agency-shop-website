import React from 'react'

const categories = [
  {
    title: 'PVC Pipes & Fittings',
    theme: 'bg-orange-50 text-orange-700',
    brands: ['Vahini','Ashirvad','Finolex'],
    features: ['ISI Certified','All Sizes Available','Best Prices']
  },
  {
    title: 'Water Storage Solutions',
    theme: 'bg-blue-50 text-blue-700',
    brands: ['Aquatech','Vahini','Aqua Gold'],
    features: ['10-Year Warranty','Multiple Capacities','Free Delivery']
  },
  {
    title: 'Electrical & Motors',
    theme: 'bg-purple-50 text-purple-700',
    brands: ['Samudra','V-Guard','Anchor'],
    features: ['Heavy Duty','Energy Efficient','Expert Installation']
  }
]

export default function Categories(){
  return (
    <section className="w-full bg-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold mb-6">Product Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map(c => (
            <div key={c.title} className={`p-6 rounded-lg shadow-sm ${c.theme}`}>
              <div className="font-semibold text-lg">{c.title}</div>
              <div className="mt-3 text-sm">Brands: {c.brands.join(', ')}</div>
              <ul className="mt-3 text-sm list-disc list-inside">
                {c.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
