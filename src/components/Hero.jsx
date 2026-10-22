import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, Truck, Clock, Award } from 'lucide-react';
import { WhatsAppIcon, GoogleIcon, GoldStar } from './BrandIcons';
import { RippleButton } from './RippleButton';
import { GoldCanvasParticles } from './GoldCanvasParticles';
import { DubaiLiveStatus } from './DubaiLiveStatus';
import { AnimateOnView } from './AnimateOnView';

export const Hero = () => {
  // Count-up animation for rating
  const [ratingCount, setRatingCount] = useState(4.2);

  useEffect(() => {
    let start = 4.0;
    const end = 5.0;
    const duration = 1200;
    const startTime = performance.now();

    const updateRating = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = (start + (end - start) * ease).toFixed(1);
      setRatingCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateRating);
      } else {
        setRatingCount('5.0');
      }
    };

    const frame = requestAnimationFrame(updateRating);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0E0E0E] to-[#0A0A0A]"
    >
      {/* Background Gold Shimmer & Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#F1D77A]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#AA820A]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Floating Gold Particles Canvas */}
      <GoldCanvasParticles density={50} />

      {/* Subtle luxury geometric grid line overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges: Live Dubai Time & Google 5.0 Rating */}
        <AnimateOnView animation="fade-down" delay={100} className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {/* Dubai Live Status Badge */}
          <DubaiLiveStatus variant="badge" />

          {/* Google Reviews 5.0 Star Badge */}
          <a
            href="https://share.google/qmyEvktKcpqezzQ6o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141414] border border-[#D4AF37]/40 hover:border-[#F1D77A] text-xs font-medium text-zinc-200 transition-all duration-300 shadow-md hover:shadow-[#D4AF37]/20 group"
          >
            <GoogleIcon className="w-4 h-4 shrink-0" />
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="star-pop text-[#D4AF37] inline-block"
                  style={{ animationDelay: `${300 + i * 120}ms` }}
                >
                  <GoldStar className="w-3.5 h-3.5 fill-[#D4AF37]" />
                </span>
              ))}
            </div>
            <span className="font-bold text-[#F1D77A] font-mono tracking-tight text-sm">
              {ratingCount}
            </span>
            <span className="text-zinc-400 font-normal">Google Reviews</span>
            <ArrowRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </AnimateOnView>

        {/* Main Headline */}
        <AnimateOnView animation="fade-up" delay={200}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl mx-auto">
            Premium Laundry &amp;{' '}
            <span className="text-gold-gradient block sm:inline">
              Dry Cleaning
            </span>{' '}
            in Dubai
          </h1>
        </AnimateOnView>

        {/* Subtext */}
        <AnimateOnView animation="fade-up" delay={350}>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto mb-10 tracking-wide">
            <span className="font-medium text-white">Clean.</span>{' '}
            <span className="font-medium text-[#F1D77A]">Fast.</span>{' '}
            <span className="font-medium text-white">Professional.</span>{' '}
            <span className="text-zinc-300 block sm:inline">
              Free pickup &amp; delivery.
            </span>
          </p>
        </AnimateOnView>

        {/* CTA Buttons */}
        <AnimateOnView animation="fade-up" delay={500} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          {/* Order on WhatsApp (Gold filled with WhatsApp icon) */}
          <RippleButton
            as="a"
            href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%20Dubai%2C%20I%20would%20like%20to%20place%20a%20laundry%20order%20for%20pickup."
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/45 group animate-gold-pulse"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Order on WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </RippleButton>

          {/* Call Now (Gold outline) */}
          <RippleButton
            as="a"
            href="tel:+971522256627"
            variant="outline"
            className="w-full sm:w-auto px-8 py-4 text-base font-medium group"
          >
            <Phone className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
            <span>Call Now</span>
          </RippleButton>
        </AnimateOnView>

        {/* Key Feature Pillars */}
        <AnimateOnView animation="fade-up" delay={650}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-zinc-800/80">
            <div className="p-3.5 rounded-xl bg-[#121212]/80 border border-zinc-800/80 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Doorstep</p>
                <p className="text-sm font-semibold text-white">Free Pickup &amp; Drop</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#121212]/80 border border-zinc-800/80 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Garment Care</p>
                <p className="text-sm font-semibold text-white">Delicate &amp; Kandura</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#121212]/80 border border-zinc-800/80 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Hours</p>
                <p className="text-sm font-semibold text-white">Daily 8 AM – 12 AM</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#121212]/80 border border-zinc-800/80 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Satisfaction</p>
                <p className="text-sm font-semibold text-white">5.0 Star Rated</p>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
};
