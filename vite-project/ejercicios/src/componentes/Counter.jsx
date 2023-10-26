import { useEffect, useState, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ start = 0 }) {
  const [counter, setCounter] = useState(start);
  const directionRef = useRef(null);
  useEffect(() => {
    if (!directionRef.current) {
      const direction = counter > start ? "up" : "down";
      console.log(`La dirección es: ${direction}`);
    }
  }, [counter, start]);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(start);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}
