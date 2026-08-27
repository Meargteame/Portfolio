import { motion } from "motion/react";
import { experiences } from "../../data/experiences";
import { GlassCard } from "../effects/GlassCard";
import { Briefcase, MapPin, ArrowUpRight } from "lucide-react";

const ExperienceItem = ({ exp, index }) => {
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
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0, 0, 1] }}
      className="relative pl-6 sm:pl-12 group"
    >
      {/* Connector Line Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full border border-border bg-background flex items-center justify-center -translate-x-1/2 group-hover:border-foreground/60 transition-colors z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 group-hover:bg-foreground transition-colors" />
      </div>

      <GlassCard className="p-5 sm:p-7 md:p-8" intensity={5}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {/* Company Logo Badge */}
            <div className="w-12 h-12 rounded-xl border border-border overflow-hidden flex items-center justify-center bg-white p-1.5 flex-shrink-0 shadow-sm">
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
              ) : (
                <span className="text-xs font-mono font-bold tracking-tight text-neutral-800">{initials}</span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                {exp.website ? (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-lg font-semibold text-foreground hover:text-foreground/80 tracking-tight transition-colors"
                  >
                    <span>{exp.company}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground group-hover/link:translate-x-0.5 transition-all" />
                  </a>
                ) : (
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">{exp.company}</h3>
                )}
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-0.5 bg-card/60">
                  {exp.tag}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground flex-wrap">
                <span className="font-medium text-foreground/80">{exp.role}</span>
                {exp.location && (
                  <span className="flex items-center gap-1 text-muted-foreground/60 font-mono text-[11px]">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                )}
              </div>

              <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              {exp.tech && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md border border-border/80 bg-white/[0.02] text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-xs font-mono tracking-wide text-muted-foreground/70 md:text-right whitespace-nowrap self-start mt-1 md:mt-0 px-2.5 py-1 rounded-md bg-white/[0.02] border border-border/50">
            {exp.date}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
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
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Engineering experience.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Track record of building high-concurrency backends, 0-to-1 product architectures, and enterprise security modules.
          </p>
          <div className="mt-4 w-12 h-px bg-foreground/20" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-border/60" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
