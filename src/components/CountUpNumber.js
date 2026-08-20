import React, { useEffect, useRef, useState } from 'react';

const CountUpNumber = ({ value, duration = 1500, delay = 0 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value.replace(/\d/g, '0'));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    const targets = [...value.matchAll(/\d+/g)];
    if (targets.length === 0) {
      setDisplay(value);
      return undefined;
    }

    let frameId;
    let cancelled = false;
    const startTimeout = setTimeout(() => {
      const startTime = performance.now();

      const tick = (now) => {
        if (cancelled) return;
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        let result = value;
        let offset = 0;
        targets.forEach((match) => {
          const target = parseInt(match[0], 10);
          const current = Math.round(target * eased);
          const currentStr = String(current);
          const start = match.index + offset;
          result = result.slice(0, start) + currentStr + result.slice(start + match[0].length);
          offset += currentStr.length - match[0].length;
        });

        setDisplay(progress < 1 ? result : value);
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };
      frameId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(startTimeout);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [started, value, duration, delay]);

  return <span ref={ref}>{display}</span>;
};

export default CountUpNumber;
