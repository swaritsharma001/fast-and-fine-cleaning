import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About Us',       href: '#about' },
  { label: 'Services',       href: '#services' },
  { label: 'Our Gallery',    href: '#gallery' },
  { label: 'Why Choose Us',  href: '#experience' },
  { label: 'Contact',        href: '#contact' },
  { label: 'Our Clients',    href: '#clients' },
];

const SERVICES = [
  'Office Cleaning',
  'Residential Cleaning',
  'School Cleaning',
  'Hospital Cleaning',
  'Deep Cleaning',
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-text-dark text-white pt-12 sm:pt-14 pb-24 lg:pb-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Fast & Fine Logo"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="text-base font-extrabold text-green-primary">FAST &amp; FINE</div>
                <div className="text-xs text-white/60 font-medium">Housemaid Cleaning Services</div>
              </div>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Professional housemaid cleaning services in Dubai, UAE — trusted for over 13 years.
            </p>
            <a
              href="https://wa.me/971528313399"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-primary text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full hover:bg-green-dark transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/80 mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-white/60 text-xs sm:text-sm hover:text-green-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/80 mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => scrollTo(e, '#services')}
                    className="text-white/60 text-xs sm:text-sm hover:text-green-primary transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/80 mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+971528313399" className="flex items-start gap-2 text-white/60 text-xs sm:text-sm hover:text-green-primary transition-colors">
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  <span>+971 52 831 3399</span>
                </a>
              </li>
              <li>
                <a href="mailto:rajeena@fastandfineuae.com" className="flex items-start gap-2 text-white/60 text-xs sm:text-sm hover:text-green-primary transition-colors break-all">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  <span>rajeena@fastandfineuae.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-xs sm:text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                <span>Office 24, Bin Thani Residence, Al Qusais, Near to Al Twar Center, Dubai, UAE</span>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/f7yy8LMME6euBZa77?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-green-primary text-xs sm:text-sm hover:underline"
                >
                  <ExternalLink size={13} />
                  <span>View on Google Maps</span>
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/E1MiZojIG3OOEI7a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-green-primary text-xs sm:text-sm hover:underline"
                >
                  <ExternalLink size={13} />
                  <span>Google Business Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-white/40 text-xs space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Fast &amp; Fine Housemaid Cleaning Services. Dubai, UAE. All rights reserved.
          </p>
          <p className="text-white/60 text-xs">
            Made and Managed by{' '}
            <a
              href="https://www.ujjwals.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-primary hover:text-white font-semibold transition-colors underline underline-offset-2"
            >
              Team NovaLabs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
