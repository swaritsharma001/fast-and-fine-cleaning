import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Send,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { WhatsAppIcon, InstagramIcon, GoogleIcon } from './BrandIcons';
import { RippleButton } from './RippleButton';
import { AnimateOnView } from './AnimateOnView';

export const LocationAndContact = () => {
  const [copied, setCopied] = useState(false);

  // Quick WhatsApp pickup booking state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    service: 'Laundry Service',
    area: '',
    notes: '',
  });

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('+971522256627');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Shamsa Laundry Dubai!\n\nI would like to book a pickup:\n• Name: ${bookingForm.name || 'Customer'}\n• Service: ${bookingForm.service}\n• Location/Area: ${bookingForm.area || 'Dubai'}${bookingForm.notes ? `\n• Notes: ${bookingForm.notes}` : ''}`;
    window.open(`https://wa.me/971522256627?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnView animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#F1D77A] uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Visit or Connect
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Location &amp; <span className="text-gold-gradient">Contact</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              We are situated conveniently in Dubai, offering both in-person drop-off and door-to-door delivery. Reach out through any channel below.
            </p>
          </AnimateOnView>
        </div>

        {/* Main 2-Column Section: Left Contact Cards & Booking, Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* 1. Phone & WhatsApp Card */}
            <AnimateOnView animation="fade-right" delay={100}>
              <div className="bg-[#121212] rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#F1D77A]/60 transition-all duration-300 shadow-xl group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                        Phone &amp; WhatsApp
                      </p>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide mt-0.5">
                        +971 52 225 6627
                      </h3>
                      <p className="text-xs text-zinc-400">
                        Available daily: 8:00 AM – 12:00 AM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={handleCopyNumber}
                      className="p-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-700 hover:border-[#D4AF37] text-zinc-300 hover:text-white transition-all text-xs flex items-center gap-1.5 active:scale-95"
                      title="Copy number"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href="tel:+971522256627"
                      className="p-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-700 hover:border-[#D4AF37] text-zinc-300 hover:text-[#F1D77A] transition-all active:scale-95"
                      title="Call Phone"
                    >
                      <Phone className="w-4 h-4" />
                    </a>

                    <a
                      href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-[#25D366]/20 active:scale-95"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnView>

            {/* 2. Instagram Card (Original brand icon & colors) */}
            <AnimateOnView animation="fade-right" delay={200}>
              <a
                href="https://www.instagram.com/shamsa__laundry_dubai_branch/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121212] rounded-2xl p-6 border border-[#D4AF37]/25 hover:border-[#F1D77A]/60 transition-all duration-300 shadow-xl group block"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Official Instagram Icon */}
                    <div className="w-12 h-12 rounded-xl p-0.5 shrink-0 flex items-center justify-center">
                      <InstagramIcon className="w-11 h-11 rounded-xl shadow-md" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                        Instagram Official
                      </p>
                      <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-[#F1D77A] transition-colors mt-0.5">
                        @shamsa__laundry_dubai_branch
                      </h3>
                      <p className="text-xs text-zinc-400">
                        Follow us for garment care tips, updates &amp; offers
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-[#D4AF37]/50 transition-colors shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </AnimateOnView>

            {/* 3. Google Business Profile Card */}
            <AnimateOnView animation="fade-right" delay={300}>
              <a
                href="https://share.google/qmyEvktKcpqezzQ6o"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121212] rounded-2xl p-6 border border-[#D4AF37]/25 hover:border-[#F1D77A]/60 transition-all duration-300 shadow-xl group block"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#181818] border border-zinc-800 flex items-center justify-center shrink-0">
                      <GoogleIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                          Google Business
                        </p>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                          Verified
                        </span>
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-[#F1D77A] transition-colors mt-0.5">
                        Shamsa Laundry – Dubai Branch
                      </h3>
                      <p className="text-xs text-[#F1D77A]">
                        ⭐ 5.0 Rating · 100% Verified Customer Reviews
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-[#D4AF37]/50 transition-colors shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </AnimateOnView>

            {/* 4. Quick Pickup Booking Box */}
            <AnimateOnView animation="fade-right" delay={400}>
              <div className="bg-[#121212] rounded-2xl p-6 border border-[#D4AF37]/35 shadow-xl">
                <div className="flex items-center gap-2.5 mb-4">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="font-serif text-lg font-bold text-white">
                    Quick Pickup Request
                  </h3>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Ahmed"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-zinc-800 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Service Needed</label>
                      <select
                        value={bookingForm.service}
                        onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-zinc-800 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-white transition-colors cursor-pointer"
                      >
                        <option value="Laundry Service">Laundry Service</option>
                        <option value="Dry Cleaning">Dry Cleaning</option>
                        <option value="General Clothes Drying">General Clothes Drying</option>
                        <option value="Laundry Pick-up">Laundry Pick-up</option>
                        <option value="Laundry Wash & Fold">Laundry Wash &amp; Fold</option>
                        <option value="Laundry Wash & Iron">Laundry Wash &amp; Iron</option>
                        <option value="Shoe Cleaning">Shoe Cleaning</option>
                        <option value="Carpet Cleaning">Carpet Cleaning</option>
                        <option value="Blanket Cleaning">Blanket Cleaning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Your Dubai Location / Area</label>
                    <input
                      type="text"
                      placeholder="e.g. Downtown Dubai, Business Bay, Marina, Deira..."
                      value={bookingForm.area}
                      onChange={(e) => setBookingForm({ ...bookingForm, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-zinc-800 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-gradient text-black font-semibold text-xs sm:text-sm shadow-lg shadow-[#D4AF37]/20 btn-shimmer active:scale-95 transition-transform"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send Pickup Request via WhatsApp</span>
                  </button>
                </form>
              </div>
            </AnimateOnView>
          </div>

          {/* Right Column: Google Maps Beside Contact */}
          <AnimateOnView animation="fade-left" delay={200} className="lg:col-span-6 flex flex-col">
            <div className="bg-[#121212] rounded-3xl p-6 sm:p-7 border border-[#D4AF37]/35 shadow-2xl flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white">
                        Find Shamsa Laundry
                      </h3>
                      <p className="text-xs text-zinc-400">
                        Dubai Branch, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  {/* Gold "Get Directions" button linking to Maps URL */}
                  <RippleButton
                    as="a"
                    href="https://maps.app.goo.gl/Dixry54oc4XYahV86?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="gold"
                    className="px-4 py-2 text-xs font-semibold shadow-md"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </RippleButton>
                </div>

                {/* Embedded Map Frame */}
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-zinc-800 shadow-inner group">
                  <iframe
                    title="Shamsa Laundry Dubai Branch Location"
                    src="https://maps.google.com/maps?q=Shamsa%20Laundry%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                  {/* Overlay direct button badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-black/85 backdrop-blur-md border border-[#D4AF37]/40 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-zinc-200 font-medium truncate">
                        Shamsa Laundry – Dubai Branch
                      </span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/Dixry54oc4XYahV86?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F1D77A] font-semibold hover:underline flex items-center gap-1 shrink-0 ml-2"
                    >
                      <span>Open App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Areas Note */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>Free doorstep pickup &amp; delivery across Dubai</span>
                <span className="text-[#D4AF37] font-semibold">Open Daily 8AM - 12AM</span>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
};
