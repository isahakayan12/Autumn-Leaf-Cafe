import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu as MenuIcon, X, MapPin, Clock, Compass } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [statusText, setStatusText] = useState("Open Now • Closes 9:00 PM");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate Indian Standard Time (IST)
    const checkCafeStatus = () => {
      const now = new Date();
      // UTC time + 5.5 hours for IST
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      
      const day = istTime.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat
      const hour = istTime.getHours();
      
      const isWeekend = (day === 0 || day === 5 || day === 6);
      const closingHour = isWeekend ? 22 : 21; // 10 PM on Fri-Sun, 9 PM on Mon-Thu
      const openingHour = 8; // 8 AM

      if (hour >= openingHour && hour < closingHour) {
        setIsOpenNow(true);
        const closeTimeStr = isWeekend ? "10:00 PM" : "9:00 PM";
        setStatusText(`Open Now • Closes ${closeTimeStr}`);
      } else {
        setIsOpenNow(false);
        setStatusText("Closed Now • Opens 8:00 AM IST");
      }
    };

    checkCafeStatus();
    const interval = setInterval(checkCafeStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Highway Access", href: "#highway" },
    { name: "Digital Menu", href: "#menu" },
    { name: "Lawn Experience", href: "#gallery" },
    { name: "Location & Directions", href: "#location" },
    { name: "Reviews", href: "#reviews" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav shadow-soft py-3' : 'bg-gradient-to-b from-black/70 to-transparent text-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-forest-900 border border-warmgold flex items-center justify-center text-warmgold font-serif text-xl font-bold group-hover:scale-105 transition-transform shadow-sm">
            AL
          </div>
          <div>
            <span className={`font-serif text-2xl font-bold tracking-tight block ${
              scrolled ? 'text-forest-900' : 'text-white'
            }`}>
              Autumn Leaf Cafe
            </span>
            <span className={`text-[11px] uppercase tracking-wider font-semibold block ${
              scrolled ? 'text-forest-600' : 'text-emerald-300'
            }`}>
              Imamguda • Thukkuguda
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-terracotta ${
                scrolled ? 'text-slate-700' : 'text-slate-100 hover:text-warmgold'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Badge & Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          
          {/* IST Status Pill */}
          <div className={`hidden xl:flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
            isOpenNow 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700' 
              : 'bg-amber-500/10 border-amber-500/30 text-amber-700'
          } ${!scrolled && 'bg-black/30 border-white/20 text-white'}`}>
            <span className={`w-2 h-2 rounded-full mr-2 ${isOpenNow ? 'bg-emerald-500 badge-pulse' : 'bg-amber-500'}`}></span>
            {statusText}
          </div>

          {/* Direct Phone Call */}
          <a
            href={`tel:${CAFE_INFO.phone}`}
            className={`flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
              scrolled 
                ? 'border-forest-900/20 text-forest-900 hover:bg-forest-50' 
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
            title="Call Cafe"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{CAFE_INFO.phone}</span>
          </a>

          {/* Reserve CTA */}
          <button
            onClick={onOpenReservation}
            className="bg-forest-900 hover:bg-forest-800 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center space-x-2 border border-warmgold/30"
          >
            <MessageSquare className="w-4 h-4 text-warmgold" />
            <span>Book on WhatsApp</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-2 sm:hidden">
          <button
            onClick={onOpenReservation}
            className="bg-forest-900 text-white p-2 rounded-lg text-xs font-semibold shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-warmgold" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${scrolled ? 'text-forest-900' : 'text-white'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-nav border-b border-forest-900/10 px-4 pt-3 pb-6 space-y-4 animate-fadeIn">
          
          {/* Mobile Status Pill */}
          <div className="flex items-center justify-between bg-forest-900/5 p-3 rounded-xl">
            <div className="flex items-center space-x-2 text-xs font-semibold">
              <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span className="text-forest-900">{statusText}</span>
            </div>
            <span className="text-[10px] text-forest-600 font-bold uppercase">IST Zone</span>
          </div>

          <div className="grid grid-cols-1 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-forest-900 hover:bg-forest-900/5 px-3 py-2.5 rounded-lg font-medium text-base flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Compass className="w-4 h-4 text-forest-600" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-forest-900/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full bg-forest-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-warmgold" />
              <span>Book Table via WhatsApp</span>
            </button>

            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="w-full bg-linen-200 text-forest-900 py-2.5 rounded-xl font-medium text-sm flex items-center justify-center space-x-2 border border-forest-900/10"
            >
              <Phone className="w-4 h-4 text-forest-700" />
              <span>Call +91 95339 63121</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
