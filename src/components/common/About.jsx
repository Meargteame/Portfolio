<<<<<<< HEAD
import { useMobile } from "@/hooks/useMobile";
import { motion } from "motion/react";
import { CornerBrackets } from "../ui/CornerBrackets";

const stats = [
  { label: "Projects", value: "9+" },
  { label: "Technologies", value: "30+" },
  { label: "Focus", value: "AI & Full Stack" },
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.35, delay: 0.3 + index * 0.08 }}
    className="relative border border-border p-5 flex flex-col gap-1"
  >
    <CornerBrackets active size="w-3" />
    <span className="text-2xl font-black tracking-tight text-foreground">{stat.value}</span>
    <span className="text-[11px] tracking-widest text-foreground opacity-40">{stat.label}</span>
  </motion.div>
);
=======
import { motion } from "motion/react";
import { TextReveal, ScaleReveal } from "../effects/TextReveal";
import { GlassCard } from "../effects/GlassCard";

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Production AI integrations" },
  { value: "Full Stack", label: "Backend → Frontend" },
  { value: "Open", label: "To new opportunities" },
];

const items = [
  "I'm a backend-focused Full Stack & AI Engineer who builds scalable systems and intelligent applications that solve real-world problems — from clean backend architectures to production-ready AI features.",
  "My core stack is Python (Django, FastAPI), Golang, and Node.js on the backend, with React, Next.js & Vue on the frontend. I care about robust APIs, fast databases, and clean code.",
  "I'm currently open to Full Stack & AI Engineering roles where I can architect scalable systems and ship AI-driven products.",
];
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd

export const About = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
          >
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
              ABOUT
            </span>
            <ScaleReveal
              as="h2"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]"
              delay={0.1}
            >
              I build systems that scale.
            </ScaleReveal>
            <div className="mt-2 w-12 h-px bg-foreground/20" />
          </motion.div>

          <div className="space-y-6">
            {items.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0, 0, 1] }}
                className="text-base sm:text-lg leading-relaxed text-muted-foreground"
              >
                <TextReveal delay={i * 0.12} stagger={0.015}>
                  {text}
                </TextReveal>
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-20"
        >
<<<<<<< HEAD
          <div className="flex items-center gap-4 mb-3">
            <div className="text-[10px] tracking-[0.3em] opacity-40 text-foreground">
              SYS://ABOUT
            </div>
            <div className="flex-1 h-px bg-foreground opacity-10" />
            <div className="text-[10px] tracking-widest opacity-20 text-foreground">
              PROFILE
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
            ABOUT ME
          </h2>
          <motion.div
            className="mt-2 h-[2px] bg-foreground"
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Story */}
        <div className="max-w-3xl space-y-4 mb-10">
          {[
            <>
              I'm Meareg — a builder at heart. My journey into software started with a curiosity about how things work
              under the hood, and it quickly turned into a passion for crafting systems that solve real problems. Based in
              Addis Ababa, Ethiopia, I've spent the last few years turning ideas into production-grade products.
            </>,
            <>
              What drives me is the intersection of{" "}
              <span className="text-foreground">engineering rigor</span> and{" "}
              <span className="text-foreground">creative problem-solving</span>. I don't just write code — I architect
              solutions. Whether it's designing a clean API layer, optimizing a database for 10x throughput, or wiring up
              an AI model into a live product, I obsess over the details that make systems reliable and elegant.
            </>,
            <>
              My approach is{" "}
              <span className="text-foreground">backend-first, frontend-aware</span>. I believe great products start with
              solid foundations — clean data models, thoughtful error handling, and APIs that developers actually enjoy
              consuming. But I also care deeply about the end-user experience and build interfaces that feel as good as
              the architecture behind them.
            </>,
            <>
              Outside of client work, I run{" "}
              <span className="text-foreground">Leons Lab</span> — my personal product studio where I prototype, build,
              and launch AI-powered tools and SaaS platforms. It's where I experiment freely and ship fast.
            </>,
            <>
              I'm currently looking for{" "}
              <span className="text-foreground">Full Stack & AI Engineering roles</span> where I can own complex systems
              end-to-end, work with ambitious teams, and contribute to products that push boundaries.
            </>,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-sm leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
=======
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.25, 0, 0, 1] }}
            >
              <GlassCard className="p-6 sm:p-8 text-center" intensity={5}>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
<<<<<<< HEAD
        </div>

        {/* Stats row */}
        <div className={`grid gap-[1px] ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
=======
        </motion.div>
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
      </div>
    </section>
  );
};
