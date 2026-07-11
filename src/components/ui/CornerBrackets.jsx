import { motion } from "motion/react";

export const CornerBrackets = ({ active = false, size = "w-4", duration = 0.15 }) => (
  <>
    <motion.div
      className={`absolute top-0 left-0 ${size} ${size} pointer-events-none`}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className={`absolute top-0 right-0 ${size} ${size} pointer-events-none`}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration }}
    >
      <div className="absolute top-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className={`absolute bottom-0 left-0 ${size} ${size} pointer-events-none`}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration }}
    >
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className={`absolute bottom-0 right-0 ${size} ${size} pointer-events-none`}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration }}
    >
      <div className="absolute bottom-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
  </>
);
