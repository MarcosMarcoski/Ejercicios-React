import { useState, useEffect } from "react";

export function Clock() {
  const [date, setData] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      console.log("updating date...");

      setData(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h2>current time: {date.toLocaleTimeString()}</h2>
    </div>
  );
}
