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

export const About = () => {
  const isMobile = useMobile(768);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 px-1"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Stats row */}
        <div className={`grid gap-[1px] ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
