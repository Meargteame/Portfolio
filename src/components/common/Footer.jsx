import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/meareg-teame/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/Meargteame", icon: Github, label: "GitHub" },
  { href: "https://x.com/meareg_official", icon: Twitter, label: "Twitter" },
  { href: "mailto:hello.meareg@gmail.com", icon: Mail, label: "Email" },
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
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(255,255,255,0.015) 0%, transparent 60%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-px bg-border mb-8 origin-left"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
<<<<<<< HEAD
          {/* Copyright + Location */}
=======
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
<<<<<<< HEAD
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
=======
            transition={{ delay: 0.15 }}
            className="text-xs tracking-wide text-muted-foreground order-2 md:order-1"
          >
            &copy; {currentYear} Meareg Teame
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex items-center gap-6 order-1 md:order-2"
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
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
<<<<<<< HEAD

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
=======
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
      </div>
    </motion.footer>
  );
};
