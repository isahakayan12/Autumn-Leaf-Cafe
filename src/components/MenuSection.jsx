import React, { useState } from 'react';
import { Search, Download, Leaf, Flame, Sparkles, MessageSquare, Check, Filter } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, CAFE_INFO } from '../data/cafeData';

export default function MenuSection({ onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    let matchesDiet = true;
    if (dietFilter === 'veg') matchesDiet = item.diet === 'veg' || item.diet === 'vegan';
    if (dietFilter === 'non-veg') matchesDiet = item.diet === 'non-veg';
    if (dietFilter === 'vegan') matchesDiet = item.diet === 'vegan';
    if (dietFilter === 'special') matchesDiet = item.tags.includes("Chef's Special");

    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDiet && matchesSearch;
  });

  // Dynamic Download PDF Menu Fallback generator
  const handleDownloadPDF = () => {
    const menuText = `AUTUMN LEAF CAFE - DIGITAL MENU (THUKKUGUDA / IMAMGUDA)
Phone / WhatsApp: ${CAFE_INFO.phone}
Address: ${CAFE_INFO.address}

----------------------------------------------------
MENU ITEMS & PRICING (INR ₹):
${MENU_ITEMS.map(i => `\n• ${i.name.toUpperCase()} - ₹${i.price}\n  Diet: ${i.diet.toUpperCase()} | Cat: ${i.category.toUpperCase()}\n  ${i.description}`).join('\n')}

----------------------------------------------------
Table Reservation via WhatsApp: +91 95339 63121
    `;
    const element = document.createElement("a");
    const file = new Blob([menuText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Autumn_Leaf_Cafe_Menu_Thukkuguda.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="menu" className="py-20 bg-linen-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-forest-600 bg-forest-500/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Crafted Fresh Daily
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900">
              Interactive Digital Menu
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Artisanal single-origin coffee brews, European comfort food, sourdough brunches & woodfired stone pizzas.
            </p>
          </div>

          {/* PDF Download Fallback for Highway Travelers */}
          <button
            onClick={handleDownloadPDF}
            className="self-start md:self-auto bg-white border border-forest-900/20 hover:border-forest-900 text-forest-900 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-soft hover:shadow-md transition-all flex items-center space-x-2 shrink-0"
          >
            <Download className="w-4 h-4 text-terracotta" />
            <span>Download PDF Menu (Low Data)</span>
          </button>
        </div>

        {/* Search & Dietary Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-soft border border-forest-900/10 mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search dishes, coffee, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-forest-900 text-slate-800"
              />
            </div>

            {/* Dietary Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 mr-1 hidden lg:inline flex items-center">
                <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
              </span>

              <button
                onClick={() => setDietFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === 'all' 
                    ? 'bg-forest-900 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Diets
              </button>

              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'veg' 
                    ? 'bg-emerald-700 text-white shadow-sm' 
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Veg Only</span>
              </button>

              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'non-veg' 
                    ? 'bg-red-700 text-white shadow-sm' 
                    : 'bg-red-50 text-red-800 hover:bg-red-100 border border-red-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span>Non-Veg</span>
              </button>

              <button
                onClick={() => setDietFilter('vegan')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'vegan' 
                    ? 'bg-green-700 text-white shadow-sm' 
                    : 'bg-green-50 text-green-800 hover:bg-green-100 border border-green-200'
                }`}
              >
                <Leaf className="w-3 h-3 text-green-600" />
                <span>Vegan</span>
              </button>

              <button
                onClick={() => setDietFilter('special')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'special' 
                    ? 'bg-terracotta text-white shadow-sm' 
                    : 'bg-terracotta/10 text-terracotta hover:bg-terracotta/20'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Chef's Special</span>
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-2 border-t border-slate-100 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-forest-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-forest-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-forest-900/10 hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Card Image Banner */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex items-center space-x-1.5">
                      {item.bestseller && (
                        <span className="bg-warmgold text-forest-950 font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-md">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Dietary Symbol Tag */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-200 flex items-center space-x-1 shadow-sm">
                      {item.diet === 'veg' && (
                        <span className="w-3 h-3 border border-emerald-600 flex items-center justify-center p-0.5 rounded-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        </span>
                      )}
                      {item.diet === 'non-veg' && (
                        <span className="w-3 h-3 border border-red-600 flex items-center justify-center p-0.5 rounded-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                        </span>
                      )}
                      {item.diet === 'vegan' && (
                        <Leaf className="w-3.5 h-3.5 text-green-600" />
                      )}
                      <span className="text-[10px] font-bold text-slate-700 capitalize">{item.diet}</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold text-forest-900 group-hover:text-terracotta transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-sans text-lg font-bold text-forest-900 shrink-0 ml-3">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tag Pills */}
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-medium bg-linen-200 text-forest-800 px-2 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

                {/* Quick Reservation Action */}
                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={onOpenReservation}
                    className="w-full py-2.5 rounded-xl border border-forest-900/20 text-forest-900 hover:bg-forest-900 hover:text-white font-semibold text-xs transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-warmgold" />
                    <span>Reserve Dish on WhatsApp</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-base font-medium">No dishes match your selected filter or search term.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setDietFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-forest-900 text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
