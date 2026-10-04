import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Websites & Web Experiences",
    timeline: "1–2 weeks",
    description: "Custom, responsive websites built in React and Next.js. Fast load times, clean code, accessibility, and smooth production deployment.",
    stack: "React · Next.js · Tailwind CSS",
  },
  {
    num: "02",
    title: "Full-Stack Web Apps & MVPs",
    timeline: "2–4 weeks",
    description: "Turn ideas into working software. User authentication, database models, dashboards, payments, and booking flows built to handle real traffic.",
    stack: "Next.js · PostgreSQL · Node.js / Python",
  },
  {
    num: "03",
    title: "APIs & Backend Systems",
    timeline: "1–3 weeks",
    description: "Robust REST APIs, database schemas, background jobs, webhook listeners, and third-party integrations (Stripe, Telebirr, CBE).",
    stack: "FastAPI · Express · PostgreSQL · Docker",
  },
  {
    num: "04",
    title: "AI & LLM Workflows",
    timeline: "1–2 weeks",
    description: "Practical generative AI features: streaming conversational interfaces, automated data extraction pipelines, and document search.",
    stack: "Gemini API · OpenAI · FastAPI · Python",
  },
];

export const HomeServicesSnapshot = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
              Services &amp; Scope.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Clear deliverables, fixed estimates, and direct communication with zero agency overhead.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-foreground hover:underline shrink-0"
          >
            <span>Full scope &amp; pricing</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2x2 Clean Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.num}
              className="p-6 rounded-xl border border-border bg-card shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  {item.num}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {item.timeline}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground font-bricolage">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 text-xs font-mono text-muted-foreground">
                {item.stack}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
