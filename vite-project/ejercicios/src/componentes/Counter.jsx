import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((c)=> c + 1);
  }

//   No habría ningún tipo de problema hacer una función FileSystemDirectoryHandle, pero es más práctico y se entiende mejor a simple vista de la otra manera

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
}
