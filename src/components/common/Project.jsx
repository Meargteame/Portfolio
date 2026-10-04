import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Uniform 2-Column Grid (Same Sized Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:border-foreground/30 transition-all duration-200 group"
            >
              {/* Image Preview with uniform aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      {project.tag}
                    </span>
                    {project.logo && (
                      <div className="w-5 h-5 rounded border border-border bg-white p-0.5 overflow-hidden flex items-center justify-center shrink-0">
                        <img src={project.logo} alt="" className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-bricolage text-foreground tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md border border-border text-[11px] font-mono text-muted-foreground bg-muted/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
                    >
                      <span>Live Demo</span>
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
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
