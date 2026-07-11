import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const MediumIcon = () => (
  <svg width="20" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/meareg-teame/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Meargteame",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://x.com/meareg_official",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://medium.com/@hello.meareg",
    icon: MediumIcon,
    label: "Medium",
  },
  {
    href: "mailto:hello.meareg@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="pb-12 md:pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Ligne top */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-px bg-foreground opacity-10 mb-8 origin-left"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright + Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-2 order-2 md:order-1"
          >
            <div className="text-[11px] tracking-[0.2em] opacity-25 text-foreground">
              © {currentYear} · MEAREG TEAME
            </div>
            <div className="flex items-center gap-1.5 text-[10px] tracking-widest opacity-20 text-foreground">
              <MapPin className="w-3 h-3" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex items-center gap-[1px] order-1 md:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onHoverStart={() => setHoveredLink(social.label)}
                onHoverEnd={() => setHoveredLink(null)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.07 }}
                className="relative block"
              >
                <motion.div
                  className="relative px-4 py-3 border border-border overflow-hidden"
                  animate={{
                    backgroundColor:
                      hoveredLink === social.label
                        ? "var(--muted)"
                        : "transparent",
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Left bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-px"
                    animate={{
                      opacity: hoveredLink === social.label ? 0.5 : 0,
                      scaleY: hoveredLink === social.label ? 1 : 0,
                    }}
                    style={{
                      background: "var(--foreground)",
                      transformOrigin: "center",
                    }}
                    transition={{ duration: 0.15 }}
                  />

                  <motion.div
                    animate={{
                      opacity: hoveredLink === social.label ? 1 : 0.25,
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    <social.icon className="w-4 h-4 text-foreground" />
                  </motion.div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Built with credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-4 text-center"
        >
          <div className="text-[10px] tracking-widest opacity-15 text-foreground">
            Built with React + Vite + Tailwind CSS
          </div>
        </motion.div>

        {/* END */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-3"
        >
          <div className="flex-1 h-px bg-foreground opacity-10" />
          <div className="text-[10px] tracking-[0.2em] opacity-20 text-foreground">
            END OF PAGE
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
