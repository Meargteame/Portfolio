import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = navLinks.map((l) => l.id);
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "mt-2.5 rounded-full border border-border bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 px-4 py-2"
                : "mt-5 px-0 py-2"
            }`}
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ opacity: 0.8 }}
            >
              <span className="text-sm font-semibold tracking-widest text-foreground">MEAREG</span>
              <span className="w-1 h-1 rounded-full bg-foreground/40" />
              <span className="text-xs text-muted-foreground font-mono tracking-wide">DEV</span>
            </motion.button>

            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="relative px-3.5 py-1.5 cursor-pointer group"
                  >
                    <span className={`relative text-xs tracking-wide transition-colors duration-200 ${
                      isActive ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-0.5 left-3.5 right-3.5 h-px bg-foreground"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <ModeToggle />
              <motion.a
                href="/CV.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-foreground text-background text-xs font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </motion.a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-20 left-4 right-4 z-50"
            >
              <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/10">
                <div className="flex flex-col p-2">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => scrollTo(link.id)}
                      className={`px-4 py-2.5 text-left rounded-xl transition-colors ${
                        activeSection === link.id ? "bg-white/5 font-medium text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <span className="text-sm tracking-wide">
                        {link.label}
                      </span>
                    </motion.button>
                  ))}
                  <motion.a
                    href="/CV.pdf"
                    download
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.03 }}
                    className="mt-1 px-4 py-2.5 rounded-xl bg-foreground text-background flex items-center justify-between text-xs font-medium"
                  >
                    Download Resume
                    <Download className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
