import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router";
import mearegPhoto from "../../assets/meareg-photo.webp";

const navLinks = [
  { to: "/work",     label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about",    label: "About" },
  { to: "/contact",  label: "Contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Centered Floating Pill Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] select-none">
        <div className="flex items-center gap-2 sm:gap-3.5 px-2.5 sm:px-3.5 py-2 rounded-full border border-white/[0.12] bg-[#09090b]/85 backdrop-blur-xl shadow-2xl shadow-black/50">
          
          {/* Circular Photo Icon (No names, purely circled) */}
          <Link
            to="/"
            className="flex items-center cursor-pointer group shrink-0"
            title="Home"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/25 group-hover:border-white/60 transition-colors shadow-sm">
              <img
                src={mearegPhoto}
                alt="Meareg"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-0.5 border-l border-white/[0.10] pl-2 sm:pl-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "text-foreground bg-white/[0.08] shadow-sm font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA: Start a Project (New UI pill with arrow) */}
          <div className="flex items-center gap-1.5 border-l border-white/[0.10] pl-2 sm:pl-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-foreground text-background text-xs sm:text-sm font-semibold tracking-tight hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-foreground hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-md z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-20 left-4 right-4 z-50 max-w-xs mx-auto"
            >
              <div className="rounded-2xl border border-white/[0.12] bg-[#09090b]/95 backdrop-blur-xl p-3 shadow-2xl space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/[0.08] text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
