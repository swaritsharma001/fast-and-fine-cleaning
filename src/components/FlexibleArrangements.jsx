import useInView from '../hooks/useInView';

const WA_LINK = 'https://wa.me/971528313399?text=' + encodeURIComponent("Hello, I'd like to discuss my cleaning requirements with Fast & Fine. Could you please help me?");

const ARRANGEMENTS = [
  { emoji: '🌅', title: 'Daily Cleaning',                desc: 'Regular daily service for high-footfall environments.' },
  { emoji: '📅', title: 'Multiple Weekly Visits',        desc: 'Flexible multi-visit scheduling throughout the week.' },
  { emoji: '🗓️', title: 'Weekly Cleaning',               desc: 'Consistent weekly maintenance for homes and offices.' },
  { emoji: '⏱️', title: 'Periodic Cleaning',             desc: 'Scheduled service at agreed intervals.' },
  { emoji: '🔍', title: 'Scheduled Deep Cleaning',       desc: 'Intensive cleaning sessions planned in advance.' },
  { emoji: '⚙️', title: 'Customised Cleaning Schedules', desc: 'Tailored plans built around your specific requirements.' },
];

export default function FlexibleArrangements() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-bg-secondary w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">Flexible Cleaning Arrangements</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We work with you to find the right schedule and service scope for your property.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {ARRANGEMENTS.map((item, i) => (
            <div
              key={item.title}
              style={{
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
              }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex gap-4 items-start"
            >
              <span className="text-2xl sm:text-3xl flex-shrink-0">{item.emoji}</span>
              <div>
                <h3 className="font-bold text-text-dark text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs sm:text-sm text-text-muted italic mb-8 max-w-2xl mx-auto">
          Final availability, pricing, manpower, visit duration and service inclusions are confirmed individually for each client.
        </p>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-primary text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-green-dark transition-colors shadow-lg text-sm sm:text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
            </svg>
            Discuss Your Cleaning Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
