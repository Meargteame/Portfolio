import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Send, Download, ArrowUpRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import mearegPhoto from "../../assets/meareg-photo.webp";

const navItems = [
  { id: "work", label: "Work", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "contact", label: "Contact", index: "03" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("work");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
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
      if (window.scrollY < 150) {
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
      <header className="lg:hidden w-full pb-8 mb-8 border-b border-border">
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
              <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
            </div>
          </div>
          <ModeToggle />
        </div>

        {/* Mobile Jump Links */}
        <nav className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
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

      {/* Desktop Left Sidebar (lg+) */}
      <aside className="hidden lg:flex lg:sticky lg:top-16 lg:h-[calc(100vh-8rem)] lg:w-72 xl:w-80 shrink-0 flex-col justify-between py-2">
        {/* Top: Photo, Name, Bio */}
        <div className="space-y-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
            <img
              src={mearegPhoto}
              alt="Meareg Teame"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold font-bricolage tracking-tight text-foreground">
              Meareg Teame
            </h1>
            <p className="text-sm font-medium text-foreground/80 mt-1">
              Full-Stack Developer
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 font-mono">
              Addis Ababa, Ethiopia (UTC+3)
            </p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            I build reliable web applications, client portals, and APIs with React, Next.js, TypeScript, and Python.
          </p>

          {/* Classic Left Navigation Rail */}
          <nav className="pt-4 space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(e, item.id)}
                  className={`group flex items-center gap-3 py-1 transition-all ${
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-[1px] transition-all duration-300 ${
                      isActive
                        ? "w-10 bg-foreground"
                        : "w-5 bg-border group-hover:w-8 group-hover:bg-foreground/60"
                    }`}
                  />
                  <span className="text-xs font-mono tracking-wider uppercase">
                    {item.index} // {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Social Links, CV, Mode Toggle */}
        <div className="space-y-5 pt-8 border-t border-border">
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <a
              href="mailto:hello.meareg@gmail.com"
              aria-label="Email"
              title="Email Me"
              className="p-2 rounded-lg border border-border bg-card hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Meargteame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub Repositories"
              className="p-2 rounded-lg border border-border bg-card hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/meareg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
              className="p-2 rounded-lg border border-border bg-card hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/meareg_teame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              title="Telegram Chat"
              className="p-2 rounded-lg border border-border bg-card hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* Download Résumé & Theme Switcher */}
          <div className="flex items-center justify-between gap-3">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Résumé (PDF)</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground/60" />
            </a>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-muted-foreground">Theme</span>
              <ModeToggle />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
