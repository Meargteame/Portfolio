import { motion } from "motion/react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { techs } from "../../data/techStack.jsx";
import { CornerBrackets } from "../ui/CornerBrackets";
import { Scanline, LeftAccentBar } from "../ui/Scanline";

const TechBadge = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0, 0, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden border border-border flex items-center gap-2.5 px-4 py-2.5 cursor-default"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
      >
        <CornerBrackets active={hovered} size="w-3" />
        <Scanline active={hovered} duration={0.35} />
        <LeftAccentBar active={hovered} />

        <span className="text-base leading-none">{tech.icon}</span>

        <motion.span
          className="text-sm font-bold tracking-tight"
          animate={{ color: hovered ? "var(--foreground)" : "var(--muted-foreground)" }}
          transition={{ duration: 0.2 }}
        >
          {tech.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export const TechStack = () => {
  const isMobile = useMobile(640);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 px-1"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://TECH
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="text-[10px] tracking-widest opacity-20 text-foreground">
              {techs.length} ENTRIES
            </div>
          </div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground leading-none">
              TECH STACK
            </h2>
            <motion.div
              className="mt-2 h-[2px] bg-foreground"
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Badges */}
        <div className={`flex flex-wrap gap-[1px] ${isMobile ? "justify-center" : ""}`}>
          {techs.map((tech, index) => (
            <TechBadge key={tech.id} tech={tech} index={index} />
          ))}
        </div>

        {/* Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex items-center gap-3 px-1"
        >
          <div className="flex-1 h-px bg-foreground opacity-10" />
          <div className="text-[10px] tracking-[0.2em] opacity-20 text-foreground">
            END OF INDEX
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  );
};