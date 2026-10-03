import { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "motion/react";

/**
 * Custom cursor with:
 * - Spring-lagged ring that follows mouse
 * - Smaller precise dot at exact cursor position
 * - Context label inside the ring (reads data-cursor attribute)
 *   Supported values: "VIEW", "BOOK", "ABOUT"
 */
export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [cursorLabel, setCursorLabel] = useState(null); // null | "VIEW" | "BOOK" | "ABOUT"

  const springX = useSpring(cursorX, { stiffness: 200, damping: 25, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25, mass: 0.5 });

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const dotSpringX = useSpring(dotX, { stiffness: 400, damping: 30 });
  const dotSpringY = useSpring(dotY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [visible, cursorX, cursorY, dotX, dotY]);

  // Read data-cursor attribute from hovered element or its ancestors
  useEffect(() => {
    function getLabel(el) {
      while (el && el !== document.body) {
        if (el.dataset?.cursor) return el.dataset.cursor;
        // Map element types to labels
        if (el.matches?.("a[href*='cal.com'], .cta-btn")) return "BOOK";
        if (el.matches?.("img[alt='Meareg Teame']")) return "ABOUT";
        if (el.matches?.(".project-card, [data-cursor='VIEW']")) return "VIEW";
        el = el.parentElement;
      }
      return null;
    }

    function onOver(e) {
      const label = getLabel(e.target);
      setCursorLabel(label);
    }
    function onOut() {
      setCursorLabel(null);
    }

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const hasLabel = !!cursorLabel;
  const ringSize = hasLabel ? 60 : clicking ? 28 : 32;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.6)",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s ease",
        }}
      >
        {/* Context label inside ring */}
        <AnimatePresence>
          {hasLabel && (
            <motion.span
              key={cursorLabel}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.9)",
                userSelect: "none",
                lineHeight: 1,
                fontFamily: "monospace",
              }}
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: clicking ? 4 : 3,
          height: clicking ? 4 : 3,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.9)",
          opacity: visible && !hasLabel ? 1 : 0,
          transition: "width 0.1s, height 0.1s, opacity 0.15s",
        }}
      />
    </>
  );
}
