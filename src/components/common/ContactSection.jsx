import { useState } from "react";
import { Mail, Send, Linkedin, Github, CheckCircle2, ArrowUpRight } from "lucide-react";

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
    label: "t.me/meareg_teame",
    href: "https://t.me/meareg_teame",
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

export const ContactSection = () => {
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
    <section id="contact" className="py-20 sm:py-28 border-t border-border scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Let's Talk
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Tell me what you're building.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Fill out the brief below, or message me directly via email or Telegram. I review every project inquiry personally and reply within 24 hours.
          </p>
        </div>

        {/* Form & Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Project Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-16 text-center space-y-4 border border-border rounded-2xl p-8 bg-card shadow-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-bricolage text-foreground">
                  Inquiry received!
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you. If your mail client didn't launch automatically, you can also send your details directly to <a href="mailto:hello.meareg@gmail.com" className="text-foreground underline">hello.meareg@gmail.com</a>. I will reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full border border-border text-xs font-semibold text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:border-foreground/60 transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:border-foreground/60 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">
                    Company or Project Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Startup Studio / Self"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:border-foreground/60 transition-colors shadow-xs"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2.5">
                    What type of project is this?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                          formData.projectType === type
                            ? "border-foreground bg-foreground text-background shadow-xs font-semibold"
                            : "border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desired Timeline */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2.5">
                    Desired Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`px-3 py-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                          formData.timeline === t
                            ? "border-foreground bg-foreground text-background shadow-xs font-semibold"
                            : "border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">
                    Tell me about the project *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What problem does it solve? Do you have Figma designs, an existing site, or is this an MVP idea?"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:border-foreground/60 transition-colors resize-y shadow-xs"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Submit Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Channels & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Direct Contact Channels
              </h3>
              <div className="space-y-3">
                {directLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl border border-border bg-card hover:border-foreground/40 transition-all flex items-start gap-3.5 group shadow-xs block"
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground group-hover:underline truncate">
                            {item.label}
                          </p>
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Reassurance Info Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-4">
              <h4 className="text-sm font-semibold text-foreground font-bricolage">
                What to expect next:
              </h4>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>I review every project brief personally within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>You'll get an honest assessment of timeline, feasibility, and architecture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>If we're a match, we can schedule a 20-minute video or audio kickoff call.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
