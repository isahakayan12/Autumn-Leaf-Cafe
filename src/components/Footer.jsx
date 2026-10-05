import React from 'react';
import { Phone, Instagram, Facebook, MessageSquare, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer({ onOpenReservation }) {
  return (
    <footer className="bg-espresso-950 text-cream-50/80 pt-16 pb-12 border-t border-hairline/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-cream border border-hairline flex items-center justify-center text-espresso-900 font-serif text-lg font-semibold shadow-sm">
                AL
              </div>
              <span className="font-serif text-2xl font-normal text-cream-50 tracking-tight">
                Autumn Leaf Cafe
              </span>
            </div>
            <p className="text-xs text-cream-100/70 font-light leading-relaxed">
              A tranquil garden sanctuary in Thukkuguda / Imamguda. Serving fresh micro-roasted Arabica coffee, sourdough brunches, and woodfired comfort food near ORR Exit 14 & RGIA Airport.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-cream-50/10 hover:bg-sage text-cream-50 flex items-center justify-center transition-colors border border-cream-50/20"
                aria-label="Instagram page"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-cream-50/10 hover:bg-sage text-cream-50 flex items-center justify-center transition-colors border border-cream-50/20"
                aria-label="Facebook page"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-normal text-cream-50 mb-4 border-b border-hairline/20 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-cream-100/70">
              <li><a href="#hero" className="hover:text-cream-50 transition-colors">Home & Highlights</a></li>
              <li><a href="#highway" className="hover:text-cream-50 transition-colors">ORR Exit 14 & Layover Guide</a></li>
              <li><a href="#menu" className="hover:text-cream-50 transition-colors">Digital Menu & PDF Download</a></li>
              <li><a href="#gallery" className="hover:text-cream-50 transition-colors">Lawn Ambience Gallery</a></li>
              <li><a href="#location" className="hover:text-cream-50 transition-colors">Location & Operating Hours</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-serif text-lg font-normal text-cream-50 mb-4 border-b border-hairline/20 pb-2">
              Opening Hours (IST)
            </h4>
            <div className="space-y-2 text-xs font-light text-cream-100/70">
              <p className="font-medium text-cream-50">Monday – Thursday</p>
              <p className="text-cream-100/60">8:00 AM – 9:00 PM</p>
              <p className="font-medium text-cream-50 pt-2">Friday – Sunday</p>
              <p className="text-brass-500 font-medium">8:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Contact & WhatsApp */}
          <div>
            <h4 className="font-serif text-lg font-normal text-cream-50 mb-4 border-b border-hairline/20 pb-2">
              Table Reservation
            </h4>
            <p className="text-xs text-cream-100/70 font-light mb-4">
              Direct booking desk for weekend lawn seating and airport layover meals.
            </p>
            <button
              onClick={onOpenReservation}
              className="w-full bg-sage hover:bg-sage-600 text-white px-4 py-2.5 rounded-lg text-xs font-medium tracking-wide shadow-subtle transition-all flex items-center justify-center space-x-2 border border-sage-600/30 mb-3"
            >
              <MessageSquare className="w-3.5 h-3.5 text-cream-50" />
              <span>WhatsApp: +91 95339 63121</span>
            </button>
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="text-xs text-cream-100/70 hover:text-cream-50 flex items-center justify-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5 text-sage-500 mr-1" />
              <span>Call: +91 95339 63121</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-hairline/20 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-100/50 font-light gap-4">
          <p>© {new Date().getFullYear()} Autumn Leaf Cafe (Imamguda / Thukkuguda). All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-brass-500 fill-brass-500 inline" />
            <span>for Hyderabad's Garden Cafe Diners</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

