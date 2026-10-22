import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimateOnView Component
 * Reveals children with customizable directions (up, down, left, right, scale, fade)
 * and customizable delay for staggered cascades.
 */
export const AnimateOnView = ({
  children,
  className = '',
  animation = 'fade-up', // 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'fade'
  delay = 0, // delay in ms
  threshold = 0.15,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, once]);

  const getTransitionStyle = () => {
    let initialTransform = '';

    switch (animation) {
      case 'fade-up':
        initialTransform = 'translateY(36px)';
        break;
      case 'fade-down':
        initialTransform = 'translateY(-36px)';
        break;
      case 'fade-left':
        initialTransform = 'translateX(40px)';
        break;
      case 'fade-right':
        initialTransform = 'translateX(-40px)';
        break;
      case 'zoom-in':
        initialTransform = 'scale(0.92)';
        break;
      case 'fade':
      default:
        initialTransform = 'none';
        break;
    }

    return {
      transitionProperty: 'opacity, transform',
      transitionDuration: '750ms',
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'none' : initialTransform,
      willChange: 'opacity, transform',
    };
  };

  return (
    <div ref={elementRef} className={className} style={getTransitionStyle()}>
      {children}
    </div>
  );
};
