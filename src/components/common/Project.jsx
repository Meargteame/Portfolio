import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section id="work" className="py-16 sm:py-24 border-t border-border scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Proof of Execution
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Selected Production Work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Real platforms, SaaS applications, and business systems built 0-to-1 and deployed to production. Every build demonstrates full-stack execution, database design, and working business logic.
          </p>
        </div>
        <div className="divide-y divide-border">
          {projects.map((project, index) => {
            const isOdd = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="py-14 sm:py-20 first:pt-4 last:pb-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Screenshot Container — Fully Visible Image */}
                  <div
                    className={`lg:col-span-7 ${
                      isOdd ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <a
                      href={project.live || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group focus:outline-hidden"
                      title={`Visit ${project.name}`}
                    >
                      <div className="rounded-xl border border-border bg-muted/20 overflow-hidden shadow-xs group-hover:border-foreground/40 transition-colors">
                        {/* Browser Window Header */}
                        <div className="h-7 px-3.5 border-b border-border bg-muted/40 flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-border" />
                            <span className="w-2.5 h-2.5 rounded-full bg-border" />
                            <span className="w-2.5 h-2.5 rounded-full bg-border" />
                          </div>
                          <span className="text-[11px] font-mono text-muted-foreground/80 truncate max-w-[200px]">
                            {project.live ? project.live.replace(/^https?:\/\//, "") : project.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                        </div>

                        {/* Full Image (100% visible, no crop, no object-cover) */}
                        <div className="p-1 sm:p-2 bg-background/50">
                          <img
                            src={project.image}
                            alt={`${project.name} full preview`}
                            loading="lazy"
                            className="w-full h-auto object-contain block rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Project Details */}
                  <div
                    className={`lg:col-span-5 space-y-4 ${
                      isOdd ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Category & Badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        {project.tag}
                      </span>
                      {project.logo && (
                        <div className="w-5 h-5 rounded border border-border bg-white p-0.5 overflow-hidden flex items-center justify-center shrink-0">
                          <img src={project.logo} alt="" className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground tracking-tight">
                        {project.name}
                      </h2>
                      <p className="text-sm font-medium text-foreground/80 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md border border-border text-xs font-mono text-muted-foreground bg-muted/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-3 flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-card text-foreground text-xs font-medium hover:bg-muted transition-colors shadow-xs"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
