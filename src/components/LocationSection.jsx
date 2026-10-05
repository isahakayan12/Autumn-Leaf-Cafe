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
    <section id="location" className="py-24 sm:py-28 bg-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-medium uppercase tracking-widest text-sage-600 bg-sage-50 px-3 py-1 rounded-full inline-block mb-3 border border-sage-200">
            Strategic Location
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-900 mb-4">
            Find Us in Thukkuguda / Imamguda
          </h2>
          <p className="text-espresso-100 text-sm sm:text-base font-light leading-relaxed">
            Conveniently situated 2 minutes off Outer Ring Road Exit 14 and 15 minutes from Shamshabad RGIA Airport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Side (5 Cols) */}
          <div className="lg:col-span-5 bg-linen-100 p-6 sm:p-8 rounded-xl shadow-subtle border border-hairline space-y-6">
            
            <div>
              <div className="text-[11px] font-medium text-brass-600 uppercase tracking-widest mb-1">Full Address</div>
              <h3 className="font-serif text-2xl font-normal text-espresso-900 mb-2">
                Autumn Leaf Cafe
              </h3>
              <p className="text-xs sm:text-sm text-espresso-100 font-light leading-relaxed flex items-start">
                <MapPin className="w-4 h-4 text-sage-600 mr-2 shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </p>
            </div>

            {/* Quick Distance Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-cream p-3 rounded-lg border border-hairline">
                <div className="flex items-center text-xs font-semibold text-espresso-900 mb-1">
                  <Car className="w-3.5 h-3.5 text-sage-600 mr-1.5" /> ORR Exit 14
                </div>
                <div className="text-[11px] text-espresso-100/70 font-light">2-Min Smooth Drive</div>
              </div>

              <div className="bg-cream p-3 rounded-lg border border-hairline">
                <div className="flex items-center text-xs font-semibold text-espresso-900 mb-1">
                  <Plane className="w-3.5 h-3.5 text-brass-600 mr-1.5" /> RGIA Airport
                </div>
                <div className="text-[11px] text-espresso-100/70 font-light">15-Min Fast Access</div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="pt-3 border-t border-hairline">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-espresso-900 uppercase tracking-wider flex items-center">
                  <Clock className="w-3.5 h-3.5 text-sage-600 mr-1.5" /> Cafe Hours (IST)
                </div>
                <div className={`flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${
                  isOpenNow 
                    ? 'bg-sage-50 border-sage-200 text-sage-700' 
                    : 'bg-cream border-hairline text-espresso-100'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isOpenNow ? 'bg-sage-500' : 'bg-brass-500'}`}></span>
                  {statusText}
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded bg-cream font-medium text-espresso-900">
                  <span className="text-espresso-100 font-light">Monday – Thursday</span>
                  <span className="font-semibold">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-sage-50 border border-sage-200 text-sage-900 font-medium">
                  <span className="text-sage-700 font-light">Friday – Sunday</span>
                  <span className="font-semibold text-sage-800">8:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-hairline space-y-2.5">
              <a
                href={mapNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-sage hover:bg-sage-600 text-white font-medium text-xs tracking-wide shadow-subtle transition-all flex items-center justify-center space-x-2"
              >
                <Navigation className="w-3.5 h-3.5 text-cream-50" />
                <span>1-Tap Get Directions (Google Maps)</span>
                <ExternalLink className="w-3 h-3 text-cream-50/70" />
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full py-2.5 rounded-lg border border-hairline bg-cream hover:bg-linen-200 text-espresso-900 font-medium text-xs transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-espresso-100" />
                <span>Call Desk: +91 95339 63121</span>
              </a>
            </div>

          </div>

          {/* Map Side (7 Cols) */}
          <div className="lg:col-span-7 bg-linen-100 p-2 rounded-xl shadow-subtle border border-hairline h-[460px] overflow-hidden relative group">
            <iframe
              title="Autumn Leaf Cafe Imamguda Thukkuguda Map"
              src={mapEmbedUrl}
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-5 left-5 bg-cream/95 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-subtle border border-hairline text-xs text-espresso-900 font-medium flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-brass-600" />
              <span>Imamguda Road • Thukkuguda</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

