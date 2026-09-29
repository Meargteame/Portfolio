import { Link } from "react-router";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

// Top 3 flagship projects on the home page
const flagship = projects.slice(0, 3);

const FlagshipCard = ({ project, index }) => {
  const techList = (project.tech || "").split("·").map((t) => t.trim()).filter(Boolean);
  const isOdd = index % 2 === 1;

  return (
    <div className="rounded-2xl border border-border/50 bg-card/40 overflow-hidden hover:border-border transition-all duration-300 group">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Preview */}
        <div
          className={`lg:col-span-6 overflow-hidden bg-muted/20 p-4 sm:p-6 flex items-center justify-center min-h-[240px] sm:min-h-[300px] lg:min-h-[380px] ${
            isOdd ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {project.image && (
            <img
              src={project.image}
              alt={`${project.name} preview`}
              loading="lazy"
              className="w-full h-auto max-h-[360px] object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          )}
        </div>

        {/* Content Section */}
        <div className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center lg:col-span-6 ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage mb-2">
            {project.name}
          </h3>

          {/* Subtitle / Description */}
          <p className="text-base text-foreground/80 font-medium mb-3">
            {project.description}
          </p>

          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            {project.details || project.description}
          </p>

          {/* Action Link */}
          <div className="flex items-center">
            {project.live && project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-xs sm:text-sm font-semibold tracking-tight hover:opacity-90 transition-all shadow-sm"
              >
                Launch App
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeWorkPreview = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-bricolage">
            Selected work
          </h2>
          <Link
            to="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-muted-foreground"
          >
            All case studies
          </Link>
        </div>

        <div className="space-y-4">
          {flagship.map((project, index) => (
            <FlagshipCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
