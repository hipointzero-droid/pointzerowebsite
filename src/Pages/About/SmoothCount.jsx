import React, { useState, useEffect, useRef } from 'react';

const SmoothCounter = ({ startValue, endValue }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);

  const startCounting = () => {
    let currentCount = startValue;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        currentCount = prevCount + 1;
        if (currentCount === endValue) {
          clearInterval(interval);
        }
        return currentCount;
      });
    }, 5); // Adjust the interval as needed
  };

  return (
    <div ref={counterRef} className="md:mt-20 mt-10 text-5xl font-bold">
      {count}+
    </div>
  );
};

export default SmoothCounter;
