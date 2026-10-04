import { Route, Routes } from "react-router";
import { Suspense } from "react";
import { Home } from "../components/common/Home";

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};