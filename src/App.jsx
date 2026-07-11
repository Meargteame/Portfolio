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
      <AppRouter />
    </>
  );
}

export default App;
