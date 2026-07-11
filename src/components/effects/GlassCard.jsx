import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export function GlassCard({ children, className = "", intensity = 8 }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 20,
  });

  const glareX = useTransform(x, [0, 1], [0, 100]);
  const glareY = useTransform(y, [0, 1], [0, 100]);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-2xl border border-border bg-card backdrop-blur-sm overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
        }}
      />
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
