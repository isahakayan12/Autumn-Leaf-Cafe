import React from 'react';
import { Plane, Car, Dog, Coffee, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function HighwayBanner({ onOpenReservation }) {
  const userJourneys = [
    {
      title: "Highway & Airport Travelers",
      tagline: "ORR Exit 14 • 15 Mins to RGIA Airport",
      icon: Plane,
      color: "from-blue-600 to-indigo-700",
      accent: "bg-blue-500/10 text-blue-700",
      bullets: [
        "2-minute hassle-free turnoff from Outer Ring Road (Exit 14)",
        "Ideal pre-flight meal or layover coffee break before RGIA airport",
        "High-speed complimentary Wi-Fi & laptop power outlets",
        "Quick takeaway espresso & packaging for road trips"
      ]
    },
    {
      title: "Weekend Drive-Out Diners",
      tagline: "Imamguda Garden Dining Sanctuary",
      icon: Car,
      color: "from-forest-800 to-forest-950",
      accent: "bg-forest-900/10 text-forest-900",
      bullets: [
        "Spacious open-air green lawn seating under leafy pergolas",
        "Handcrafted woodfired pizzas & artisanal European comfort food",
        "Serene background music & natural breeze away from city noise",
        "Large family tables & private garden event reservations"
      ]
    },
    {
      title: "Pet Owners & Dog Lovers",
      tagline: "100% Pet-Friendly Lawn Courtyard",
      icon: Dog,
      color: "from-terracotta to-amber-700",
      accent: "bg-terracotta/10 text-terracotta",
      bullets: [
        "Expansive natural grass lawns where your pets can stretch & relax",
        "Shaded outdoor tables with fresh water bowls provided",
        "Welcoming pet policy for dogs, cats & furry family members",
        "Weekend pet socials & photographer friendly garden backdrop"
      ]
    }
  ];

  return (
    <section id="highway" className="py-20 bg-linen-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta bg-terracotta/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Tailored Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 mb-4">
            Designed for Every Journey & Dining Occasion
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you are catching a flight at Shamshabad Airport, taking a weekend drive down ORR Exit 14, or bringing your pets for a sunny brunch, Autumn Leaf Cafe is your tranquil sanctuary.
          </p>
        </div>

        {/* 3 User Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userJourneys.map((journey, idx) => {
            const IconComponent = journey.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 shadow-soft border border-forest-900/10 hover:shadow-elevated transition-all transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${journey.color} text-white flex items-center justify-center shadow-md`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${journey.accent}`}>
                      Targeted Service
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-900 mb-1">
                    {journey.title}
                  </h3>
                  <p className="text-xs font-semibold text-earthgold-dark mb-6">
                    {journey.tagline}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {journey.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 mr-2.5 shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenReservation}
                  className="w-full py-3 rounded-xl bg-linen-200 hover:bg-forest-900 hover:text-white text-forest-900 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Reserve Table for This Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
