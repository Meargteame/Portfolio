import { motion } from "motion/react";
import { experiences } from "../../data/experiences";
import { GlassCard } from "../effects/GlassCard";

const ExperienceItem = ({ exp, index }) => {
  // Generate initials for fallback
  const initials = exp.company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0, 0, 1] }}
      className="relative pl-8 sm:pl-12 group"
    >
      {/* Connector Line Dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-border bg-background flex items-center justify-center -translate-x-[9px] group-hover:border-foreground/40 transition-colors z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 group-hover:bg-foreground transition-colors" />
      </div>

      <GlassCard className="p-6 md:p-8" intensity={6}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Fallback Initials Badge or Logo */}
            <div className="w-12 h-12 rounded-full border border-border overflow-hidden flex items-center justify-center bg-card flex-shrink-0 text-sm font-mono font-bold tracking-tight text-foreground/80">
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
              ) : (
                <span>{initials}</span>
              )}
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-lg font-semibold text-foreground tracking-tight">{exp.company}</h3>
                <span className="text-[10px] font-mono tracking-wide text-muted-foreground border border-border rounded-full px-2.5 py-0.5 bg-card/50">
                  {exp.tag}
                </span>
              </div>
              <p className="text-sm font-medium text-muted-foreground mt-1">{exp.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80 max-w-3xl">
                {exp.description}
              </p>
            </div>
          </div>

          <div className="text-xs font-mono tracking-wide text-muted-foreground/60 md:text-right whitespace-nowrap self-start md:self-auto mt-1 md:mt-0">
            {exp.date}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background ambient glow */}
      <motion.div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
            WORK EXPERIENCE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Where I've worked.
          </h2>
          <div className="mt-4 w-12 h-px bg-foreground/20" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border/50" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
