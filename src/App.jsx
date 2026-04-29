import { useState } from 'react'
import { categories, menuData } from './data'
import './App.css'

function App() {
  const [lang, setLang] = useState('hr')
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id)
  
  // DODATO: Stanje koje čuva podatke o jelu na koje je korisnik kliknuo
  const [selectedItem, setSelectedItem] = useState(null)
  
  const filteredItems = menuData.filter(item => item.categoryId === activeCategoryId)

  return (
    <div className="min-h-screen mesh-bg font-sans text-gray-800 pb-12">

      {/* 1. HEADER / HERO SEKCIJA */}
      <header className="bg-white pt-14 pb-8 px-4 text-center rounded-[2.5rem] shadow-sm relative z-20">
        <div className="absolute top-4 right-4 flex gap-3 bg-gray-50 px-3 py-2 rounded-full shadow-inner border border-gray-100">
          <button
            onClick={() => setLang('hr')}
            className={`text-2xl transition-transform ${lang === 'hr' ? 'scale-110 drop-shadow-md' : 'opacity-40 hover:opacity-100'}`}
          >
            🇭🇷
          </button>
          <button
            onClick={() => setLang('en')}
            className={`text-2xl transition-transform ${lang === 'en' ? 'scale-110 drop-shadow-md' : 'opacity-40 hover:opacity-100'}`}
          >
            🇬🇧
          </button>
        </div>

        <h1 className="text-6xl font-playfair font-bold text-[#d4af37] tracking-wide drop-shadow-sm mt-2">
          Lime
        </h1>
        <p className="text-emerald-800/60 mt-2 text-xs uppercase tracking-[0.4em] font-bold">
          {lang === 'hr' ? 'Bar & Restoran' : 'Bar & Restaurant'}
        </p>
        <p className="text-emerald-400 mt-2 text-xs uppercase tracking-[0.3em] font-bold">
          {lang === 'hr' ? 'Ljetno izdanje 2026' : 'Summer Edition 2026'}
        </p>
      </header>

      {/* 2. STICKY NAVIGACIJA ZA KATEGORIJE */}
      <nav className="sticky top-0 z-40 pt-4 pb-3 bg-white/70 backdrop-blur-lg border-b border-emerald-100 shadow-sm">
        <div className="flex justify-center items-center mb-3">
          <p className="text-[10px] text-emerald-500/80 uppercase tracking-widest font-bold flex items-center gap-2 animate-pulse">
            <span>←</span> {lang === 'hr' ? 'prevuci prstom za više' : 'swipe for more'} <span>→</span>
          </p>
        </div>

        <div className="flex space-x-3 overflow-x-auto whitespace-nowrap hide-scrollbar px-5 pb-2 snap-x">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`snap-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-in-out border ${activeCategoryId === category.id
                ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-md shadow-emerald-200 border-transparent scale-105'
                : 'bg-white text-emerald-700 border-emerald-100 hover:bg-emerald-50'
                }`}
            >
              {category[lang]}
            </button>
          ))}
          <div className="w-4 flex-shrink-0"></div>
        </div>
      </nav>

      {/* 3. PRIKAZ JELA ZA IZABRANU KATEGORIJU */}
      <main className="px-4 mt-8 max-w-2xl mx-auto space-y-5">
        {activeCategoryId === 'dorucak' && (
          <div className="item-enter bg-emerald-100/80 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-2xl text-center text-sm font-extrabold tracking-widest shadow-sm mb-2">
            🕒 {lang === 'hr' ? 'DORUČAK SE SLUŽI DO 13H' : 'BREAKFAST IS SERVED UNTIL 1 PM'}
          </div>
        )}

        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)} // DODATO: Klik otvara modal
            className="item-enter bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-sm border border-gray-200 flex gap-4 transition-transform active:scale-[0.98] cursor-pointer"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="w-24 h-24 bg-emerald-50 rounded-2xl overflow-hidden flex-shrink-0 shadow-inner p-1">
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-emerald-900 leading-tight pr-2">
                  {item.title[lang]}
                </h3>
                <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-xl ml-2 text-sm border border-emerald-100">
                  {item.price}
                </span>
              </div>

              {item.description && item.description[lang] && (
                <p className="text-sm text-gray-500 mt-1.5 leading-snug line-clamp-2">
                  {item.description[lang]}
                </p>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* 4. FOOTER */}
      <footer className="mt-16 text-center text-emerald-700/40 text-xs font-medium uppercase tracking-widest pb-6">
        <p>Hvar, 2026 • Lime Bar Digital</p>
      </footer>

      {/* =========================================
          5. MODAL ZA PRIKAZ DETALJA JELA (Bottom Sheet)
          ========================================= */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  p-4 sm:p-0">
          
          {/* Zatamnjena pozadina iza modala (Klik zatvara modal) */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedItem(null)}
          ></div>
          
          {/* Glavni sadržaj modala */}
          <div className="relative bg-white w-full max-w-md rounded-[2rem] sm:rounded-3xl overflow-hidden shadow-2xl animate-slide-up pb-8">
            
            {/* Dugme za zatvaranje (X) */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-emerald-900 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md z-10 hover:bg-white"
            >
              ✕
            </button>

            {/* Velika slika jela u modalu */}
            <div className="w-full h-64 bg-emerald-50 relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title[lang]} 
                className="w-full h-full object-cover"
              />
              {/* Opcioni gradient preko slike da tekst ne bude odrezan vizuelno */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Detalji o jelu */}
            <div className="px-6 pt-2">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-emerald-950 leading-tight">
                  {selectedItem.title[lang]}
                </h2>
                <span className="font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl ml-4 text-lg border border-emerald-100 whitespace-nowrap">
                  {selectedItem.price}
                </span>
              </div>
              
              {selectedItem.description && selectedItem.description[lang] && (
                <p className="text-slate-500 text-base leading-relaxed mb-4">
                  {selectedItem.description[lang]}
                </p>
              )}
              
              {selectedItem.note && selectedItem.note[lang] && (
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4">
                  <p className="text-sm text-emerald-700 font-medium">
                    <span className="mr-2">💡</span>
                    {selectedItem.note[lang]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App