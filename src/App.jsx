import { useState, useEffect } from 'react';
import Navbar               from './components/Navbar';
import Hero                 from './components/Hero';
import StatsBar             from './components/StatsBar';
import About                from './components/About';
import Services             from './components/Services';
import WhyChooseUs          from './components/WhyChooseUs';
import WorkProcess          from './components/WorkProcess';
import Gallery              from './components/Gallery';
import OurGallery           from './components/OurGallery';
import QualityHygiene       from './components/QualityHygiene';
import FlexibleArrangements from './components/FlexibleArrangements';
import ClientExperience     from './components/ClientExperience';
import CTA                  from './components/CTA';
import Contact              from './components/Contact';
import Footer               from './components/Footer';
import FloatingWhatsApp     from './components/FloatingWhatsApp';

const SECTION_IDS = ['home', 'about', 'services', 'gallery', 'experience', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.2 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white text-text-dark flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="w-full max-w-[100vw] overflow-x-hidden flex-1">
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <WhyChooseUs />
        <WorkProcess />
        <Gallery />
        <OurGallery />
        <QualityHygiene />
        <FlexibleArrangements />
        <ClientExperience />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
