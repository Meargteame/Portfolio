import { HeroSection } from "./HeroSection";
import { Projects } from "./Project";
import { Experience } from "./Experience";
import { GetInTouch } from "./GetInTouch";
import { Footer } from "./Footer";
import HeroSvg from "../../assets/hero-section.svg";
import { Services } from "./Service";
import { TechStack } from "./TechStack";
import { About } from "./About";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <div className="relative w-full">
          {/* HeroSvg */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={HeroSvg}
              alt=""
              className="absolute -top-3/20 right-0 md:right-1/4 md:top-0 w-full h-full object-cover md:object-contain opacity-80 scale-100 md:scale-125 transition-all duration-700"
              aria-hidden="true"
            />
          </div>

          <div className="relative w-full flex items-center">
            <HeroSection />
          </div>
        </div>

        <div id="about" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </div>

        <div id="services" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Services />
          </div>
        </div>

        <div id="tech" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TechStack />
          </div>
        </div>

        <div id="projects" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Projects />
              </div>
              <div id="experience" className="lg:col-span-1">
                <Experience />
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GetInTouch />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};
