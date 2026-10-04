import { useState } from "react";
import { Footer } from "../common/Footer";
import { Mail, Send, Linkedin, Github, CheckCircle2, ArrowUpRight, CalendarDays } from "lucide-react";

const projectTypes = [
  "Web Application / MVP",
  "Website or Landing Page",
  "API & Backend Integration",
  "AI Feature or Automation",
  "Other / Unsure",
];

const timelines = [
  "ASAP (within 2 weeks)",
  "2–4 weeks",
  "1–2 months",
  "Flexible",
];

const directLinks = [
  {
    label: "hello.meareg@gmail.com",
    href: "mailto:hello.meareg@gmail.com",
    icon: Mail,
    desc: "Direct email — replies within 24h",
  },
  {
    label: "t.me/meareg_official",
    href: "https://t.me/meareg_official",
    icon: Send,
    desc: "Telegram for fast async chat",
  },
  {
    label: "linkedin.com/in/meareg",
    href: "https://www.linkedin.com/in/meareg",
    icon: Linkedin,
    desc: "LinkedIn profile & background",
  },
  {
    label: "github.com/Meargteame",
    href: "https://github.com/Meargteame",
    icon: Github,
    desc: "Repositories & open source code",
  },
];

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Web Application / MVP",
    timeline: "2–4 weeks",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.description}`
    );

    window.location.href = `mailto:hello.meareg@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      <main>
        {/* Page Header */}
        <section className="pt-12 sm:pt-16 pb-12 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Tell me what you're building.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Fill out the brief below, or message me directly via email or Telegram. I review every project inquiry personally and reply within 24 hours.
          </p>
        </section>

        {/* Form & Direct Channels Grid (Clean Studio Layout, No Nested Glass Cards) */}
        <section className="pb-28 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Project Inquiry Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="py-16 text-center space-y-4 border border-border/80 rounded-2xl p-8 bg-card/30">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold font-bricolage text-foreground">
                    Inquiry received!
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you. If your mail client didn't launch automatically, you can also send your details directly to <a href="mailto:hello.meareg@gmail.com" className="text-foreground underline">hello.meareg@gmail.com</a>. I will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-full border border-border text-xs font-semibold text-foreground hover:bg-card"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card/30 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card/30 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-medium text-foreground/80 mb-2">
                      Company or Project Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Startup Studio / Self"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card/30 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/60 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-foreground/80 mb-2.5">
                      What type of project is this?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                            formData.projectType === type
                              ? "border-foreground bg-foreground text-background"
                              : "border-border/70 bg-card/20 text-muted-foreground hover:border-border hover:text-foreground"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Desired Timeline */}
                  <div>
                    <label className="block text-xs font-medium text-foreground/80 mb-2.5">
                      Desired Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelines.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`px-3 py-2.5 rounded-xl border text-center text-xs font-medium transition-all ${
                            formData.timeline === t
                              ? "border-foreground bg-foreground text-background"
                              : "border-border/70 bg-card/20 text-muted-foreground hover:border-border hover:text-foreground"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-medium text-foreground/80 mb-2">
                      Tell me about the project *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="What problem does it solve? Do you have Figma designs, an existing site, or is this an MVP idea?"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card/30 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/60 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <p className="text-xs text-muted-foreground/70 text-center">
                    No upfront fee or commitment. I review details and respond with recommendations within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Direct Channels & Reassurance */}
            <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-border/60 lg:pl-10">
              
              <div>
                <h3 className="text-lg font-bold font-bricolage text-foreground mb-2">
                  Direct channels
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                  Prefer email or Telegram? Reach out directly for quick scoping questions or role discussions.
                </p>

                <div className="space-y-3">
                  {directLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 hover:border-foreground/40 transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground shrink-0 transition-colors" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">{link.label}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{link.desc}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                    </a>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Based in Addis Ababa (UTC+3) · Working worldwide</span>
                </div>
              </div>

              {/* What happens next */}
              <div className="pt-6 border-t border-border/60 space-y-3">
                <h4 className="text-sm font-bold font-bricolage text-foreground">
                  What to expect
                </h4>
                <div className="space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                  <p>1. I review your idea, design, or business requirements.</p>
                  <p>2. I reply with an honest assessment of scope, architecture, and timeline.</p>
                  <p>3. We agree on deliverables and milestones before writing code.</p>
                </div>

                {/* Optional Cal.com */}
                <div className="pt-4">
                  <a
                    href="https://cal.com/meareg/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:underline"
                  >
                    <CalendarDays className="w-3.5 h-3.5" />
                    Schedule a 15-min discovery call instead
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};
