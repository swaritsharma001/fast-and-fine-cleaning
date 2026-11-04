import { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const SERVICES_LIST = [
  'Office Cleaning',
  'Residential Cleaning',
  'School Cleaning',
  'Hospital Cleaning',
  'Deep Cleaning',
  'Other',
];

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  service: '',
  propertyType: '',
  message: '',
};

export default function Contact() {
  const [form, setForm]     = useState(INITIAL);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Full name is required.';
    if (!form.phone.trim())   errs.phone   = 'Phone number is required.';
    if (!form.service)        errs.service = 'Please select a service.';
    if (!form.message.trim()) errs.message = 'Please add a message.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const text = [
      '👋 Hello, Fast & Fine Cleaning Services!',
      '',
      `📌 *Enquiry Details*`,
      `• Name: ${form.name}`,
      `• Phone: ${form.phone}`,
      form.email ? `• Email: ${form.email}` : null,
      `• Service Required: ${form.service}`,
      form.propertyType ? `• Property Type: ${form.propertyType}` : null,
      '',
      `💬 *Message:*`,
      form.message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    window.open(
      `https://wa.me/971528313399?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-text-dark bg-white focus:outline-none focus:ring-2 focus:ring-green-primary transition-all ${
      errors[field] ? 'border-red-400 ring-1 ring-red-300' : 'border-gray-200 hover:border-green-primary/40'
    }`;

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-bg-secondary w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="section-divider" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark">Contact Us</h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Get in touch to discuss your cleaning requirements. We&apos;ll respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md space-y-4 sm:space-y-5 border border-gray-100">
              {/* Phone */}
              <a href="tel:+971528313399" className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-green-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-primary transition-colors">
                  <Phone size={18} className="text-green-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="font-bold text-text-dark text-sm sm:text-base">+971 52 831 3399</p>
                </div>
              </a>

              <div className="border-t border-gray-100" />

              {/* WhatsApp */}
              <a href="https://wa.me/971528313399" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-green-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-primary transition-colors">
                  <svg className="w-5 h-5 text-green-primary group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-0.5">WhatsApp</p>
                  <p className="font-bold text-text-dark text-sm sm:text-base">+971 52 831 3399</p>
                </div>
              </a>

              <div className="border-t border-gray-100" />

              {/* Email */}
              <a href="mailto:rajeena@fastandfineuae.com" className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-green-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-primary transition-colors">
                  <Mail size={18} className="text-green-primary group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-bold text-text-dark text-xs sm:text-sm truncate">rajeena@fastandfineuae.com</p>
                </div>
              </a>

              <div className="border-t border-gray-100" />

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-green-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-0.5">Location</p>
                  <p className="font-bold text-text-dark text-sm sm:text-base">
                    Office 24, Bin Thani Residence, Al Qusais
                  </p>
                  <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                    Near to Al Twar Center, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Map & Business Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://maps.app.goo.gl/f7yy8LMME6euBZa77?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white border border-green-primary/30 text-green-primary font-bold py-3 px-4 rounded-xl hover:bg-green-light transition-colors text-sm shadow-sm"
              >
                <MapPin size={16} />
                <span>Google Maps</span>
                <ExternalLink size={13} />
              </a>
              <a
                href="https://share.google/E1MiZojIG3OOEI7a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white border border-green-primary/30 text-green-primary font-bold py-3 px-4 rounded-xl hover:bg-green-light transition-colors text-sm shadow-sm"
              >
                <ExternalLink size={16} />
                <span>Google Business</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Enquiry Form */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-md border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-text-dark mb-5">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1.5 uppercase tracking-wide">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1.5 uppercase tracking-wide">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1.5 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1.5 uppercase tracking-wide">Service Required *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass('service')}
                >
                  <option value="">Select a service...</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1.5 uppercase tracking-wide">Property Type</label>
                <input
                  type="text"
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  placeholder="e.g. Office, Villa, Apartment..."
                  className={inputClass('propertyType')}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-text-muted mb-1.5 uppercase tracking-wide">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cleaning requirements..."
                  rows={4}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-primary text-white font-bold py-3.5 rounded-full hover:bg-green-dark transition-colors shadow-md mt-2 text-sm sm:text-base cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
