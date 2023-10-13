import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ start = 0 }) {
  const [counter, setCounter] = useState(start);
  useEffect(() => {
    console.log("el valor es:", counter);
  }, [counter]);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
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
