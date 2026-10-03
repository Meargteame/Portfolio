import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const socialButtons = [
  { href: "mailto:hello.meareg@gmail.com",        icon: Mail,      label: "Email",    bg: "bg-neutral-900 hover:bg-black text-white" },
  { href: "https://t.me/meareg_teame",           icon: Send,      label: "Telegram", bg: "bg-[#229ED9] hover:bg-[#1b85b8] text-white" },
  { href: "https://www.linkedin.com/in/meareg",  icon: Linkedin,  label: "LinkedIn", bg: "bg-[#0a66c2] hover:bg-[#084e96] text-white" },
  { href: "https://github.com/Meargteame",       icon: Github,    label: "GitHub",   bg: "bg-neutral-900 hover:bg-black text-white" },
  { href: "https://x.com/meareg_official",       icon: Twitter,   label: "X",        bg: "bg-neutral-900 hover:bg-black text-white" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-12 pb-14 border-t border-border/60 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        
        {/* Top Row: Quick Nav & Direct Pitch */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-border/50 items-start">
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold font-bricolage text-foreground">
              Meareg Teame
            </h3>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Full-stack web developer building reliable websites, web applications, and business systems for startups, growing companies, and agencies.
            </p>
            <p className="text-xs text-muted-foreground/80 font-mono">
              Based in Addis Ababa, Ethiopia (UTC+3) · Available for remote contracts globally
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">Navigation</p>
            <div className="flex flex-col space-y-1.5 text-sm">
              <Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors">Selected Work</Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services &amp; Pricing</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About &amp; Background</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Start a Project</Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">Start a Conversation</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <p className="text-xs text-muted-foreground">
              Direct: <a href="mailto:hello.meareg@gmail.com" className="text-foreground hover:underline">hello.meareg@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Row: Socials & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground/70">
            © {currentYear} Meareg Teame. Built with React, Next.js, and Tailwind CSS. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            {socialButtons.map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={btn.label}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center border border-border/60 transition-all shadow-sm ${btn.bg}`}
              >
                <btn.icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
