import React from 'react';
import { MessageSquare, Navigation, ArrowDown, ShieldCheck, MapPin, Plane, Dog } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onOpenReservation }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CAFE_INFO.name + " " + CAFE_INFO.address)}`;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-espresso-950">
      
      {/* Background Photography with Warm Soft Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_lawn.jpg"
          alt="Autumn Leaf Cafe Imamguda Thukkuguda Garden Lawn"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/80 via-espresso-950/60 to-espresso-950/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream-50">
        
        {/* Location Pill */}
        <div className="inline-flex items-center space-x-2 bg-cream-50/10 backdrop-blur-md px-4 py-1 rounded-full border border-cream-50/20 mb-8 shadow-subtle">
          <MapPin className="w-3.5 h-3.5 text-brass-500" />
          <span className="text-[11px] font-medium tracking-widest uppercase text-cream-50/90">
            Thukkuguda / Imamguda • ORR Exit 14
          </span>
          <span className="w-1 h-1 rounded-full bg-sage-500"></span>
          <span className="text-[11px] text-cream-100/70 hidden sm:inline">15 Mins from RGIA Airport</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-cream-50 mb-6 leading-[1.15]">
          A Quiet Garden Escape in <span className="italic font-normal text-brass-500">Thukkuguda</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-cream-100/80 font-light mb-10 leading-relaxed">
          Unwind in our serene open-air lawn courtyard. Artisanal Arabica coffees, sourdough brunches, and pet-friendly lawns for highway travelers and unhurried weekend dining.
        </p>

        {/* Dual CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto bg-sage text-white hover:bg-sage-600 px-8 py-3.5 rounded-lg text-xs font-medium tracking-wide shadow-subtle hover:shadow-soft transition-all flex items-center justify-center space-x-2.5 border border-sage-600/30"
          >
            <MessageSquare className="w-4 h-4 text-cream-50" />
            <span>Reserve Table via WhatsApp</span>
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 backdrop-blur-md border border-cream-50/25 px-8 py-3.5 rounded-lg text-xs font-medium tracking-wide transition-all flex items-center justify-center space-x-2.5"
          >
            <Navigation className="w-4 h-4 text-brass-500" />
            <span>Get Directions (ORR Exit 14)</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto bg-espresso-950/50 backdrop-blur-md p-4 rounded-xl border border-cream-50/10 text-left">
          
          <div className="flex items-center space-x-3 p-1.5">
            <div className="w-8 h-8 rounded-md bg-sage/20 flex items-center justify-center text-sage-500 shrink-0">
              <Dog className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-cream-50">Pet Friendly</div>
              <div className="text-[11px] text-cream-100/70">Open Green Lawns</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-1.5">
            <div className="w-8 h-8 rounded-md bg-brass/20 flex items-center justify-center text-brass-500 shrink-0">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-cream-50">15 Mins to Airport</div>
              <div className="text-[11px] text-cream-100/70">RGIA Layover Spot</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-1.5">
            <div className="w-8 h-8 rounded-md bg-sage/20 flex items-center justify-center text-sage-500 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-cream-50">ORR Exit 14</div>
              <div className="text-[11px] text-cream-100/70">2-Min Off Highway</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-1.5">
            <div className="w-8 h-8 rounded-md bg-brass/20 flex items-center justify-center text-brass-500 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-cream-50">On-Site Valet</div>
              <div className="text-[11px] text-cream-100/70">Ample Parking Space</div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#highway"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-cream-50/50 hover:text-cream-50 transition-colors p-2"
        aria-label="Scroll to story section"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}

