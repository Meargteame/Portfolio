import { CheckCircle2, Zap, ShieldCheck, Download, ArrowUpRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-1.5">
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold">
            05 // About & Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
            Engineering with Ownership.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            Software engineering centered on business impact, direct technical ownership, and production reliability.
          </p>
        </div>

        <a
          href="/CV.pdf"
          download
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shrink-0 shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Résumé</span>
          <ArrowUpRight className="w-3 h-3 text-muted-foreground/60" />
        </a>
      </div>

      {/* Sellable Proposition Lead */}
      <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7 space-y-3 shadow-xs">
        <p className="text-base sm:text-lg text-foreground font-semibold leading-relaxed font-bricolage">
          “I don’t just write code—I solve business bottlenecks through clean architecture, high-converting interfaces, and resilient backend systems.”
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Over the past three years, I have helped founders, startups, and consulting firms turn ambitious ideas into live revenue-generating platforms. I bridge the gap between pixel-perfect frontend engineering, scalable database modeling, and automated cloud deployments.
        </p>
      </div>

      {/* 3 Core Value Pillars (Why Work With Me) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-border bg-card/40 p-5 space-y-3 shadow-2xs hover:border-foreground/30 transition-colors">
          <div className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center text-foreground shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="font-bold font-bricolage text-base text-foreground tracking-tight">
            Full-Cycle Ownership
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            From schema design and authentication to responsive Next.js UIs and server hosting. You work with one accountable engineer who delivers end-to-end.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-5 space-y-3 shadow-2xs hover:border-foreground/30 transition-colors">
          <div className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center text-foreground shadow-2xs">
            <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 className="font-bold font-bricolage text-base text-foreground tracking-tight">
            Performance First
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Sub-second API latency with FastAPI, optimized PostgreSQL queries with Row-Level Security, and lightweight bundles that load fast anywhere in the world.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-5 space-y-3 shadow-2xs hover:border-foreground/30 transition-colors">
          <div className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center text-foreground shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-bold font-bricolage text-base text-foreground tracking-tight">
            Clear Communication
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            No jargon, no hand-waving, no ghosting. Transparent technical milestones, clean Git pull requests, and prompt async updates across timezones.
          </p>
        </div>
      </div>

      {/* Snapshot / Quick Facts */}
      <div className="rounded-xl border border-border/80 bg-background/60 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-foreground font-semibold">Status:</span>
          <span>Available for select projects & contracts</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-foreground font-semibold">Timezone:</span>
          <span>Dansha (UTC+3) · Flexible overlap with US & EU</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-foreground font-semibold">Focus:</span>
          <span>SaaS, Client Portals, Fintech Escrows & APIs</span>
        </div>
      </div>
    </section>
  );
};
