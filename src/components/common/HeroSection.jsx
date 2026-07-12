import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { TextReveal } from "../effects/TextReveal";

const socials = [
  { 
    href: "https://github.com/Meargteame", 
    icon: Github, 
    label: "GitHub",
    hoverColor: "hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
  },
  { 
    href: "https://www.linkedin.com/in/meareg-teame/", 
    icon: Linkedin, 
    label: "LinkedIn",
    hoverColor: "hover:text-[#0a66c2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]"
  },
  { 
    href: "https://x.com/meareg_official", 
    icon: Twitter, 
    label: "Twitter",
    hoverColor: "hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
  },
  { 
    href: "mailto:hello.meareg@gmail.com", 
    icon: Mail, 
    label: "Email",
    hoverColor: "hover:text-[#ea4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.3)]"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0, 0, 1] } },
};

export const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Tech Grid Mesh */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-80" />

      {/* Mouse Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.035), transparent 80%)`,
        }}
      />

      {/* Subtle animated ambient background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          className="relative z-10 max-w-6xl w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
            <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
              FULL STACK &amp; AI ENGINEER
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-bold tracking-tight font-bricolage text-foreground flex flex-col items-center"
          >
            <span className="block whitespace-nowrap text-[clamp(22px,5.5vw,80px)] leading-tight">
              Building Scalable &amp; Intelligent
            </span>
            <span className="block mt-2 text-foreground text-[clamp(22px,5.5vw,80px)] leading-tight">
              Systems.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto"
          >
            <TextReveal delay={0.9} stagger={0.02}>
              I architect scalable backends, production-ready AI features, and modern full-stack applications. Python, Go, Node.js — from clean APIs to intelligent agents.
            </TextReveal>
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-all shadow-lg"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium tracking-wide text-foreground hover:bg-white/5 transition-all"
            >
              View work
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-5 mt-10">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, scale: 1.15 }}
                className={`text-muted-foreground p-2 rounded-full border border-transparent transition-all ${social.hoverColor}`}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>


        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-span text-[10px] tracking-[0.3em] text-muted-foreground/40 font-mono">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
