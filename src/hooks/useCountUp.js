import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `end` over `duration` ms when the ref element
 * enters the viewport. Only runs once.
 *
 * @param {number} end       - Target number to count to
 * @param {number} duration  - Animation duration in ms (default 1400)
 * @returns {{ ref: React.RefObject, value: number }}
 */
export function useCountUp(end, duration = 1400) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, value };
}
