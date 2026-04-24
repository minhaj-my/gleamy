import { useState, useEffect } from "react";
import "./index.css";
import { Loader } from "./components/Loader";
import { Hero } from "./sections/Hero";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const startTime = Date.now();
    const minimumDelay = 1500;
    const timePassed = Date.now() - startTime;
    const remainingTime = Math.max(0, minimumDelay - timePassed);
    setTimeout(() => setIsLoading(false), remainingTime);
  }, []);

  return <>{isLoading ? <Loader /> : <Hero />}</>;
}

export default App;
