import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, MessageSquare, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function WhatsAppReservationModal({ isOpen, onClose }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('07:00 PM');
  const [guests, setGuests] = useState(2);
  const [seating, setSeating] = useState('Lush Open Lawn Courtyard');
  const [occasion, setOccasion] = useState('Weekend Drive-Out');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const seatingOptions = [
    "Lush Open Lawn Courtyard",
    "Shaded Pergola Seating",
    "Pet-Friendly Lawn Zone",
    "Indoor Air-Conditioned Cafe",
    "Private Garden Corner"
  ];

  const occasionOptions = [
    "Weekend Drive-Out Dining",
    "Airport Layover / Pre-Flight Meal",
    "Pet Social & Walk",
    "Family Brunch / Gathering",
    "Birthday & Private Event"
  ];

  // WhatsApp Pre-filled message generator
  const generateWhatsAppUrl = () => {
    const message = `Hello Autumn Leaf Cafe (Imamguda / Thukkuguda)! 👋
I would like to reserve a table:

📅 Date: ${date}
⏰ Time: ${time}
👥 Party Size: ${guests} Guest(s)
🌿 Seating Preference: ${seating}
🎉 Occasion: ${occasion}
${notes ? `📝 Special Request: ${notes}` : ''}

Please confirm table availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CAFE_INFO.rawPhone}?text=${encodedMessage}`;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const url = generateWhatsAppUrl();
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-elevated border border-forest-900/10 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Instant Booking</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
            Reserve Table via WhatsApp
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Autumn Leaf Cafe • Thukkuguda / Imamguda (+91 95339 63121)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleBookingSubmit} className="space-y-4">
          
          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-forest-600" /> Select Date
              </label>
              <input
                type="date"
                required
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-forest-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-forest-600" /> Preferred Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-forest-900 bg-white"
              >
                <option value="08:30 AM">08:30 AM (Breakfast)</option>
                <option value="10:00 AM">10:00 AM (Morning Coffee)</option>
                <option value="01:00 PM">01:00 PM (Lunch)</option>
                <option value="04:00 PM">04:00 PM (High Tea & Snacks)</option>
                <option value="07:00 PM">07:00 PM (Dinner & Fairy Lights)</option>
                <option value="08:30 PM">08:30 PM (Late Night Garden)</option>
              </select>
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center">
              <Users className="w-3.5 h-3.5 mr-1 text-forest-600" /> Guests ({guests} {guests === 1 ? 'Person' : 'People'})
            </label>
            <input
              type="range"
              min="1"
              max="15"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full accent-forest-900 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-1">
              <span>1 Solo</span>
              <span>4 Couple/Family</span>
              <span>8+ Group</span>
              <span>15+ Event</span>
            </div>
          </div>

          {/* Seating Preference */}
          <div>
            <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-forest-600" /> Seating Preference
            </label>
            <select
              value={seating}
              onChange={(e) => setSeating(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-forest-900 bg-white"
            >
              {seatingOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Occasion */}
          <div>
            <label className="block text-xs font-bold text-forest-900 mb-1.5 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-terracotta" /> Dining Occasion
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-forest-900 bg-white"
            >
              {occasionOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-forest-900 mb-1.5">
              Special Requests (Dietary, High Chair, Pet Space)
            </label>
            <textarea
              rows="2"
              placeholder="e.g. Bringing a dog, need high chair, layover flight at 10 PM..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-forest-900"
            ></textarea>
          </div>

          {/* Pre-filled Message Preview Box */}
          <div className="bg-linen-100 p-3.5 rounded-xl border border-forest-900/10 text-xs text-slate-700 space-y-1">
            <div className="font-bold text-forest-900 flex items-center text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" /> WhatsApp Message Preview
            </div>
            <p className="italic text-[11px] text-slate-600 line-clamp-2">
              "Reserving for {guests} guest(s) on {date} at {time} in {seating} for {occasion}."
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-warmgold" />
            <span>Open WhatsApp & Send Reservation</span>
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href={`tel:${CAFE_INFO.phone}`}
            className="text-xs text-slate-500 hover:text-forest-900 font-medium inline-flex items-center space-x-1"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-forest-700" />
            <span>Prefer to call directly? +91 95339 63121</span>
          </a>
        </div>

      </div>
    </div>
  );
}
