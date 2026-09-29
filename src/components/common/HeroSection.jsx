import { motion } from "motion/react";
import { ArrowUpRight, Zap, Rocket, Award } from "lucide-react";

const metrics = [
  { icon: Rocket,     value: "10+ Shipped Apps", label: "Production web platforms" },
  { icon: Zap,        value: "2–4 Weeks",        label: "Average 0-to-1 MVP delivery" },
  { icon: Award,      value: "A2SV Fellow",      label: "Top 1% engineer in Africa" },
];

export const HeroSection = () => {
  return (
    <section className="relative pt-28 sm:pt-36 md:pt-44 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 w-full relative z-10">
        
        {/* Centered Hero Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[54px] font-bricolage tracking-tight leading-[1.12]"
          >
            <span className="text-muted-foreground/60 font-normal">I turn </span>
            <span className="text-foreground font-bold">promising ideas </span>
            <span className="text-muted-foreground/60 font-normal">into </span>
            <span className="text-foreground font-bold">Web Apps !</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg font-normal"
          >
            From idea → launch, I handle the tech.
          </motion.p>

          {/* Clean Solid Hero Red CTA Button (No Glow, No Shadow) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 sm:mt-8"
          >
            <a
              href="https://cal.com/meareg/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-2xl bg-[#e11d48] text-white text-sm sm:text-base font-semibold tracking-tight hover:bg-[#be123c] transition-all duration-200 cursor-pointer shadow-none border-0"
              >
                Book Discovery Call
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Proof Metrics Bar (Full card comfortably visible on all laptop screens with clean breathing space) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl shadow-sm"
        >
          {metrics.map((m) => (
            <div key={m.value} className="p-2 sm:p-2.5 flex flex-col items-center text-center">
              <m.icon className="w-4 h-4 text-muted-foreground mb-1.5" />
              <div className="text-base sm:text-lg font-bold font-bricolage text-foreground">{m.value}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{m.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
