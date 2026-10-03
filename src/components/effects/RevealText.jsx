import { motion } from "motion/react";

/**
 * Wraps children in a clip-path reveal animation that triggers once
 * when the element enters the viewport.
 *
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {number}  props.delay      - Delay in seconds (default 0)
 * @param {number}  props.duration   - Duration in seconds (default 0.65)
 * @param {string}  props.className  - Extra classes on the outer wrapper
 * @param {string}  props.as         - HTML tag for the inner element (default "div")
 */
export function RevealText({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <div style={{ overflow: "hidden" }} className={className}>
      <MotionTag
        initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
