import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, X, ZoomIn, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimateOnView } from './AnimateOnView';

export const BranchGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: '/gallery/interior-kandura.jpg',
      title: 'Kandura & Garment Care Station',
      category: 'Shop Interior',
      description: 'Pristine rows of freshly washed and steamed white Kanduras, silk dresses, and custom Shamsa Laundry packaging with gold-lit pillars.',
      badge: 'Signature Care',
    },
    {
      id: 2,
      src: '/gallery/gallery-2.jpg',
      title: 'Authentic Shamsa Laundry Garment Tags',
      category: 'Quality Assurance',
      description: 'Official Shamsa Laundry (مغسلة شمسة) boutique tags ensuring garment tracking, individual care instructions, and delicate fabric handling.',
      badge: 'Verified Care',
    },
    {
      id: 3,
      src: '/gallery/storefront.jpg',
      title: 'Aswaq Mall Branch Location',
      category: 'Dubai Location',
      description: 'Conveniently located at Aswaq Mall, Al Warqa 3, Dubai. Easy parking, express drop-off, and rapid delivery fleet dispatch.',
      badge: 'Al Warqa 3',
    },
    {
      id: 4,
      src: '/gallery/gallery-3.jpg',
      title: 'Footwear & Steam Press Station',
      category: 'Specialist Detail',
      description: 'Dedicated luxury sneaker detailing shelves and professional steam pressing for crisp pleats and wrinkle-free finishing.',
      badge: 'Shoe Detailing',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-zinc-900">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F1D77A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnView animation="fade-down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#F1D77A] uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
              Real Business Photos
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Inside Our <span className="text-gold-gradient">Dubai Branch</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Explore authentic photos from our location at Aswaq Mall, Al Warqa 3. See our illuminated gold boutique setup, clean processing areas, and meticulous garment packaging.
            </p>
          </AnimateOnView>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <AnimateOnView
              key={item.id}
              animation="fade-up"
              delay={idx * 120}
              className="h-full"
            >
              <div
                onClick={() => setSelectedImage(item)}
                className="group relative h-full bg-[#121212] rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#F1D77A]/70 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/15 hover:-translate-y-1.5 cursor-pointer flex flex-col"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black/60">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-semibold text-[#F1D77A] uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Zoom hint on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/70 backdrop-blur-md text-[#F1D77A] border border-[#D4AF37]/40">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[11px] text-[#F1D77A] uppercase font-semibold tracking-wider">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#F1D77A] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Caption / Description */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#141414] border-t border-zinc-800">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-[#D4AF37] font-medium">
                    <span>View photo</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>

        {/* Aswaq Mall Location Banner */}
        <AnimateOnView animation="fade-up" delay={500} className="mt-12">
          <div className="bg-gradient-to-r from-[#161616] via-[#1A1A1A] to-[#161616] rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/35 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Visit Us at Aswaq Mall &ndash; Al Warqa 3, Dubai
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Direct storefront access with ample mall parking. Free home pickup &amp; delivery across all Dubai neighborhoods.
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/Dixry54oc4XYahV86?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gold-gradient text-black font-semibold text-xs sm:text-sm shadow-lg shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2 btn-shimmer"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimateOnView>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl animate-hero-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 border border-[#D4AF37]/50 text-white hover:text-[#F1D77A] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-[#161616] border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F1D77A]">
                  {selectedImage.category} &bull; {selectedImage.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                  {selectedImage.description}
                </p>
              </div>

              <a
                href="https://wa.me/971522256627?text=Hello%20Shamsa%20Laundry%20Dubai%2C%20I%20saw%20your%20branch%20photos%20and%20would%20like%20to%20order%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-gold-gradient text-black font-semibold text-xs shadow-md shrink-0 flex items-center gap-2 btn-shimmer active:scale-95"
              >
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
