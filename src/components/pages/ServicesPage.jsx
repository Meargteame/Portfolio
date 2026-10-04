import { Footer } from "../common/Footer";
import { GlassCard } from "../effects/GlassCard";
import { Globe, AppWindow, Cpu, Sparkles, CheckCircle2, Clock, ArrowUpRight, HelpCircle } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const servicesList = [
  {
    id: 1,
    icon: Globe,
    title: "Websites & Web Experiences",
    tagline: "High-converting, responsive websites that load fast and look bespoke.",
    forWho: "Small & medium businesses, startups, and creative agencies with Figma designs.",
    problems: [
      "Current website looks dated, generic, or slow on mobile devices",
      "Have polished Figma designs but need clean, pixel-perfect frontend implementation",
      "Struggling with slow loading speeds, poor SEO rankings, or low conversion rates",
    ],
    deliverables: [
      "Custom responsive build in React / Next.js with Tailwind CSS",
      "Pixel-perfect translation from Figma, Adobe XD, or sketch wireframes",
      "Mobile-optimized performance, metadata, and core SEO foundations",
      "Production deployment to Vercel with custom domain setup",
      "Contact form and lead capture integration",
    ],
    timeline: "1–2 weeks",
    scopeFactors: "Number of unique page layouts, interactive components, CMS integration, and content readiness.",
  },
  {
    id: 2,
    icon: AppWindow,
    title: "Custom Web Applications & MVPs",
    tagline: "Full-stack web products built 0-to-1 to test market demand and onboard users.",
    forWho: "Startup founders, entrepreneurs, and businesses automating operational bottlenecks.",
    problems: [
      "Have a validated concept but lack the technical team to build the MVP",
      "Managing complex business data through fragile spreadsheets and manual chat messages",
      "Need a secure web portal with user authentication, databases, and payment collection",
    ],
    deliverables: [
      "Full-stack web application (Next.js/React frontend + FastAPI/Node backend)",
      "Secure authentication (email, OAuth, role-based access control)",
      "Database schema modeling with PostgreSQL / Supabase and Row-Level Security",
      "Core feature development (dashboards, search filters, booking flows, state management)",
      "Payment processing integration (Telebirr, CBE, Stripe)",
      "Production hosting, automated CI/CD pipeline, and 30-day post-launch warranty",
    ],
    timeline: "2–4 weeks",
    scopeFactors: "Depth of user roles, third-party integrations, complexity of transactional logic, and reporting needs.",
  },
  {
    id: 3,
    icon: Cpu,
    title: "APIs, Backends & System Integrations",
    tagline: "Resilient backend services, database architectures, and third-party integrations.",
    forWho: "Companies needing connected tools, payment bridges, or dedicated database systems.",
    problems: [
      "Different software tools operate in silos without automated data synchronization",
      "Need to connect local payment gateways (Telebirr, Chapa, CBE) to an existing product",
      "Existing backend is bottlenecked, unoptimized, or lacks structured documentation",
    ],
    deliverables: [
      "RESTful API design and implementation in Python (FastAPI/Flask) or Node.js/Express",
      "Third-party webhook listeners and asynchronous task workers",
      "PostgreSQL schema modeling, query indexing, and data migration scripts",
      "Payment gateway integrations with automated transaction verification and reconciliation",
      "Clean OpenAPI / Swagger interactive documentation for your team",
    ],
    timeline: "1–3 weeks",
    scopeFactors: "Volume of endpoints, number of external service integrations, and legacy database complexity.",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "AI Features & Automated Workflows",
    tagline: "Practical LLM integration and process automation that saves real hours.",
    forWho: "Businesses wanting smart features or automated workflows without research complexity.",
    problems: [
      "Staff spending hours manually analyzing text, summarizing documents, or answering repetitive queries",
      "Want to build an AI-powered assistant or intelligent search feature into an existing app",
      "Struggling with unreliable, hallucinated, or unformatted outputs from raw AI prompts",
    ],
    deliverables: [
      "LLM integration with Gemini, Claude, or OpenAI APIs with token cost optimization",
      "Streaming user interface responses for zero-lag conversational UX",
      "Strict JSON schema enforcement to ensure 100% predictable, parseable AI responses",
      "Retrieval-Augmented Generation (RAG) pipelines over your business documents",
      "Automated extraction workflows that turn unstructured user inputs into database records",
    ],
    timeline: "1–3 weeks per feature",
    scopeFactors: "Prompt chaining depth, retrieval vector store size, and context window requirements.",
  },
];

export const ServicesPage = () => {
  return (
    <div>
      <main>
        {/* Header */}
        <section className="pt-12 sm:pt-16 pb-12 max-w-5xl mx-auto px-6">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Services &amp; Scope
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            How we can work together.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I work with founders and businesses as an independent full-stack engineer. Every engagement is scoped clearly around outcomes, transparent milestones, and reliable delivery.
          </p>
        </section>

        {/* Services List */}
        <section className="pb-24 max-w-5xl mx-auto px-6 space-y-8">
          {servicesList.map((svc) => (
            <GlassCard key={svc.id} className="p-6 sm:p-9 lg:p-10" intensity={5}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Overview & Problems */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-border/80 bg-muted/30 flex items-center justify-center text-foreground">
                      <svc.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-bricolage text-foreground tracking-tight">
                        {svc.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-medium text-foreground/90 leading-snug">
                    {svc.tagline}
                  </p>

                  <div>
                    <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      Who it's for:
                    </span>
                    <p className="text-xs sm:text-sm text-foreground/80">{svc.forWho}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-rose-500 uppercase tracking-wider block mb-2">
                      Problems this solves:
                    </span>
                    <div className="space-y-2">
                      {svc.problems.map((p) => (
                        <div key={p} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-foreground/40 font-bold">•</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Deliverables, Timeline, Scope & CTA */}
                <div className="lg:col-span-6 lg:border-l lg:border-border/60 lg:pl-8 space-y-6">
                  <div>
                    <span className="text-xs font-mono font-semibold text-emerald-500 uppercase tracking-wider block mb-3">
                      What I deliver:
                    </span>
                    <div className="space-y-2">
                      {svc.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/80 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-1">
                        <Clock className="w-3.5 h-3.5 text-foreground/70" />
                        <span>Typical Timeline</span>
                      </div>
                      <p className="text-sm font-bold text-foreground font-bricolage">{svc.timeline}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-1">
                        <HelpCircle className="w-3.5 h-3.5 text-foreground/70" />
                        <span>Pricing Factors</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{svc.scopeFactors}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <span>Inquire about this service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </GlassCard>
          ))}
        </section>

        {/* Bottom Callout */}
        <section className="pb-24 max-w-5xl mx-auto px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl border border-border/70 bg-card/40 max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground">
              Not sure which service your project fits into?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Most projects involve a combination of frontend, backend, and integration work. Describe what you want to achieve, and I'll send you a recommended breakdown.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Describe your project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};
