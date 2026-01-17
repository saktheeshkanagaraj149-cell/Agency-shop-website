import React, { useState, useMemo } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Brands from './components/Brands'
import Categories from './components/Categories'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CustomerForm from './components/CustomerForm'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import productsData from './data/products'

export default function App(){
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [brand, setBrand] = useState('All')

  const categories = useMemo(()=>{
    const s = new Set(productsData.map(p => p.category))
    return ['All', ...Array.from(s)]
  },[])

  const brands = useMemo(()=>{
    const s = new Set(productsData.map(p => p.brand))
    return ['All', ...Array.from(s)]
  },[])

  return (
    <div className="w-full min-h-screen text-gray-800 overflow-hidden flex flex-col">
      <Header onSearch={setSearch} />
      <main className="w-full flex-1 overflow-y-auto">
        <Hero />
        <Stats />
        <Brands />
        <Categories />

        <div className="w-full py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium">Category:</label>
                <select value={category} onChange={e=>setCategory(e.target.value)} className="p-2 rounded border">
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <label className="text-sm font-medium">Brand:</label>
                <select value={brand} onChange={e=>setBrand(e.target.value)} className="p-2 rounded border">
                  {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="text-sm text-gray-500">Showing filters — search in header or clear selections</div>
            </div>
          </div>
        </div>

        <Products search={search} categoryFilter={category} brandFilter={brand} />
        <Testimonials />
        <CustomerForm />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  )
}
