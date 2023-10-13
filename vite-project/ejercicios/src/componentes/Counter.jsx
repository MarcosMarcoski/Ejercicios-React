import { useState } from "react";

export function Counter({start = 0}) {
  const [counter, setCounter] = useState(start);

  function increment() {
    setCounter((c)=> c + 1);
  }



  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
}
