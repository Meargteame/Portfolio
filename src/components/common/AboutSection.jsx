import { Download, ArrowUpRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-8 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
            About
          </h2>
        </div>

        <a
          href="/CV.pdf"
          download
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 active:scale-95 transition-all shrink-0 shadow-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Résumé</span>
          <ArrowUpRight className="w-3 h-3 text-muted-foreground/60" />
        </a>
      </div>

      {/* Human, authentic narrative */}
      <div className="space-y-4 text-sm sm:text-base text-foreground/85 leading-relaxed font-normal">
        <p>
          I started programming out of curiosity about how software actually works under the hood. That curiosity quickly turned into building real things: from low-level systems in C and Python during my intensive software engineering program at ALX and Holberton School, to shipping full-stack production platforms for clients.
        </p>

        <p>
          Today, most of my work centers around TypeScript, React, Next.js, and Python (FastAPI). I enjoy working across the whole stack: designing relational database models, writing clean and tested APIs, and building fast, accessible web interfaces that load without lag.
        </p>

        <p>
          Over the past few years, I have built and deployed several live products, including a minimalist ATS and job application builder (<span className="text-foreground font-semibold">BetterForm</span>), a creator marketplace with Telebirr and CBE escrow payments (<span className="text-foreground font-semibold">Create4Me</span>), a cryptographic verification wall using PostgreSQL Row-Level Security (<span className="text-foreground font-semibold">TrustGrid</span>), and headless platforms for consultancies and real estate firms.
        </p>

        <p>
          I am based in Dansha, Ethiopia, working remotely with founders and engineering teams. When I am not coding, I spend time exploring open-source codebases, reading technical books, and experimenting with new web tools.
        </p>
      </div>

      {/* Clean Quick Facts Architectural Tiles */}
      <div className="pt-6 border-t border-border/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl border border-border/80 bg-card/50 shadow-2xs space-y-1">
          <span className="block text-foreground font-semibold text-[11px] uppercase tracking-wider">Location</span>
          <span className="text-muted-foreground block">Dansha, Ethiopia</span>
        </div>
        <div className="p-3 rounded-xl border border-amber-600/30 dark:border-amber-500/30 bg-amber-600/5 dark:bg-amber-500/10 shadow-2xs space-y-1">
          <span className="block text-foreground font-semibold text-[11px] uppercase tracking-wider">Timezone</span>
          <span className="text-amber-900 dark:text-amber-300 block font-medium">UTC+3 (East Africa)</span>
        </div>
        <div className="p-3 rounded-xl border border-border/80 bg-card/50 shadow-2xs space-y-1">
          <span className="block text-foreground font-semibold text-[11px] uppercase tracking-wider">Education</span>
          <span className="text-muted-foreground block">ALX / Holberton &amp; BDU</span>
        </div>
        <div className="p-3 rounded-xl border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-600/5 dark:bg-emerald-500/10 shadow-2xs space-y-1">
          <span className="block text-foreground font-semibold text-[11px] uppercase tracking-wider">Status</span>
          <span className="text-emerald-800 dark:text-emerald-300 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open for roles
          </span>
        </div>
      </div>
    </section>
  );
};
