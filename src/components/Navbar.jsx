import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { RippleButton } from './RippleButton';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'why-us', 'gallery', 'reviews', 'hours', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Working Hours', href: '#hours' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-2xl shadow-black/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E1E1E] to-[#121212] border border-[#D4AF37]/50 flex items-center justify-center shadow-md shadow-[#D4AF37]/10 group-hover:border-[#F1D77A] group-hover:shadow-[#D4AF37]/30 transition-all duration-300">
                <span className="font-serif text-xl font-bold text-gold-gradient group-hover:scale-110 transition-transform duration-300">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-gold-gradient leading-tight">
                  Shamsa Laundry
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-zinc-400 group-hover:text-[#F1D77A] transition-colors">
                  Dubai Branch
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-3.5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#F1D77A] bg-[#D4AF37]/10 font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#D4AF37]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+971522256627"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:border-[#D4AF37]/50 border border-zinc-800 transition-colors"
                title="Call Shamsa Laundry Dubai"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                +971 52 225 6627
              </a>

              <RippleButton
                as="a"
                href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%20Dubai%2C%20I%20would%20like%20to%20order%20laundry%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                className="px-5 py-2.5 text-xs md:text-sm font-semibold shadow-md"
              >
                {/* Original WhatsApp brand icon */}
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp Us</span>
              </RippleButton>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 sm:hidden"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#F1D77A]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with backdrop blur */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#101010] border-l border-[#D4AF37]/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-black border border-[#D4AF37]/60 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-gold-gradient">S</span>
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-gold-gradient">
                    Shamsa Laundry
                  </h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
                    Dubai Branch
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="mt-6 flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-200 hover:text-[#F1D77A] hover:bg-[#D4AF37]/10 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-600 text-xs">→</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Actions */}
          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <a
              href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%20Dubai%2C%20I%20would%20like%20to%20order%20laundry%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gold-gradient text-black font-semibold text-sm shadow-lg shadow-[#D4AF37]/20 btn-shimmer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Us Now</span>
            </a>

            <a
              href="tel:+971522256627"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-zinc-900 border border-[#D4AF37]/40 text-[#F1D77A] font-medium text-sm hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call +971 52 225 6627</span>
            </a>

            <div className="pt-2 text-center text-xs text-zinc-500">
              Open Daily: 8:00 AM – 12:00 AM
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
