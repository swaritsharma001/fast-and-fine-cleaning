import { useState } from 'react';
import useInView from '../hooks/useInView';
import { CheckCircle2, ZoomIn, X, Sparkles } from 'lucide-react';

const WA_LINK = 'https://wa.me/971528313399?text=' + encodeURIComponent("Hello Fast & Fine! I saw your real team gallery photos on your website and would like to book your cleaning services.");

const PHOTOS = [
  {
    src: '/gallery/real-work-1.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0011.jpg',
    title: 'Professional Uniformed Staff',
    subtitle: 'Trained & Verified Cleaning Crew on Site',
    badge: 'Real Team on Duty',
    description: 'Our dedicated staff in official Fast & Fine uniform, equipped with professional-grade cleaning tools and materials ready to deliver spotless results.',
  },
  {
    src: '/gallery/real-work-2.jpg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/IMG-20261105-WA0012.jpg',
    title: 'Precision On-Site Service',
    subtitle: 'Commercial & Residential Excellence',
    badge: 'Live Site Execution',
    description: 'Delivering meticulous cleaning across client premises in Dubai and UAE, adhering to strict hygiene protocols and safety guidelines.',
  },
];

export default function OurGallery() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-green-light text-green-primary text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-green-primary/20 mb-3">
            <Sparkles size={14} className="text-green-primary animate-pulse" />
            <span>Real Team &amp; Live Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark tracking-tight">
            Our Gallery
          </h2>
          <p className="text-text-muted mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            See our real, dedicated team in action. Uniformed, verified, and equipped to handle every property with care across Dubai &amp; the UAE.
          </p>
        </div>

        {/* 2-Column Real Photos Showcase */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
        >
          {PHOTOS.map((item, idx) => (
            <div
              key={idx}
              style={{
                transition: `opacity 0.7s ease ${idx * 150}ms, transform 0.7s ease ${idx * 150}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
              }}
              className="bg-bg-secondary rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo Container */}
              <div
                className="relative overflow-hidden cursor-pointer bg-gray-100 aspect-[3/4] sm:aspect-[4/5]"
                onClick={() => setActiveImage(item)}
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
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-green-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                    <CheckCircle2 size={13} />
                    {item.badge}
                  </span>
                </div>

                {/* Zoom button on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-text-dark text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn size={16} className="text-green-primary" />
                    Click to View Full Photo
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-green-primary font-semibold text-xs sm:text-sm mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                    Fast &amp; Fine Cleaning Team
                  </span>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-green-primary hover:text-green-dark hover:underline flex items-center gap-1"
                  >
                    Book This Crew &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center max-w-2xl mx-auto bg-green-light/60 rounded-2xl p-6 border border-green-primary/20">
          <p className="text-text-dark font-bold text-sm sm:text-base mb-2">
            Want reliable, trusted cleaners for your home or workplace?
          </p>
          <p className="text-text-muted text-xs sm:text-sm mb-4">
            Our teams are available across Dubai and UAE with flexible daily, weekly, or deep cleaning schedules.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-primary text-white font-bold px-6 py-2.5 rounded-full hover:bg-green-dark transition-colors shadow-md text-xs sm:text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
            </svg>
            Enquire About Our Staff on WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full max-h-[75vh] object-contain"
                onError={(e) => {
                  if (e.target.src !== activeImage.fallbackSrc) {
                    e.target.src = activeImage.fallbackSrc;
                  }
                }}
              />
            </div>
            <div className="p-5 sm:p-6 bg-white">
              <div className="inline-block bg-green-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                {activeImage.badge}
              </div>
              <h4 className="text-lg font-extrabold text-text-dark">{activeImage.title}</h4>
              <p className="text-text-muted text-xs sm:text-sm mt-1">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
