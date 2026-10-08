import { useState } from "react";
import { Mail, Send, Linkedin, Github, Check, Copy, ArrowUpRight, CheckCircle2, RotateCcw } from "lucide-react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT || "https://formsubmit.co/ajax/hello.meareg@gmail.com";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
      setErrorMessage(
        "Could not deliver automatically. You can reach out directly via hello.meareg@gmail.com or Telegram."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="scroll-mt-8 space-y-10">
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage">
          Contact
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Open for freelance projects, contract roles, and full-time engineering opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Links & Fast Copy */}
        <div className="md:col-span-5 space-y-4">
          <div className="rounded-xl border border-border bg-card/60 p-5 space-y-4 shadow-xs">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Direct Contact
            </h4>

            <div className="space-y-3 text-xs font-medium">
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card">
                <a
                  href="mailto:hello.meareg@gmail.com"
                  className="flex items-center gap-2 text-foreground hover:underline truncate focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden rounded-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span className="truncate">hello.meareg@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground active:scale-90 transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
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
                className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card text-foreground hover:border-foreground/40 active:scale-[0.99] transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
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
                className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card text-foreground hover:border-foreground/40 active:scale-[0.99] transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
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
                className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card text-foreground hover:border-foreground/40 active:scale-[0.99] transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
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

        <div className="md:col-span-7">
          {status === "success" ? (
            <div className="rounded-xl border border-border bg-card/60 p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-bricolage text-foreground">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Thank you. Your message has been sent directly to <span className="text-foreground font-medium">hello.meareg@gmail.com</span>.
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                I review all inquiries promptly and will get back to you within 24 hours.
              </p>

              <div className="pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground active:scale-95 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden rounded-xs"
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
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Send a Message
              </h4>

              {status === "error" && (
                <div className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10 text-xs text-rose-700 dark:text-rose-300 leading-relaxed">
                  {errorMessage}
                </div>
              )}

              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background/80 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:ring-2 focus:ring-ring/40 focus:border-foreground/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background/80 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:ring-2 focus:ring-ring/40 focus:border-foreground/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Hi Meareg, I'd like to discuss a project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background/80 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:ring-2 focus:ring-ring/40 focus:border-foreground/50 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-2.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 active:scale-[0.99] disabled:opacity-60 transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
