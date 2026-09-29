import { Navbar }    from "../common/Navbar";
import { Footer }    from "../common/Footer";
import { About }     from "../common/About";
import { Experience }from "../common/Experience";
import { Education } from "../common/Education";
import { TechStack } from "../common/TechStack";
import { EngineeringPrinciples } from "../common/EngineeringPrinciples";
import { GlassCard } from "../effects/GlassCard";
import { ArrowUpRight, Download } from "lucide-react";

// Timezone overlap — plain readable data, no badge labels
const timezones = [
  {
    zone: "UTC+3",
    location: "Addis Ababa, Ethiopia",
    workhours: "9 am – 6 pm",
    sync: "Base timezone",
    note: null,
  },
  {
    zone: "CET / GMT+1",
    location: "Europe — London, Berlin, Paris",
    workhours: "8 am – 5 pm local",
    sync: "Full 8-hour sync window",
    note: null,
  },
  {
    zone: "EST / GMT-5",
    location: "US East Coast — NYC, Boston",
    workhours: "9 am – 2 pm EST",
    sync: "4–5 hours daily overlap",
    note: null,
  },
  {
    zone: "PST / GMT-8",
    location: "US West Coast — SF, LA",
    workhours: "9 am – 11 am PST",
    sync: "2 hours + async communication",
    note: null,
  },
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page header */}
        <section className="pt-32 pb-4 max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-bricolage leading-tight">
            About.
          </h1>
          <div className="mt-5">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </section>

        <About />

        {/* Timezone overlap */}
        <section className="py-20 sm:py-24 border-t border-border/60">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-bricolage mb-3">
              Global remote availability
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mb-10">
              Based in Addis Ababa (UTC+3). Full synchronous coverage for Europe, strong morning overlap with US East Coast.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timezones.map((tz) => (
                <GlassCard key={tz.zone} className="p-5 sm:p-6" intensity={4}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-base font-bold text-foreground font-bricolage">{tz.zone}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{tz.location}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <p>{tz.workhours}</p>
                      <p className="font-medium text-foreground/70 mt-0.5">{tz.sync}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <Experience />
        <Education />
        <TechStack />
        <EngineeringPrinciples />
        <Footer />
      </main>
    </div>
  );
};
