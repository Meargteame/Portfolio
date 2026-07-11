import { motion } from "motion/react";
<<<<<<< HEAD
import { useState } from "react";
import { useMobile } from "../../hooks/useMobile";
import { services } from "../../data/services";
import { CornerBrackets } from "../ui/CornerBrackets";
import { Scanline, LeftAccentBar } from "../ui/Scanline";
=======
import { services } from "../../data/services";
import { GlassCard } from "../effects/GlassCard";
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.25, 0, 0, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative"
      role="article"
      aria-label={`Service: ${service.title}`}
    >
      <motion.div
        className="relative overflow-hidden border border-border h-full flex flex-col p-6"
        animate={{ backgroundColor: hovered ? "var(--muted)" : "transparent" }}
        transition={{ duration: 0.2 }}
      >
        <CornerBrackets active={hovered} />
        <Scanline active={hovered} duration={0.5} />

        <div className="flex items-center justify-between mb-6">
          <motion.span
            className="font-mono text-4xl font-black select-none leading-none"
            animate={{ opacity: hovered ? 0.12 : 0.04 }}
            style={{ color: "var(--foreground)" }}
            transition={{ duration: 0.2 }}
          >
            {num}
          </motion.span>
          <motion.span
            className="font-mono text-[10px] tracking-[0.2em]"
            animate={{ opacity: hovered ? 0.7 : 0.2 }}
            style={{ color: "var(--foreground)" }}
            transition={{ duration: 0.2 }}
          >
            {service.tag}
          </motion.span>
=======
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
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
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
