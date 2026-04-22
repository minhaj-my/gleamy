import { useState, useEffect } from "react";
import "./index.css";
import { Nav } from "./components/Nav";
import { Loader } from "./components/Loader";
import { Tag } from "./components/Tags";
import { AngleScroller } from "./components/AngleScroller";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const startTime = Date.now();
    const minimumDelay = 1500;

    const timePassed = Date.now() - startTime;

    const remainingTime = Math.max(0, minimumDelay - timePassed);
    setTimeout(() => setIsLoading(false), remainingTime);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="animate-fadeIn">
          <AngleScroller />
          <Nav />
          <Tag />
        </div>
      )}
    </>
  );
}

export default App;
