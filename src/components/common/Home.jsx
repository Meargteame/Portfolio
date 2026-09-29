import { Navbar }               from "./Navbar";
import { Footer }               from "./Footer";
import { HeroSection }          from "./HeroSection";
import { HomePhilosophy }       from "./HomePhilosophy";
import { HomeWorkPreview }      from "./HomeWorkPreview";
import { HomeProcess }          from "./HomeProcess";
import { HomeServicesSnapshot } from "./HomeServicesSnapshot";
import { HomeFAQ }              from "./HomeFAQ";
import { HomeContactCallout }   from "./HomeContactCallout";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-rose-500/20 overflow-x-hidden">
      
      {/* Continuous Left & Right Architectural Framing Lines */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-10 lg:left-16 w-[1px] bg-border/40 dark:bg-white/[0.06] pointer-events-none z-30" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-10 lg:right-16 w-[1px] bg-border/40 dark:bg-white/[0.06] pointer-events-none z-30" />
      {/* Top Framing Hairline */}
      <div className="absolute top-24 left-0 right-0 h-[1px] bg-border/30 dark:bg-white/[0.05] pointer-events-none z-30" />

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <HomePhilosophy />
        <HomeWorkPreview />
        <HomeProcess />
        <HomeServicesSnapshot />
        <HomeFAQ />
        <HomeContactCallout />
        <Footer />
      </main>
    </div>
  );
};
