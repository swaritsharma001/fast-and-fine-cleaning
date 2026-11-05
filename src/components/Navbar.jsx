import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const WaIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About Us',       href: '#about' },
  { label: 'Services',       href: '#services' },
  { label: 'Gallery',        href: '#gallery' },
  { label: 'Why Choose Us',  href: '#experience' },
  { label: 'Contact',        href: '#contact' },
  { label: 'Our Clients',    href: '#clients' },
];

const WA_LINK = 'https://wa.me/971528313399';
const PHONE   = 'tel:+971528313399';

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 w-full ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 min-w-0">
            <img
              src="/logo.png"
              alt="Fast & Fine Logo"
              width="40"
              height="40"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-8 sm:h-10 w-auto object-contain flex-shrink-0"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-extrabold text-sm sm:text-base text-green-primary tracking-tight truncate">FAST &amp; FINE</span>
              <span className="text-[10px] sm:text-[11px] text-text-muted font-medium truncate">Housemaid Cleaning Services</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-green-primary ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-green-primary'
                      : 'text-text-dark'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-green-primary text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-green-dark transition-colors shadow-sm"
          >
            <WaIcon size={16} />
            <span>Get a Free Quote</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-text-dark hover:text-green-primary focus:outline-none flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg w-full">
            <ul className="flex flex-col py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-6 py-3 text-sm font-semibold text-text-dark hover:text-green-primary hover:bg-green-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-primary text-white font-bold py-2.5 rounded-full text-sm shadow-sm"
                >
                  <WaIcon size={16} />
                  <span>Get a Free Quote</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Mobile Fixed Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 flex shadow-2xl w-full">
        <a
          href={PHONE}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-text-dark hover:bg-gray-50 transition-colors"
        >
          <Phone size={18} className="text-green-primary" />
          <span>Call Us</span>
        </a>
        <div className="w-px bg-gray-200" />
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold bg-green-primary text-white hover:bg-green-dark transition-colors"
        >
          <WaIcon size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
