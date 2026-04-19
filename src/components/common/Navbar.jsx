import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useMobile } from "../../hooks/useMobile";
import { Menu, X, Download } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const isMobile = useMobile(768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Meareg_Teame_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            className="relative overflow-hidden border border-border"
            animate={{
              backgroundColor: scrolled ? "var(--background)" : "transparent",
            }}
            style={{
              backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={`flex items-center justify-between ${isMobile ? "px-3 py-2.5" : "px-6 py-3"}`}>
              {/* Logo */}
              <motion.div
                className={`font-mono ${isMobile ? "text-xs" : "text-sm"} font-black tracking-wider cursor-pointer`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="text-foreground">MEAREG</span>
                <span className="text-muted-foreground opacity-40">.DEV</span>
              </motion.div>

              {/* Desktop Nav Links */}
              {!isMobile && (
                <div className="flex items-center gap-[1px]">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      onHoverStart={() => setHoveredLink(link.id)}
                      onHoverEnd={() => setHoveredLink(null)}
                      className="relative px-3 py-2 overflow-hidden"
                    >
                      <motion.span
                        className="text-[10px] tracking-[0.15em] font-medium relative"
                        animate={{
                          color:
                            activeSection === link.id
                              ? "var(--foreground)"
                              : hoveredLink === link.id
                                ? "var(--foreground)"
                                : "var(--muted-foreground)",
                          opacity: activeSection === link.id ? 1 : 0.6,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.span>

                      {activeSection === link.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Right side */}
              <div className="flex items-center gap-2">
                <ModeToggle />

                {!isMobile && (
                  <motion.button
                    onClick={handleDownloadCV}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 border border-border text-xs tracking-wider font-bold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    <span>CV</span>
                  </motion.button>
                )}

                {isMobile && (
                  <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                    className="p-1.5 text-foreground"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              style={{ top: "60px" }}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[60px] left-0 right-0 z-50 px-3 pt-2"
            >
              <motion.div
                className="border border-border overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
                style={{
                  backgroundColor: "var(--background)",
                }}
              >
                <div className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.id)}
                      className="relative px-4 py-3 text-left border-b border-border last:border-b-0"
                    >
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-0.5"
                        animate={{
                          opacity: activeSection === link.id ? 1 : 0,
                        }}
                        style={{
                          background: "var(--foreground)",
                        }}
                        transition={{ duration: 0.2 }}
                      />

                      <span
                        className={`text-sm tracking-wide font-medium ${
                          activeSection === link.id
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </span>
                    </motion.button>
                  ))}

                  {/* Mobile CV Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    onClick={handleDownloadCV}
                    className="relative px-4 py-3 text-left flex items-center justify-between bg-muted/30"
                  >
                    <span className="text-sm tracking-wide font-bold text-foreground">
                      Download CV
                    </span>
                    <Download className="w-4 h-4 text-foreground opacity-70" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
