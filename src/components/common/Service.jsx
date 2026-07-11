import { motion } from "motion/react";
import { services } from "../../data/services";
import { GlassCard } from "../effects/GlassCard";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0, 0, 1] }}
    >
      <GlassCard className="p-6 md:p-8 h-full" intensity={5}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-foreground/60 group-hover:text-foreground transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/30 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-base font-semibold tracking-tight text-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-5">
          {service.description}
        </p>
        <span className="inline-flex text-[10px] font-mono tracking-[0.15em] text-muted-foreground border border-border rounded-full px-3 py-1">
          {service.tag}
        </span>
      </GlassCard>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <motion.div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
            SERVICES
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-[1.1]">
            What I do.
          </h2>
          <div className="mt-2 w-12 h-px bg-foreground/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
