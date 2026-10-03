import { Route, Routes, useLocation } from "react-router";
import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Home } from "../components/common/Home";

// Lazy-load sub-pages for smaller initial bundle
const AboutPage    = lazy(() => import("../components/pages/AboutPage").then(m => ({ default: m.AboutPage })));
const WorkPage     = lazy(() => import("../components/pages/WorkPage").then(m => ({ default: m.WorkPage })));
const ServicesPage = lazy(() => import("../components/pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const ContactPage  = lazy(() => import("../components/pages/ContactPage").then(m => ({ default: m.ContactPage })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);

/** Thin crossfade wrapper applied to each page */
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.22, ease: [0.25, 0, 0, 1] }}
  >
    {children}
  </motion.div>
);

export const AppRouter = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"         element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about"    element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/work"     element={<PageTransition><WorkPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/contact"  element={<PageTransition><ContactPage /></PageTransition>} />
          {/* Legacy redirects */}
          <Route path="/projects" element={<PageTransition><WorkPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};