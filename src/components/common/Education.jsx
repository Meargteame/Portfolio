import { ArrowUpRight } from "lucide-react";
import { educations } from "../../data/education";

export const Education = () => {
  return (
    <section id="education" className="scroll-mt-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold">
          03 // Education &amp; Credentials
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Degrees &amp; Certifications.
        </h2>
      </div>

      <div className="space-y-4">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="rounded-xl border border-border bg-card/60 p-5 space-y-2.5 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-base font-bold font-bricolage text-foreground">
                  {edu.institution}
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border bg-muted/30 text-muted-foreground">
                  {edu.tag}
                </span>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {edu.date}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-foreground/80">
              {edu.degree} · <span className="text-muted-foreground font-normal">{edu.location}</span>
            </p>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-0.5">
              {edu.summary}
            </p>

            {/* Directly Embedded Certificate Image */}
            {edu.certificateImg && (
              <div className="pt-3 space-y-2">
                <a
                  href={edu.certificateUrl || edu.certificateImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/cert overflow-hidden rounded-xl border border-border bg-background p-2 transition-all hover:border-foreground/50 shadow-xs"
                  title="Click to verify official certificate"
                >
                  <img
                    src={edu.certificateImg}
                    alt={`${edu.institution} Certificate`}
                    loading="lazy"
                    className="w-full h-auto object-contain block rounded-lg transition-transform duration-300 group-hover/cert:scale-[1.005]"
                  />
                </a>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-0.5">
                  <span>Issued Feb 2025 · ALX &amp; Holberton</span>
                  {edu.certificateUrl && (
                    <a
                      href={edu.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground hover:underline font-medium"
                    >
                      <span>Verify Credential</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
