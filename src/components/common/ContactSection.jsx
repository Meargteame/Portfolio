import { useState } from "react";
import { Mail, Send, Linkedin, Github, Check, Copy, ArrowUpRight, CheckCircle2, RotateCcw } from "lucide-react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("hello.meareg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const subject = encodeURIComponent(`Message from ${formData.name || "Portfolio Visitor"}`);
  const body = encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
  );

  const mailtoUrl = `mailto:hello.meareg@gmail.com?subject=${subject}&body=${body}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello.meareg@gmail.com&su=${subject}&body=${body}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="scroll-mt-8 space-y-10">
      {/* Section Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold">
          06 // Get In Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Let's Connect.
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I'm always open to discussing new projects, contract opportunities, or engineering collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Links & Fast Copy */}
        <div className="md:col-span-5 space-y-4">
          <div className="rounded-xl border border-border bg-card/60 p-5 space-y-4 shadow-xs">
            <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
              Direct Contact
            </h4>

            <div className="space-y-3 text-xs font-mono">
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card">
                <a
                  href="mailto:hello.meareg@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:underline truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span className="truncate">hello.meareg@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Telegram */}
              <a
                href="https://t.me/meareg_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card text-foreground hover:border-foreground/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>@meareg_official</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/meareg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card text-foreground hover:border-foreground/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Meargteame"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card text-foreground hover:border-foreground/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
              Based in Dansha, Ethiopia (UTC+3). I reply to all inquiries within 24 hours.
            </p>
          </div>
        </div>

        {/* Right: Message Form with Multi-Channel Fallback */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-bricolage text-foreground">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Your email client should launch with your details pre-filled.
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <p className="text-muted-foreground">
                  If your email client didn't open automatically:
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
                  >
                    <span>Open in Web Gmail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card text-foreground text-xs font-medium hover:bg-muted transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>Retry Mail Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card text-foreground text-xs font-medium hover:bg-muted transition-colors shadow-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Send another message</span>
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card/60 p-5 sm:p-6 space-y-4 shadow-xs"
            >
              <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                Send a Message
              </h4>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:border-foreground/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:border-foreground/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Meareg, I'd like to discuss a project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:border-foreground/50 transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Send Message</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
