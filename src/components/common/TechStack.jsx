import { motion } from "motion/react";
<<<<<<< HEAD
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { techs } from "../../data/techStack.jsx";
import { CornerBrackets } from "../ui/CornerBrackets";
import { Scanline, LeftAccentBar } from "../ui/Scanline";
=======
import { techs } from "../../data/techStack.jsx";
import { GlassCard } from "../effects/GlassCard";
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd

const categories = [
  { label: "Backend", ids: [1, 2, 3, 4, 5, 6, 7] },
  { label: "Frontend", ids: [8, 9, 10, 11, 12, 20] },
  { label: "Databases", ids: [13, 14, 15, 16, 17] },
  { label: "DevOps & Tools", ids: [18, 19, 21, 22, 23, 24] },
  { label: "AI & ML", ids: [25, 26, 27, 28] },
  { label: "Extensions & PWA", ids: [29, 30] },
];

const TechCategory = ({ category, index }) => {
  const categoryTechs = techs.filter((t) => category.ids.includes(t.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0, 0, 1] }}
    >
<<<<<<< HEAD
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
=======
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground font-medium">
          {category.label}
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground/40">{categoryTechs.length}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categoryTechs.map((tech) => (
          <motion.div
            key={tech.id}
            whileHover={{ y: -2, scale: 1.02 }}
            className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:border-foreground/20 hover:bg-white/[0.04] transition-all duration-200 cursor-default"
          >
            <span className="text-base leading-none opacity-60 group-hover:opacity-100 transition-opacity">
              {tech.icon}
            </span>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
    </motion.div>
  );
};

export const TechStack = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">TECHNOLOGY</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Tech stack.
          </h2>
          <div className="mt-2 w-12 h-px bg-foreground/20" />
        </motion.div>

        <div className="mt-16">
          {categories.map((category, index) => (
            <TechCategory key={category.label} category={category} index={index} />
          ))}
        </div>
<<<<<<< HEAD

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
=======
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
      </div>
    </section>
  );
};
