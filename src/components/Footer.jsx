import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon, GoogleIcon } from './BrandIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Working Hours', href: '#hours' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070707] border-t border-[#D4AF37]/35 relative pt-16 pb-12 overflow-hidden">
      {/* Top subtle golden light strip */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#F1D77A] to-transparent shadow-[0_0_15px_#D4AF37]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-850">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#D4AF37]/60 flex items-center justify-center shadow-md">
                <span className="font-serif text-xl font-bold text-gold-gradient">
                  S
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-gold-gradient">
                  Shamsa Laundry
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                  Dubai Branch
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dubai’s premier destination for luxury garment care, delicate fabric dry cleaning, kandura restoration, and free door-to-door laundry pickup.
            </p>

            {/* Official Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/971522256627"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-zinc-800 hover:border-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md group"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shamsa__laundry_dubai_branch/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-zinc-800 hover:border-[#E1306C] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md group p-1"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-6 h-6 rounded-lg" />
              </a>

              {/* Google Business */}
              <a
                href="https://share.google/qmyEvktKcpqezzQ6o"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-zinc-800 hover:border-[#4285F4] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md group"
                aria-label="Google Business"
                title="View on Google"
              >
                <GoogleIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#F1D77A] font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-[#F1D77A] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-zinc-600">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Quick Digest (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#F1D77A] font-semibold mb-4">
              Dubai Branch Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <a
                href="tel:+971522256627"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+971 52 225 6627</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Open Daily: 8:00 AM – 12:00 AM (Midnight)</span>
              </div>

              <a
                href="https://maps.app.goo.gl/Dixry54oc4XYahV86?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#F1D77A] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates (Free Pickup &amp; Delivery)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Shamsa Laundry Dubai Branch. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-[#F1D77A] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
