import React from 'react';
import { MessageSquare, Navigation, ArrowDown, ShieldCheck, MapPin, Plane, Dog } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Hero({ onOpenReservation }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CAFE_INFO.name + " " + CAFE_INFO.address)}`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Photography with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_lawn.jpg"
          alt="Autumn Leaf Cafe Imamguda Thukkuguda Garden Lawn"
          className="w-full h-full object-cover object-center scale-105 transform animate-float"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Location Pill */}
        <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 shadow-soft animate-fadeIn">
          <MapPin className="w-4 h-4 text-warmgold" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Thukkuguda / Imamguda • ORR Exit 14
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-xs text-emerald-200 hidden md:inline">15 Mins from Airport</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          A Lush Garden Escape in <span className="italic text-warmgold">Thukkuguda</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-200 font-light mb-10 leading-relaxed">
          Unwind in our serene open-air lawn courtyard. Serving fresh micro-roasted coffee, artisanal European brunch, and woodfired comfort food for highway travelers and weekend diners.
        </p>

        {/* Dual CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-hover text-white px-8 py-4 rounded-2xl text-base font-bold shadow-elevated transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 border border-white/20"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Book Table on WhatsApp</span>
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-2xl text-base font-semibold transition-all flex items-center justify-center space-x-3"
          >
            <Navigation className="w-5 h-5 text-emerald-400" />
            <span>Get Directions (ORR Exit 14)</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10">
          
          <div className="flex items-center space-x-3 p-2 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Dog className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Pet Friendly</div>
              <div className="text-xs text-slate-300">Spacious Green Lawns</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2 text-left">
            <div className="w-10 h-10 rounded-xl bg-warmgold/20 flex items-center justify-center text-warmgold shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">15 Mins from RGIA</div>
              <div className="text-xs text-slate-300">Ideal Airport Layover</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2 text-left">
            <div className="w-10 h-10 rounded-xl bg-terracotta/20 flex items-center justify-center text-terracotta-light shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">ORR Exit 14</div>
              <div className="text-xs text-slate-300">2-Min Off Highway</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Ample Parking</div>
              <div className="text-xs text-slate-300">On-Site Valet Space</div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#highway"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce p-2"
        aria-label="Scroll to highway features"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
