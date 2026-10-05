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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-cream rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-elevated border border-hairline p-6 sm:p-8 relative text-espresso-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-linen-100 hover:bg-linen-200 text-espresso-900 flex items-center justify-center transition-colors border border-hairline"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-1.5 bg-sage-50 text-sage-700 px-3 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-widest mb-2 border border-sage-200">
            <MessageSquare className="w-3 h-3 text-sage-600" />
            <span>Instant Booking</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-900">
            Reserve Table via WhatsApp
          </h2>
          <p className="text-espresso-100 text-xs mt-1 font-light">
            Autumn Leaf Cafe • Thukkuguda / Imamguda (+91 95339 63121)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleBookingSubmit} className="space-y-4">
          
          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-espresso-900 mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-sage-600" /> Select Date
              </label>
              <input
                type="date"
                required
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-hairline bg-linen-100 text-xs focus:outline-none focus:border-sage text-espresso-900"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-espresso-900 mb-1 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-sage-600" /> Preferred Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-hairline bg-linen-100 text-xs focus:outline-none focus:border-sage text-espresso-900"
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
            <label className="block text-xs font-medium text-espresso-900 mb-1 flex items-center">
              <Users className="w-3.5 h-3.5 mr-1 text-sage-600" /> Guests ({guests} {guests === 1 ? 'Person' : 'People'})
            </label>
            <input
              type="range"
              min="1"
              max="15"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full accent-sage cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-espresso-100/70 font-medium px-1">
              <span>1 Solo</span>
              <span>4 Couple/Family</span>
              <span>8+ Group</span>
              <span>15+ Event</span>
            </div>
          </div>

          {/* Seating Preference */}
          <div>
            <label className="block text-xs font-medium text-espresso-900 mb-1 flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-sage-600" /> Seating Preference
            </label>
            <select
              value={seating}
              onChange={(e) => setSeating(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-hairline bg-linen-100 text-xs focus:outline-none focus:border-sage text-espresso-900"
            >
              {seatingOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Occasion */}
          <div>
            <label className="block text-xs font-medium text-espresso-900 mb-1 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-brass-500" /> Dining Occasion
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-hairline bg-linen-100 text-xs focus:outline-none focus:border-sage text-espresso-900"
            >
              {occasionOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-medium text-espresso-900 mb-1">
              Special Requests (Dietary, High Chair, Pet Space)
            </label>
            <textarea
              rows="2"
              placeholder="e.g. Bringing a dog, need high chair, layover flight at 10 PM..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-hairline bg-linen-100 text-xs focus:outline-none focus:border-sage text-espresso-900"
            ></textarea>
          </div>

          {/* Pre-filled Message Preview Box */}
          <div className="bg-linen-100 p-3 rounded-lg border border-hairline text-xs space-y-1">
            <div className="font-semibold text-espresso-900 flex items-center text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-sage-600" /> WhatsApp Message Preview
            </div>
            <p className="italic text-[11px] text-espresso-100/80 font-light line-clamp-2">
              "Reserving for {guests} guest(s) on {date} at {time} in {seating} for {occasion}."
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-sage hover:bg-sage-600 text-white font-medium text-xs tracking-wide shadow-subtle transition-all flex items-center justify-center space-x-2 border border-sage-600/30"
          >
            <MessageSquare className="w-4 h-4 text-cream-50" />
            <span>Open WhatsApp & Send Reservation</span>
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href={`tel:${CAFE_INFO.phone}`}
            className="text-xs text-espresso-100 hover:text-espresso-900 font-medium inline-flex items-center space-x-1"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-sage-600" />
            <span>Prefer to call directly? +91 95339 63121</span>
          </a>
        </div>

      </div>
    </div>
  );
}

