import useInView from '../hooks/useInView';

const WA_LINK = 'https://wa.me/971528313399';

const WaIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
  </svg>
);

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex items-center bg-gradient-to-br from-white via-green-light/30 to-green-light/60 pt-24 pb-20 lg:pt-28 lg:pb-24 min-h-[90vh]"
    >
      <div
        ref={ref}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16"
      >
        {/* ── LEFT TEXT ── */}
        <div
          className="flex-1 space-y-5"
          style={{
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-primary/10 text-green-primary text-xs font-bold px-3.5 py-1.5 rounded-full border border-green-primary/20">
            <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse inline-block flex-shrink-0" />
            <span>Dubai &amp; UAE&apos;s Trusted Cleaning Partner</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-text-dark leading-tight tracking-tight">
            13 Years of{' '}
            <span className="text-green-primary">Cleaning Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl font-semibold text-text-muted">
            Professional Cleaning. Exceptional Service.
          </p>

          {/* Body */}
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-lg">
            Your trusted housemaid cleaning service based in Dubai, UAE. Delivering dependable,
            professional results for offices, homes, schools, healthcare facilities, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-primary text-white font-bold px-6 py-3 rounded-full hover:bg-green-dark transition-colors shadow-lg text-sm cursor-pointer"
            >
              <WaIcon />
              <span>Get a Free Quote</span>
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border-2 border-green-primary text-green-primary font-bold px-6 py-3 rounded-full hover:bg-green-primary hover:text-white transition-colors text-sm cursor-pointer"
            >
              View Our Services
            </a>
          </div>

          {/* Stat Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['13+ Years Experience', '5 Service Categories', 'Client-Focused Care'].map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center gap-2 bg-white border border-green-primary/20 text-text-dark text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0" />
                <span>{stat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div
          className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto"
          style={{
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* 13 Years badge */}
          <div className="absolute top-3 right-3 z-10 bg-white rounded-full p-2.5 shadow-lg border-2 border-green-primary/20">
            <div className="text-center px-1">
              <div className="text-xl font-extrabold text-green-primary leading-none">13</div>
              <div className="text-[10px] text-text-muted font-semibold leading-tight">Years<br/>Exp.</div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <img
              src="/hero-image.jpg"
              alt="Fast & Fine Housemaid Cleaning Services Team on Site"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-64 sm:h-80 lg:h-[480px] object-cover object-center"
              onError={(e) => {
                if (e.target.src !== 'https://images.mintgram.live/fast%20and%20fine/IMG_20261105_192911.jpg') {
                  e.target.src = 'https://images.mintgram.live/fast%20and%20fine/IMG_20261105_192911.jpg';
                }
              }}
            />
            {/* Overlay card */}
            <div className="absolute bottom-3 left-3 right-3 bg-green-primary/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-xs sm:text-sm">Trusted Since 2013</p>
                  <p className="text-white/80 text-[11px] sm:text-xs mt-0.5 leading-snug">
                    Over a decade of professional cleaning experience across Dubai and the UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
