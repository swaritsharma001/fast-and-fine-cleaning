import useInView from '../hooks/useInView';

const IMAGES = [
  {
    src: '/gallery/photo-cleanroom.jpeg',
    fallbackSrc: 'https://images.mintgram.live/fast%20and%20fine/photo-1669101602124-f5b78895d91c.jpeg',
    label: 'Sterile Facility & Floor Sanitisation',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?w=1200&auto=format&fit=crop&q=80',
    label: 'Office & Workplace Care',
  },
  {
    src: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?w=1200&auto=format&fit=crop&q=80',
    label: 'Residential Cleaning Excellence',
  },
  {
    src: 'https://images.unsplash.com/photo-1781637590564-01c65dbf2039?w=1200&auto=format&fit=crop&q=80',
    label: 'Glass & Surface Finishing',
  },
  {
    src: 'https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?w=1200&auto=format&fit=crop&q=80',
    label: 'Deep Cleaning & Sanitisation',
  },
];

function GalleryItem({ src, fallbackSrc, label, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.96)',
      }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md bg-gray-100 h-full"
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        className="w-full h-52 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          if (fallbackSrc && e.target.src !== fallbackSrc) {
            e.target.src = fallbackSrc;
          }
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-primary/0 group-hover:bg-green-primary/70 transition-all duration-300 flex items-center justify-center p-4">
        <span className="text-white font-bold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg-secondary w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">A Clear, Professional Finish</h2>
          <p className="text-text-muted mt-3 text-sm sm:text-base font-medium">Our Work in Action</p>
        </div>

        {/* 5-Image Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <GalleryItem src={IMAGES[0].src} fallbackSrc={IMAGES[0].fallbackSrc} label={IMAGES[0].label} delay={0} />
          </div>
          <div className="lg:col-span-2">
            <GalleryItem src={IMAGES[1].src} label={IMAGES[1].label} delay={80} />
          </div>
          <div className="lg:col-span-2">
            <GalleryItem src={IMAGES[2].src} label={IMAGES[2].label} delay={160} />
          </div>
          <div className="sm:col-span-1 lg:col-span-3">
            <GalleryItem src={IMAGES[3].src} label={IMAGES[3].label} delay={240} />
          </div>
          <div className="sm:col-span-1 lg:col-span-3">
            <GalleryItem src={IMAGES[4].src} label={IMAGES[4].label} delay={320} />
          </div>
        </div>
      </div>
    </section>
  );
}
