import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
<<<<<<< HEAD
import { useMobile } from "../../hooks/useMobile";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import { CornerBrackets } from "../ui/CornerBrackets";
import { Scanline, LeftAccentBar } from "../ui/Scanline";
=======
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
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const techList = (project.tech || "").split("·").map((t) => t.trim()).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.25, 0, 0, 1],
      }}
      className="relative block"
      role="article"
      aria-label={`Project: ${project.name}`}
    >
      <motion.div
        className="relative overflow-hidden border border-border"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => !isMobile && setHovered(true)}
        onHoverEnd={() => !isMobile && setHovered(false)}
        onClick={handleCardClick}
      >
        <CornerBrackets active={hovered || detailsOpen} />
        <Scanline active={hovered || detailsOpen} />
        <LeftAccentBar active={hovered || detailsOpen} />

        <div>
          {/* Main content */}
          <div className={`flex items-start ${isMobile ? "flex-col px-3 py-3 gap-2" : "px-6 py-5"}`}>
            {!isMobile && (
              <>
                <motion.div
                  className="font-mono text-5xl font-black leading-none mr-6 select-none flex-shrink-0 w-16 text-right"
                  animate={{ opacity: hovered ? 0.12 : 0.04 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: "var(--foreground)" }}
                >
                  {num}
                </motion.div>

                <motion.div
                  className="self-stretch w-px mr-6 flex-shrink-0"
                  animate={{ opacity: hovered ? 0.3 : 0.1 }}
                  style={{ backgroundColor: "var(--foreground)" }}
                  transition={{ duration: 0.2 }}
                />
              </>
            )}

            {!isMobile && (
              <div className="flex-shrink-0 w-28 mr-6">
                {project.wip ? (
                  <div className="inline-flex items-center gap-1.5">
                    <motion.span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground opacity-70" />
                    </motion.span>
                    <motion.span
                      className="font-mono text-[10px] tracking-[0.2em]"
                      animate={{ opacity: hovered ? 0.8 : 0.4 }}
                      style={{ color: "var(--foreground)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.tag}
                    </motion.span>
                  </div>
                ) : (
                  <motion.div
                    className="font-mono text-[10px] tracking-[0.2em]"
                    animate={{ opacity: hovered ? 0.8 : 0.2 }}
                    style={{ color: "var(--foreground)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.tag}
                  </motion.div>
                )}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                {isMobile && (
                  <motion.span
                    className="font-mono text-[10px] tracking-wider opacity-30 text-foreground"
                    animate={{ opacity: detailsOpen ? 0.5 : 0.3 }}
                  >
                    {num}
                  </motion.span>
                )}
                <motion.div
                  className={`font-bold tracking-tight leading-none ${isMobile ? "text-sm" : "text-base"}`}
                  animate={{
                    color:
                      hovered || detailsOpen
                        ? "var(--foreground)"
                        : "var(--muted-foreground)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {project.name}
                </motion.div>
                {project.tech && (
                  <motion.div
                    className={`text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm ${isMobile ? "ml-auto" : ""}`}
                    animate={{
                      opacity: (hovered || detailsOpen) ? 0.6 : 0.3,
                      backgroundColor: (hovered || detailsOpen)
                        ? "var(--foreground)"
                        : "transparent",
                      color: (hovered || detailsOpen)
                        ? "var(--background)"
                        : "var(--foreground)",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ border: "1px solid var(--foreground)" }}
                  >
                    {project.tech}
                  </motion.div>
                )}
              </div>

              {isMobile && project.tag && (
                <motion.div
                  className="text-[10px] font-mono tracking-wider mb-1.5 opacity-40"
                  style={{ color: "var(--foreground)" }}
                >
                  {project.tag}
                </motion.div>
              )}

              <motion.p
                className={`${isMobile ? "text-[11px]" : "text-xs"} leading-relaxed ${isMobile ? "mb-2" : "mb-2"}`}
                animate={{ opacity: hovered || detailsOpen ? 0.8 : 0.4 }}
                style={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                {project.description}
              </motion.p>
=======
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0, 0, 1] }}
    >
      <GlassCard className="overflow-hidden" intensity={6}>
        {project.image && (
          <motion.div className="relative overflow-hidden">
            <motion.img
              src={project.image}
              alt={`${project.name} preview`}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover border-b border-border"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
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
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
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
<<<<<<< HEAD
                    <motion.div
                      className="px-3 pb-3 text-[10px] leading-relaxed border-t border-border pt-2 mt-1"
                      style={{
                        color: "var(--foreground)",
                        opacity: 0.7,
                      }}
                    >
                      <p className="border-l-2 pl-2" style={{ borderColor: "var(--foreground)" }}>
                        {project.details}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              : hovered &&
                project.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-5 text-[11px] leading-relaxed border-t border-border pt-3"
                      style={{
                        color: "var(--foreground)",
                        opacity: 0.9,
                      }}
                    >
                      <div className="font-mono text-[10px] tracking-wider mb-2 opacity-40">
                        TECHNICAL DEEP DIVE
                      </div>
                      <p
                        className="border-l-2 pl-3"
                        style={{ borderColor: "var(--foreground)" }}
                      >
                        {project.details}
                      </p>
                    </motion.div>
=======
                    <p className="mt-3 pl-4 border-l border-border text-sm leading-relaxed text-muted-foreground">
                      {project.details}
                    </p>
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
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
    <GlassCard className="p-4" intensity={4}>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-semibold tracking-tight text-foreground truncate">
            {project.name}
          </div>
          <div className="mt-0.5 text-xs font-mono text-muted-foreground truncate">
            {project.tech}
          </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

<<<<<<< HEAD
        {/* Mobile hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center md:hidden"
        >
          <div className="font-mono text-[10px] tracking-wider opacity-30 text-foreground">
            TAP + TO VIEW DETAILS • TAP ICONS TO OPEN
=======
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">SIDE PROJECTS</span>
            <div className="flex-1 h-px bg-border" />
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
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
