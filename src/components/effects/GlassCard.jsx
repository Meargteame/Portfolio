import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

export function GlassCard({ children, className = "", intensity = 8 }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const [isHovered, setIsHovered] = useState(false);

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

  // Spotlight border effect follows cursor within the card
  const spotX = useTransform(x, [0, 1], [0, 100]);
  const spotY = useTransform(y, [0, 1], [0, 100]);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
    setIsHovered(false);
  };

  const handleEnter = () => setIsHovered(true);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-2xl border border-border bg-card backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Spotlight hover border glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-0"
          style={{
            background: `radial-gradient(300px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.06) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Glare overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.9) 0%, transparent 55%)`,
        }}
      />

      {/* Top edge highlight — brightens on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        animate={{ opacity: isHovered ? 0.2 : 0.06 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)",
        }}
      />

      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
