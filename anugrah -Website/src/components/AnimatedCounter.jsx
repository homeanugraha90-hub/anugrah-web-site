// components/AnimatedCounter.jsx
import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ end, duration = 2000, className }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16); // 60fps ~16ms
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(Math.floor(start));
          }, 16);
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.current.observe(ref.current);

    return () => observer.current?.disconnect();
  }, [end, duration]);

  return (
    <h3 ref={ref} className={className}>
      {count}
    </h3>
  );
}
