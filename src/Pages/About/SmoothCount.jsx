import React, { useState, useEffect, useRef } from 'react';

const SmoothCounter = ({ startValue, endValue }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    let currentCount = startValue;
    const duration = 2000; // 2 seconds
    const steps = endValue - startValue;
    const stepTime = Math.abs(Math.floor(duration / steps));

    const interval = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      }
    }, stepTime);
  };

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}+
    </span>
  );
};

export default SmoothCounter;
