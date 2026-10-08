import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import mearegPhoto from "../../assets/meareg-photo.webp";

const navItems = [
  { id: "work",       label: "Work" },
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "stack",      label: "Tech Stack" },
  { id: "contact",    label: "Contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("work");

  // Track active section on scroll with viewport-relative rects
  useEffect(() => {
    const handleScroll = () => {
      // If reached bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "work";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <>
      {/* Mobile Header (< lg) */}
      <header className="lg:hidden w-full pb-5 mb-8 border-b border-border">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={mearegPhoto}
              alt="Meareg Teame"
              className="w-11 h-11 rounded-xl object-cover border border-border shadow-xs shrink-0"
            />
            <div>
              <h1 className="font-bold text-base tracking-tight font-bricolage text-foreground">
                Meareg Teame
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Full-Stack Developer · Dansha</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/CV.pdf"
              download
              aria-label="Download Résumé (PDF)"
              title="Download Résumé"
              className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
            </a>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Jump Links */}
        <nav className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                  isActive
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </header>

      {/* Desktop Left Sidebar (lg+) — Bespoke, Cohesive, Never Clipped */}
      <aside className="hidden lg:flex lg:sticky lg:top-10 lg:h-[calc(100vh-5rem)] lg:max-h-[580px] lg:w-72 xl:w-80 shrink-0 flex-col justify-between py-1">
        
        {/* Top: Photo, Name, Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={mearegPhoto}
              alt="Meareg Teame"
              className="w-14 h-14 rounded-2xl object-cover border border-border shadow-xs shrink-0"
            />
            <div>
              <h1 className="text-2xl font-bold font-bricolage tracking-tight text-foreground leading-snug">
                Meareg Teame
              </h1>
              <p className="text-xs sm:text-sm font-medium text-foreground/80">
                Full-Stack Software Developer
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Dansha, Ethiopia (UTC+3)
              </p>
            </div>
          </div>

          <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">
            Building reliable web applications, client portals, and production APIs with React, TypeScript, and Python.
          </p>

          {/* Editorial Navigation Rail with Expanding Indicator */}
          <nav className="pt-4 space-y-2.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(e, item.id)}
                  className={`group flex items-center gap-3 py-1 text-xs uppercase tracking-widest transition-all cursor-pointer ${
                    isActive
                      ? "text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground font-medium"
                  }`}
                >
                  <span
                    className={`h-[1.5px] transition-all duration-300 rounded-full ${
                      isActive
                        ? "w-8 bg-foreground"
                        : "w-3 bg-border group-hover:w-6 group-hover:bg-foreground/50"
                    }`}
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions: Social Icons + Résumé & Theme (Always visible on any display) */}
        <div className="pt-4 border-t border-border space-y-3">
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:hello.meareg@gmail.com"
              aria-label="Email"
              title="Email Me"
              className="w-9 h-9 rounded-lg border border-border bg-card/70 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Meargteame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub Repositories"
              className="w-9 h-9 rounded-lg border border-border bg-card/70 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/meareg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
              className="w-9 h-9 rounded-lg border border-border bg-card/70 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/meareg_official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              title="Telegram Chat"
              className="w-9 h-9 rounded-lg border border-border bg-card/70 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* Action Row: Résumé + Theme Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/CV.pdf"
              download
              className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-lg border border-border bg-card/70 text-xs font-medium text-foreground hover:bg-card hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Résumé (PDF)</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
            </a>

            <div className="shrink-0">
              <ModeToggle />
            </div>
          </div>
        </div>

      </aside>
    </>
  );
};
