import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSlider } from './components/ServicesSlider';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BranchGallery } from './components/BranchGallery';
import { ReviewsSlider } from './components/ReviewsSlider';
import { WorkingHours } from './components/WorkingHours';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { FloatingActionButtons } from './components/FloatingActionButtons';

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Section (Cards + Slider) */}
        <ServicesSlider />

        {/* 4. Why Choose Us (4 Cards) */}
        <WhyChooseUs />

        {/* 5. Real Branch Photos Gallery (Aswaq Mall, Al Warqa 3) */}
        <BranchGallery />

        {/* 6. Customer Reviews (Cards + Slider + Owner Replies + Real Avatars) */}
        <ReviewsSlider />

        {/* 7. Working Hours (Gold Card + Live Dubai GMT+4 Status) */}
        <WorkingHours />

        {/* 8. Location & Contact (Google Map + Contact Cards) */}
        <LocationAndContact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating Buttons (Pulse WhatsApp & Back to Top) */}
      <FloatingActionButtons />
    </div>
  );
}

export default App;
