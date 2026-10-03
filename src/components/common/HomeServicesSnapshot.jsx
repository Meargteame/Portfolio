import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { HorizonBeamBackground } from "../effects/HorizonBeamBackground";

const services = [
  {
    num: "01",
    title: "Websites & Web Experiences",
    timeline: "1–2 weeks",
    forWho: "Businesses and designers who need a modern, fast website.",
    delivers: "Custom responsive builds in React & Next.js, pixel-perfect Figma implementation, mobile performance optimization, and live deployment on Vercel.",
    stack: "React · Next.js · Tailwind CSS",
  },
  {
    num: "02",
    title: "Custom Web Applications & MVPs",
    timeline: "2–4 weeks",
    forWho: "Founders and businesses building 0-to-1 digital products.",
    delivers: "Full-stack web applications with authentication, PostgreSQL databases, user dashboards, booking systems, and Telebirr/Stripe payment integrations.",
    stack: "Next.js · PostgreSQL · Node.js / Python",
  },
  {
    num: "03",
    title: "APIs, Backends & Integrations",
    timeline: "1–3 weeks",
    forWho: "Teams needing connected systems, reliable databases, or payment bridges.",
    delivers: "REST APIs in Python (FastAPI) or Node.js, database schema design with PostgreSQL and Row-Level Security, webhook listeners, and third-party integrations.",
    stack: "FastAPI · Node.js · PostgreSQL · REST APIs",
  },
  {
    num: "04",
    title: "AI Features & Smart Automation",
    timeline: "1–3 weeks",
    forWho: "Businesses wanting intelligent features or automated workflows.",
    delivers: "LLM prompt pipelines, streaming UI responses, structured JSON outputs with schema validation, and automated text extraction workflows using Gemini or OpenAI.",
    stack: "FastAPI · Gemini API · OpenAI · Python",
  },
];

export const HomeServicesSnapshot = () => {
  return (
    <section className="relative py-20 sm:py-28 border-t border-border/60 overflow-hidden">
      
      {/* Ambient Horizon Beam Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        <div className="absolute inset-0 w-full h-full opacity-60">
          <HorizonBeamBackground speed={0.45} className="w-full h-full" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-foreground tracking-tight leading-tight">
              Services &amp; capabilities.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
              Four focused areas of engineering. Clear deliverables, direct communication, and no agency overhead.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:underline shrink-0"
          >
            Full scope &amp; pricing factors
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Clean Typographic Index Rows with Hairline Dividers (No Card Boxes) */}
        <div className="border-t border-border/60 divide-y divide-border/60">
          {services.map((item) => (
            <div key={item.num} className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Number & Title */}
              <div className="lg:col-span-4">
                <span className="text-xs text-muted-foreground/60 block mb-2 font-mono">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-bricolage text-foreground tracking-tight">
                  {item.title}
                </h3>
                <span className="text-xs text-muted-foreground mt-2 block">
                  Typical timeline: <strong className="text-foreground font-medium">{item.timeline}</strong>
                </span>
              </div>

              {/* Middle Column: Scope & Deliverables */}
              <div className="lg:col-span-6 space-y-3">
                <p className="text-sm font-medium text-foreground/90">
                  {item.forWho}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.delivers}
                </p>
                <p className="text-xs text-muted-foreground/70 font-mono pt-1">
                  {item.stack}
                </p>
              </div>

              {/* Right Column: Direct Inquire Link */}
              <div className="lg:col-span-2 lg:text-right self-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-semibold text-foreground hover:bg-card transition-colors"
                >
                  Inquire
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
