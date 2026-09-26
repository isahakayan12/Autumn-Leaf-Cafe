import React from 'react';
import { Star, MessageSquare, Quote, Heart } from 'lucide-react';
import { REVIEWS } from '../data/cafeData';

export default function ReviewsSection({ onOpenReservation }) {
  return (
    <section id="reviews" className="py-20 bg-forest-950 text-white relative overflow-hidden">
      
      {/* Background Accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-forest-800/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-terracotta/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rating Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-warmgold/20 text-warmgold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-warmgold/30">
            <Star className="w-4 h-4 fill-warmgold" />
            <span>4.8 Rating on Google (2,500+ Reviews)</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Loved by Travelers & Weekend Diners
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Read real experiences from airport layover guests, pet parents, and family weekend brunch regulars.
          </p>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/5 backdrop-blur-md p-7 rounded-3xl border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-all"
            >
              <div>
                <div className="flex items-center space-x-1 text-warmgold mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warmgold" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-warmgold/20 text-warmgold font-bold font-serif flex items-center justify-center border border-warmgold/40">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{rev.name}</div>
                  <div className="text-xs text-slate-400">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="bg-gradient-to-r from-forest-900 to-forest-800 p-8 sm:p-12 rounded-3xl border border-warmgold/30 text-center max-w-4xl mx-auto shadow-elevated">
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3">
            Planning Your Visit to Thukkuguda?
          </h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Reserve your lawn table on WhatsApp in under 30 seconds for guaranteed seating during weekend rush hours.
          </p>
          <button
            onClick={onOpenReservation}
            className="bg-terracotta hover:bg-terracotta-hover text-white px-8 py-4 rounded-2xl text-sm sm:text-base font-bold shadow-lg transition-all inline-flex items-center space-x-3"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Book Table via WhatsApp (+91 95339 63121)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
