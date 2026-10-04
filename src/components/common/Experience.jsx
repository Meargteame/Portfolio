import { ArrowUpRight } from "lucide-react";
import { experiences } from "../../data/experiences";

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold">
          02 // Experience
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Work History &amp; Roles.
        </h2>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="rounded-xl border border-border bg-card/60 p-5 sm:p-6 space-y-3 shadow-xs"
          >
            {/* Header: Company Logo + Details */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              {exp.logo && (
                <div className="w-12 h-12 rounded-xl border border-border bg-white p-1.5 shrink-0 overflow-hidden shadow-xs flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold font-bricolage text-foreground hover:underline tracking-tight"
                      >
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                      </a>
                    ) : (
                      <h3 className="text-base sm:text-lg font-bold font-bricolage text-foreground tracking-tight">
                        {exp.company}
                      </h3>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border bg-muted/30 text-muted-foreground">
                      {exp.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {exp.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-foreground/80 mt-0.5">
                  {exp.role} · <span className="text-muted-foreground font-normal">{exp.location}</span>
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0.5">
              {exp.description}
            </p>

            {exp.tech && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md border border-border text-[11px] font-mono text-muted-foreground bg-muted/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
