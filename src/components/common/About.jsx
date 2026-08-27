import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { GlassCard } from "../effects/GlassCard";
import { Code2, Cloud, Database, Zap, Cpu, Layers } from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.png";

const stats = [
  { value: 300, suffix: "+", label: "DSA Problems Solved (A2SV / LeetCode)" },
  { value: 10, suffix: "+", label: "Web & SaaS Apps Shipped" },
  { value: 45, suffix: "%", label: "P99 Latency Reduction (Redis / Async)" },
  { value: 100, suffix: "%", label: "0-to-1 Product Ownership" },
];

const pillars = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Building high-performance, pixel-perfect web platforms with Next.js (App Router, SSR), React, TypeScript, and Tailwind CSS backed by Python and Go.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Architecture",
    description:
      "Deploying resilient web services and databases with Docker, CI/CD pipelines, automated testing, and optimized environments on Supabase, Vercel, and AWS.",
  },
  {
    icon: Database,
    title: "Scalable APIs & Databases",
    description:
      "Architecting fast REST & gRPC services in Python (FastAPI/Django) and Go. PostgreSQL modeling, Row-Level Security (RLS), Supabase, and Redis caching.",
  },
  {
    icon: Cpu,
    title: "AI Integration & Real-Time",
    description:
      "Orchestrating production AI features with the Gemini API (structured JSON output), WebSockets for sub-50ms live state sync, and WebRTC streaming.",
  },
];

function AnimatedCounter({ target, suffix, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const steps = 40;
    const step = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export const About = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-mono font-medium">
              BACKGROUND &amp; EXPERTISE
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.15]">
              Product-driven engineering with 0-to-1 speed and algorithmic rigor.
            </h2>
            <div className="mt-4 w-12 h-px bg-foreground/20" />

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="text-foreground font-medium">Full-Stack &amp; AI Engineer</span> based in Addis Ababa, Ethiopia (UTC+3 / Open to Global Remote). I hold a B.Sc. in Information Technology from Bahir Dar University and honed my algorithmic problem-solving through elite programs like <span className="text-foreground font-medium">A2SV</span> and <span className="text-foreground font-medium">Holberton School</span>.
              </p>
              <p>
                I specialize in building complete digital products—from responsive web apps in <span className="text-foreground font-medium">Next.js &amp; React</span>, intelligent AI features with Gemini, to resilient backend APIs in <span className="text-foreground font-medium">Python (FastAPI/Django), Go, and Node.js</span> with PostgreSQL and Redis.
              </p>
              <p>
                I love working with fast-moving startup teams where developers take 0-to-1 ownership of user experiences, databases, and shipping features that users love.
              </p>
            </div>
          </motion.div>

          {/* Right: Profile Card & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-6 sm:p-8" intensity={6}>
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <img
                  src={mearegPhoto}
                  alt="Meareg Teame"
                  className="w-16 h-16 rounded-full object-cover border border-border"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground font-bricolage">Meareg Teame</h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    Full-Stack &amp; Mobile Developer
                  </p>
                  <p className="text-xs text-muted-foreground/80 font-mono mt-0.5">
                    Addis Ababa, Ethiopia (UTC+3)
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3.5 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Degree</span>
                  <span className="text-foreground font-medium">B.Sc. in IT (BDU '26)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Competitive Prog.</span>
                  <span className="text-foreground font-medium">A2SV Fellow (300+ Solved)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Web &amp; Frontend</span>
                  <span className="text-foreground font-medium">Next.js, React, TypeScript</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Mobile App Dev</span>
                  <span className="text-foreground font-medium">Flutter, Dart</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-muted-foreground">Backend &amp; DB</span>
                  <span className="text-foreground font-medium">Python, Go, PostgreSQL, Redis</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard className="p-6 h-full flex flex-col" intensity={4}>
                <div className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-foreground mb-4">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-foreground tracking-tight mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground mt-auto">
                  {pillar.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Animated stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
            >
              <GlassCard className="p-5 sm:p-6 text-center" intensity={4}>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-[11px] leading-tight tracking-wide text-muted-foreground">
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
