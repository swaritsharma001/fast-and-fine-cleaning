import useInView from '../hooks/useInView';

const VALUES = [
  'Reliability',
  'Attention to Detail',
  'Clear Communication',
  'Flexibility',
  'Respect for Premises',
];

export default function About() {
  const [refLeft, inViewLeft]   = useInView();
  const [refRight, inViewRight] = useInView();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-bg-secondary w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">
            A Trusted Cleaning Partner
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Over 13 years of professional cleaning in Abu Dhabi, UAE.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Description */}
          <div
            ref={refLeft}
            style={{
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              opacity: inViewLeft ? 1 : 0,
              transform: inViewLeft ? 'translateY(0)' : 'translateY(24px)',
            }}
            className="space-y-4"
          >
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Fast &amp; Fine Housemaid Cleaning Services has been operating in Abu Dhabi, UAE for over 13 years.
              Throughout this time, we have developed a practical understanding of what different properties require —
              and how to deliver cleaning services that reflect each client&apos;s expectations.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Before confirming any service, we take time to understand the site&apos;s priorities, confirm the areas
              to be covered, clarify the desired frequency, and discuss access requirements. This allows us to prepare
              a realistic and accurate service proposal.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Our services cover a range of environments including offices, residential properties, schools, healthcare
              facilities, and properties requiring deeper, more intensive cleaning. Each service is carried out according
              to an agreed scope, using appropriate cleaning methods and products for the surfaces and environment involved.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              We value clear communication, respect for client premises, and a consistent, professional approach to
              every assignment.
            </p>

            {/* Values */}
            <div className="pt-4">
              <p className="text-sm font-bold text-text-dark mb-3">Our Core Values</p>
              <div className="flex flex-wrap gap-2">
                {VALUES.map((v) => (
                  <span
                    key={v}
                    className="border border-green-primary text-green-primary text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-green-light/50"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Mission + Vision */}
          <div
            ref={refRight}
            style={{
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              opacity: inViewRight ? 1 : 0,
              transform: inViewRight ? 'translateY(0)' : 'translateY(24px)',
            }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="bg-green-primary rounded-2xl p-5 sm:p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                To provide dependable, professional cleaning services that meet the specific needs of each client —
                communicated clearly, delivered consistently, and carried out with full respect for the property
                and its occupants.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border-2 border-green-primary/20 rounded-2xl p-5 sm:p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-dark">Our Vision</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                To be the most trusted cleaning service provider in Abu Dhabi — recognised for reliability,
                transparency, and a practical, client-focused approach across every environment we serve.
              </p>
            </div>

            {/* Stats mini */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-light rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-green-primary">13+</div>
                <div className="text-xs text-text-muted font-medium mt-1">Years Operating</div>
              </div>
              <div className="bg-green-light rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-green-primary">5</div>
                <div className="text-xs text-text-muted font-medium mt-1">Service Types</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
