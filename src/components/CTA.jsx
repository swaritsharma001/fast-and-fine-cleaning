const WA_LINK = 'https://wa.me/971528313399?text=' + encodeURIComponent("Hello, I'd like to get a free quote for cleaning services. Could you please help?");
const PHONE   = 'tel:+971528313399';

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 w-full overflow-hidden" style={{ backgroundColor: '#105C38' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
          Clean Spaces. Professional Service. Client-Focused Care.
        </h2>
        <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
          Dependable cleaning services delivered with professionalism and respect for each client&apos;s premises.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-green-dark font-bold px-6 sm:px-8 py-3.5 rounded-full hover:bg-green-light transition-colors shadow-lg text-sm sm:text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.117 1.532 5.845L0 24l6.303-1.504A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.001-1.372l-.359-.214-3.72.888.916-3.627-.234-.374A9.775 9.775 0 012.182 12C2.182 6.577 6.577 2.182 12 2.182S21.818 6.577 21.818 12 17.423 21.818 12 21.818z"/>
            </svg>
            Get a Free Quote
          </a>
          <a
            href={PHONE}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 sm:px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
