import { useEffect, useRef, useState } from 'react';

/**
 * Hook that detects when an element enters the viewport.
 * @param {Object} options - { rootMargin: string, threshold: number }
 * @returns {[React.RefObject, boolean]} [ref, isInView]
 */
export function useScrollReveal(options = {}) {
  const { rootMargin = '0px 0px -80px 0px', threshold = 0.1 } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, isInView];
}
