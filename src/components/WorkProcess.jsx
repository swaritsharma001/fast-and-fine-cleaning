import useInView from '../hooks/useInView';

const STEPS = [
  {
    num: '01',
    title: 'SITE REVIEW',
    description: 'Understand the property, cleaning priorities, access requirements and desired frequency.',
  },
  {
    num: '02',
    title: 'SERVICE PROPOSAL',
    description: 'Confirm the scope of work and prepare a quotation.',
  },
  {
    num: '03',
    title: 'SCHEDULING',
    description: 'Coordinate service timing, manpower and materials.',
  },
  {
    num: '04',
    title: 'SERVICE DELIVERY',
    description: 'Carry out cleaning tasks according to the approved scope.',
  },
  {
    num: '05',
    title: 'FEEDBACK & FOLLOW-UP',
    description: 'Receive client feedback and address concerns practically.',
  },
];

export default function WorkProcess() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">Our Working Process</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            A clear, structured approach from initial review to service completion.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div
          ref={ref}
          className="hidden lg:flex items-start gap-0 relative"
        >
          {/* Connecting line */}
          <div className="absolute top-6 left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-green-primary/20" />

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="flex-1 flex flex-col items-center text-center px-4"
              style={{
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              {/* Circle */}
              <div className="w-12 h-12 rounded-full bg-green-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md relative z-10 mb-4">
                {step.num}
              </div>
              <h4 className="text-sm font-extrabold text-green-primary mb-2 tracking-wide">{step.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-0 max-w-md mx-auto">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              {/* Left: circle + line */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-primary text-white font-extrabold text-xs sm:text-sm flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 bg-green-primary/20 my-2 min-h-[2rem]" />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-6 pt-0.5 flex-1">
                <h4 className="text-sm font-extrabold text-green-primary mb-1 tracking-wide">{step.title}</h4>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
