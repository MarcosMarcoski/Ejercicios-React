import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({start = 0}) {
  const [counter, setCounter] = useState(start);

  function increment() {
    setCounter((c)=> c + 1);
  }



  return (
    <div>
        <CounterDisplay counter={counter} />
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
}
