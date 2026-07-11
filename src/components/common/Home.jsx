import { HeroSection } from "./HeroSection";
import { Projects } from "./Project";
import { Experience } from "./Experience";
import { GetInTouch } from "./GetInTouch";
import { Footer } from "./Footer";
import { Services } from "./Service";
import { TechStack } from "./TechStack";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { motion } from "motion/react";

const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="h-px bg-border" />
  </motion.div>
);

export const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <div id="about"><About /></div>
        <SectionDivider />
        <div id="experience"><Experience /></div>
        <SectionDivider />
        <div id="projects"><Projects /></div>
        <SectionDivider />
        <div id="services"><Services /></div>
        <SectionDivider />
        <div id="tech"><TechStack /></div>
        <SectionDivider />
        <div id="contact"><GetInTouch /></div>
        <Footer />
      </main>
    </div>
  );
};
