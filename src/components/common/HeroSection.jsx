import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 border-b border-border">
      <div className="space-y-6 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold font-bricolage text-foreground tracking-tight leading-snug">
          Building web software with precision, speed, and care.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          I am a software developer based in Dansha, Ethiopia. I build end-to-end web applications, client portals, and APIs—taking projects from initial concept through architecture, database modeling, and live production deployment.
        </p>

        {/* Quick Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="mailto:hello.meareg@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>hello.meareg@gmail.com</span>
            <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
          </a>
        </div>


      </div>
    </section>
  );
};
