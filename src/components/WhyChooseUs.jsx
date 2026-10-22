import React from 'react';
import { Zap, Sparkles, Truck, Users, ShieldCheck, Award } from 'lucide-react';
import { AnimateOnView } from './AnimateOnView';

export const WhyChooseUs = () => {
  const cards = [
    {
      title: 'Fast Service',
      description:
        'Punctual turnaround with same-day and 24-hour express options. Your freshly laundered garments are returned strictly on schedule.',
      icon: Zap,
      stat: '24-48h',
      statLabel: 'Standard Turnaround',
    },
    {
      title: 'Fresh & Clean',
      description:
        'Medical-grade fabric sanitation using hypoallergenic, eco-certified detergents and fabric-softening agents that leave a crisp, fresh scent.',
      icon: Sparkles,
      stat: '100%',
      statLabel: 'Fabric Hygiene',
    },
    {
      title: 'Free Pickup & Delivery',
      description:
        'Door-to-door convenience throughout Dubai. Our drivers collect from your home or office and return your wardrobe pristine and ready.',
      icon: Truck,
      stat: '0 AED',
      statLabel: 'Pickup & Delivery',
    },
    {
      title: 'Friendly Staff',
      description:
        'Professional, respectful, and attentive team members dedicated to handling each kandura, suit, and delicate garment with boutique care.',
      icon: Users,
      stat: '5.0 ★',
      statLabel: 'Customer Rating',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-y border-zinc-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnView animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#F1D77A] uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              The Shamsa Standard
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why Choose <span className="text-gold-gradient">Shamsa Laundry</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Exceptional garment care trusted by residents across Dubai. Here is how we redefine the laundry experience.
            </p>
          </AnimateOnView>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimateOnView
                key={card.title}
                animation="fade-up"
                delay={index * 150}
                className="h-full"
              >
                <div className="h-full bg-[#121212] rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/25 hover:border-[#F1D77A]/70 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2 group relative overflow-hidden">
                  {/* Subtle top gold accent glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#F1D77A] transition-all duration-300" />

                  <div>
                    {/* Icon with bounce / spin on hover */}
                    <div className="w-14 h-14 rounded-xl bg-[#181818] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:text-[#F1D77A] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md shadow-[#D4AF37]/10 mb-6">
                      <Icon className="w-7 h-7" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F1D77A] transition-colors mb-2.5">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Stat highlight */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-baseline justify-between">
                    <span className="font-serif text-xl font-bold text-gold-gradient">
                      {card.stat}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-medium">
                      {card.statLabel}
                    </span>
                  </div>
                </div>
              </AnimateOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
};
