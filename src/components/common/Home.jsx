import { HeroSection } from "./HeroSection";
import { Projects } from "./Project";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Services } from "./Service";
import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { TechStack } from "./TechStack";
import { About } from "./About";
import { GetInTouch } from "./GetInTouch";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { motion } from "motion/react";

const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="h-px bg-border/60" />
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
        <div id="education"><Education /></div>
        <SectionDivider />
        <div id="projects"><Projects /></div>
        <SectionDivider />
        <div id="services"><Services /></div>
        <SectionDivider />
        <div id="principles"><EngineeringPrinciples /></div>
        <SectionDivider />
        <div id="tech"><TechStack /></div>
        <SectionDivider />
        <div id="contact"><GetInTouch /></div>
        <Footer />
      </main>
    </div>
  );
};
