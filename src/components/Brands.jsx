import React from 'react'

const brandList = ['VAHINI','ASHIRVAD','FINOLEX','AQUATECH','ASIAN PAINTS','SAMUDRA','ELGI','V-GUARD','ANCHOR','SOMANY','PARRYWARE','CERA']

export default function Brands(){
  return (
    <section id="brands" className="w-full bg-gray-50 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Authorized Dealer for Premium Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {brandList.map(b => (
            <div key={b} className="bg-white rounded-md p-4 flex flex-col items-center justify-center shadow-sm">
              <div className="font-semibold text-sm text-gray-800">{b}</div>
              <div className="mt-2 text-xs text-blue-600">Authorized Dealer</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
