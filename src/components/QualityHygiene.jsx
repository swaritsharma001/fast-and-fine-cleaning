import useInView from '../hooks/useInView';

const BULLETS = [
  'Suitable cleaning products for relevant surfaces',
  'Safe chemical-handling practices',
  'Appropriate cleaning tools and methods',
  'Respect for client property',
  'Facility-specific hygiene and infection-control procedures',
  'Clear communication regarding service concerns',
];

export default function QualityHygiene() {
  const [refLeft, inViewLeft]   = useInView();
  const [refRight, inViewRight] = useInView();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">Quality, Safety &amp; Hygiene</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Our commitment to safe, effective cleaning every time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div
            ref={refLeft}
            style={{
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              opacity: inViewLeft ? 1 : 0,
              transform: inViewLeft ? 'translateY(0)' : 'translateY(24px)',
            }}
            className="space-y-6"
          >
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Maintaining appropriate hygiene standards is a core part of how we operate. We use cleaning
              products and methods suited to the specific surfaces and environments we work in, following
              relevant facility procedures where required.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Our team is mindful of safe chemical-handling practices and treats all client property with
              care and respect throughout the cleaning process.
            </p>

            <ul className="space-y-3 mt-4">
              {BULLETS.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-muted text-xs sm:text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div
            ref={refRight}
            style={{
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              opacity: inViewRight ? 1 : 0,
              transform: inViewRight ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            <div className="bg-green-primary rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80"
                alt="Hygiene and cleaning standards"
                loading="lazy"
                className="w-full h-48 sm:h-56 object-cover opacity-80"
              />
              <div className="p-5 sm:p-6">
                <blockquote className="text-white text-sm sm:text-base font-medium leading-relaxed italic">
                  &ldquo;We use the right products, the right methods, and treat every property with
                  the same standard of care — regardless of size or type.&rdquo;
                </blockquote>
                <p className="text-white/70 text-xs sm:text-sm mt-3 font-semibold">— Fast &amp; Fine Cleaning Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
