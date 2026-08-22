import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Github, ExternalLink, ChevronDown, Terminal, Layers } from "lucide-react";
import { projects, moreProjects } from "../../data/projects";
import { GlassCard } from "../effects/GlassCard";

const IconLink = ({ href, label, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.08 }}
    className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
  >
    {children}
  </motion.a>
);

const SystemSnippetVisual = ({ project }) => {
  return (
    <div className="w-full h-full bg-[#0d0e12] p-6 font-mono text-xs text-muted-foreground flex flex-col justify-center border-l border-border/40">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/40 text-[11px] text-foreground/70">
        <Layers className="w-3.5 h-3.5 text-amber-400" />
        <span>pipeline/engine.py</span>
        <span className="ml-auto text-[10px] text-amber-400 font-mono">JSON Schema</span>
      </div>
      <pre className="text-[11px] leading-relaxed text-zinc-300 overflow-x-auto">
        <code>{`async def decompose_topic(prompt: str) -> TopicTree:
    schema = TopicDecompositionSchema.model_json_schema()
    response = await gemini.generate_content(
        contents=prompt,
        generation_config={"response_mime_type": "application/json"}
    )
    return TopicTree.model_validate_json(response.text)`}</code>
      </pre>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const techList = (project.tech || "").split("·").map((t) => t.trim()).filter(Boolean);
  const isOdd = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0, 0, 1] }}
    >
      <GlassCard className="overflow-hidden group" intensity={5}>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[340px]">
          {/* Visual side (Screenshot or Architecture code block) */}
          <div
            className={`lg:col-span-6 relative overflow-hidden min-h-[240px] sm:min-h-[300px] lg:min-h-[340px] ${
              isOdd ? "lg:order-2 border-b lg:border-b-0 lg:border-l" : "border-b lg:border-b-0 lg:border-r"
            } border-border`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <SystemSnippetVisual project={project} />
            )}
          </div>

          {/* Details side */}
          <div
            className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center lg:col-span-6 ${
              isOdd ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-bricolage">
                    {project.name}
                  </h3>
                  {project.wip && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground opacity-70" />
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs tracking-wider text-muted-foreground font-mono">
                  {project.tag}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {project.live && (
                  <IconLink href={project.live} label={`${project.name} live site`}>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </IconLink>
                )}
                <IconLink href={project.repo} label={`${project.name} repository`}>
                  <Github className="w-3.5 h-3.5" />
                </IconLink>
              </div>
            </div>

            <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {techList.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {techList.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full border border-border text-[11px] text-muted-foreground font-mono tracking-wide bg-white/[0.02]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.details && (
              <>
                <motion.button
                  onClick={() => setOpen((v) => !v)}
                  whileHover={{ x: 3 }}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono tracking-wide text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {open ? "HIDE ARCHITECTURE" : "ARCHITECTURE & DEEP DIVE"}
                  <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-3 h-3" />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 pl-3.5 border-l border-border text-xs leading-relaxed text-muted-foreground/90">
                        {project.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const MoreProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0, 0, 1] }}
  >
    <GlassCard className={`overflow-hidden h-full flex flex-col ${project.image ? "" : "p-5"}`} intensity={4}>
      {project.image && (
        <div className="relative overflow-hidden h-36 border-b border-border/50">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}
      <div className={`flex flex-col flex-1 ${project.image ? "p-4" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-sm font-semibold tracking-tight text-foreground truncate">
              {project.name}
            </div>
            {project.tag && (
              <div className="mt-0.5 text-[10px] font-mono text-muted-foreground tracking-wider">
                {project.tag}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {project.live && (
              <IconLink href={project.live} label={`${project.name} live site`}>
                <ExternalLink className="w-3 h-3" />
              </IconLink>
            )}
            <IconLink href={project.repo} label={`${project.name} repository`}>
              <Github className="w-3 h-3" />
            </IconLink>
          </div>
        </div>

        {project.description && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        )}

        {project.tech && (
          <div className="mt-auto pt-3 flex flex-wrap gap-1">
            {project.tech
              .split("·")
              .map((t) => t.trim())
              .filter(Boolean)
              .slice(0, 3)
              .map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-full border border-border text-[10px] text-muted-foreground font-mono"
                >
                  {tech}
                </span>
              ))}
          </div>
        )}
      </div>
    </GlassCard>
  </motion.div>
);

export const Projects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-mono font-medium">
            FEATURED ENGINEERING
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Web &amp; Mobile projects.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            Selected full-stack platforms, cross-platform mobile apps, and scalable web applications.
          </p>
          <div className="mt-4 w-12 h-px bg-foreground/20" />
        </motion.div>

        {/* Alternating single column list */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-mono font-medium">
              ADDITIONAL PRODUCTION WORK &amp; APPS
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreProjects.map((project, index) => (
              <MoreProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
