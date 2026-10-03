import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { useMagnet } from "../../hooks/useMagnet";
import { SilkWaveBackground } from "../effects/SilkWaveBackground";

export const HeroSection = () => {
  const magnet = useMagnet({ radius: 80, strength: 8 });

  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 overflow-hidden">
      
      {/* Ambient Fluid Silk Wave Background (inspired by bilt.nogs.dev) */}
      <div className="absolute inset-0 -top-16 sm:-top-24 pointer-events-none overflow-hidden select-none -z-10">
        <div className="absolute inset-0 w-full h-full opacity-90">
          <SilkWaveBackground
            speed={0.4}
            className="w-full h-full"
          />
        </div>
        {/* Subtle fade to page background at the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bricolage font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mx-auto">
          Websites, web apps &amp; systems that{" "}
          <span className="inline-block px-2.5 sm:px-3.5 py-0.5 rounded-sm bg-white/[0.06] border border-white/[0.14] text-foreground shadow-sm align-baseline">
            actually get used.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal">
          I help businesses and startups turn ideas, manual processes, and existing designs into reliable web applications — from first build to live production.
        </p>

        {/* Dual CTAs */}
        <div
          className="mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-4"
          onMouseMove={magnet.handlers.onMouseMove}
          onMouseLeave={magnet.handlers.onMouseLeave}
        >
          <Link to="/contact">
            <motion.span
              ref={magnet.ref}
              style={{ x: magnet.x, y: magnet.y }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm sm:text-base font-semibold tracking-tight hover:opacity-90 transition-opacity cursor-pointer shadow-md"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </motion.span>
          </Link>

          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full border border-border/80 text-foreground text-sm sm:text-base font-medium hover:border-foreground/40 transition-colors"
          >
            See My Work
          </Link>
        </div>

        {/* Proof line */}
        <div className="mt-14 pt-8 border-t border-border/50 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
          <span className="text-foreground font-medium">10+ Shipped Applications</span>
          <span className="text-border">•</span>
          <span>2–4 Week MVP Turnaround</span>
          <span className="text-border">•</span>
          <span>Full-Stack Implementation</span>
          <span className="text-border">•</span>
          <span>Direct Communication</span>
        </div>

      </div>
    </section>
  );
};
