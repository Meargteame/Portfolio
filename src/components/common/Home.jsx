import { Navbar }         from "./Navbar";
import { HeroSection }    from "./HeroSection";
import { Projects }       from "./Project";
import { Experience }     from "./Experience";
import { Education }      from "./Education";
import { TechStack }      from "./TechStack";
import { AboutSection }   from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { Footer }         from "./Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 sm:py-12 lg:py-16">
        <div className="lg:flex lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Navigation Sidebar on Desktop / Header on Mobile */}
          <Navbar />

          {/* Right Main Content Stream */}
          <main className="lg:flex-1 min-w-0 space-y-20 sm:space-y-28">
            <HeroSection />
            <Projects />
            <Experience />
            <Education />
            <TechStack />
            <AboutSection />
            <ContactSection />
            <Footer />
          </main>

        </div>
      </div>
    </div>
  );
};
