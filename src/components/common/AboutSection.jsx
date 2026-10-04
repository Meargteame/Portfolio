import { About } from "./About";
import { TechStack } from "./TechStack";
import { Globe, Download, ArrowUpRight } from "lucide-react";

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

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-border scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
              About Meareg Teame
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
              Background &amp; Approach.
            </h2>
          </div>

          <a
            href="/CV.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all shrink-0 bg-card shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Résumé</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Bio, Principles & Story */}
        <About />

        {/* Global Remote Availability */}
        <div className="pt-16 sm:pt-20 border-t border-border mt-16">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
            <Globe className="w-4 h-4 text-emerald-500" />
            <span>Worldwide Collaboration</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-bricolage mb-3">
            Global remote availability.
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Based in Addis Ababa (UTC+3). Full synchronous coverage for European teams, and strong morning overlap for US East Coast companies with dependable async updates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timezones.map((tz) => (
              <div key={tz.zone} className="p-5 rounded-xl border border-border bg-card shadow-xs">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-bold text-foreground font-bricolage">{tz.zone}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{tz.location}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <p className="font-mono text-foreground font-medium">{tz.workhours}</p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 font-medium">{tz.sync}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="pt-16 sm:pt-20 border-t border-border mt-16">
          <TechStack />
        </div>

      </div>
    </section>
  );
};
