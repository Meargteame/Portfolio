import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Name & Avatar */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity"
        >
          <img
            src={mearegPhoto}
            alt="Meareg Teame"
            className="w-8 h-8 rounded-full object-cover border border-border shrink-0 shadow-xs"
          />
          <span className="font-semibold text-sm sm:text-base tracking-tight">
            Meareg Teame
          </span>
          <span className="hidden sm:inline-block text-xs text-muted-foreground font-normal">
            / Full-Stack Developer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Theme Toggle (White / Dark mode) */}
          <ModeToggle />

          {/* Direct CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile Actions: ModeToggle + Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm py-1.5 transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-border flex items-center justify-between">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline"
            >
              Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
