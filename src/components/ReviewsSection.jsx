import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data/cafeData';

export default function ReviewsSection({ onOpenReservation }) {
  return (
    <section id="reviews" className="py-24 sm:py-28 bg-espresso-950 text-cream-50 relative overflow-hidden border-t border-hairline/20">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rating Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-cream-50/10 text-brass-500 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-widest mb-4 border border-cream-50/15">
            <Star className="w-3.5 h-3.5 fill-brass-500 text-brass-500" />
            <span>4.8 Rating on Google (2,500+ Reviews)</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-cream-50 mb-4">
            Loved by Travelers & Regulars
          </h2>
          <p className="text-cream-100/70 text-sm sm:text-base font-light leading-relaxed">
            Read real experiences from airport layover guests, pet parents, and family weekend brunch regulars.
          </p>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-espresso-900/80 p-7 rounded-xl border border-hairline/30 flex flex-col justify-between hover:border-hairline/60 transition-all shadow-subtle"
            >
              <div>
                <div className="flex items-center space-x-1 text-brass-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brass-500 text-brass-500" />
                  ))}
                </div>
                <p className="text-cream-100/90 text-sm font-light italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-hairline/20">
                <div className="w-9 h-9 rounded-full bg-brass/20 text-brass-500 font-normal font-serif text-base flex items-center justify-center border border-brass/40">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-cream-50">{rev.name}</div>
                  <div className="text-[11px] text-cream-100/60 font-light">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="bg-espresso-900 p-8 sm:p-10 rounded-xl border border-hairline/40 text-center max-w-3xl mx-auto shadow-subtle">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-cream-50 mb-3">
            Planning Your Visit to Thukkuguda?
          </h3>
          <p className="text-cream-100/80 text-xs sm:text-sm font-light max-w-lg mx-auto mb-6 leading-relaxed">
            Reserve your lawn table on WhatsApp in under 30 seconds for guaranteed seating during weekend hours.
          </p>
          <button
            onClick={onOpenReservation}
            className="bg-sage hover:bg-sage-600 text-white px-7 py-3 rounded-lg text-xs font-medium tracking-wide shadow-subtle transition-all inline-flex items-center space-x-2.5 border border-sage-600/30"
          >
            <MessageSquare className="w-4 h-4 text-cream-50" />
            <span>Book Table via WhatsApp (+91 95339 63121)</span>
          </button>
        </div>

      </div>
    </section>
  );
}

