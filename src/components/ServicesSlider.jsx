import React, { useState, useEffect, useRef } from 'react';
import {
  Shirt,
  Sparkles,
  Wind,
  Truck,
  Layers,
  Flame,
  Footprints,
  Grid,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { AnimateOnView } from './AnimateOnView';

export const servicesData = [
  {
    id: 'laundry-service',
    title: 'Laundry Service',
    description:
      'Daily garment care with premium eco-friendly detergents, precise temperature control, and fabric softener for fresh, pristine clothes.',
    icon: Shirt,
    tag: 'Popular Choice',
    features: ['Color protection', 'Eco-friendly detergent', 'Fresh scent'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to order Laundry Service for my clothes with pickup.',
  },
  {
    id: 'dry-cleaning',
    title: 'Dry Cleaning',
    description:
      'Specialized gentle chemical solvent care for delicate fabrics, formal suits, kanduras, silk dresses, abayas, and wool without shrinkage.',
    icon: Sparkles,
    tag: 'Luxury Care',
    features: ['Suit & Abaya care', 'Delicate fabric safe', 'Stain removal'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to order Dry Cleaning service for my garments.',
  },
  {
    id: 'general-clothes-drying',
    title: 'General Clothes Drying',
    description:
      'Controlled thermal tumbling and gentle moisture removal that eliminates stiffness and preserves fiber strength and garment shape.',
    icon: Wind,
    tag: 'Gentle Tumble',
    features: ['Anti-shrink tech', 'Wrinkle reduction', 'Lint removal'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to inquire about General Clothes Drying service.',
  },
  {
    id: 'laundry-pick-up',
    title: 'Laundry Pick-up',
    description:
      'Effortless door-to-door collection and prompt delivery directly to your home, hotel, or apartment anywhere in our Dubai service zones.',
    icon: Truck,
    tag: 'Free Service',
    features: ['Doorstep pickup', 'Fast turnaround', 'Punctual drivers'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to schedule a Laundry Pick-up from my address in Dubai.',
  },
  {
    id: 'laundry-wash-fold',
    title: 'Laundry Wash & Fold',
    description:
      'Thoroughly washed, sanitized, tumble dried, and immaculately folded with boutique precision, ready to be placed directly into your wardrobe.',
    icon: Layers,
    tag: 'Wardrobe Ready',
    features: ['Neatly organized', 'Towel & linen care', 'Hygienically packed'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to book Laundry Wash & Fold service.',
  },
  {
    id: 'laundry-wash-iron',
    title: 'Laundry Wash & Iron',
    description:
      'Complete luxury treatment: thorough wash followed by precision steam pressing for crisp collars, sleek pleats, and zero creases.',
    icon: Flame,
    tag: 'Best Seller',
    features: ['Steam press finish', 'Crisp collars & pleats', 'Hanger packaging'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to book Laundry Wash & Iron service with pickup.',
  },
  {
    id: 'shoe-cleaning',
    title: 'Shoe Cleaning',
    description:
      'Expert detailing for luxury sneakers, dress leather shoes, suede, and athletic footwear. Deep sole scrubbing, deodorizing, and conditioning.',
    icon: Footprints,
    tag: 'Specialist Detail',
    features: ['Leather & Suede safe', 'Sole whitening', 'Odor neutralization'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to order Shoe Cleaning service for my shoes.',
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    description:
      'Deep extraction cleaning for oriental rugs, Persian carpets, and modern rugs. Removes stubborn dirt, dust mites, allergens, and odors.',
    icon: Grid,
    tag: 'Deep Wash',
    features: ['Deep fiber wash', 'Allergen elimination', 'Color restoration'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to inquire about Carpet Cleaning service with pickup in Dubai.',
  },
  {
    id: 'blanket-cleaning',
    title: 'Blanket Cleaning',
    description:
      'Hygienic deep-cleansing for heavy duvets, comforters, weighted blankets, and bedspreads. Fluffy, feather-light, and sanitized.',
    icon: BedDouble,
    tag: 'Sanitized Fresh',
    features: ['Heavy duvet capacity', 'Thermal sanitation', 'Dust-mite free'],
    whatsappMsg:
      'Hello Shamsa Laundry, I would like to order Blanket Cleaning service for my duvets/blankets.',
  },
];

export const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per view
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, servicesData.length - itemsPerView);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left -> next
        handleNext();
      } else {
        // Swiped right -> prev
        handlePrev();
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background ambient gold glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#F1D77A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <AnimateOnView animation="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#F1D77A] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Signature Laundry Care
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Premium{' '}
              <span className="text-gold-gradient">Services</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              From everyday wash &amp; fold to delicate kanduras and luxury dry cleaning. Swipe through our full catalog and order directly on WhatsApp.
            </p>
          </AnimateOnView>

          {/* Navigation Controls */}
          <AnimateOnView animation="fade-left" className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#141414] border border-[#D4AF37]/30 text-zinc-300 hover:text-[#F1D77A] hover:border-[#D4AF37] hover:bg-[#1C1C1C] transition-all duration-200 active:scale-95 shadow-md group"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#141414] border border-[#D4AF37]/30 text-zinc-300 hover:text-[#F1D77A] hover:border-[#D4AF37] hover:bg-[#1C1C1C] transition-all duration-200 active:scale-95 shadow-md group"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </AnimateOnView>
        </div>

        {/* Carousel Container */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing pb-4"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="h-full bg-[#121212] rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/25 hover:border-[#F1D77A]/70 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1.5 group relative overflow-hidden">
                    {/* Top ambient gold highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#F1D77A] transition-all duration-300" />

                    <div>
                      {/* Card Top: Icon & Tag */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:text-[#F1D77A] group-hover:border-[#D4AF37] group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-md shadow-[#D4AF37]/10">
                          <IconComponent className="w-7 h-7" strokeWidth={1.75} />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#D4AF37]/10 text-[#F1D77A] border border-[#D4AF37]/30">
                          {service.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#F1D77A] transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-zinc-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA: Order Now linking to WhatsApp with prefilled message */}
                    <a
                      href={`https://wa.me/971522256627?text=${encodeURIComponent(
                        service.whatsappMsg
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#181818] hover:bg-gold-gradient text-[#F1D77A] hover:text-black font-semibold text-xs sm:text-sm border border-[#D4AF37]/40 hover:border-transparent transition-all duration-300 shadow-md group/btn btn-shimmer active:scale-95"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span>Order {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'w-7 bg-gold-gradient'
                  : 'w-2 bg-zinc-800 hover:bg-zinc-600'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
