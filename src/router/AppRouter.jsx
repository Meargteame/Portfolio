import { Route, Routes } from "react-router";
import { Home }         from "../components/common/Home";
import { AboutPage }    from "../components/pages/AboutPage";
import { WorkPage }     from "../components/pages/WorkPage";
import { ServicesPage } from "../components/pages/ServicesPage";
import { ContactPage }  from "../components/pages/ContactPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/about"    element={<AboutPage />} />
      <Route path="/work"     element={<WorkPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact"  element={<ContactPage />} />
      {/* Legacy redirects */}
      <Route path="/projects" element={<WorkPage />} />
    </Routes>
  );
};