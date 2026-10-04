import { Download, ArrowUpRight, GraduationCap, Award, BookOpen } from "lucide-react";
import { educations } from "../../data/education";
import { TechStack } from "./TechStack";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-8 space-y-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-1.5">
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold">
            02 // Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
            About &amp; Education.
          </h2>
        </div>

        <a
          href="/CV.pdf"
          download
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shrink-0 shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Résumé</span>
          <ArrowUpRight className="w-3 h-3 text-muted-foreground/60" />
        </a>
      </div>

      {/* Human Bio Paragraphs */}
      <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          I am a full-stack developer based in Dansha, Ethiopia, with a deep focus on building scalable web applications and clean user experiences. Over the past three years, I've developed and shipped production systems for international clients, startups, and local enterprises.
        </p>
        <p>
          My technical journey combines a formal degree in Information Technology with intensive competitive programming. Through the <strong className="text-foreground font-semibold">A2SV (Africa to Silicon Valley)</strong> fellowship, I trained rigorously in data structures, algorithms, and systems optimization, solving over 300 algorithmic problems under strict space/time complexity constraints.
        </p>
        <p>
          In every project, I prioritize clean architectural design, maintainable type-safe code, responsive layouts, and reliable deployment.
        </p>
      </div>

      {/* Education & Fellowships */}
      <div className="space-y-6 pt-4 border-t border-border">
        <h3 className="text-lg font-bold font-bricolage text-foreground">
          Education &amp; Fellowships
        </h3>

        <div className="space-y-4">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border border-border bg-card/60 p-5 space-y-2 shadow-xs"
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

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                {edu.summary}
              </p>

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
      </div>

      {/* Technical Stack */}
      <div className="pt-4 border-t border-border">
        <TechStack />
      </div>
    </section>
  );
};
