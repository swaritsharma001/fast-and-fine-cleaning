import React, { useState } from 'react';

/**
 * Luxury Ripple Button
 * Emits an expanding gold glow ripple upon click with a subtle physical press-down effect.
 */
export const RippleButton = ({
  children,
  onClick,
  className = '',
  as = 'button',
  href,
  target,
  rel,
  type = 'button',
  variant = 'gold', // 'gold', 'outline', 'dark', 'whatsapp'
  ...props
}) => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 650);

    if (onClick) {
      onClick(e);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gold-gradient text-black font-semibold shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:scale-[1.02] border border-[#F1D77A]/50';
      case 'outline':
        return 'bg-transparent text-[#F1D77A] border border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 hover:border-[#F1D77A] hover:scale-[1.02]';
      case 'dark':
        return 'bg-[#161616] text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#1E1E1E] hover:scale-[1.02]';
      case 'whatsapp':
        return 'bg-[#25D366] text-white font-semibold hover:bg-[#22bf5b] shadow-lg shadow-[#25D366]/25 hover:scale-[1.02]';
      default:
        return '';
    }
  };

  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm md:text-base font-medium tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none btn-shimmer';

  const combinedClasses = `${baseStyles} ${getVariantStyles()} ${className}`;

  const rippleColor =
    variant === 'whatsapp' ? 'rgba(255, 255, 255, 0.45)' : 'rgba(241, 215, 122, 0.55)';

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
            opacity: 0.7,
            animationDuration: '650ms',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }}
        />
      ))}
    </>
  );

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={addRipple}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={addRipple}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};
