import { Footer } from "../common/Footer";
import { About }  from "../common/About";
import { TechStack } from "../common/TechStack";
import { GlassCard } from "../effects/GlassCard";
import { ArrowUpRight, Download, Globe } from "lucide-react";
import { Link } from "react-router";

// Timezone overlap for global remote collaboration
const timezones = [
  {
    zone: "UTC+3",
    location: "Addis Ababa, Ethiopia",
    workhours: "9 am – 6 pm local",
    sync: "Base timezone & primary development hours",
  },
  {
    zone: "CET / GMT+1",
    location: "London, Berlin, Paris, Amsterdam",
    workhours: "8 am – 5 pm CET",
    sync: "Full synchronous overlap throughout the workday",
  },
  {
    zone: "EST / GMT-5",
    location: "New York, Toronto, Boston",
    workhours: "9 am – 2 pm EST",
    sync: "4–5 hours of live overlap every morning",
  },
  {
    zone: "PST / GMT-8",
    location: "San Francisco, Seattle, Los Angeles",
    workhours: "9 am – 11 am PST",
    sync: "2 hours live sync + responsive async communication",
  },
];

export const AboutPage = () => {
  return (
    <div>
      <main>
        {/* Page header */}
        <section className="pt-12 sm:pt-16 pb-4 max-w-5xl mx-auto px-6">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
            About Meareg Teame
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            Background &amp; Approach.
          </h1>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Download Résumé / CV
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* Bio, Principles & Working Approach */}
        <About />

        {/* Global Remote Availability & Timezone Overlap */}
        <section className="py-20 sm:py-24 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span>Worldwide Collaboration</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-bricolage mb-3">
              Global remote availability.
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Based in Addis Ababa (UTC+3). Full synchronous coverage for European teams, and strong morning overlap for US East Coast companies with dependable async updates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {timezones.map((tz) => (
                <GlassCard key={tz.zone} className="p-5 sm:p-6" intensity={4}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-base font-bold text-foreground font-bricolage">{tz.zone}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{tz.location}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <p className="font-mono text-foreground/80">{tz.workhours}</p>
                      <p className="text-[11px] text-emerald-500/90 mt-0.5">{tz.sync}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Technical stack lower down as supporting proof */}
        <TechStack />

        {/* Bottom CTA */}
        <section className="py-20 max-w-5xl mx-auto px-6 text-center border-t border-border">
          <h2 className="text-2xl sm:text-3xl font-bold font-bricolage text-foreground mb-3">
            Interested in working together?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6">
            Share what you're working on and what you need built. I'll get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>

        <Footer />
      </main>
    </div>
  );
};
