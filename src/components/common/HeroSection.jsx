import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { TextReveal, CharReveal } from "../effects/TextReveal";

const socials = [
  { href: "https://github.com/Meargteame", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/meareg-teame/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/meareg_official", icon: Twitter, label: "Twitter" },
  { href: "mailto:hello.meareg@gmail.com", icon: Mail, label: "Email" },
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
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle animated ambient background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
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

          <h1 className="text-[28px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-tight leading-[1.05] font-bricolage text-foreground flex flex-col items-center">
            <CharReveal
              as="span"
              className="block"
              delay={0.2}
            >
              Building Scalable &amp; Intelligent
            </CharReveal>
            <CharReveal
              as="span"
              className="block mt-2 text-foreground"
              delay={0.7}
            >
              Systems.
            </CharReveal>
          </h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto"
          >
            <TextReveal delay={0.5} stagger={0.02}>
              I architect scalable backends, production-ready AI features, and modern full-stack applications. Python, Go, Node.js — from clean APIs to intelligent agents.
            </TextReveal>
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-all"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium tracking-wide text-foreground hover:bg-white/5 transition-colors"
            >
              View work
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-5 mt-10">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
