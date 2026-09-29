import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { motion } from "motion/react";

const socialButtons = [
  { href: "https://x.com/meareg_official",       icon: Twitter,   label: "X",        bg: "bg-neutral-900 hover:bg-black text-white" },
  { href: "https://github.com/Meargteame",       icon: Github,    label: "GitHub",   bg: "bg-neutral-900 hover:bg-black text-white" },
  { href: "https://www.linkedin.com/in/meareg",  icon: Linkedin,  label: "LinkedIn", bg: "bg-[#0a66c2] hover:bg-[#084e96] text-white" },
  { href: "mailto:hello.meareg@gmail.com",        icon: Send,      label: "Email",    bg: "bg-neutral-900 hover:bg-black text-white" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-6 pb-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Floating Footer Pill Bar matching screenshot 2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-2xl border border-border/70 bg-card/70 backdrop-blur-xl p-3.5 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
        >
          {/* Left: Email link with send icon */}
          <a
            href="mailto:hello.meareg@gmail.com"
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
          >
            <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            <span className="tracking-tight">hello.meareg@gmail.com</span>
          </a>

          {/* Right: Social Icon Badges */}
          <div className="flex items-center gap-2">
            {socialButtons.map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={btn.label}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border border-border/60 transition-all shadow-sm ${btn.bg}`}
              >
                <btn.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom copyright line */}
        <div className="mt-8 text-center text-xs text-muted-foreground/60">
          © {currentYear} Meareg Teame · Full-Stack Engineer · Addis Ababa (UTC+3)
        </div>
      </div>
    </footer>
  );
};
