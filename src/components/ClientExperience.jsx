import useInView from '../hooks/useInView';

const TRUST_METRICS = [
  { value: '13', label: 'Years Operating' },
  { value: 'Multi', label: 'Service Types' },
  { value: 'AUH', label: 'Abu Dhabi Based' },
  { value: '★', label: 'Client-Focused' },
];

export default function ClientExperience() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">Trusted Cleaning Experience</h2>
        </div>
        <p className="text-center text-text-muted mt-3 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Professional cleaning support for office buildings and real estate businesses.
        </p>

        {/* Partner Cards */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Office Partners */}
          <div
            style={{
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
            }}
            className="bg-green-light rounded-2xl p-6 sm:p-8 border border-green-primary/20 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-green-primary uppercase tracking-widest block mb-0.5">Office Cleaning Partner</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-text-dark">Makateb</h3>
              </div>
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              We have provided cleaning support for office environments operated through Makateb, delivering
              consistent, professional service to maintain workplace presentability. Our team coordinates
              around office schedules to minimise disruption while ensuring every area meets the agreed standard.
            </p>
          </div>

          {/* Real Estate Partners */}
          <div
            style={{
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
            }}
            className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-green-primary/20 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-green-primary uppercase tracking-widest block mb-0.5">Real Estate Cleaning Partner</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-text-dark">Hardhat</h3>
              </div>
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              For Hardhat, we have delivered residential and real estate cleaning support across properties
              in Abu Dhabi. Our services help maintain units in a clean and presentable condition, supporting
              property management needs and ensuring spaces are ready for occupancy or inspection.
            </p>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_METRICS.map((m, i) => (
            <div key={i} className="bg-green-light rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-green-primary mb-1">{m.value}</div>
              <div className="text-xs text-text-muted font-semibold">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
