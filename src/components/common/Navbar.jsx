import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Send, Download, ArrowUpRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import mearegPhoto from "../../assets/meareg-photo.webp";

const navItems = [
  { id: "work",       label: "Work",       index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "education",  label: "Education",  index: "03" },
  { id: "stack",      label: "Tech Stack", index: "04" },
  { id: "about",      label: "About",      index: "05" },
  { id: "contact",    label: "Contact",    index: "06" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("work");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
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
      <header className="lg:hidden w-full pb-6 mb-8 border-b border-border">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={mearegPhoto}
              alt="Meareg Teame"
              className="w-10 h-10 rounded-full object-cover border border-border shrink-0 shadow-xs"
            />
            <div>
              <h1 className="font-bold text-base tracking-tight font-bricolage text-foreground">
                Meareg Teame
              </h1>
              <p className="text-xs text-muted-foreground font-mono">Dansha, Ethiopia</p>
            </div>
          </div>
          <ModeToggle />
        </div>

        {/* Mobile Jump Links */}
        <nav className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors shrink-0 ${
                activeSection === item.id
                  ? "bg-foreground text-background font-semibold"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/CV.pdf"
            download
            className="ml-auto inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-muted-foreground hover:text-foreground shrink-0"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>
        </nav>
      </header>

      {/* Desktop Left Sidebar (lg+) — Styled as a Unified Framed Card */}
      <aside className="hidden lg:flex lg:sticky lg:top-8 lg:w-72 xl:w-80 shrink-0 flex-col rounded-2xl border border-border bg-card/70 p-5 sm:p-6 shadow-xs space-y-5">
        
        {/* Profile Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-border bg-card shadow-xs shrink-0">
              <img
                src={mearegPhoto}
                alt="Meareg Teame"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold font-bricolage tracking-tight text-foreground truncate">
                Meareg Teame
              </h1>
              <p className="text-xs font-medium text-foreground/80 truncate">
                Full-Stack Developer
              </p>
              <p className="text-[11px] text-muted-foreground font-mono truncate">
                Dansha, Ethiopia (UTC+3)
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
            I build reliable web applications, client portals, and APIs with React, Next.js, TypeScript, and Python.
          </p>
        </div>

        {/* Clean, Refined Navigation Menu */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`text-[10px] font-mono transition-opacity ${
                    isActive ? "text-background/80" : "text-muted-foreground/50 group-hover:text-foreground/70"
                  }`}
                >
                  {item.index}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions: Social Icons + Résumé & Theme (Always visible inside card) */}
        <div className="pt-4 border-t border-border space-y-3">
          {/* Social Links */}
          <div className="grid grid-cols-4 gap-2">
            <a
              href="mailto:hello.meareg@gmail.com"
              aria-label="Email"
              title="Email Me"
              className="py-2 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/Meargteame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub Repositories"
              className="py-2 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/meareg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
              className="py-2 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://t.me/meareg_teame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              title="Telegram Chat"
              className="py-2 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Action Row: Résumé + Theme Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/CV.pdf"
              download
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card text-xs font-mono text-foreground hover:bg-muted hover:border-foreground/40 transition-colors shadow-xs font-medium"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Résumé (PDF)</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
            </a>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-card shadow-xs">
              <span className="text-[10px] font-mono text-muted-foreground">Theme</span>
              <ModeToggle />
            </div>
          </div>
        </div>

      </aside>
    </>
  );
};
