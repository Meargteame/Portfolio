import { motion } from "motion/react";
import { Link } from "react-router";
import { Search, Compass, Rocket, ArrowUpRight } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Discover & Define",
    desc: "I nail down your users, core features, and what 'done' looks like — before a single line of code gets written.",
    icon: Search,
    color: "from-blue-500/10 to-transparent",
    tag: "SCOPING & ROADMAP",
  },
  {
    step: "Step 2",
    title: "Architecture & Prototype",
    desc: "You see real screens, API contracts, and database schemas before heavy engineering begins. Flows get validated early so nothing gets built twice.",
    icon: Compass,
    color: "from-purple-500/10 to-transparent",
    tag: "SCHEMA & UI FLOWS",
  },
  {
    step: "Step 3",
    title: "Build & Ship",
    desc: "Clean, scalable full-stack code in Next.js, React, and Go. Tested end-to-end, integrated with real payment gateways, and deployed to production.",
    icon: Rocket,
    color: "from-emerald-500/10 to-transparent",
    tag: "PRODUCTION DEPLOY",
  },
];

export const HomeProcess = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/60">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground font-bricolage">
            Idea to launch in weeks,
            <br />
            Not months
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Three focused phases. No fluff, no delays.
          </p>
        </motion.div>

        {/* 3 Steps Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl flex flex-col justify-between group hover:border-foreground/30 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold tracking-wider text-rose-500 uppercase">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl border border-border/80 bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-foreground font-bricolage mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground/70">
                <span>{item.tag}</span>
                <span className="text-emerald-500 font-bold">✓</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 sm:mt-16 flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Ready to bring your web app idea to life?
          </p>
          <a
            href="https://cal.com/meareg/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold tracking-wide hover:opacity-90 transition-all shadow-sm cursor-pointer"
            >
              Start your Project
              <ArrowUpRight className="w-4 h-4 text-rose-500" />
            </motion.span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
