import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router";
import { ModeToggle } from "./mode-toggle";
import mearegPhoto from "../../assets/meareg-photo.png";

const navLinks = [
  { to: "/work",     label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about",    label: "About" },
  { to: "/contact",  label: "Contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAvatarClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeCls = "text-foreground font-bold";
  const inactiveCls = "text-foreground/75 hover:text-foreground font-bold";

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] transition-all duration-300 ease-out">
        <div
          className={`flex items-center rounded-full border border-border/80 bg-background/90 backdrop-blur-xl shadow-lg shadow-black/5 transition-all duration-300 ease-out ${
            isScrolled
              ? "gap-2.5 px-3 py-2"
              : "gap-4 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3"
          }`}
        >
          {/* Logo / Profile Avatar (Left item circled by user) */}
          <Link
            to="/"
            onClick={handleAvatarClick}
            className="flex items-center cursor-pointer group flex-shrink-0"
            title="Meareg Teame"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-border/80 group-hover:border-foreground/40 transition-colors shadow-sm">
              <img src={mearegPhoto} alt="Meareg Teame" className="w-full h-full object-cover" />
            </div>
          </Link>

          {/* Desktop Nav Links (Smooth slide out on scroll without jitter) */}
          <div
            className={`hidden md:flex items-center gap-2 sm:gap-4 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out ${
              isScrolled
                ? "max-w-0 opacity-0 pointer-events-none -ml-2"
                : "max-w-[450px] opacity-100 border-l border-border/60 pl-4 sm:pl-5"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {({ isActive }) => (
                  <span
                    className={`relative block px-3 py-1.5 text-sm sm:text-[15px] font-bold tracking-tight transition-colors duration-200 cursor-pointer ${
                      isActive ? activeCls : inactiveCls
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute -bottom-0.5 left-3 right-3 h-[2px] bg-foreground rounded-full" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Actions: Mode Toggle + Get Started CTA (Right items circled by user) */}
          <div
            className={`flex items-center gap-2 sm:gap-3 transition-all duration-300 ${
              !isScrolled ? "border-l border-border/60 pl-3.5 sm:pl-4" : "pl-1"
            }`}
          >
            <ModeToggle />
            <a
              href="https://cal.com/meareg/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <span className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-foreground text-background text-xs sm:text-sm font-bold tracking-tight hover:opacity-90 transition-all cursor-pointer whitespace-nowrap">
                Get Started
              </span>
            </a>
            {!isScrolled && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-border text-foreground"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-20 left-4 right-4 z-50 max-w-sm mx-auto"
            >
              <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/10">
                <div className="flex flex-col p-2">
                  {navLinks.map((link, i) => (
                    <NavLink key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)}>
                      {({ isActive }) => (
                        <motion.div
                          initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className={`px-4 py-2.5 rounded-xl transition-colors ${
                            isActive ? "bg-white/5 font-medium text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          <span className="text-sm tracking-wide">{link.label}</span>
                        </motion.div>
                      )}
                    </NavLink>
                  ))}
                  <a
                    href="https://cal.com/meareg/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.03 }}
                      className="mt-1 px-4 py-2.5 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-semibold"
                    >
                      Get Started
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
