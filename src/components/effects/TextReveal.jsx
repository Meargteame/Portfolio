import { motion } from "motion/react";
import { useMemo } from "react";

export function TextReveal({ children, className, delay = 0, stagger = 0.03, ...props }) {
  const words = useMemo(() => children.split(" "), [children]);
  const Tag = props.as || "span";

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function CharReveal({ children, className, delay = 0, ...props }) {
  const chars = useMemo(() => children.split(""), [children]);
  const Tag = props.as || "h2";

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.02, delayChildren: delay }}
        className="inline"
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: -90 },
              visible: { opacity: 1, y: 0, rotateX: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function ScaleReveal({ children, className, delay = 0, ...props }) {
  const Tag = props.as || "div";

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.035, delayChildren: delay }}
        className="inline"
      >
        {children.split(" ").map((word, i) => (
          <span key={i} className="inline-block overflow-hidden whitespace-nowrap">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            >
              {word}
              {i < children.split(" ").length - 1 && "\u00A0"}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
