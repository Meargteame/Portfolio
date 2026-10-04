import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { 
  Home as HomeIcon, 
  Briefcase, 
  Layers, 
  User, 
  Mail, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Send,
  ArrowUpRight 
} from "lucide-react";
import mearegPhoto from "../../assets/meareg-photo.webp";

const navLinks = [
  { to: "/",         label: "Home",     icon: HomeIcon },
  { to: "/work",     label: "Work",     icon: Briefcase },
  { to: "/services", label: "Services", icon: Layers },
  { to: "/about",    label: "About",    icon: User },
  { to: "/contact",  label: "Contact",  icon: Mail },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const SidebarContent = ({ onLinkClick }) => (
    <div className="flex flex-col justify-between h-full">
      {/* Top: Identity & Status */}
      <div>
        <Link
          to="/"
          onClick={onLinkClick}
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <img
            src={mearegPhoto}
            alt="Meareg Teame"
            className="w-11 h-11 rounded-xl object-cover border border-neutral-800 group-hover:border-neutral-700 transition-colors shadow-sm"
          />
          <div className="min-w-0">
            <h1 className="text-sm font-semibold text-white tracking-tight leading-tight group-hover:text-neutral-200 transition-colors">
              Meareg Teame
            </h1>
            <p className="text-xs text-neutral-400 font-normal">
              Full-Stack Developer
            </p>
          </div>
        </Link>

        {/* Live Availability Badge */}
        <div className="mt-5 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 text-[11px] font-mono text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for hire</span>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={onLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-white bg-neutral-900 border border-neutral-800 shadow-xs"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 border border-transparent"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`} />
                    <span>{link.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Contact & Socials */}
      <div className="pt-6 border-t border-neutral-800/80 space-y-4">
        {/* Direct Email */}
        <a
          href="mailto:hello.meareg@gmail.com"
          className="flex items-center justify-between text-xs text-neutral-400 hover:text-white transition-colors group p-2 rounded-lg hover:bg-neutral-900"
        >
          <div className="flex items-center gap-2 truncate">
            <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="truncate">hello.meareg@gmail.com</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Meargteame"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/meareg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://t.me/meareg_teame"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-900 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Meta / Location */}
        <div className="text-[11px] font-mono text-neutral-400">
          <p>Addis Ababa · UTC+3</p>
          <p className="mt-0.5 text-neutral-400">© 2026 Meareg Teame</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* =========================================
          DESKTOP: Fixed Left Sidebar Navbar
          ========================================= */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 border-r border-neutral-800 bg-neutral-950 z-40 p-6 flex-col">
        <SidebarContent />
      </aside>

      {/* =========================================
          MOBILE: Sticky Top Header & Left Drawer
          ========================================= */}
      <header className="lg:hidden sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          <Link to="/" className="flex items-center gap-2 text-white font-semibold text-sm">
            <span>Meareg Teame</span>
          </Link>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 text-xs font-medium text-neutral-200 hover:text-white transition-colors"
        >
          <span>Contact</span>
          <ArrowUpRight className="w-3 h-3 text-neutral-400" />
        </Link>
      </header>

      {/* Mobile Drawer Overlay & Slide-in Sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer from Left */}
          <div className="relative w-72 max-w-[85vw] h-full bg-neutral-950 border-r border-neutral-800 p-6 shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>

            <SidebarContent onLinkClick={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};
