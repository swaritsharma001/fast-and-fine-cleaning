import React from 'react';
import { Clock, Calendar, Sparkles, Truck, PhoneCall, ShieldCheck } from 'lucide-react';
import { DubaiLiveStatus } from './DubaiLiveStatus';
import { WhatsAppIcon } from './BrandIcons';
import { AnimateOnView } from './AnimateOnView';

export const WorkingHours = () => {
  return (
    <section id="hours" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimateOnView animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#F1D77A] uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              Always At Your Service
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Working <span className="text-gold-gradient">Hours</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              We operate 7 days a week from morning until midnight. Check our live Dubai status below.
            </p>
          </AnimateOnView>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Gold-Bordered Hours Card */}
          <AnimateOnView animation="fade-right" className="lg:col-span-7">
            <div className="bg-[#121212] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl shadow-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
              <DubaiLiveStatus variant="full" />
            </div>
          </AnimateOnView>

          {/* Side Info & Instant Booking Banner */}
          <AnimateOnView animation="fade-left" className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#121212] rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  Daily Free Pickup &amp; Delivery
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Whether you need your Kandura ironed for an evening gathering or weekly family laundry done, our fleet is ready to pick up your laundry anytime between 8 AM and midnight.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free pickup for orders across covered Dubai areas</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Same-day collection when booked early</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Live order tracking and WhatsApp updates</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <a
                  href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%2C%20I%20would%20like%20to%20request%20a%20pickup%20right%20now."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-gold-gradient text-black font-semibold text-sm shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transition-all duration-300 btn-shimmer active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Request Pickup On WhatsApp</span>
                </a>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
};
