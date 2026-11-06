import { useState } from 'react';
import useInView from '../hooks/useInView';
import { CheckCircle2, ZoomIn, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/971528313399?text=' + encodeURIComponent("Hello Fast & Fine! I saw your real team gallery photos on your website and would like to book your cleaning services.");

const ALL_PHOTOS = [
  {
    src: '/gallery/real-work-1.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0011.jpg',
    title: 'Professional Uniformed Staff',
    subtitle: 'Trained & Verified Crew on Site',
    badge: 'On-Duty Crew',
    category: 'staff',
    description: 'Our dedicated cleaners in official Fast & Fine uniforms, equipped with industry-grade materials ready for service across Dubai.',
  },
  {
    src: '/gallery/real-work-2.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0012.jpg',
    title: 'Precision Surface Finishing',
    subtitle: 'Glass, Desks & High-Touch Areas',
    badge: 'Live Site',
    category: 'cleaning',
    description: 'Delivering thorough sanitisation and streak-free polishing on office and residential surfaces adhering to high hygiene protocols.',
  },
  {
    src: '/gallery/real-work-3.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0013.jpg',
    title: 'Detailed Room & Floor Care',
    subtitle: 'Deep Mopping, Vacuuming & Sweeping',
    badge: 'Floor Care',
    category: 'deep',
    description: 'Specialized floor scrubbing and stain-removal techniques suited to luxury tiles, hardwood, and commercial flooring in the UAE.',
  },
  {
    src: '/gallery/real-work-4.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0015.jpg',
    title: 'Sanitisation & Disinfection',
    subtitle: 'Washrooms, Kitchens & Pantries',
    badge: 'Sanitised',
    category: 'deep',
    description: 'Intensive bathroom and kitchen cleaning targeting grout, grime, and grease with approved safe disinfectant solutions.',
  },
  {
    src: '/gallery/real-work-5.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0016.jpg',
    title: 'Full-Service Cleaning Team',
    subtitle: 'Ready for Homes, Offices & Schools',
    badge: 'Verified Staff',
    category: 'staff',
    description: 'Punctual, trustworthy team members dedicated to respecting client premises and maintaining immaculate environments.',
  },
  {
    src: '/gallery/real-work-6.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0017.jpg',
    title: 'Furniture & Fixture Detailing',
    subtitle: 'Thorough Dusting & Polish',
    badge: 'Detail Care',
    category: 'cleaning',
    description: 'Handling delicate furniture, cabinets, light fixtures, and appliances with meticulous care and appropriate cleaning agents.',
  },
  {
    src: '/gallery/real-work-7.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0018.jpg',
    title: 'Final Quality Inspection',
    subtitle: 'Spotless Standard Guaranteed',
    badge: 'Quality Checked',
    category: 'cleaning',
    description: 'Every assignment is reviewed before completion to ensure every corner meets Fast & Fine’s 13-year standard of excellence.',
  },
  {
    src: '/gallery/real-work-8.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261106-WA0008.jpg',
    title: 'Luxury Suite Housekeeping',
    subtitle: 'Five-Star Bed Making & Towel Styling',
    badge: 'Housekeeping',
    category: 'housekeeping',
    description: 'Precision bed making with artistic towel swans and immaculate linen preparation for luxury apartments and suites in Dubai.',
  },
  {
    src: '/gallery/real-work-9.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261106-WA0007.jpg',
    title: 'Decorative Bed Presentation',
    subtitle: 'Guest-Ready Bedroom Turn-Down Care',
    badge: 'Turn-Down Care',
    category: 'housekeeping',
    description: 'Specialized bedroom turn-down service, pillow arrangement, and decorative styling ensuring an inviting atmosphere for clients.',
  },
  {
    src: '/gallery/real-work-10.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261106-WA0006.jpg',
    title: 'High-Rise Suite Servicing',
    subtitle: 'Complete Master Suite Clean & Setup',
    badge: 'Luxury Suite',
    category: 'housekeeping',
    description: 'Full residential suite housekeeping, carpet vacuuming, dust removal, and pristine presentation overlooking the Dubai skyline.',
  },
];

const FILTERS = [
  { id: 'all', label: 'All Photos (10)' },
  { id: 'staff', label: 'Our Staff' },
  { id: 'cleaning', label: 'On-Site Work' },
  { id: 'housekeeping', label: 'Housekeeping' },
  { id: 'deep', label: 'Deep Cleaning' },
];

export default function OurGallery() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredPhotos = selectedFilter === 'all'
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter((p) => p.category === selectedFilter);

  const openLightbox = (photo) => {
    const idx = ALL_PHOTOS.findIndex((p) => p.src === photo.src);
    setCurrentIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = () => setCurrentIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : ALL_PHOTOS.length - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < ALL_PHOTOS.length - 1 ? prev + 1 : 0));
  };

  const activePhoto = currentIndex !== null ? ALL_PHOTOS[currentIndex] : null;

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-green-light text-green-primary text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-green-primary/20 mb-3">
            <Sparkles size={14} className="text-green-primary animate-pulse" />
            <span>Real Team &amp; On-Site Photos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark tracking-tight">
            Our Gallery
          </h2>
          <p className="text-text-muted mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Authentic photos of our uniformed, verified cleaning staff and on-site assignments across Dubai &amp; the UAE.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-green-primary text-white shadow-md scale-105'
                    : 'bg-bg-secondary text-text-muted hover:text-green-primary border border-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Photo Grid (1 col on mobile, 2 on tablet, 3 or 4 on desktop) */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPhotos.map((item, idx) => (
            <div
              key={item.src}
              style={{
                transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
              }}
              className="bg-bg-secondary rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div
                className="relative overflow-hidden cursor-pointer bg-gray-100 aspect-[3/4]"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    if (e.target.src !== item.fallbackSrc) {
                      e.target.src = item.fallbackSrc;
                    }
                  }}
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-green-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    <CheckCircle2 size={12} />
                    {item.badge}
                  </span>
                </div>

                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <span className="bg-white/95 text-text-dark text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn size={14} className="text-green-primary" />
                    Enlarge Photo
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-base font-extrabold text-text-dark mb-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-green-primary font-semibold text-xs mb-2 line-clamp-1">
                    {item.subtitle}
                  </p>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                    Fast &amp; Fine UAE
                  </span>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-green-primary hover:text-green-dark hover:underline flex items-center gap-1"
                  >
                    Book Crew &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom WhatsApp CTA Card */}
        <div className="mt-12 text-center max-w-3xl mx-auto bg-green-light/70 rounded-3xl p-6 sm:p-8 border border-green-primary/25 shadow-sm">
          <h3 className="text-text-dark font-extrabold text-base sm:text-lg mb-2">
            Need Reliable Cleaners in Dubai or Across UAE?
          </h3>
          <p className="text-text-muted text-xs sm:text-sm max-w-xl mx-auto mb-5">
            Book our trained, uniformed team for daily, weekly, or one-off deep cleaning visits. We coordinate around your schedule.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-primary text-white font-bold px-7 py-3 rounded-full hover:bg-green-dark transition-colors shadow-md text-xs sm:text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
            </svg>
            Book via WhatsApp: +971 52 831 3399
          </a>
        </div>
      </div>

      {/* Lightbox Modal with Next / Prev */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Prev / Next buttons */}
            <button
              onClick={showPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-green-primary flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={showNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-green-primary flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>

            {/* Photo viewport */}
            <div className="max-h-[68vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full max-h-[68vh] object-contain"
                onError={(e) => {
                  if (e.target.src !== activePhoto.fallbackSrc) {
                    e.target.src = activePhoto.fallbackSrc;
                  }
                }}
              />
            </div>

            {/* Photo metadata footer */}
            <div className="p-4 sm:p-5 bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <span className="bg-green-primary text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  {activePhoto.badge}
                </span>
                <span className="text-text-muted text-xs font-semibold">
                  Photo {currentIndex + 1} of {ALL_PHOTOS.length}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-text-dark">{activePhoto.title}</h4>
              <p className="text-text-muted text-xs mt-1">{activePhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
