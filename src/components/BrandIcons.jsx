import React from 'react';

/**
 * Official Brand Icons with authentic logos and brand colors
 */

// Official WhatsApp Icon (WhatsApp Green #25D366 & pure white glyph)
export const WhatsAppIcon = ({ className = "w-5 h-5", size = 20 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    fill="currentColor"
    aria-label="WhatsApp"
  >
    <path 
      fill="#25D366" 
      d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.201.301-.778.979-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.675-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.245-.587-.494-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.14 4.544.718.31 1.278.496 1.716.635.722.23 1.378.197 1.898.12.58-.088 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351z"
    />
    <path 
      fill="#25D366" 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M12.004 2C6.48 2 2 6.478 2 12c0 1.956.562 3.784 1.536 5.333L2.2 22l4.825-1.265A9.957 9.957 0 0012.004 22C17.524 22 22 17.522 22 12s-4.476-10-9.996-10zm0 18.2c-1.638 0-3.167-.494-4.444-1.341l-.319-.214-3.11.816.83-3.03-.234-.347A8.167 8.167 0 013.8 12c0-4.521 3.679-8.2 8.204-8.2 4.524 0 8.2 3.679 8.2 8.2 0 4.52-3.676 8.2-8.2 8.2z"
    />
  </svg>
);

// WhatsApp badge icon on white background with green fill (Official WhatsApp style)
export const WhatsAppOfficialBadge = ({ className = "w-6 h-6", size = 24 }) => (
  <svg 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    className={className}
    aria-label="WhatsApp Official"
  >
    <circle cx="24" cy="24" r="23" fill="#25D366" />
    <path 
      fill="#FFFFFF" 
      d="M34.5 28.5c-.5-.25-2.9-1.4-3.3-1.6-.4-.15-.7-.25-1 .25-.3.5-1.1 1.6-1.4 1.9-.3.3-.6.35-1.1.1-.5-.25-2.1-.75-4-2.45-1.5-1.35-2.5-3-2.8-3.5-.3-.5 0-.75.2-.95.2-.2.5-.55.75-.85.25-.3.3-.5.45-.85.15-.35.1-.65-.05-.9-.15-.25-1.1-2.7-1.5-3.7-.4-1-.8-.85-1.1-.85h-.95c-.35 0-.9.15-1.35.65-.45.5-1.75 1.7-1.75 4.15 0 2.45 1.8 4.8 2.05 5.15.25.35 3.5 5.35 8.5 7.5 1.2.5 2.1.8 2.85 1.05 1.2.4 2.3.35 3.15.2.95-.15 2.9-1.2 3.3-2.35.4-1.15.4-2.15.3-2.35-.1-.2-.4-.35-.9-.6z" 
    />
    <path 
      fill="#FFFFFF" 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M24 8.5C15.4 8.5 8.5 15.4 8.5 24c0 3.05.9 5.9 2.45 8.3L9 39l6.9-1.8c2.3 1.25 4.9 1.95 7.6 1.95 8.6 0 15.5-6.9 15.5-15.5S32.6 8.5 24 8.5zm0 27.6c-2.4 0-4.65-.65-6.6-1.8l-.5-.3-4.1 1.1 1.1-4-.3-.5c-1.3-2-2-4.3-2-6.7 0-6.95 5.65-12.6 12.6-12.6 6.95 0 12.6 5.65 12.6 12.6 0 6.95-5.65 12.6-12.6 12.6z" 
    />
  </svg>
);

// Official Instagram Icon with authentic radial/linear gradient
export const InstagramIcon = ({ className = "w-5 h-5", size = 20 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    aria-label="Instagram"
  >
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6.5" fill="url(#ig-grad)" />
    <path 
      fill="#FFFFFF" 
      d="M12 7.05a4.95 4.95 0 100 9.9 4.95 4.95 0 000-9.9zm0 8.15a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.15-8.4a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0zm2.25 1.4c-.08-.94-.3-1.78-.99-2.47-.69-.69-1.53-.91-2.47-.99C14.9 4.7 12 4.7 12 4.7s-2.9 0-3.94.04c-.94.08-1.78.3-2.47.99-.69.69-.91 1.53-.99 2.47C4.55 9.24 4.55 12 4.55 12s0 2.76.05 3.8c.08.94.3 1.78.99 2.47.69.69 1.53.91 2.47.99 1.04.05 3.94.05 3.94.05s2.9 0 3.94-.05c.94-.08 1.78-.3 2.47-.99.69-.69.91-1.53.99-2.47.05-1.04.05-3.8.05-3.8s0-2.76-.05-3.8zm-1.8 10.3c-.32.8-.93 1.4-1.72 1.72-.94.38-3.17.38-3.88.38s-2.94 0-3.88-.38c-.8-.32-1.4-.93-1.72-1.72-.38-.94-.38-3.17-.38-3.88s0-2.94.38-3.88c.32-.8.93-1.4 1.72-1.72.94-.38 3.17-.38 3.88-.38s2.94 0 3.88.38c.8.32 1.4.93 1.72 1.72.38.94.38 3.17.38 3.88s0 2.94-.38 3.88z" 
    />
  </svg>
);

// Official Google Icon (4-color logo)
export const GoogleIcon = ({ className = "w-5 h-5", size = 20 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    aria-label="Google"
  >
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.26v3.14C3.25 21.32 7.32 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.14-1.54.38-2.26V6.6H1.26C.46 8.22 0 10.06 0 12s.46 3.78 1.26 5.4l4.02-3.14z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.25 2.68 1.26 6.6l4.02 3.14c.95-2.84 3.6-4.99 6.72-4.99z"
    />
  </svg>
);

// Gold Google Reviews Star
export const GoldStar = ({ className = "w-4 h-4", filled = true }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="star-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF1BD" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#AA820A" />
      </linearGradient>
    </defs>
    <polygon 
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill={filled ? "url(#star-gold)" : "none"}
      stroke="#D4AF37"
    />
  </svg>
);
