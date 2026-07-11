import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

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

    const over = () => setHovering(true);
    const out = () => setHovering(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    document.querySelectorAll("a, button, input, textarea, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [visible, cursorX, cursorY, dotX, dotY]);

  useEffect(() => {
    const obs = new MutationObserver(() => {
      document.querySelectorAll("a, button, input, textarea, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.6)",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, opacity 0.3s",
        }}
      />
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
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
