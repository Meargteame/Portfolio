import { ArrowUpRight } from "lucide-react";
import { experiences } from "../../data/experiences";

const getExperienceBadgeStyle = (tag = "") => {
  if (tag.includes("FOUNDING")) {
    return "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-300";
  }
  if (tag.includes("CONTRACT")) {
    return "border-indigo-500/30 bg-indigo-500/10 text-indigo-900 dark:text-indigo-300";
  }
  if (tag.includes("INTERNSHIP")) {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300";
  }
  return "border-border bg-card/60 text-muted-foreground";
};

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Experience
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Contractual and engineering roles where I shipped production features and collaborated with teams.
        </p>
      </div>

      <div className="divide-y divide-border/60">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="py-6 first:pt-0 last:pb-0 space-y-3"
          >
            {/* Header: Company Logo + Details */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              {exp.logo && (
                <div className="w-11 h-11 rounded-xl border border-border bg-card p-1.5 shrink-0 overflow-hidden shadow-2xs flex items-center justify-center">
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
                        className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold font-bricolage text-foreground hover:underline tracking-tight focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden rounded-xs"
                      >
                        <span>{exp.company}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                      </a>
                    ) : (
                      <h3 className="text-base sm:text-lg font-bold font-bricolage text-foreground tracking-tight">
                        {exp.company}
                      </h3>
                    )}
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-md border font-medium ${getExperienceBadgeStyle(exp.tag)}`}>
                      {exp.tag}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 font-medium tabular-nums">
                    {exp.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-foreground/85 mt-0.5">
                  {exp.role} <span className="text-muted-foreground font-normal">({exp.location})</span>
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-14">
              {exp.description}
            </p>

            {exp.tech && (
              <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-14 pt-0.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md border border-border/80 text-[11px] text-foreground/80 bg-muted/40 font-medium"
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
