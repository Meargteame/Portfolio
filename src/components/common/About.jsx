import { motion } from "motion/react";
import { GlassCard } from "../effects/GlassCard";
import { Code2, Database, Layers, CheckCircle2, MessageSquare, Rocket } from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.webp";

const principles = [
  {
    icon: Code2,
    title: "Clean Frontend Implementation",
    description:
      "I turn designs into fast, responsive React and Next.js applications with Tailwind CSS. Your interface will feel snappy and render correctly across phones, tablets, and desktop displays.",
  },
  {
    icon: Database,
    title: "Reliable Databases & APIs",
    description:
      "I build the backend, database, and APIs your application needs. Schema modeling in PostgreSQL, authentication, payment workflows, and REST endpoints using Python (FastAPI) or Node.js.",
  },
  {
    icon: MessageSquare,
    title: "Direct Engineering Ownership",
    description:
      "When you hire me, you work directly with the developer writing your code. We communicate clearly, set transparent milestones, and avoid the misunderstandings of bloated agencies.",
  },
  {
    icon: Rocket,
    title: "Practical 0-to-1 Delivery",
    description:
      "I focus on shipping working software you can put in front of users in 2 to 4 weeks. No over-engineered bloat, just the features your business actually needs to launch.",
  },
];

export const About = () => {
  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Photo & Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border/80 bg-card/60 overflow-hidden p-6 sm:p-7 space-y-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-border shadow-md">
                <img
                  src={mearegPhoto}
                  alt="Meareg Teame"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold font-bricolage text-foreground">
                  Meareg Teame
                </h3>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  Full-Stack Web Developer · Addis Ababa, Ethiopia
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-[11px] font-mono text-muted-foreground bg-muted/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>UTC+3 · Working with clients worldwide</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/60 text-xs font-mono text-muted-foreground">
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span>Core Languages</span>
                  <span className="text-foreground font-medium">JavaScript, TypeScript, Python</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span>Frontend</span>
                  <span className="text-foreground font-medium">React, Next.js, Tailwind CSS</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/40">
                  <span>Backend &amp; DB</span>
                  <span className="text-foreground font-medium">FastAPI, Node.js, PostgreSQL</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Background</span>
                  <span className="text-foreground font-medium">B.Sc. in IT, BDU</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Grounded Human Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground leading-snug">
              I build web products from concept to live deployment so businesses can focus on growth.
            </h2>

            <p>
              I am an independent full-stack web developer based in Ethiopia. Over the past few years, I have built and shipped 10+ production applications — including SaaS marketplaces, verification systems, business websites, and AI-assisted workflows.
            </p>

            <p>
              My focus is simple: <span className="text-foreground font-medium">writing software that actually works for people.</span> That means building responsive, fast frontends in React and Next.js, reliable backend APIs in Python or Node.js, and clean databases in PostgreSQL that hold up as your user base grows.
            </p>

            <p>
              Before writing code, I make sure we are solving the actual problem. Whether you have complete designs ready for implementation, a manual business process that needs automation, or an MVP that needs to be tested in the market, I take technical ownership of the project from the first line of code to the production server.
            </p>

            <div className="pt-4 border-t border-border/60">
              <h4 className="text-sm font-bold font-bricolage text-foreground mb-3 uppercase tracking-wider">
                What clients can count on:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Daily or weekly progress demos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% intellectual property transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Clear, milestone-based pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Post-launch bug fix warranty</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Working Principles */}
        <div className="mt-16 sm:mt-24 pt-16 border-t border-border">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Approach
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold font-bricolage text-foreground tracking-tight">
              How I approach building your software.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {principles.map((item) => (
              <GlassCard key={item.title} className="p-6 flex flex-col justify-between" intensity={4}>
                <div>
                  <div className="w-9 h-9 rounded-xl border border-border/80 bg-muted/40 flex items-center justify-center text-foreground mb-4">
                    <item.icon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="text-base font-bold font-bricolage text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
