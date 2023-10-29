import { useEffect, useState, useRef, useCallback } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ start = 0 }) {
  const MyStyle ={
    backgroundColor: 'orange',
    border: '3px solid red',
  }
  const [counter, setCounter] = useState(start);
  const directionRef = useRef(null);
  useEffect(() => {
    if (!directionRef.current) {
      const direction = counter > start ? "up" : "down";
      console.log(`La dirección es: ${direction}`);
    }
  }, [counter, start]);

 
  const Increment = useCallback(function Increment(){
    setCounter((counter) => counter + 1)
  }, []);
  const Decrement = useCallback(function Decrement(){
    setCounter((counter) => counter - 1)
  }, []);
  const Reset = useCallback(function Reset(){
    setCounter(start)
  }, [start]);

  return (
    <div style={MyStyle}>
      <CounterDisplay counter={counter} />
      <button onClick={Increment}>INCREMENT</button>
      <button onClick={Decrement}>DECREMENT</button>
      <button onClick={Reset}>RESET</button>
    </div>
  );
}
