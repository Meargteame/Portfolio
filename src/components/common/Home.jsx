import { Navbar }               from "./Navbar";
import { Footer }               from "./Footer";
import { HeroSection }          from "./HeroSection";
import { HomeProblems }         from "./HomeProblems";
import { HomeServicesSnapshot } from "./HomeServicesSnapshot";
import { HomeWorkPreview }      from "./HomeWorkPreview";
import { HomeProcess }          from "./HomeProcess";
import { HomeAudienceAndWhy }   from "./HomeAudienceAndWhy";
import { TechStack }            from "./TechStack";
import { HomeFAQ }              from "./HomeFAQ";
import { HomeContactCallout }   from "./HomeContactCallout";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-foreground/15 overflow-x-hidden">
      

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <HomeProblems />
        <HomeServicesSnapshot />
        <HomeWorkPreview />
        <HomeProcess />
        <HomeAudienceAndWhy />
        <TechStack />
        <HomeFAQ />
        <HomeContactCallout />
        <Footer />
      </main>
    </div>
  );
};
