import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
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

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/work"     element={<WorkPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact"  element={<ContactPage />} />
        {/* Legacy redirects */}
        <Route path="/projects" element={<WorkPage />} />
      </Routes>
    </Suspense>
  );
};