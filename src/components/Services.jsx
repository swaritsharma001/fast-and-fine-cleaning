import useInView from '../hooks/useInView';

const WA_BASE = 'https://wa.me/971528313399?text=';

const SERVICES = [
  {
    title: 'Office Cleaning',
    badge: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    description: 'We support businesses and professional workplaces in maintaining presentable office environments.',
    tasks: [
      'Dusting workstations, desks and furniture',
      'Sweeping, vacuuming and mopping floors',
      'Cleaning pantry areas',
      'Cleaning accessible glass and frequently touched surfaces',
      'Emptying waste bins as agreed',
    ],
  },
  {
    title: 'Residential Cleaning',
    badge: 'Home',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
    description: 'Our residential cleaning service is designed to help maintain a clean and comfortable home environment.',
    tasks: [
      'Living room and bedroom cleaning',
      'Furniture and surface dusting',
      'Sweeping, vacuuming and mopping',
      'Kitchen cleaning',
      'Bathroom and toilet cleaning',
      'Accessible glass cleaning',
    ],
  },
  {
    title: 'School Cleaning',
    badge: 'Education',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    description: 'We provide cleaning support for school environments, with work planned around the school\'s schedule.',
    tasks: [
      'Classroom cleaning',
      'Staff room cleaning',
      'Corridor and staircase cleaning',
      'Washroom cleaning',
      'Waste collection',
      'Shared-area maintenance',
    ],
  },
  {
    title: 'Hospital Cleaning',
    badge: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    description: 'We offer cleaning support for designated areas within healthcare environments, subject to agreed scope.',
    tasks: [
      'Designated office and waiting-area cleaning',
      'Floor and accessible surface cleaning',
      'Washroom cleaning',
      'Approved cleaning products and methods',
      'Following facility hygiene procedures',
    ],
  },
  {
    title: 'Deep Cleaning',
    badge: 'Intensive',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
    description: 'Detailed cleaning solutions for properties requiring more intensive attention beyond routine maintenance.',
    tasks: [
      'Detailed floor cleaning',
      'Kitchen and pantry deep cleaning',
      'Intensive bathroom cleaning',
      'Dust and dirt removal from accessible surfaces',
      'Fixture and furniture cleaning',
    ],
  },
];

function ServiceCard({ service, delay }) {
  const [ref, inView] = useInView();

  const waText = encodeURIComponent(
    `Hello, I'm interested in your ${service.title} service. Could you please provide more information and a quote? Thank you.`
  );

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
      }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100"
    >
      <div className="relative overflow-hidden h-44 sm:h-48">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-green-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {service.badge}
        </span>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-text-dark mb-1.5">{service.title}</h3>
        <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4">{service.description}</p>

        <ul className="space-y-1.5 mb-5 flex-1">
          {service.tasks.slice(0, 4).map((task, i) => (
            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-text-muted">
              <svg className="w-4 h-4 text-green-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{task}</span>
            </li>
          ))}
        </ul>

        <a
          href={`${WA_BASE}${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full text-center bg-green-primary text-white font-bold py-2.5 rounded-full hover:bg-green-dark transition-colors text-sm shadow-sm"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">Our Cleaning Services</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive cleaning solutions tailored to your environment and requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div key={service.title} className={i === 3 ? 'lg:col-start-1' : i === 4 ? 'lg:col-start-2' : ''}>
              <ServiceCard service={service} delay={i * 80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
