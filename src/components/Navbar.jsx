import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu as MenuIcon, X, Compass } from 'lucide-react';
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
    { name: "Location & Hours", href: "#location" },
    { name: "Reviews", href: "#reviews" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled 
        ? 'bg-cream/95 backdrop-blur-md border-b border-hairline py-3.5 shadow-subtle' 
        : 'bg-gradient-to-b from-espresso-900/60 to-transparent text-white py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-full bg-cream border border-hairline flex items-center justify-center text-espresso-900 font-serif text-lg font-semibold shadow-sm group-hover:border-sage transition-colors">
            AL
          </div>
          <div>
            <span className={`font-serif text-xl sm:text-2xl font-normal tracking-tight block ${
              scrolled ? 'text-espresso-900' : 'text-cream-50'
            }`}>
              Autumn Leaf Cafe
            </span>
            <span className={`text-[10px] uppercase tracking-widest block font-medium ${
              scrolled ? 'text-espresso-100' : 'text-cream-100/80'
            }`}>
              Imamguda • Thukkuguda
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-medium tracking-wide transition-colors ${
                scrolled 
                  ? 'text-espresso-900/80 hover:text-sage-600' 
                  : 'text-cream-50/90 hover:text-cream-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Badge & Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          
          {/* IST Status Pill */}
          <div className={`hidden xl:flex items-center px-3 py-1 rounded-full text-[11px] font-medium border transition-colors ${
            scrolled
              ? isOpenNow 
                ? 'bg-sage-50 border-sage-200 text-sage-700' 
                : 'bg-linen-100 border-hairline text-espresso-100'
              : 'bg-espresso-900/40 border-cream-50/20 text-cream-50'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isOpenNow ? 'bg-sage-500' : 'bg-brass-500'}`}></span>
            {statusText}
          </div>

          {/* Direct Phone Call */}
          <a
            href={`tel:${CAFE_INFO.phone}`}
            className={`flex items-center space-x-1.5 text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
              scrolled 
                ? 'border-hairline text-espresso-900 hover:bg-linen-100' 
                : 'border-cream-50/30 text-cream-50 hover:bg-cream-50/10'
            }`}
            title="Call Cafe"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{CAFE_INFO.phone}</span>
          </a>

          {/* Reserve CTA */}
          <button
            onClick={onOpenReservation}
            className="bg-sage text-white hover:bg-sage-600 px-4 py-2 rounded-lg text-xs font-medium tracking-wide shadow-subtle hover:shadow-soft transition-all flex items-center space-x-2 border border-sage-600/30"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cream-50" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-2 sm:hidden">
          <button
            onClick={onOpenReservation}
            className="bg-sage text-white p-2 rounded-lg text-xs font-medium shadow-sm"
            aria-label="Book Table"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${scrolled ? 'text-espresso-900' : 'text-cream-50'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cream border-b border-hairline px-5 pt-4 pb-6 space-y-4">
          
          {/* Mobile Status Pill */}
          <div className="flex items-center justify-between bg-linen-100 p-3 rounded-lg border border-hairline">
            <div className="flex items-center space-x-2 text-xs font-medium text-espresso-900">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-sage-500' : 'bg-brass-500'}`}></span>
              <span>{statusText}</span>
            </div>
            <span className="text-[10px] text-espresso-100 font-medium uppercase tracking-widest">IST</span>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-espresso-900 hover:bg-linen-100 px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <Compass className="w-3.5 h-3.5 text-espresso-100" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-hairline space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full bg-sage text-white py-3 rounded-lg text-xs font-medium tracking-wide flex items-center justify-center space-x-2 shadow-subtle"
            >
              <MessageSquare className="w-4 h-4 text-cream-50" />
              <span>Reserve Table via WhatsApp</span>
            </button>

            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="w-full bg-linen-100 text-espresso-900 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center space-x-2 border border-hairline"
            >
              <Phone className="w-3.5 h-3.5 text-espresso-100" />
              <span>Call +91 95339 63121</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

