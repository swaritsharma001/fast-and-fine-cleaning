import React, { useState, useEffect } from 'react';
import { ArrowUp, X } from 'lucide-react';
import { WhatsAppOfficialBadge } from './BrandIcons';

export const FloatingActionButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-7 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto w-11 h-11 rounded-full bg-[#141414]/90 backdrop-blur-md border border-[#D4AF37]/50 hover:border-[#F1D77A] text-[#F1D77A] hover:bg-[#1E1E1E] flex items-center justify-center shadow-xl shadow-black/80 transition-all duration-300 hover:scale-110 active:scale-95 group ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Floating WhatsApp CTA */}
      <div className="relative pointer-events-auto flex items-center gap-2">
        {/* Tooltip bubble */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212]/95 backdrop-blur-md border border-[#25D366]/40 text-xs text-white shadow-xl shadow-black/60 animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>Need pickup? Chat with us!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-500 hover:text-white ml-1"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* WhatsApp Button with original brand badge & pulsing glow */}
        <a
          href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%20Dubai%2C%20I%20would%20like%20to%20order%20laundry%20pickup."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-whatsapp-pulse focus:outline-none"
          aria-label="Chat on WhatsApp with Shamsa Laundry"
          title="Chat with Shamsa Laundry Dubai"
        >
          <WhatsAppOfficialBadge className="w-14 h-14 drop-shadow-lg" size={56} />
        </a>
      </div>
    </div>
  );
};
