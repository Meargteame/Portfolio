import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowUpRight, X, ZoomIn } from "lucide-react";
import create4meImg from "../../assets/create4me.png";
import trustgridImg from "../../assets/trustgrid.png";
import meridianImg from "../../assets/meridian.jpg";

const caseStudies = [
  {
    id: 1,
    name: "Create4Me",
    subtitle: "Creator marketplace & influencer campaign SaaS",
    narrative:
      "Brands previously booked Ethiopian creators through fragmented Telegram messages with zero pricing transparency and frequent payment disputes. I built a two-sided marketplace featuring verified creator rate cards, campaign deliverable tracking, and automated escrow payment release via Telebirr and CBE.",
    capabilities: "Role-based auth · Telebirr & CBE escrow APIs · Creator analytics · Campaign workflows",
    stack: "React · TypeScript · Tailwind CSS · Node.js · Telebirr Escrow",
    image: create4meImg,
    live: "https://create4me.leonslab.tech",
    repo: "https://github.com/Meargteame/create4me",
  },
  {
    id: 2,
    name: "TrustGrid",
    subtitle: "Verified social proof & cryptographic identity wall",
    narrative:
      "Online businesses lose buyers when testimonials look like easily forged screenshots. I built a social proof platform that authenticates customer reviews through cryptographic Telegram identity checks, backed by PostgreSQL Row-Level Security (RLS) to enforce strict multi-tenant isolation.",
    capabilities: "Telegram OAuth · PostgreSQL Row-Level Security · Embeddable proof widgets · Moderation",
    stack: "Next.js · FastAPI · PostgreSQL RLS · Supabase",
    image: trustgridImg,
    live: "https://trustgrid.leonslab.tech/",
    repo: "https://github.com/Meargteame/trustgrid-ethiopia",
  },
  {
    id: 3,
    name: "Meridian AI",
    subtitle: "Career evaluation assistant with real-time streaming",
    narrative:
      "Traditional career assessment tools offer generic static reports that don't evaluate real skill depth. I built an interactive evaluation assistant that streams personalized guidance token-by-token using Gemini 2.5 Flash, generating dynamic skill scorecards and structured learning roadmaps with zero UI latency.",
    capabilities: "Real-time token streaming · Strict JSON schema validation · Dynamic learning maps · FastAPI endpoints",
    stack: "FastAPI · Gemini 2.5 Flash · Next.js · Tailwind CSS",
    image: meridianImg,
    live: "https://meridian-beta-coral.vercel.app",
    repo: "https://github.com/Meargteame/careerguide-ai",
  },
];

export const HomeWorkPreview = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Close on Escape & freeze body scroll when modal is active
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeImage]);

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14 sm:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-foreground tracking-tight leading-tight">
              Selected work.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
              Production web applications and platforms built 0-to-1 with real business logic, authentication, and live users.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:underline shrink-0"
          >
            All case studies &amp; apps
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Monograph-Style Case Studies (No Cluttered Nested Cards) */}
        <div className="space-y-20 sm:space-y-28">
          {caseStudies.map((project, index) => {
            const isOdd = index % 2 === 1;

            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual Preview Side (Large & Clean) */}
                <div
                  onClick={() => setActiveImage({ src: project.image, name: project.name, subtitle: project.subtitle })}
                  className={`lg:col-span-7 relative overflow-hidden rounded-2xl border border-border/80 bg-muted/20 p-3 sm:p-6 cursor-zoom-in group ${
                    isOdd ? "lg:order-2" : "lg:order-1"
                  }`}
                  title="Click to view full image"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="w-full h-auto max-h-[380px] object-contain rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Clean Zoom Hint */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[11px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Zoom
                  </div>
                </div>

                {/* Case Study Editorial Content Side */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    isOdd ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground pt-1">
                    {project.narrative}
                  </p>

                  <div className="pt-2 text-xs text-muted-foreground/80">
                    <span className="text-foreground/70 font-medium block mb-1">Capabilities:</span>
                    <span>{project.capabilities}</span>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        Live App
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="w-full max-w-6xl flex items-center justify-between mb-3 text-white px-2 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="text-base sm:text-lg font-bold font-bricolage text-white">
                  {activeImage.name}
                </h4>
                {activeImage.subtitle && (
                  <p className="text-xs text-white/60">
                    {activeImage.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                aria-label="Close zoomed image"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.name}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl select-none"
              />
            </motion.div>

            <span className="mt-3 text-xs text-white/50 select-none">
              Click anywhere or press Esc to close
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
