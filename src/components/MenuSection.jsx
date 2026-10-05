import React, { useState } from 'react';
import { Search, Download, Leaf, Sparkles, MessageSquare, Filter, LayoutGrid, List } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, CAFE_INFO } from '../data/cafeData';

export default function MenuSection({ onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' (Photos) or 'list' (Classic Dotted Leader)

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
    <section id="menu" className="py-24 sm:py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-widest text-sage-600 bg-sage-50 px-3 py-1 rounded-full inline-block mb-3 border border-sage-200">
              Fresh Daily Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-900">
              European Digital Menu
            </h2>
            <p className="text-espresso-100 text-sm sm:text-base mt-2 max-w-xl font-light">
              Artisanal single-origin coffee brews, European comfort food, sourdough brunches, and woodfired stone pizzas.
            </p>
          </div>

          {/* View Mode & PDF Download Controls */}
          <div className="flex items-center space-x-3 self-start md:self-auto shrink-0">
            {/* View Mode Toggle */}
            <div className="bg-linen-100 p-1 rounded-lg border border-hairline flex items-center space-x-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center space-x-1 transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-espresso-900 text-cream-50 shadow-subtle' 
                    : 'text-espresso-100 hover:text-espresso-900'
                }`}
                title="Photo Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Photo Cards</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center space-x-1 transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-espresso-900 text-cream-50 shadow-subtle' 
                    : 'text-espresso-100 hover:text-espresso-900'
                }`}
                title="Dotted List View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Classic List</span>
              </button>
            </div>

            {/* PDF Download Button */}
            <button
              onClick={handleDownloadPDF}
              className="bg-linen-100 border border-hairline hover:bg-linen-200 text-espresso-900 px-3.5 py-2 rounded-lg text-xs font-medium tracking-wide shadow-subtle transition-all flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5 text-brass-600" />
              <span>PDF Menu</span>
            </button>
          </div>
        </div>

        {/* Search & Dietary Filter Bar */}
        <div className="bg-linen-100 p-5 rounded-xl border border-hairline mb-10 space-y-4 shadow-subtle">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-espresso-100" />
              <input
                type="text"
                placeholder="Search dishes, coffee, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-hairline bg-cream text-xs focus:outline-none focus:border-sage text-espresso-900 placeholder:text-espresso-100/60"
              />
            </div>

            {/* Dietary Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-medium text-espresso-100 mr-1 hidden lg:flex items-center">
                <Filter className="w-3 h-3 mr-1 text-sage-600" /> Filter:
              </span>

              <button
                onClick={() => setDietFilter('all')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  dietFilter === 'all' 
                    ? 'bg-sage text-white' 
                    : 'bg-cream text-espresso-100 hover:bg-linen-200 border border-hairline'
                }`}
              >
                All Diets
              </button>

              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3 py-1 rounded-md text-xs font-medium flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'veg' 
                    ? 'bg-sage-600 text-white' 
                    : 'bg-cream text-sage-700 hover:bg-sage-50 border border-sage-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
                <span>Veg</span>
              </button>

              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-3 py-1 rounded-md text-xs font-medium flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'non-veg' 
                    ? 'bg-espresso-900 text-white' 
                    : 'bg-cream text-espresso-900 hover:bg-linen-200 border border-hairline'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brass-500"></span>
                <span>Non-Veg</span>
              </button>

              <button
                onClick={() => setDietFilter('vegan')}
                className={`px-3 py-1 rounded-md text-xs font-medium flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'vegan' 
                    ? 'bg-sage-700 text-white' 
                    : 'bg-cream text-sage-700 hover:bg-sage-50 border border-sage-200'
                }`}
              >
                <Leaf className="w-3 h-3 text-sage-600" />
                <span>Vegan</span>
              </button>

              <button
                onClick={() => setDietFilter('special')}
                className={`px-3 py-1 rounded-md text-xs font-medium flex items-center space-x-1.5 transition-all ${
                  dietFilter === 'special' 
                    ? 'bg-brass text-white' 
                    : 'bg-cream text-brass-700 hover:bg-brass-50 border border-brass-200'
                }`}
              >
                <Sparkles className="w-3 h-3 text-brass-500" />
                <span>Chef's Special</span>
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-2 border-t border-hairline no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-espresso-900 text-cream-50'
                    : 'text-espresso-100 hover:text-espresso-900 hover:bg-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid / List Display */}
        {filteredItems.length > 0 ? (
          viewMode === 'grid' ? (
            /* PHOTO CARDS GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-linen-100/60 rounded-xl overflow-hidden border border-hairline hover:border-sage-200 shadow-subtle transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Dish Photo */}
                    {item.image && (
                      <div className="relative h-44 sm:h-48 overflow-hidden bg-linen-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Bestseller Badge */}
                        {item.bestseller && (
                          <span className="absolute top-3 right-3 bg-brass text-white font-medium text-[10px] uppercase px-2.5 py-0.5 rounded shadow-sm">
                            Bestseller
                          </span>
                        )}

                        {/* Dietary Tag Badge */}
                        <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-md px-2 py-0.5 rounded border border-hairline flex items-center space-x-1 shadow-sm">
                          {item.diet === 'veg' && <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>}
                          {item.diet === 'non-veg' && <span className="w-1.5 h-1.5 rounded-full bg-brass-500"></span>}
                          {item.diet === 'vegan' && <Leaf className="w-3 h-3 text-sage-600" />}
                          <span className="text-[10px] font-medium text-espresso-900 capitalize">{item.diet}</span>
                        </div>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-4 sm:p-5">
                      <div className="dotted-leader mb-1.5">
                        <span className="font-serif text-lg font-normal text-espresso-900 group-hover:text-sage-700 transition-colors">
                          {item.name}
                        </span>
                        <span className="font-sans text-sm font-semibold text-brass-600 shrink-0 ml-2">
                          ₹{item.price}
                        </span>
                      </div>

                      <p className="text-xs text-espresso-100 font-light leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Tag Pills */}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {item.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-medium bg-cream text-espresso-100/80 px-2 py-0.5 rounded border border-hairline/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="p-4 sm:p-5 pt-0">
                    <button
                      onClick={onOpenReservation}
                      className="w-full py-2 rounded-lg border border-hairline bg-cream hover:bg-sage hover:text-white hover:border-sage text-espresso-900 font-medium text-xs transition-all flex items-center justify-center space-x-2 shadow-subtle"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-sage-600" />
                      <span>Reserve Dish on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* CLASSIC DOTTED LIST VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-linen-100/50 p-4 rounded-xl border border-hairline/80 hover:bg-linen-100 hover:border-sage-200 transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Classical Dotted Leader Row */}
                    <div className="dotted-leader mb-1">
                      <span className="bg-transparent font-serif text-lg font-normal text-espresso-900 group-hover:text-sage-700 transition-colors">
                        {item.name}
                      </span>
                      <span className="bg-transparent font-sans text-sm font-semibold text-brass-600">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-espresso-100 font-light leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Badges & Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {item.bestseller && (
                        <span className="text-[10px] font-medium bg-brass-50 text-brass-700 border border-brass-200 px-2 py-0.5 rounded">
                          Bestseller
                        </span>
                      )}

                      <span className="text-[10px] font-medium text-espresso-100 capitalize bg-cream px-2 py-0.5 rounded border border-hairline flex items-center space-x-1">
                        {item.diet === 'veg' && <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>}
                        {item.diet === 'non-veg' && <span className="w-1.5 h-1.5 rounded-full bg-brass-500"></span>}
                        {item.diet === 'vegan' && <Leaf className="w-2.5 h-2.5 text-sage-600" />}
                        <span>{item.diet}</span>
                      </span>

                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] text-espresso-100/70 bg-cream/70 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Reservation Button */}
                  <div className="pt-2 border-t border-hairline/60 flex items-center justify-between">
                    <span className="text-[10px] text-espresso-100/80 italic">Artisanal Preparation</span>
                    <button
                      onClick={onOpenReservation}
                      className="text-xs font-medium text-sage-700 hover:text-sage-600 flex items-center space-x-1 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 text-sage-600" />
                      <span>Order / Reserve</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-linen-100 rounded-xl border border-hairline">
            <p className="text-espresso-100 text-sm font-light">No items match your selected filter or search term.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setDietFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-sage text-white rounded-lg text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}


