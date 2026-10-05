import React from 'react';
import { Plane, Car, Dog, ArrowRight } from 'lucide-react';

export default function HighwayBanner({ onOpenReservation }) {
  const userJourneys = [
    {
      title: "Highway & Airport Travelers",
      tagline: "ORR Exit 14 • 15 Mins to RGIA Airport",
      icon: Plane,
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
      bullets: [
        "Expansive natural grass lawns where your pets can stretch & relax",
        "Shaded outdoor tables with fresh water bowls provided",
        "Welcoming pet policy for dogs, cats & furry family members",
        "Weekend pet socials & photographer friendly garden backdrop"
      ]
    }
  ];

  return (
    <section id="highway" className="py-24 sm:py-28 bg-linen-100/60 border-y border-hairline relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-medium uppercase tracking-widest text-sage-600 bg-sage-50 px-3 py-1 rounded-full inline-block mb-3 border border-sage-200">
            Thoughtful Hospitality
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-900 mb-4 leading-tight">
            Designed for Every Journey
          </h2>
          <p className="text-espresso-100 text-sm sm:text-base leading-relaxed">
            Whether catching a flight at Shamshabad Airport, taking a weekend drive off ORR Exit 14, or bringing pets for a sunny brunch, Autumn Leaf Cafe is your unhurried retreat.
          </p>
        </div>

        {/* 3 User Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userJourneys.map((journey, idx) => {
            const IconComponent = journey.icon;
            return (
              <div
                key={idx}
                className="bg-cream rounded-xl p-7 border border-hairline shadow-subtle hover:border-sage-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg bg-sage-50 border border-sage-200 text-sage-700 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-sage-600" />
                    </div>
                    <span className="text-[10px] font-medium tracking-widest px-2.5 py-1 rounded border border-hairline uppercase text-espresso-100 bg-linen-50">
                      Sanctuary
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-espresso-900 mb-1">
                    {journey.title}
                  </h3>
                  <p className="text-xs font-medium text-brass-600 mb-6">
                    {journey.tagline}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {journey.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-espresso-100/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-500 mt-2 mr-2.5 shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenReservation}
                  className="w-full py-2.5 rounded-lg bg-linen-100 hover:bg-sage hover:text-white text-espresso-900 font-medium text-xs tracking-wide transition-all border border-hairline flex items-center justify-center space-x-2 group"
                >
                  <span>Reserve for This Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

