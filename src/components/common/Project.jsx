import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section id="work" className="scroll-mt-8 space-y-8">
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Projects
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Production applications, client platforms, and SaaS products I have designed and shipped.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-10 sm:space-y-12">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-border bg-card/60 p-5 sm:p-7 space-y-5 transition-colors hover:border-foreground/30 shadow-xs"
          >
            {/* Top Bar: Title & Direct Links */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div>
                <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                  {project.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-bricolage text-foreground tracking-tight mt-0.5">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 font-medium">
                  {project.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-foreground text-xs font-medium hover:bg-muted transition-colors shadow-xs"
                  >
                    <Github className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md border border-border text-xs text-muted-foreground bg-muted/30 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Screenshot Showcase */}
            <a
              href={project.live || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-border bg-background transition-colors group-hover:border-foreground/40 shadow-xs"
              title={`View ${project.name}`}
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.005]"
              />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
