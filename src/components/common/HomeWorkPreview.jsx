import { Link } from "react-router";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import create4meImg from "../../assets/create4me.png";
import trustgridImg from "../../assets/trustgrid.png";
import meridianImg from "../../assets/meridian.jpg";

const caseStudies = [
  {
    id: 1,
    name: "Create4Me",
    subtitle: "Creator marketplace & campaign management platform",
    narrative:
      "A two-sided marketplace connecting Ethiopian content creators with brands. Features verified creator rate cards, campaign deliverable tracking, and automated escrow payment workflows via Telebirr and CBE.",
    stack: "React · TypeScript · Node.js · Express · Telebirr Escrow",
    image: create4meImg,
    live: "https://create4me.leonslab.tech",
    repo: "https://github.com/Meargteame/create4me",
  },
  {
    id: 2,
    name: "TrustGrid",
    subtitle: "Cryptographic social proof & review verification platform",
    narrative:
      "A platform that validates client reviews through cryptographic Telegram identity checks. Built with PostgreSQL Row-Level Security (RLS) to enforce strict tenant isolation and provide embeddable trust widgets.",
    stack: "Next.js · FastAPI · PostgreSQL RLS · Supabase · Tailwind",
    image: trustgridImg,
    live: "https://trustgrid.leonslab.tech/",
    repo: "https://github.com/Meargteame/trustgrid-ethiopia",
  },
  {
    id: 3,
    name: "Meridian AI",
    subtitle: "Real-time AI career evaluation & personalized roadmap assistant",
    narrative:
      "An interactive assessment platform streaming personalized career evaluations token-by-token using Gemini 2.5 Flash, generating dynamic skill scorecards and structured learning roadmaps with strict JSON validation.",
    stack: "FastAPI · Gemini 2.5 Flash · Next.js · Tailwind CSS",
    image: meridianImg,
    live: "https://meridian-beta-coral.vercel.app",
    repo: "https://github.com/Meargteame/careerguide-ai",
  },
];

export const HomeWorkPreview = () => {
  return (
    <section id="work" className="py-16 sm:py-24 border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Selected Projects.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
              Production web applications built 0-to-1 with real business logic, authentication, and live users.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:underline shrink-0"
          >
            <span>All 10+ projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Clean Project Rows */}
        <div className="space-y-16 sm:space-y-20">
          {caseStudies.map((project, index) => {
            const isOdd = index % 2 === 1;

            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Visual Preview */}
                <div
                  className={`lg:col-span-7 rounded-xl border border-neutral-800 bg-neutral-900/60 p-2 sm:p-4 overflow-hidden ${
                    isOdd ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[360px] object-contain rounded-lg"
                  />
                </div>

                {/* Project Description */}
                <div
                  className={`lg:col-span-5 space-y-3.5 ${
                    isOdd ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-400">
                    {project.narrative}
                  </p>

                  <div className="pt-1 text-xs font-mono text-neutral-400">
                    {project.stack}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors shadow-sm"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-800 bg-neutral-900/60 text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
