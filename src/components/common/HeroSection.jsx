import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.png";

const socials = [
  { 
    href: "https://github.com/Meargteame", 
    icon: Github, 
    label: "GitHub",
    hoverColor: "hover:text-foreground hover:border-foreground/30 hover:bg-white/5"
  },
  { 
    href: "https://www.linkedin.com/in/meareg", 
    icon: Linkedin, 
    label: "LinkedIn",
    hoverColor: "hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10"
  },
  { 
    href: "https://x.com/meareg_official", 
    icon: Twitter, 
    label: "Twitter",
    hoverColor: "hover:text-foreground hover:border-foreground/30 hover:bg-white/5"
  },
  { 
    href: "mailto:hello.meareg@gmail.com", 
    icon: Mail, 
    label: "Email",
    hoverColor: "hover:text-[#ea4335] hover:border-[#ea4335]/40 hover:bg-[#ea4335]/10"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0, 0, 1] } },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Tech Grid Mesh */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Subtle center ambient radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="max-w-4xl w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar and Availability Badge */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-6">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-border/80 bg-card shadow-2xl relative z-10 overflow-hidden">
                <img
                  src={mearegPhoto}
                  alt="Meareg Teame"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background z-20" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-card/80 backdrop-blur-sm text-[11px] font-mono tracking-wider text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPEN TO GLOBAL REMOTE &amp; US/EU ROLES</span>
            </div>
          </motion.div>

          {/* Role Supertitle */}
          <motion.div variants={itemVariants} className="mb-3">
            <span className="text-xs sm:text-sm tracking-[0.25em] text-muted-foreground font-mono font-medium">
              FULL-STACK &amp; AI ENGINEER · 0-TO-1 BUILDER
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-bricolage text-foreground"
          >
            Building Scalable Web &amp; <br className="hidden sm:inline" />
            Intelligent Systems.
          </motion.h1>

          {/* Subtitle / Bio */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
          >
            Product-minded engineer with a B.Sc. in IT and a strong algorithmic foundation (<span className="text-foreground/90 font-medium">A2SV Fellow, 300+ DSA</span>). Building high-performance SaaS platforms, robust APIs, and intelligent AI features with <span className="text-foreground/90 font-medium">Next.js, React, Python (FastAPI/Django), Go, and Node.js</span>.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-all shadow-lg"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium tracking-wide text-foreground hover:bg-white/5 transition-all"
            >
              Featured work
            </motion.a>

            <motion.a
              href="/CV.pdf"
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border/80 bg-card text-sm font-mono tracking-wide text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all"
            >
              Resume / CV
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mt-8">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3 }}
                className={`p-2.5 rounded-full border border-border/70 bg-card text-muted-foreground transition-all duration-200 ${social.hoverColor}`}
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] tracking-[0.25em] text-muted-foreground/50 font-mono">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
