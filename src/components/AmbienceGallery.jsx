import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/cafeData';
import { Maximize2, X } from 'lucide-react';

export default function AmbienceGallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Ambience' },
    { id: 'lawn', label: 'Lawn & Garden' },
    { id: 'ambience', label: 'Evening Lights' },
    { id: 'food', label: 'Gourmet Dishes' },
    { id: 'coffee', label: 'Artisan Brews' }
  ];

  const filteredGallery = GALLERY_IMAGES.filter(img => 
    filter === 'all' || img.category === filter
  );

  return (
    <section id="gallery" className="py-20 bg-linen-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-600 bg-forest-500/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Atmosphere & Vibes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 mb-4">
            The Imamguda Lawn Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a visual walkthrough of our lush tropical foliage, evening fairy lights, handcrafted dishes, and welcoming pet spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-forest-900 text-white shadow-soft'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-soft cursor-pointer bg-slate-900 border border-forest-900/10"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-warmgold mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-warmgold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 bg-slate-950 text-white border-t border-white/10">
              <span className="text-xs font-bold text-warmgold uppercase tracking-wider">{selectedImage.category}</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-slate-300">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
