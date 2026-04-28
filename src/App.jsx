import { useState } from 'react'
import { categories, menuData } from './data' 
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const filteredItems = menuData.filter(item => item.category === activeCategory)

  return (
    // Pozadina sada ima blagi letnji prelaz (gradient) od bele ka nežno zelenoj
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 font-sans text-gray-800 pb-12">
      
      {/* 1. HEADER / HERO SEKCIJA - Zaobljen donji deo za moderniji izgled */}
      <header className="bg-white pt-14 pb-8 px-4 text-center rounded-b-[2.5rem] shadow-sm relative z-20">
        <h1 className="text-5xl font-extrabold text-emerald-600 tracking-widest drop-shadow-sm">
          LIME BAR
        </h1>
        <p className="text-emerald-400 mt-2 text-xs uppercase tracking-[0.3em] font-bold">
          Summer Edition 2026
        </p>
      </header>

      {/* 2. STICKY NAVIGACIJA ZA KATEGORIJE */}
      <nav className="sticky top-0 z-10 pt-4 pb-3 bg-white/70 backdrop-blur-lg border-b border-emerald-100 shadow-sm">
        
        {/* VIZUELNI HINT ZA PREVLAČENJE PRSTOM */}
        <div className="flex justify-center items-center mb-3">
          <p className="text-[10px] text-emerald-500/80 uppercase tracking-widest font-bold flex items-center gap-2 animate-pulse">
            <span>←</span> prevuci prstom za više <span>→</span>
          </p>
        </div>

        {/* Kontejner za kategorije sa "snap" efektom */}
        <div className="flex space-x-3 overflow-x-auto whitespace-nowrap hide-scrollbar px-5 pb-2 snap-x">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              // snap-center omogućava da dugme uvek lepo "upadne" u kadar kad se prevuče
              className={`snap-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-in-out border ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-md shadow-emerald-200 border-transparent scale-105'
                  : 'bg-white text-emerald-700 border-emerald-100 hover:bg-emerald-50'
              }`}
            >
              {category}
            </button>
          ))}
          {/* Prazan div na kraju da poslednje dugme ne bi bilo zalepljeno za ivicu ekrana */}
          <div className="w-4 flex-shrink-0"></div>
        </div>
      </nav>

      {/* 3. PRIKAZ JELA ZA IZABRANU KATEGORIJU */}
      <main className="px-4 mt-8 max-w-2xl mx-auto space-y-5 animate-fade-in">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            // Nežnije senke i obliji uglovi za premium letnji izgled
            className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-sm border border-white flex gap-4 transition-transform active:scale-[0.98]"
          >
            {/* Slika jela */}
            <div className="w-24 h-24 bg-emerald-50 rounded-2xl overflow-hidden flex-shrink-0 shadow-inner p-1">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover rounded-xl" 
                loading="lazy" 
              />
            </div>

            {/* Informacije o jelu */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-emerald-900 leading-tight">
                  {item.title}
                </h3>
                {/* Cena je sada upečatljivija */}
                <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-xl ml-2 text-sm border border-emerald-100">
                  {item.price}
                </span>
              </div>
              
              {/* Opis (sastojci) */}
              {item.description && (
                <p className="text-sm text-gray-500 mt-1.5 leading-snug">
                  {item.description}
                </p>
              )}
              
              {/* Dodatna napomena (npr. Način pripreme) */}
              {item.note && (
                <p className="text-xs text-emerald-600/70 mt-2 font-medium bg-emerald-50/50 inline-block px-2 py-1 rounded-md">
                  {item.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* 4. FOOTER */}
      <footer className="mt-16 text-center text-emerald-700/40 text-xs font-medium uppercase tracking-widest">
        <p>Hvar, 2026 • Lime Bar Digital</p>
      </footer>

    </div>
  )
}

export default App