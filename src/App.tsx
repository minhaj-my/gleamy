import { useState, useEffect } from "react";
import "./index.css";
import { Nav } from "./components/Nav";
import { Loader } from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const startTime = Date.now();
  useEffect(() => {
    const timePassed = Date.now() - startTime;
    const minimumDelay = 1500;
    const remainingTime = Math.max(0, minimumDelay - timePassed);

    setTimeout(() => setIsLoading(false), remainingTime);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="animate-fadeIn">
          <Nav />
        </div>
      )}
    </>
  );
}

export default App;
