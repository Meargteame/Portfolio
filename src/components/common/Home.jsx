import { HeroSection }    from "./HeroSection";
import { Projects }       from "./Project";
import { ServicesSection } from "./ServicesSection";
import { AboutSection }   from "./AboutSection";
import { HomeProcess }    from "./HomeProcess";
import { HomeProblems }   from "./HomeProblems";
import { HomeAudienceAndWhy } from "./HomeAudienceAndWhy";
import { HomeFAQ }        from "./HomeFAQ";
import { ContactSection } from "./ContactSection";
import { Footer }         from "./Footer";

export const Home = () => {
  return (
    <div className="relative selection:bg-foreground/15">
      <main className="relative z-10">
        <HeroSection />
        <Projects />
        <ServicesSection />
        <AboutSection />
        <HomeProcess />
        <HomeProblems />
        <HomeAudienceAndWhy />
        <HomeFAQ />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};
