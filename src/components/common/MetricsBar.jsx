import { motion } from "motion/react";

const metrics = [
  { value: "10+",    label: "Apps Shipped",       sub: "SaaS · Platforms · APIs" },
  { value: "2–4 wks", label: "Avg. Delivery",     sub: "0 to production" },
  { value: "45%",    label: "Latency Reduction",   sub: "Redis / async optimization" },
  { value: "A2SV",   label: "Fellow",              sub: "300+ DSA problems" },
];

export const MetricsBar = () => {
  return (
    <section className="relative py-10 border-y border-border/60 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white/[0.01]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center py-6 px-4 bg-background"
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-bricolage">
                {m.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-foreground/80 tracking-wide">
                {m.label}
              </span>
              <span className="mt-0.5 text-[11px] font-mono text-muted-foreground/60">
                {m.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
