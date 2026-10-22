import React, { useEffect, useRef } from 'react';

/**
 * High-performance HTML5 Canvas gold dust & shimmer particle effect
 * Floats gently upward with subtle twinkle and responds gently to mouse proximity.
 */
export const GoldCanvasParticles = ({ density = 45, className = "absolute inset-0 pointer-events-none" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool
    const particles = [];
    const colors = [
      'rgba(241, 215, 122, ', // light gold
      'rgba(212, 175, 55, ',  // royal gold
      'rgba(255, 235, 150, ', // bright shine
      'rgba(184, 134, 11, ',  // amber gold
    ];

    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: Math.random() * 0.45 + 0.15,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        speedY: Math.random() * 0.35 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;
    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move upward with gentle wave
        p.y -= p.speedY;
        p.x += Math.sin(time + p.twinkleOffset) * 0.2 + p.speedX;

        // Loop around edges
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Twinkle alpha
        const currentAlpha = p.baseAlpha + Math.sin(time * 2 + p.twinkleOffset) * 0.2;
        const clampedAlpha = Math.max(0.05, Math.min(0.85, currentAlpha));

        // Draw particle with subtle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${clampedAlpha})`;
        ctx.shadowBlur = p.radius > 1.4 ? 8 : 4;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className} 
      style={{ opacity: 0.85 }} 
      aria-hidden="true" 
    />
  );
};
