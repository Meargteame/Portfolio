import { Route, Routes } from "react-router";
import { Suspense } from "react";
import { Home } from "../components/common/Home";
import { Navbar } from "../components/common/Navbar";

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-1 min-w-0 pt-16">
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
};