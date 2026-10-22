import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { GoogleIcon, GoldStar } from './BrandIcons';
import { AnimateOnView } from './AnimateOnView';

export const reviewsData = [
  {
    id: 1,
    name: 'Majed Alkamali',
    isLocalGuide: true,
    timeAgo: '10 months ago',
    rating: 5,
    reviewText:
      'Amazing laundry service! Very clean, fast, and professional. My clothes came back smelling fresh and perfect. The quality of washing and ironing is excellent, and the staff are friendly and helpful. Definitely one of the best laundries in the area — highly recommended!',
    ownerReply: 'Appreciate it, Thank you so much 😊',
    avatarInitials: 'MA',
  },
  {
    id: 2,
    name: 'SAM BAYDOUN',
    isLocalGuide: true,
    timeAgo: '4 months ago',
    rating: 5,
    reviewText:
      'Very clean and fast service. Delivery available in Dubai. Highly recommended.',
    ownerReply: 'Thank you so much ☺️',
    avatarInitials: 'SB',
  },
  {
    id: 3,
    name: 'Rahil Shaikh',
    isLocalGuide: false,
    timeAgo: 'a year ago',
    rating: 5,
    reviewText:
      'Exceptional service from start to finish! Clothes came back flawlessly clean, fresh, and perfectly handled. Fast, reliable, and truly professional — a rare gem in laundry care.',
    ownerReply: 'Thank you so much sir, I hope you visit again for our service',
    avatarInitials: 'RS',
  },
  {
    id: 4,
    name: 'Hessa Salah',
    isLocalGuide: true,
    timeAgo: '11 months ago',
    rating: 5,
    reviewText:
      'I used Shamsa Laundry for dry cleaning and was really happy with their service. The clothes came back perfectly clean and fresh. They also offer free pickup and delivery, which made everything so convenient. Highly recommend them!',
    ownerReply: 'Thank you so much ☺️',
    avatarInitials: 'HS',
  },
  {
    id: 5,
    name: 'sam baydoun',
    isLocalGuide: false,
    timeAgo: '11 months ago',
    rating: 5,
    reviewText:
      'Excellent laundry service! The clothes always come back clean, fresh, and well-folded. The staff are professional and always deliver on time. Highly recommended!',
    ownerReply: 'Thank you so much, really appreciated 😊',
    avatarInitials: 'SB',
  },
  {
    id: 6,
    name: 'Mohammad Lanjawi',
    isLocalGuide: true,
    timeAgo: '8 months ago',
    rating: 5,
    reviewText:
      'I had a fully smoked kandura and underwear and Mashallah everything returned back to normal without any damages.',
    ownerReply:
      'Thank you so much for your trust! We take special pride in kandura care. Always a pleasure! 🙏',
    avatarInitials: 'ML',
  },
];

export const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(2);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, reviewsData.length - itemsPerView);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

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
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <AnimateOnView animation="fade-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#F1D77A] uppercase tracking-wider mb-3">
              <GoogleIcon className="w-3.5 h-3.5" />
              Verified Google Reviews
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Loved by <span className="text-gold-gradient">Dubai Residents</span>
            </h2>
            <div className="flex items-center gap-2 mt-2 text-zinc-300 text-sm">
              <span className="font-bold text-[#F1D77A] text-lg font-mono">5.0</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <GoldStar key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-zinc-400">· 100% Five-Star Customer Feedback</span>
            </div>
          </AnimateOnView>

          {/* Navigation Controls */}
          <AnimateOnView animation="fade-left" className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#141414] border border-[#D4AF37]/30 text-zinc-300 hover:text-[#F1D77A] hover:border-[#D4AF37] hover:bg-[#1C1C1C] transition-all duration-200 active:scale-95 shadow-md group"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#141414] border border-[#D4AF37]/30 text-zinc-300 hover:text-[#F1D77A] hover:border-[#D4AF37] hover:bg-[#1C1C1C] transition-all duration-200 active:scale-95 shadow-md group"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </AnimateOnView>
        </div>

        {/* Reviews Slider */}
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
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="w-full md:w-1/2 shrink-0 px-3 sm:px-4"
              >
                <div className="h-full bg-[#121212] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/25 hover:border-[#F1D77A]/60 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 group relative">
                  <div>
                    {/* Top Reviewer Meta */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3.5">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#242424] to-[#161616] border border-[#D4AF37]/50 flex items-center justify-center font-bold text-sm text-[#F1D77A] shadow-inner">
                          {review.avatarInitials}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-white text-base">
                              {review.name}
                            </h3>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mt-0.5">
                            {review.isLocalGuide && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#F1D77A] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2 py-0.5 rounded-full">
                                <Award className="w-2.5 h-2.5" />
                                Local Guide
                              </span>
                            )}
                            <span className="text-xs text-zinc-500">
                              {review.timeAgo}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Google G icon indicator */}
                      <div className="p-2 rounded-lg bg-[#181818] border border-zinc-800 shrink-0">
                        <GoogleIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Gold Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <GoldStar key={i} className="w-4 h-4 fill-[#D4AF37]" />
                      ))}
                    </div>

                    {/* Review Body */}
                    <div className="relative mb-6">
                      <Quote className="w-6 h-6 text-[#D4AF37]/20 absolute -top-2 -left-2 -z-0 pointer-events-none" />
                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed relative z-10 italic">
                        "{review.reviewText}"
                      </p>
                    </div>
                  </div>

                  {/* Owner Response Box with Gold Accent */}
                  {review.ownerReply && (
                    <div className="mt-4 p-4 rounded-xl bg-[#161616] border-l-2 border-l-[#D4AF37] border-y border-r border-zinc-800/80">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#F1D77A] mb-1">
                        <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Response from the owner</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 pl-5">
                        {review.ownerReply}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-10">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'w-7 bg-gold-gradient'
                  : 'w-2 bg-zinc-800 hover:bg-zinc-600'
              }`}
              aria-label={`Go to review slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* CTA: View all reviews on Google */}
        <AnimateOnView animation="fade-up" className="text-center">
          <a
            href="https://share.google/qmyEvktKcpqezzQ6o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-[#D4AF37]/50 hover:border-[#F1D77A] text-[#F1D77A] font-semibold text-sm transition-all duration-300 shadow-lg shadow-black/60 hover:shadow-[#D4AF37]/20 group active:scale-95"
          >
            <GoogleIcon className="w-4 h-4" />
            <span>View all reviews on Google</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </AnimateOnView>
      </div>
    </section>
  );
};
