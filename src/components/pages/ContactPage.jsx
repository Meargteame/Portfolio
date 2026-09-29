import { motion } from "motion/react";
import { Navbar } from "../common/Navbar";
import { Footer } from "../common/Footer";
import { GlassCard } from "../effects/GlassCard";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react";

const directLinks = [
  {
    label: "hello.meareg@gmail.com",
    href: "mailto:hello.meareg@gmail.com",
    icon: Mail,
    desc: "Usually responds within a few hours",
  },
  {
    label: "linkedin.com/in/meareg",
    href: "https://www.linkedin.com/in/meareg",
    icon: Linkedin,
    desc: "For formal introductions and role inquiries",
  },
  {
    label: "github.com/Meargteame",
    href: "https://github.com/Meargteame",
    icon: Github,
    desc: "Open-source projects and contributions",
  },
  {
    label: "@meareg_official",
    href: "https://x.com/meareg_official",
    icon: Twitter,
    desc: "Building in public and engineering thoughts",
  },
];

const callExpectations = [
  "Free 30-minute discovery call — no pitch, just scoping",
  "Honest assessment of scope, timeline, and fit",
  "Written proposal within 24 hours of the call",
  "Clear milestones and weekly progress updates",
];

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page header */}
        <section className="pt-32 pb-8 max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Contact.
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-xl">
            Book a free 15-minute discovery call or reach out directly. Open to full-stack web projects, founding engineer roles, and remote collaborations globally.
          </p>
        </section>

        <section className="pb-24 max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Cal.com embed */}
            <div className="lg:col-span-7">
              <GlassCard className="overflow-hidden" intensity={5}>
                <div className="p-5 border-b border-border/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-semibold text-foreground">Book a discovery call</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">15 min · free</span>
                      <a
                        href="https://cal.com/meareg/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-rose-500 hover:text-rose-400 font-medium inline-flex items-center gap-1"
                      >
                        Open Cal.com
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative w-full min-h-[560px] bg-background/50">
                  <iframe
                    src="https://cal.com/meareg/15min?embed=true&theme=dark&layout=month_view"
                    className="w-full min-h-[560px] border-0"
                    title="Book a call with Meareg Teame"
                    loading="lazy"
                  />
                </div>
              </GlassCard>
            </div>

            {/* Right column */}
            <div className="lg:col-span-5 flex flex-col gap-5">

              {/* Direct channels */}
              <GlassCard className="p-6" intensity={4}>
                <h3 className="text-sm font-semibold text-foreground mb-1">Direct channels</h3>
                <p className="text-xs text-muted-foreground mb-5">Prefer email or social media? Reach out directly.</p>

                <div className="space-y-2">
                  {directLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl border border-border/70 bg-white/[0.015] hover:bg-white/[0.04] hover:border-border transition-all group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <link.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-foreground truncate">{link.label}</p>
                          <p className="text-[11px] text-muted-foreground/60 mt-0.5 truncate">{link.desc}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 ml-2 opacity-40 group-hover:opacity-80 transition-opacity" />
                    </a>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border/40 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Typically responds within a few hours
                </div>
              </GlassCard>

              {/* What to expect */}
              <GlassCard className="p-6" intensity={4}>
                <h3 className="text-sm font-semibold text-foreground mb-4">What to expect</h3>
                <div className="space-y-2.5">
                  {callExpectations.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70 mt-0.5 flex-shrink-0" />
                      <span className="text-xs leading-relaxed text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};
