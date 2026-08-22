import { motion } from "motion/react";
import { educations } from "../../data/education";
import { GlassCard } from "../effects/GlassCard";
import { GraduationCap, Award, CheckCircle2, MapPin } from "lucide-react";

const EducationItem = ({ edu, index }) => {
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
            <div className="w-11 h-11 rounded-xl border border-border overflow-hidden flex items-center justify-center bg-card flex-shrink-0 text-foreground/80 shadow-sm">
              {edu.tag === "DEGREE" ? (
                <GraduationCap className="w-5 h-5" />
              ) : (
                <Award className="w-5 h-5 text-amber-400/80" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {edu.institution}
                </h3>
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-0.5 bg-card/60">
                  {edu.tag}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground flex-wrap">
                <span className="font-medium text-foreground/90">{edu.degree}</span>
                {edu.location && (
                  <span className="flex items-center gap-1 text-muted-foreground/60 font-mono text-[11px]">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                {edu.summary}
              </p>

              {edu.highlights && (
                <div className="mt-4 space-y-2">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-foreground/60 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-xs font-mono tracking-wide text-muted-foreground/70 md:text-right whitespace-nowrap self-start mt-1 md:mt-0 px-2.5 py-1 rounded-md bg-white/[0.02] border border-border/50">
            {edu.date}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export const Education = () => {
  return (
    <section id="education" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
            ACADEMIC &amp; FELLOWSHIPS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Education &amp; training.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Computer science foundation, competitive programming excellence (300+ DSA problems), and low-level systems engineering.
          </p>
          <div className="mt-4 w-12 h-px bg-foreground/20" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-border/60" />

          <div className="space-y-8">
            {educations.map((edu, index) => (
              <EducationItem key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
