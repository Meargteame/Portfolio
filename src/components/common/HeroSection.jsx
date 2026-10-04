import { Link } from "react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.webp";

export const HeroSection = () => {
  return (
    <section className="pt-12 sm:pt-16 pb-14 sm:pb-18">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Available for freelance projects &amp; remote roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Full-stack developer building reliable web applications &amp; systems.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
              Hi, I'm <strong className="text-neutral-200 font-medium">Meareg Teame</strong>. I'm a full-stack engineer based in Addis Ababa, Ethiopia. I help startups and businesses turn product ideas, designs, and manual operations into fast, production-ready software.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 text-sm font-medium hover:text-white hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
              >
                <span>Get in Touch</span>
              </Link>

              <a
                href="mailto:hello.meareg@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>hello.meareg@gmail.com</span>
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-400">
              <span className="text-neutral-300 font-medium">10+ Shipped Applications</span>
              <span className="text-neutral-700">•</span>
              <span>2–4 Week MVP Turnaround</span>
              <span className="text-neutral-700">•</span>
              <span>React, Next.js, Node &amp; Python</span>
            </div>

          </div>

          {/* Right Column: Meareg's Photo (Classic, crisp, honest portrait) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
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
