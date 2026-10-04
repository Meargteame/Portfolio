import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import mearegPhoto from "../../assets/meareg-photo.webp";

const navLinks = [
  { href: "#work",     label: "Work",     id: "work" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#about",    label: "About",    id: "about" },
  { href: "#contact",  label: "Contact",  id: "contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", "/");
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Name & Avatar (Scrolls to top) */}
        <a
          href="#"
          onClick={(e) => scrollTo(e, "")}
          className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity cursor-pointer"
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
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.id)}
                className={`text-sm transition-colors cursor-pointer ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Theme Toggle (White / Dark mode) */}
          <ModeToggle />

          {/* Direct CTA (Scrolls to contact) */}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Actions: ModeToggle + Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.id)}
                className={`block text-sm py-1.5 transition-colors cursor-pointer ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-border flex items-center justify-between">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline cursor-pointer"
            >
              Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
