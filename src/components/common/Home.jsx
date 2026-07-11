import { lazy, Suspense } from "react";
import { HeroSection } from "./HeroSection";
import HeroSvg from "../../assets/hero-section.svg";
import { Navbar } from "./Navbar";

// Lazy load below-the-fold sections for performance
const About = lazy(() => import("./About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./Service").then((m) => ({ default: m.Services })));
const TechStack = lazy(() => import("./TechStack").then((m) => ({ default: m.TechStack })));
const Projects = lazy(() => import("./Project").then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import("./Experience").then((m) => ({ default: m.Experience })));
const GetInTouch = lazy(() => import("./GetInTouch").then((m) => ({ default: m.GetInTouch })));
const Footer = lazy(() => import("./Footer").then((m) => ({ default: m.Footer })));

const SectionFallback = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="w-4 h-4 border border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
  </div>
);

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        {/* Hero Section - always loaded */}
        <div className="relative w-full">
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

        {/* Below-the-fold sections - lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <div id="about" className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <About />
            </div>
          </div>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <div id="services" className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Services />
            </div>
          </div>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <div id="tech" className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <TechStack />
            </div>
          </div>
        </Suspense>

        <div id="projects" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Suspense fallback={<SectionFallback />}>
                  <Projects />
                </Suspense>
              </div>
              <div id="experience" className="lg:col-span-1">
                <Suspense fallback={<SectionFallback />}>
                  <Experience />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={<SectionFallback />}>
          <div id="contact" className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <GetInTouch />
            </div>
          </div>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Footer />
            </div>
          </div>
        </Suspense>
      </main>
    </div>
  );
};
