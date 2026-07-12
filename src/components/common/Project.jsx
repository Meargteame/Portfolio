import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { projects, moreProjects } from "../../data/projects";
import { GlassCard } from "../effects/GlassCard";

const IconLink = ({ href, label, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1 }}
    className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
  >
    {children}
  </motion.a>
);

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const techList = (project.tech || "").split("·").map((t) => t.trim()).filter(Boolean);
  const isOdd = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0, 0, 1] }}
    >
      <GlassCard className="overflow-hidden group" intensity={6}>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Image side */}
          {project.image && (
            <div
              className={`lg:col-span-6 relative overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] ${
                isOdd ? "lg:order-2 border-b lg:border-b-0 lg:border-l" : "border-b lg:border-b-0 lg:border-r"
              } border-border`}
            >
              <img
                src={project.image}
                alt={`${project.name} preview`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:rotate-0.5"
              />
            </div>
          )}

          {/* Details side */}
          <div
            className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${
              project.image ? "lg:col-span-6" : "lg:col-span-12"
            } ${isOdd ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  {project.wip && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground opacity-70" />
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs tracking-wide text-muted-foreground font-mono">
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

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {techList.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {techList.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground font-mono tracking-wide"
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
                  whileHover={{ x: 4 }}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {open ? "HIDE DETAILS" : "TECHNICAL DEEP DIVE"}
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
                      transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 pl-4 border-l border-border text-sm leading-relaxed text-muted-foreground">
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
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0, 0, 1] }}
  >
    <GlassCard className={`overflow-hidden h-full ${project.image ? "" : "p-4"}`} intensity={4}>
      {project.image && (
        <div className="relative overflow-hidden h-40">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <div className={project.image ? "p-4" : ""}>
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-sm font-semibold tracking-tight text-foreground truncate">
              {project.name}
            </div>
            {project.tag && (
              <div className="mt-0.5 text-[10px] font-mono text-muted-foreground tracking-wide">
                {project.tag}
              </div>
            )}
            {!project.tag && (
              <div className="mt-0.5 text-xs font-mono text-muted-foreground truncate">
                {project.tech}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
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
        {project.image && project.tech && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.tech.split("·").map((t) => t.trim()).filter(Boolean).slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded-full border border-border text-[10px] text-muted-foreground font-mono">
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
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
            SELECTED WORK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            Projects.
          </h2>
          <div className="mt-2 w-12 h-px bg-foreground/20" />
        </motion.div>

        <div className="mt-6 flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">CLIENT WORK</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Alternating single column list */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">SIDE PROJECTS</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {moreProjects.map((project, index) => (
              <MoreProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
