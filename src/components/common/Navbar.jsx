import { useState, useEffect } from "react";
import {
  FolderKanban,
  Briefcase,
  GraduationCap,
  Layers,
  User,
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
  { id: "work",       label: "Work",        icon: FolderKanban },
  { id: "experience", label: "Experience",  icon: Briefcase },
  { id: "education",  label: "Education",   icon: GraduationCap },
  { id: "stack",      label: "Tech Stack",  icon: Layers },
  { id: "about",      label: "About",       icon: User },
  { id: "contact",    label: "Contact",     icon: Mail },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("work");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // If reached bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      const scrollPos = window.scrollY + 180;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      if (window.scrollY < 120) {
        setActiveSection("work");
      }
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
              <p className="text-xs text-muted-foreground font-mono">Full-Stack Developer · Dansha</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/CV.pdf"
              download
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
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                  isActive
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </header>

      {/* Desktop Left Sidebar (lg+) — Bespoke, Cohesive, Never Clipped */}
      <aside className="hidden lg:flex lg:sticky lg:top-10 lg:h-[calc(100vh-5rem)] lg:max-h-[640px] lg:w-72 xl:w-80 shrink-0 flex-col justify-between py-1">
        
        {/* Top: Photo, Status, Name, Bio */}
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
              <p className="text-xs text-muted-foreground font-mono mt-0.5">
                Dansha, Ethiopia (UTC+3)
              </p>
            </div>
          </div>

          <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">
            Building reliable web applications, client portals, and production APIs with React, TypeScript, and Python.
          </p>

          {/* Interactive Navigation Menu */}
          <nav className="pt-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(e, item.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-card border border-border text-foreground font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50 font-normal"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-foreground text-background"
                          : "bg-muted/40 text-muted-foreground group-hover:text-foreground group-hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] tracking-tight">{item.label}</span>
                  </div>

                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-foreground scale-100"
                        : "scale-0 opacity-0 group-hover:opacity-40 group-hover:scale-75 bg-muted-foreground"
                    }`}
                  />
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
              className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-lg border border-border bg-card/70 text-xs font-mono font-medium text-foreground hover:bg-card hover:border-foreground/40 transition-colors shadow-xs"
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
