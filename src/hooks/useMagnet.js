import { useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";

/**
 * Attaches a magnetic pull effect to an element.
 *
 * @param {object} options
 * @param {number} options.radius   - Proximity radius in px that activates the magnet (default 80)
 * @param {number} options.strength - Max displacement in px (default 10)
 *
 * @returns {{ ref, x, y, handlers }}
 *   - ref      → attach to the element's ref
 *   - x, y     → MotionValues to pass to motion.div style={{ x, y }}
 *   - handlers → { onMouseMove, onMouseLeave } — spread onto the element
 */
export function useMagnet({ radius = 80, strength = 10 } = {}) {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 180, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 180, damping: 18, mass: 0.6 });

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < radius) {
      const factor = (1 - dist / radius) * strength;
      rawX.set((dx / dist) * factor);
      rawY.set((dy / dist) * factor);
    } else {
      rawX.set(0);
      rawY.set(0);
    }
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return { ref, x, y, handlers: { onMouseMove, onMouseLeave } };
}
