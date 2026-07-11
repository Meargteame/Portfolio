import { motion, AnimatePresence } from "motion/react";

export const Scanline = ({ active = false, duration = 0.45 }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none z-20"
        style={{
          background: "linear-gradient(90deg, transparent, var(--foreground), transparent)",
          opacity: 0.12,
        }}
        initial={{ top: 0 }}
        animate={{ top: "100%" }}
        exit={{ opacity: 0 }}
        transition={{ duration, ease: "linear" }}
      />
    )}
  </AnimatePresence>
);

export const LeftAccentBar = ({ active = false }) => (
  <motion.div
    className="absolute left-0 top-0 bottom-0 w-px"
    animate={{ opacity: active ? 0.5 : 0, scaleY: active ? 1 : 0 }}
    style={{ background: "var(--foreground)", transformOrigin: "center" }}
    transition={{ duration: 0.2 }}
  />
);
