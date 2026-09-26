import React from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageSquare, Heart, Compass } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer({ onOpenReservation }) {
  return (
    <footer className="bg-forest-950 text-slate-300 pt-16 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-forest-900 border border-warmgold flex items-center justify-center text-warmgold font-serif text-xl font-bold">
                AL
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Autumn Leaf Cafe
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              A tranquil garden sanctuary in Thukkuguda / Imamguda. Serving fresh micro-roasted Arabica coffee, sourdough brunches, and woodfired comfort food near ORR Exit 14 & RGIA Airport.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-terracotta text-white flex items-center justify-center transition-colors"
                aria-label="Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-forest-700 text-white flex items-center justify-center transition-colors"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#hero" className="hover:text-warmgold transition-colors">Home & Highlights</a></li>
              <li><a href="#highway" className="hover:text-warmgold transition-colors">ORR Exit 14 & Layover Guide</a></li>
              <li><a href="#menu" className="hover:text-warmgold transition-colors">Digital Menu & PDF Download</a></li>
              <li><a href="#gallery" className="hover:text-warmgold transition-colors">Lawn Ambience Gallery</a></li>
              <li><a href="#location" className="hover:text-warmgold transition-colors">Location & Operating Hours</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
              Opening Hours (IST)
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-semibold text-white">Monday – Thursday</p>
              <p className="text-slate-400">8:00 AM – 9:00 PM</p>
              <p className="font-semibold text-white pt-2">Friday – Sunday</p>
              <p className="text-emerald-400 font-medium">8:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Contact & WhatsApp */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
              Table Reservation
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Direct booking desk for weekend lawn seating and airport layover meals.
            </p>
            <button
              onClick={onOpenReservation}
              className="w-full bg-forest-900 hover:bg-forest-800 text-white px-4 py-3 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-2 border border-warmgold/30 mb-3"
            >
              <MessageSquare className="w-4 h-4 text-warmgold" />
              <span>WhatsApp: +91 95339 63121</span>
            </button>
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="text-xs text-slate-400 hover:text-white flex items-center justify-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5 text-forest-500 mr-1" />
              <span>Call: +91 95339 63121</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Autumn Leaf Cafe (Imamguda / Thukkuguda). All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-terracotta fill-terracotta inline" />
            <span>for Hyderabad's Garden Cafe Diners</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
