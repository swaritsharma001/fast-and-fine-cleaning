import useInView from '../hooks/useInView';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=80',
    label: 'Professional Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
    label: 'Residential Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    label: 'Deep Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
    label: 'Thorough Sanitisation',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    label: 'Kitchen Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    label: 'Office Cleaning',
  },
];

function GalleryItem({ src, label, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.96)',
      }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        className="w-full h-48 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-primary/0 group-hover:bg-green-primary/60 transition-all duration-300 flex items-center justify-center">
        <span className="text-white font-bold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {IMAGES.map((img, i) => (
            <GalleryItem key={i} src={img.src} label={img.label} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
