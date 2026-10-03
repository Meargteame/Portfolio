import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useMagnet } from "../../hooks/useMagnet";
import { DawnCrestBackground } from "../effects/DawnCrestBackground";

export const HomeContactCallout = () => {
  const magnet = useMagnet({ radius: 80, strength: 8 });

  return (
    <section className="relative py-24 sm:py-36 border-t border-border/60 overflow-hidden">
      
      {/* Ambient Rising Horizon Crest Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        <div className="absolute inset-0 w-full h-full opacity-65">
          <DawnCrestBackground speed={0.5} className="w-full h-full" />
        </div>
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 text-center relative z-10">
        
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-bricolage text-foreground tracking-tight leading-[1.1]">
            Have something you want built?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you have a finished Figma design, a rough concept for an MVP, or an internal process that needs software — send me the details and I'll give you a clear, honest recommendation.
          </p>
        </div>

        {/* Dual Actions */}
        <div
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          onMouseMove={magnet.handlers.onMouseMove}
          onMouseLeave={magnet.handlers.onMouseLeave}
        >
          <Link to="/contact">
            <motion.span
              ref={magnet.ref}
              style={{ x: magnet.x, y: magnet.y }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-base font-semibold tracking-tight hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </motion.span>
          </Link>

          <a
            href="mailto:hello.meareg@gmail.com"
            className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-border text-foreground text-base font-medium hover:border-foreground/40 transition-colors cursor-pointer"
          >
            Email: hello.meareg@gmail.com
          </a>
        </div>

        {/* Reassurance */}
        <p className="mt-8 text-xs text-muted-foreground/70 font-mono">
          Replies within 24 hours · Clear scope &amp; transparent timeline · No upfront fee
        </p>

      </div>
    </section>
  );
};
