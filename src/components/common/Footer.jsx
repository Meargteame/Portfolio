import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { Link } from "react-router";

const socialLinks = [
  { href: "mailto:hello.meareg@gmail.com",       label: "Email",    icon: Mail },
  { href: "https://t.me/meareg_teame",          label: "Telegram", icon: Send },
  { href: "https://www.linkedin.com/in/meareg", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Meargteame",      label: "GitHub",   icon: Github },
  { href: "https://x.com/meareg_official",      label: "X",        icon: Twitter },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-background transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-border">
          <div className="space-y-2 max-w-sm">
            <h3 className="font-semibold text-foreground text-base font-bricolage">
              Meareg Teame
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack developer building practical websites, web applications, and APIs for businesses and startups.
            </p>
            <p className="text-xs text-muted-foreground">
              Addis Ababa, Ethiopia · Available globally (UTC+3)
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block font-semibold">Links</span>
              <div className="flex flex-col space-y-1.5">
                <Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block font-semibold">Connect</span>
              <div className="flex flex-col space-y-1.5">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {currentYear} Meareg Teame. All rights reserved.</span>
          <span>Built with React, Next.js &amp; Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
};
