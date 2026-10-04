import { Globe, AppWindow, Cpu, Sparkles, CheckCircle2, Clock } from "lucide-react";

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
    ],
    timeline: "1–2 weeks",
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
      "Payment processing integration (Telebirr, CBE, Stripe)",
      "Automated CI/CD deployment pipeline and 30-day post-launch warranty",
    ],
    timeline: "2–4 weeks",
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
      "Payment gateway integrations with automated transaction verification",
    ],
    timeline: "1–3 weeks",
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
      "Automated extraction workflows that turn unstructured user inputs into database records",
    ],
    timeline: "1–2 weeks",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 border-t border-border scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Services &amp; Scope
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            How we can work together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            I work with founders and businesses as an independent full-stack engineer. Every engagement is scoped clearly around outcomes, transparent milestones, and reliable delivery.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between space-y-6 hover:border-foreground/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{svc.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-bricolage text-foreground">
                      {svc.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground/80 mt-1">
                      {svc.tagline}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      Who it's for:
                    </span>
                    <p className="text-xs text-muted-foreground">{svc.forWho}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:underline"
                  >
                    <span>Inquire about this service</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
