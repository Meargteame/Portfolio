import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

const CornerBrackets = ({ active }) => (
  <>
    <motion.div
      className="absolute top-0 left-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute top-0 right-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute top-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 left-0 h-full w-px bg-foreground" />
    </motion.div>
    <motion.div
      className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute bottom-0 right-0 w-full h-px bg-foreground" />
      <div className="absolute bottom-0 right-0 h-full w-px bg-foreground" />
    </motion.div>
  </>
);

const ProjectRow = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isMobile = useMobile(768);
  const num = String(index + 1).padStart(2, "0");

  const handleCardClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setDetailsOpen(!detailsOpen);
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(project.repo, "_blank");
  };

  const handleLiveClick = (e) => {
    e.stopPropagation();
    if (project.live) {
      window.open(project.live, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.25, 0, 0, 1],
      }}
      className="relative block"
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

        <AnimatePresence>
          {(hovered || detailsOpen) && (
            <motion.div
              className="absolute left-0 right-0 h-px pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--foreground), transparent)",
                opacity: 0.12,
              }}
              initial={{ top: 0 }}
              animate={{ top: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "linear" }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px"
          animate={{
            opacity: hovered || detailsOpen ? 0.5 : 0,
            scaleY: hovered || detailsOpen ? 1 : 0,
          }}
          style={{ background: "var(--foreground)", transformOrigin: "center" }}
          transition={{ duration: 0.2 }}
        />

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
                    className="font-mono text-[9px] tracking-wider opacity-30 text-foreground"
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
                    className={`text-[8px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm ${isMobile ? "ml-auto" : ""}`}
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
                  className="text-[9px] font-mono tracking-wider mb-1.5 opacity-40"
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
            </div>

            <div className={`flex items-center gap-2 ${isMobile ? "ml-auto self-start" : "ml-3 self-start"}`}>
              {isMobile && (
                <motion.div
                  animate={{ rotate: detailsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-sm"
                  style={{ color: "var(--foreground)", opacity: 0.5 }}
                >
                  {detailsOpen ? "−" : "+"}
                </motion.div>
              )}

              {project.live && (
                <motion.button
                  onClick={handleLiveClick}
                  className={`font-mono text-sm ${isMobile ? "p-1.5 -m-1.5" : ""}`}
                  animate={{ opacity: isMobile ? 0.6 : (hovered ? 0.8 : 0.3) }}
                  style={{ color: "var(--foreground)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className={isMobile ? "w-4 h-4" : "w-4 h-4"} />
                </motion.button>
              )}

              <motion.button
                onClick={handleGithubClick}
                className={`font-mono text-sm ${isMobile ? "p-1.5 -m-1.5" : ""}`}
                animate={{ opacity: isMobile ? 0.6 : (hovered ? 0.8 : 0.3) }}
                style={{ color: "var(--foreground)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className={isMobile ? "w-4 h-4" : "w-4 h-4"} />
              </motion.button>
            </div>
          </div>

          {/* Details section - collapsible on mobile, always visible on hover on desktop */}
          <AnimatePresence>
            {isMobile
              ? detailsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
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
                      <div className="font-mono text-[9px] tracking-wider mb-2 opacity-40">
                        TECHNICAL DEEP DIVE
                      </div>
                      <p
                        className="border-l-2 pl-3"
                        style={{ borderColor: "var(--foreground)" }}
                      >
                        {project.details}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://PROJECTS
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="font-mono text-[10px] tracking-widest opacity-20 text-foreground">
              {projects.length} ENTRIES
            </div>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground leading-none">
              PROJECTS
            </h2>
            <motion.div
              className="mt-2 h-[2px] bg-foreground"
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-[1px]">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center md:hidden"
        >
          <div className="font-mono text-[8px] tracking-wider opacity-30 text-foreground">
            TAP + TO VIEW DETAILS • TAP ICONS TO OPEN
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
