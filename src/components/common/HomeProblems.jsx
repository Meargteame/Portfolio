import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.webp";
import { ContourWavesBackground } from "../effects/ContourWavesBackground";

const scenarios = [
  {
    title: "Have an idea, but no working product yet",
    solution: "0-to-1 MVP Development",
    detail: "I scope and build a complete working MVP in 2 to 4 weeks so you can test market demand with real users and begin customer validation with real software.",
  },
  {
    title: "Have Figma designs, but no developer to implement them",
    solution: "Figma to React / Next.js",
    detail: "I turn your designs into clean, responsive, fast-loading code. No cutting corners on mobile layouts, interactions, or typography.",
  },
  {
    title: "Still managing business processes on spreadsheets and chat",
    solution: "Custom Business Portals & Dashboards",
    detail: "I build dedicated internal tools, customer portals, and booking systems that automate repetitive tracking and save your team hours every week.",
  },
  {
    title: "Need an API, database system, or payment integration",
    solution: "APIs, Backends & Integrations",
    detail: "I build REST APIs in Python or Node.js, design PostgreSQL database schemas, and connect local and international payment gateways (Telebirr, CBE, Stripe).",
  },
  {
    title: "Want to add AI or smart automation to an existing product",
    solution: "LLM Integrations & AI Workflows",
    detail: "I integrate practical LLM capabilities — streaming UI assistants, automated data extraction, and document search — into your application without research overhead.",
  },
];

export const HomeProblems = () => {
  return (
    <section className="relative py-20 sm:py-28 border-t border-border/60 overflow-hidden">
      
      {/* Ambient Topographic Contour Wave Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        <div className="absolute inset-0 w-full h-full opacity-60">
          <ContourWavesBackground speed={0.45} className="w-full h-full" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Editorial Split: Left Title, Promise & Meareg's Photo, Right Typographic List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Context, Promise & Portrait Photo */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-foreground tracking-tight leading-tight">
              Where I step in.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              You don't need a technical spec or database diagram. You just need to explain what you're trying to solve — I handle the technical architecture, development, and live deployment.
            </p>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:underline"
              >
                Tell me what you're building
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Meareg's Photo in the Rectangle */}
            <div className="mt-8 relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.12] bg-muted/20 shadow-2xl group">
              <img
                src={mearegPhoto}
                alt="Meareg Teame — Full-Stack Developer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Clean Typographic Rows with Hairline Dividers */}
          <div className="lg:col-span-7 divide-y divide-border/60 pt-2 lg:pt-0">
            {scenarios.map((item) => (
              <div key={item.title} className="py-6 first:pt-0 last:pb-0 group">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold font-bricolage text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground/80 sm:text-right shrink-0">
                    {item.solution}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
