import { Link } from "react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.webp";

export const HeroSection = () => {
  return (
    <section className="pt-12 sm:pt-20 pb-16 sm:pb-24">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span className="text-foreground/90 font-medium">Available for freelance projects &amp; remote roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.15]">
              Full-stack developer building reliable web applications &amp; systems.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hi, I'm <strong className="text-foreground font-semibold">Meareg Teame</strong>. I'm a full-stack engineer based in Addis Ababa, Ethiopia. I help startups and businesses turn product ideas, designs, and manual operations into fast, production-ready software.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity shadow-xs"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-xs"
              >
                <span>Get in Touch</span>
              </Link>

              <a
                href="mailto:hello.meareg@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>hello.meareg@gmail.com</span>
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="text-foreground font-medium">10+ Shipped Applications</span>
              <span className="text-border font-bold">•</span>
              <span>2–4 Week MVP Turnaround</span>
              <span className="text-border font-bold">•</span>
              <span>React, Next.js, Node &amp; Python</span>
            </div>

          </div>

          {/* Right Column: Meareg's Photo (Classic, crisp, honest portrait) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <img
                src={mearegPhoto}
                alt="Meareg Teame — Full-Stack Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
