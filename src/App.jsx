import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighwayBanner from './components/HighwayBanner';
import MenuSection from './components/MenuSection';
import AmbienceGallery from './components/AmbienceGallery';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import WhatsAppReservationModal from './components/WhatsAppReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="min-h-screen bg-linen-50 text-slate-800 antialiased selection:bg-forest-900 selection:text-warmgold">
      
      {/* Sticky Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenReservation={handleOpenReservation} />
        <HighwayBanner onOpenReservation={handleOpenReservation} />
        <MenuSection onOpenReservation={handleOpenReservation} />
        <AmbienceGallery />
        <LocationSection />
        <ReviewsSection onOpenReservation={handleOpenReservation} />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* WhatsApp Reservation Modal */}
      <WhatsAppReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
      />

    </div>
  );
}
