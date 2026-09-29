import { Link } from "react-router";
import { Rocket, Zap, Server } from "lucide-react";
import { GlassCard } from "../effects/GlassCard";

const offerings = [
  {
    icon: Rocket,
    title: "0-to-1 MVP build",
    desc: "Full-stack web application — auth, database, core features, responsive UI, and deployment. Concept to production in 2–4 weeks.",
    pills: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
  },
  {
    icon: Zap,
    title: "AI workflows and LLM integration",
    desc: "Streaming UI, structured outputs, RAG pipelines, and LLM-powered automation integrated into your product or greenfield build.",
    pills: ["FastAPI", "Gemini API", "OpenAI", "Python"],
  },
  {
    icon: Server,
    title: "Scalable APIs and backends",
    desc: "High-throughput API systems with auth, rate limiting, Redis caching, and optimized database queries. Built for 10× your current load.",
    pills: ["FastAPI", "Go", "Node.js", "Redis"],
  },
];

export const HomeServicesSnapshot = () => {
  return (
    <section className="py-20 sm:py-24 border-t border-border/60">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-bricolage">
            How I can help
          </h2>
          <Link
            to="/services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-muted-foreground"
          >
            Full service breakdown
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offerings.map((item) => (
            <GlassCard key={item.title} className="p-6 sm:p-7 flex flex-col h-full" intensity={5}>
              <div className="w-9 h-9 rounded-lg border border-border/80 flex items-center justify-center text-foreground/70 mb-5">
                <item.icon className="w-4.5 h-4.5" />
              </div>

              <h3 className="text-base font-semibold text-foreground tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{item.desc}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.pills.map((p) => (
                  <span key={p} className="px-2 py-0.5 rounded-md border border-border/70 text-xs text-muted-foreground">
                    {p}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
