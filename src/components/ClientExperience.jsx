import useInView from '../hooks/useInView';
import { Building2, Home, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const OFFICE_PARTNERS = [
  {
    num: '01',
    name: 'Sultan Group Investment Building',
    type: 'Commercial Office Tower',
    role: 'Comprehensive workplace cleaning & ongoing maintenance',
  },
  {
    num: '02',
    name: 'Makateb Building',
    type: 'Business Center & Executive Suites',
    role: 'Office sanitation, glass partition care & common area servicing',
  },
  {
    num: '03',
    name: 'Sultan Business Center',
    type: 'Corporate Workplace Hub',
    role: 'Scheduled office cleaning & daily hygiene support',
  },
];

const REAL_ESTATE_PARTNERS = [
  {
    num: '01',
    name: 'Hardhat Real Estate Brokers',
    type: 'Move-in & Move-out Specialist',
    role: 'Turnover cleaning, unit preparation & inspection-ready deep cleans',
  },
  {
    num: '02',
    name: 'Property Solvers Real Estate Brokers',
    type: 'Property Brokerage Partner',
    role: 'Apartment turnover cleaning & move-in sanitation for tenants',
  },
  {
    num: '03',
    name: 'Homes 4 All Real Estate Brokers',
    type: 'Residential Brokerage Partner',
    role: 'Move-in & move-out apartment deep cleaning & surface disinfection',
  },
  {
    num: '04',
    name: 'Arch Home Real Estate Brokers',
    type: 'Real Estate Agency Partner',
    role: 'Tenant transition cleaning, kitchen/bath deep care & property readiness',
  },
];

const TRUST_METRICS = [
  { value: '13+', label: 'Years of Experience' },
  { value: '7+', label: 'Flagship Partners' },
  { value: 'DXB', label: 'Dubai & UAE Based' },
  { value: '100%', label: 'Client-Focused Care' },
];

export default function ClientExperience() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-green-light text-green-primary text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-green-primary/20 mb-3">
            <Sparkles size={14} className="text-green-primary" />
            <span>Clients &amp; Service Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark tracking-tight">
            Trusted Cleaning Partners
          </h2>
          <p className="text-text-muted mt-3 mb-2 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Fast and Fine Housemaid Cleaning Service is pleased to highlight our cleaning-service experience with the following premier office buildings and leading real estate businesses.
          </p>
        </div>

        {/* 2 Major Columns: Office Cleaning & Move-in/Move-out */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {/* COLUMN 1: Office Cleaning Partnership */}
          <div
            style={{
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
            }}
            className="bg-bg-secondary rounded-3xl p-6 sm:p-8 border border-green-primary/20 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Category Title */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-green-primary text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-green-primary uppercase tracking-widest block">
                    Corporate Partnerships
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-dark">
                    Office Cleaning Partnership
                  </h3>
                </div>
              </div>

              <p className="text-text-muted text-xs sm:text-sm mb-6 leading-relaxed">
                Official cleaning partner for offices in <span className="font-bold text-text-dark">Sultan Real Estate</span>:
              </p>

              {/* Partners List */}
              <div className="space-y-3.5">
                {OFFICE_PARTNERS.map((partner) => (
                  <div
                    key={partner.num}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-sm hover:border-green-primary/40 hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-green-light text-green-primary font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-primary/20">
                      {partner.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm sm:text-base font-extrabold text-text-dark">
                          {partner.name}
                        </h4>
                        <span className="text-[10px] font-semibold bg-gray-100 text-text-muted px-2 py-0.5 rounded-md">
                          {partner.type}
                        </span>
                      </div>
                      <p className="text-text-muted text-xs mt-1 leading-relaxed">
                        {partner.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center gap-2 text-xs text-text-muted">
              <CheckCircle2 size={16} className="text-green-primary flex-shrink-0" />
              <span>Tailored scheduling around corporate hours with zero workplace disruption.</span>
            </div>
          </div>

          {/* COLUMN 2: Move-In & Move-Out Apartment Cleaning */}
          <div
            style={{
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
            }}
            className="bg-bg-secondary rounded-3xl p-6 sm:p-8 border border-green-primary/20 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Category Title */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-green-dark text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Home size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-green-primary uppercase tracking-widest block">
                    Real Estate &amp; Brokerage
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-dark">
                    Move-In &amp; Move-Out Cleaning
                  </h3>
                </div>
              </div>

              <p className="text-text-muted text-xs sm:text-sm mb-6 leading-relaxed">
                Move-in and move-out apartment cleaning services for the following <span className="font-bold text-text-dark">real estate brokers</span>:
              </p>

              {/* Partners List */}
              <div className="space-y-3.5">
                {REAL_ESTATE_PARTNERS.map((partner) => (
                  <div
                    key={partner.num}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-sm hover:border-green-primary/40 hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-green-light text-green-primary font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-primary/20">
                      {partner.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm sm:text-base font-extrabold text-text-dark">
                          {partner.name}
                        </h4>
                        <span className="text-[10px] font-semibold bg-gray-100 text-text-muted px-2 py-0.5 rounded-md">
                          {partner.type}
                        </span>
                      </div>
                      <p className="text-text-muted text-xs mt-1 leading-relaxed">
                        {partner.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center gap-2 text-xs text-text-muted">
              <CheckCircle2 size={16} className="text-green-primary flex-shrink-0" />
              <span>Full handover and move-in ready certifications for real estate property managers.</span>
            </div>
          </div>
        </div>

        {/* Commitment Banner (from official brochure) */}
        <div className="bg-gradient-to-br from-green-dark to-[#0B4628] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12 sm:mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-3.5 py-1 rounded-full mb-3 backdrop-blur-sm">
              <ShieldCheck size={14} />
              <span>Our Commitment to Every Client</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3 leading-snug">
              Delivering with Care, Professionalism &amp; Precision
            </h3>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6">
              &ldquo;We value the trust placed in us and aim to provide cleaning services with care, professionalism and attention to the agreed requirements of each property. The scope, schedule and specific tasks are confirmed with the client before service delivery.&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0" />
                <span>13 Years of Cleaning Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0" />
                <span>Professional Cleaning Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0" />
                <span>Client-Focused Care &amp; Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_METRICS.map((m, i) => (
            <div key={i} className="bg-green-light/70 rounded-2xl p-4 sm:p-5 text-center border border-green-primary/15 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-green-primary mb-1">{m.value}</div>
              <div className="text-xs sm:text-sm text-text-muted font-semibold">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
