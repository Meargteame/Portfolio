import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.webp";

export const HomePhilosophy = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/60">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bricolage tracking-tight leading-[1.08]">
            <span className="text-muted-foreground/60 font-normal">Product thinking, </span>
            <br />
            <span className="text-foreground font-bold">built into every app.</span>
          </h2>
        </motion.div>

        {/* Content Grid: Photo Left, Philosophy Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Framed Portrait with Badge & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Main Photo Card with Rich Elevation */}
              <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-neutral-900 shadow-2xl shadow-black/40 aspect-[4/5] group">
                
                {/* Floating badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 border border-white/20 backdrop-blur-md text-[11px] font-mono text-white tracking-wide">
                  engineer & founder
                </div>

                <img
                  src={mearegPhoto}
                  alt="Meareg Teame"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Bottom Social Badges */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                  <a
                    href="https://github.com/Meargteame"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-8 h-8 rounded-full bg-black/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/meareg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-black/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://x.com/meareg_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="w-8 h-8 rounded-full bg-black/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Attribution under photo */}
              <div className="mt-4">
                <h3 className="text-base font-bold text-foreground font-bricolage">Meareg Teame</h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Full-Stack Web Engineer → React, Next.js & Go
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Ethos Prose */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            <p className="text-xl sm:text-2xl font-semibold text-foreground font-bricolage leading-snug">
              Years of experience taught me to make product decisions before writing code.
            </p>

            <p>
              I turn early-stage ideas into dependable web products clear to use, practical to build & ready to launch. Having built production SaaS platforms like Create4Me and TrustGrid under software studio Leons Lab, I understand that engineering is only as good as the problem it solves.
            </p>

            <div className="pt-2">
              <p className="text-xl sm:text-2xl font-bold text-foreground font-bricolage">
                Good work is quiet. Bad work is loud.
              </p>
              <p className="mt-3">
                That means owning the technical details and refining them until the product feels simple, reliable, and completely out of the user's way. No over-engineered bloat—just resilient code and fast user journeys.
              </p>
            </div>

            {/* Quick Evidence Callouts */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm">
                <div className="text-base font-bold font-bricolage text-foreground">10+ Shipped</div>
                <div className="text-xs text-muted-foreground mt-0.5">Production platforms</div>
              </div>
              <div className="p-3.5 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm">
                <div className="text-base font-bold font-bricolage text-foreground">Top 1% Fellow</div>
                <div className="text-xs text-muted-foreground mt-0.5">A2SV Academy</div>
              </div>
              <div className="p-3.5 rounded-xl border border-border/70 bg-card/40 backdrop-blur-sm">
                <div className="text-base font-bold font-bricolage text-foreground">2–4 Weeks</div>
                <div className="text-xs text-muted-foreground mt-0.5">Avg MVP turnaround</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
