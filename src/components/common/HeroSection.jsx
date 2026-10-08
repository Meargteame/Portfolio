import { ArrowDown, ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="space-y-6 pb-14 sm:pb-20 border-b border-border/80">
      {/* Availability Status */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs text-muted-foreground font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
        <span>Available for new projects &amp; engineering roles</span>
      </div>

      {/* Hero Headline */}
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-bricolage text-foreground tracking-tight leading-[1.15]">
        Building web software with precision, speed, and care.
      </h2>

      {/* Editorial Introduction */}
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl font-normal">
        I am a full-stack developer based in Dansha, Ethiopia. I partner with founders and engineering teams to build reliable web applications, client portals, and production APIs—taking ideas from database architecture and tested code to fast, accessible user interfaces.
      </p>

      {/* Quick Action Links */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground text-xs sm:text-sm font-medium hover:bg-muted active:scale-[0.98] transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};
