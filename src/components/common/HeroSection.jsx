import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Suspense, lazy } from "react";
import { TextReveal, CharReveal } from "../effects/TextReveal";
const HeroScene = lazy(() => import("../three/HeroScene").then((m) => ({ default: m.HeroScene })));

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
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
<<<<<<< HEAD
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] tracking-widest text-foreground border border-border rounded-full opacity-70">
              <motion.span
                className="relative flex h-1.5 w-1.5"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="inline-flex rounded-full h-1.5 w-1.5 bg-foreground" />
              </motion.span>
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Avatar avec corner brackets */}
          <div className="relative inline-flex items-center justify-center p-3">
            <div className="absolute top-0 left-0 w-4 h-4">
              <div className="absolute top-0 left-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute top-0 left-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <div className="absolute top-0 right-0 w-4 h-4">
              <div className="absolute top-0 right-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute top-0 right-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <div className="absolute bottom-0 left-0 w-4 h-4">
              <div className="absolute bottom-0 left-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute bottom-0 left-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4">
              <div className="absolute bottom-0 right-0 w-full h-px bg-foreground opacity-40" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-foreground opacity-40" />
            </div>
            <motion.img
              src={Avatar}
              width={isMobile ? 90 : 110}
              height={isMobile ? 90 : 110}
              className="rounded-full object-cover block"
              alt="avatar"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </div>
        </motion.div>

        {/* Contenu texte */}
        <div
          className={`flex-1 ${isMobile ? "text-center mt-8 w-full" : "text-left"} pb-16`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-foreground leading-[1.1] heading-display"
          >
            Full Stack &{" "}
            <span className="relative inline-block">
              AI Engineer
              <motion.span
                initial={{ width: 0, left: "50%" }}
                animate={{ width: "100%", left: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
                className="absolute -bottom-0.5 md:-bottom-1 h-1.5 md:h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full -skew-x-12"
                style={{ originX: 0 }}
              />
            </span>
            <motion.span
              className="block mt-1 sm:inline sm:mt-0 overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 1.2, ease: [0.25, 0, 0, 1] }}
            >
              , Building Scalable & Intelligent Systems.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`mt-4 md:mt-7 text-xs sm:text-sm md:text-base leading-relaxed opacity-50 text-foreground max-w-xl ${isMobile ? "mx-auto px-0" : ""}`}
          >
            I'm a backend-focused Full Stack & AI Engineer who builds scalable, intelligent systems that deliver real impact. With deep expertise in Python (Django, Flask, FastAPI), Golang, and Node.js, paired with modern frontend skills in React, Next.js, and Vue.js, I architect robust APIs, optimize high-performance databases, and seamlessly integrate AI into production applications.
          </motion.p>

          {/* Socials — no separator line */}
=======
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
                FULL STACK & AI ENGINEER
              </span>
            </motion.div>

            <CharReveal
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] font-bricolage text-foreground"
              delay={0.2}
            >
              Building Intelligent Systems.
            </CharReveal>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-md"
            >
              <TextReveal delay={0.5} stagger={0.02}>
                I architect scalable backends, production-ready AI features, and modern full-stack applications. Python, Go, Node.js — from clean APIs to intelligent agents.
              </TextReveal>
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8">
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

            <motion.div variants={itemVariants} className="flex items-center gap-5 mt-10">
              {socials.map((social, _i) => (
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

>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0, 0, 1] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden lg:block"
          >
<<<<<<< HEAD
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-foreground opacity-30 hover:opacity-80 transition-opacity duration-200"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 0.3, y: 0 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                whileHover={{ y: -3, scale: 1.15, opacity: 0.8 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
=======
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground/40 font-mono">
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
