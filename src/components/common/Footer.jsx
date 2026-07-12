import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/meareg-teame/", icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0a66c2]" },
  { href: "https://github.com/Meargteame", icon: Github, label: "GitHub", color: "hover:text-foreground" },
  { href: "https://x.com/meareg_official", icon: Twitter, label: "Twitter", color: "hover:text-foreground" },
  { href: "mailto:hello.meareg@gmail.com", icon: Mail, label: "Email", color: "hover:text-[#ea4335]" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative pb-12 md:pb-16 overflow-hidden"
    >
      {/* Bottom ambient glow gradient */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(255,255,255,0.025) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full h-px mb-8 origin-left"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: branding */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-start gap-1 order-2 md:order-1"
          >
            <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-foreground/70">
              MEAREG
              <span className="w-1 h-1 rounded-full bg-foreground/30" />
              <span className="text-xs text-muted-foreground font-normal tracking-wide">TECH</span>
            </div>
            <p className="text-[11px] text-muted-foreground/50">
              © {currentYear} · Built with React &amp; Framer Motion
            </p>
          </motion.div>

          {/* Center: quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-6 order-2"
          >
            {["About", "Projects", "Experience", "Contact"].map((link, i) => (
              <motion.button
                key={link}
                onClick={() => {
                  const el = document.getElementById(link.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ y: -1 }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>

          {/* Right: socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex items-center gap-4 order-1 md:order-3"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.06 }}
                whileHover={{ y: -3, scale: 1.15 }}
                className={`text-muted-foreground transition-colors p-1.5 rounded-full border border-transparent hover:border-border ${social.color}`}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
            <motion.a
              href="/CV.pdf"
              download
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              whileHover={{ y: -2 }}
              className="ml-1 hidden sm:inline-flex items-center gap-1.5 text-xs font-mono tracking-wide text-muted-foreground hover:text-foreground border border-border rounded-full px-3 py-1.5 hover:bg-white/5 transition-all"
            >
              CV
              <ArrowUpRight className="w-3 h-3" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
