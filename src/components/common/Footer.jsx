import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

const socialLinks = [
  { href: "mailto:hello.meareg@gmail.com",       label: "Email",    icon: Mail },
  { href: "https://t.me/meareg_official",       label: "Telegram", icon: Send },
  { href: "https://www.linkedin.com/in/meareg", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Meargteame",      label: "GitHub",   icon: Github },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-8 border-t border-border text-xs text-muted-foreground space-y-4">
      <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <p className="font-mono">
          © {currentYear} Meareg Teame. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4 font-mono">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
