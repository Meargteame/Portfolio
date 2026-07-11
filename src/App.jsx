<<<<<<< HEAD
import { useState, useEffect } from "react";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { LoadingScreen } from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
=======
import { AppRouter } from './router/AppRouter';
import { CustomCursor } from './components/effects/CustomCursor';
import { ParticleField } from './components/effects/ParticleField';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <ParticleField count={50} speed={0.2} size={1.2} />
>>>>>>> 8369e6ebd4276dcb34e204f9c5abc8a794c1fddd
      <AppRouter />
    </>
  );
}

export default App;
