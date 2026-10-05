import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Phone, Car, Plane, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function LocationSection() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.234!2d78.4892!3d17.2045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDEyJzE2LjIiTiA3OMKwMjknMjEuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const mapNavUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CAFE_INFO.name + " " + CAFE_INFO.address)}`;

  const [isOpenNow, setIsOpenNow] = useState(true);
  const [statusText, setStatusText] = useState("Open Now • Closes 9:00 PM IST");

  useEffect(() => {
    const checkCafeStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      
      const day = istTime.getDay();
      const hour = istTime.getHours();
      
      const isWeekend = (day === 0 || day === 5 || day === 6);
      const closingHour = isWeekend ? 22 : 21;
      const openingHour = 8;

      if (hour >= openingHour && hour < closingHour) {
        setIsOpenNow(true);
        const closeTimeStr = isWeekend ? "10:00 PM" : "9:00 PM";
        setStatusText(`Open Now • Closes ${closeTimeStr} IST`);
      } else {
        setIsOpenNow(false);
        setStatusText("Closed Now • Opens 8:00 AM IST");
      }
    };

    checkCafeStatus();
    const interval = setInterval(checkCafeStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-20 bg-linen-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-600 bg-forest-500/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Strategic Location
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 mb-4">
            Find Us in Thukkuguda / Imamguda
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated just 2 minutes off Outer Ring Road Exit 14 and 15 minutes from Shamshabad RGIA Airport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Side (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-soft border border-forest-900/10 space-y-6">
            
            <div>
              <div className="text-xs font-bold text-terracotta uppercase tracking-wider mb-1">Full Address</div>
              <h3 className="font-serif text-2xl font-bold text-forest-900 mb-2">
                Autumn Leaf Cafe
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed flex items-start">
                <MapPin className="w-4 h-4 text-forest-600 mr-2 shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </p>
            </div>

            {/* Quick Distance Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-linen-100 p-3 rounded-xl border border-forest-900/10">
                <div className="flex items-center text-xs font-bold text-forest-900 mb-1">
                  <Car className="w-3.5 h-3.5 text-forest-600 mr-1.5" /> ORR Exit 14
                </div>
                <div className="text-[11px] text-slate-600">2-Min Smooth Drive</div>
              </div>

              <div className="bg-linen-100 p-3 rounded-xl border border-forest-900/10">
                <div className="flex items-center text-xs font-bold text-forest-900 mb-1">
                  <Plane className="w-3.5 h-3.5 text-blue-600 mr-1.5" /> RGIA Airport
                </div>
                <div className="text-[11px] text-slate-600">15-Min Fast Access</div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold text-forest-900 uppercase tracking-wider flex items-center">
                  <Clock className="w-4 h-4 text-forest-600 mr-1.5" /> Cafe Hours (IST)
                </div>
                <div className={`flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                  isOpenNow 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                    : 'bg-amber-50 border-amber-200 text-amber-800'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-1.5 ${isOpenNow ? 'bg-emerald-500 badge-pulse' : 'bg-amber-500'}`}></span>
                  {statusText}
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between p-2 rounded-lg bg-slate-50 font-medium">
                  <span className="text-slate-600">Monday – Thursday</span>
                  <span className="text-forest-900 font-bold">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-100 font-medium">
                  <span className="text-emerald-900 font-semibold">Friday – Sunday</span>
                  <span className="text-emerald-900 font-bold">8:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={mapNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4 text-warmgold" />
                <span>1-Tap Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full py-3 rounded-xl border border-forest-900/20 hover:bg-forest-50 text-forest-900 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-forest-700" />
                <span>Call Desk: +91 95339 63121</span>
              </a>
            </div>

          </div>

          {/* Map Side (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-3 rounded-3xl shadow-soft border border-forest-900/10 h-[480px] overflow-hidden relative group">
            <iframe
              title="Autumn Leaf Cafe Imamguda Thukkuguda Map"
              src={mapEmbedUrl}
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-slate-200 text-xs text-forest-900 font-bold flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-terracotta" />
              <span>Imamguda Road • Thukkuguda</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
