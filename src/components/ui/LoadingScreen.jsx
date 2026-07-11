import { motion, AnimatePresence } from "motion/react";

export const LoadingScreen = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="font-mono text-lg font-black tracking-wider"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-foreground">MEAREG</span>
            <span className="text-muted-foreground opacity-40">.DEV</span>
          </motion.div>
          <motion.div
            className="h-px bg-foreground"
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
