import { Trophy, Briefcase, Calendar, Star, Wrench } from 'lucide-react';
import useInView from '../hooks/useInView';

const CARDS = [
  {
    Icon: Trophy,
    title: '13 Years of Experience',
    description: 'Our experience has helped us understand that different properties require different cleaning priorities.',
  },
  {
    Icon: Briefcase,
    title: 'Professional Approach',
    description: 'We communicate clearly, confirm expected tasks in advance, and deliver according to agreed requirements.',
  },
  {
    Icon: Calendar,
    title: 'Flexible Service Plans',
    description: "Cleaning frequency and scope can be discussed to suit the property's needs.",
  },
  {
    Icon: Star,
    title: 'Quality-Focused Service',
    description: 'We value client feedback and aim to address service concerns constructively.',
  },
  {
    Icon: Wrench,
    title: 'Practical Solutions',
    description: 'We clarify priorities, site requirements and suitable arrangements before preparing a quotation.',
  },
];

function WhyCard({ Icon, title, description, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
      }}
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
    >
      <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center mb-4">
        <Icon size={22} className="text-green-primary" />
      </div>
      <h3 className="text-base font-bold text-text-dark mb-2">{title}</h3>
      <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-bg-secondary w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">Why Choose Fast &amp; Fine?</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Professional cleaning delivered with reliability, care, and clear communication.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <div key={card.title} className={i === 3 ? 'lg:col-start-1' : i === 4 ? 'lg:col-start-2' : ''}>
              <WhyCard {...card} delay={i * 80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
