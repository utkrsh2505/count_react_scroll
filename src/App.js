import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(0);

  const timeRef = useRef(null);
  useEffect(() => {
    return pauseTimer;
  }, []);
  const startTimer = () => {
    if (timeRef.current === null) {
      console.log(timeRef.current);
      timeRef.current = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
    }
  };
  const pauseTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  const resetTimer = () => {
    pauseTimer();
    setState(0);
  };
  const scrollRef = useRef(null);
  const handleTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };
  return (
    <div className="App">
      <h3>{state}</h3>
      <button onClick={startTimer}> Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}> Reset</button>

      <div
        style={{
          border: "1px solid black",
          height: "400px",
          width: "400px",
          overflow: "auto"
        }}
        ref={scrollRef}
      >
        <div
          style={{
            border: "1px solid black",
            height: "1200px",
            width: "300px",
            margin: "20px"
          }}
        ></div>
      </div>
      <button onClick={handleTop}>Move to Top</button>
    </div>
  );
}
