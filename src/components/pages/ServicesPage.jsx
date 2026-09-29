import { Navbar } from "../common/Navbar";
import { Footer } from "../common/Footer";
import { GlassCard } from "../effects/GlassCard";
import { Rocket, Zap, Server, CheckCircle2, Clock, CalendarDays } from "lucide-react";
import { motion } from "motion/react";

const packages = [
  {
    id: 1,
    icon: Rocket,
    title: "0-to-1 MVP build",
    headline: "From raw idea to production in 2–4 weeks.",
    description:
      "I take your concept and build a complete, deployed web product — database schema, auth, core features, and a polished frontend. Everything needed to launch and start gathering real user feedback.",
    includes: [
      "Product scoping and architecture session",
      "Authentication and role-based access control",
      "Database schema design — PostgreSQL and Supabase",
      "Core feature development, frontend and backend",
      "Responsive UI with Next.js and Tailwind CSS",
      "Production deployment on Vercel and Supabase",
      "Basic CI/CD pipeline setup",
      "One week of post-launch support",
    ],
    stack: ["Next.js", "React", "TypeScript", "FastAPI or Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    timeline: "2–4 weeks",
    bestFor: "Startups, founders, and early-stage products that need a working MVP fast.",
  },
  {
    id: 2,
    icon: Zap,
    title: "AI workflows and LLM integration",
    headline: "Add intelligent features to your product without the complexity.",
    description:
      "I design and implement LLM-powered features — streaming UI, structured outputs, RAG pipelines, and AI-driven automation — into your existing product or a new build.",
    includes: [
      "LLM prompt engineering and optimization",
      "Streaming UI with real-time token responses",
      "Structured JSON output with schema validation",
      "Vector search and RAG pipeline implementation",
      "Gemini, OpenAI, or Claude API integration",
      "AI-powered backend endpoints with FastAPI",
      "Token usage estimation and cost optimization",
    ],
    stack: ["FastAPI", "Python", "Gemini API", "OpenAI", "Supabase pgvector", "LangChain"],
    timeline: "1–3 weeks per workflow",
    bestFor: "Products adding AI features, or founders building AI-native tools.",
  },
  {
    id: 3,
    icon: Server,
    title: "Scalable APIs and backends",
    headline: "Robust systems that hold under real load.",
    description:
      "Production-grade API systems with proper auth, rate limiting, caching, and optimized database queries. Built to handle 10× your current traffic with clean, maintainable architecture.",
    includes: [
      "RESTful or gRPC API design and implementation",
      "JWT and OAuth 2.0 authentication",
      "Redis caching and rate limiting",
      "Database query optimization and indexing",
      "PostgreSQL Row-Level Security",
      "OpenAPI and Swagger documentation",
      "Docker containerization and CI/CD",
    ],
    stack: ["FastAPI", "Go", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS or Fly.io"],
    timeline: "1–3 weeks",
    bestFor: "Products that need scalable backend infrastructure or a full API refactor.",
  },
];

const PackageCard = ({ pkg, index }) => (
  <GlassCard className="p-7 sm:p-9 flex flex-col h-full" intensity={5}>
    <div className="flex items-start justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg border border-border/80 flex items-center justify-center text-foreground/70">
          <pkg.icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground tracking-tight font-bricolage leading-tight">
            {pkg.title}
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border/70 rounded-full px-3 py-1 whitespace-nowrap flex-shrink-0">
        <Clock className="w-3 h-3" />
        {pkg.timeline}
      </div>
    </div>

    <p className="text-sm font-medium text-foreground/80 mb-2">{pkg.headline}</p>
    <p className="text-sm leading-relaxed text-muted-foreground mb-6">{pkg.description}</p>

    <div className="mb-6">
      <p className="text-xs font-medium text-foreground/60 mb-3">What's included</p>
      <div className="space-y-2">
        {pkg.includes.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70 mt-0.5 flex-shrink-0" />
            <span className="text-xs leading-relaxed text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <p className="text-xs font-medium text-foreground/60 mb-3">Tech</p>
      <div className="flex flex-wrap gap-1.5">
        {pkg.stack.map((t) => (
          <span key={t} className="px-2.5 py-0.5 rounded-full border border-border/70 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="mb-8 flex-1">
      <p className="text-xs font-medium text-foreground/60 mb-1.5">Best for</p>
      <p className="text-xs text-muted-foreground">{pkg.bestFor}</p>
    </div>

    <a
      href="https://cal.com/meareg/15min"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
      >
        <CalendarDays className="w-4 h-4" />
        Start this project
      </motion.div>
    </a>
  </GlassCard>
);

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Services.
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-xl">
            Three focused packages with clear scope, defined timelines, and a direct booking flow. No retainers, no ambiguity.
          </p>
        </section>

        <section className="pb-24 max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </section>

        <section className="pb-24 max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="text-center border-t border-border/60 pt-16">
            <p className="text-sm text-muted-foreground mb-6">
              Not sure which package fits? Book a free 15-minute discovery call.
            </p>
            <a
              href="https://cal.com/meareg/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              >
                <CalendarDays className="w-4 h-4" />
                Book a free discovery call
              </motion.div>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};
