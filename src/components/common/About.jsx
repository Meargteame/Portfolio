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
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
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
        </motion.div>
      </div>
    </section>
  );
};
