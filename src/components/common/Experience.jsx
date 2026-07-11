import { motion } from "motion/react";
<<<<<<< HEAD
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { experiences } from "../../data/experiences";
import { CornerBrackets } from "../ui/CornerBrackets";
import { Scanline, LeftAccentBar } from "../ui/Scanline";

const ExperienceRow = ({ exp, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.25, 0, 0, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden border border-border"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
      >
        <CornerBrackets active={hovered} size="w-3" />
        <Scanline active={hovered} />
        <LeftAccentBar active={hovered} />

        <div className="flex items-center gap-3 px-4 py-4">
          <motion.img
            src={exp.logo}
            alt={exp.company}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            animate={{ opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.2 }}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <motion.div
                className="text-sm font-bold tracking-tight leading-none truncate"
                animate={{
                  color: hovered
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                }}
                transition={{ duration: 0.2 }}
              >
                {exp.company}
              </motion.div>
              <motion.div
                className="text-[10px] flex-shrink-0"
                animate={{ opacity: hovered ? 0.5 : 0.2 }}
                style={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                {exp.date}
              </motion.div>
            </div>

            <motion.p
              className="mt-1 text-[11px] truncate"
              animate={{ opacity: hovered ? 0.7 : 0.35 }}
              style={{ color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {exp.role}
            </motion.p>

            <motion.p
              className="mt-0.5 text-[10px] truncate"
              animate={{ opacity: hovered ? 0.4 : 0.15 }}
              style={{ color: "var(--foreground)" }}
              transition={{ duration: 0.2 }}
            >
              {exp.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

=======
import { experiences } from "../../data/experiences";
import { GlassCard } from "../effects/GlassCard";

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0, 0, 1] }}
  >
    <GlassCard className="p-6 h-full" intensity={6}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-full border border-border overflow-hidden flex items-center justify-center bg-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">{exp.company}</h3>
            <p className="text-xs text-muted-foreground">{exp.role}</p>
          </div>
        </div>
        <span className="text-[10px] font-mono tracking-wide text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
          {exp.tag}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
      <p className="mt-3 text-xs text-muted-foreground/60 font-mono tracking-wide">{exp.date}</p>
    </GlassCard>
  </motion.div>
);

>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
export const Experience = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
            EXPERIENCE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Where I've worked.
          </h2>
          <div className="mt-2 w-12 h-px bg-foreground/20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
<<<<<<< HEAD

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-3 px-1"
        >
          <div className="flex-1 h-px bg-foreground opacity-10" />
          <div className="font-mono text-[10px] tracking-[0.2em] opacity-20 text-foreground">
            END OF INDEX
          </div>
        </motion.div> */}
=======
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
      </div>
    </section>
  );
};
