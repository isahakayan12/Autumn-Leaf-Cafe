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
    <section id="gallery" className="py-24 sm:py-28 bg-linen-100/70 border-t border-hairline relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-medium uppercase tracking-widest text-sage-600 bg-sage-50 px-3 py-1 rounded-full inline-block mb-3 border border-sage-200">
            Atmosphere & Vibes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-900 mb-4">
            The Imamguda Lawn Experience
          </h2>
          <p className="text-espresso-100 text-sm sm:text-base font-light leading-relaxed">
            Take a visual walkthrough of our lush tropical foliage, evening fairy lights, handcrafted dishes, and welcoming pet spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-espresso-900 text-cream-50 shadow-subtle'
                  : 'bg-cream text-espresso-100 hover:bg-linen-200 border border-hairline'
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
              className="group relative h-72 rounded-xl overflow-hidden shadow-subtle cursor-pointer bg-espresso-950 border border-hairline"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-cream-50">
                <span className="text-[10px] font-medium uppercase tracking-widest text-brass-500 mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-normal mb-1 group-hover:text-cream-50 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-100/70 font-light line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-50/20 backdrop-blur-md flex items-center justify-center text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity border border-cream-50/30">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-espresso-950 rounded-xl overflow-hidden shadow-elevated border border-hairline">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-espresso-900/80 hover:bg-espresso-900 text-cream-50 flex items-center justify-center border border-hairline transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain bg-espresso-950"
            />
            <div className="p-6 bg-espresso-900 text-cream-50 border-t border-hairline">
              <span className="text-[10px] font-medium text-brass-500 uppercase tracking-widest">{selectedImage.category}</span>
              <h3 className="font-serif text-2xl font-normal text-cream-50 mt-1 mb-2">{selectedImage.title}</h3>
              <p className="text-xs text-cream-100/80 font-light leading-relaxed">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
