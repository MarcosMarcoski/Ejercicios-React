
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../App";
export function Clock() {
  const [date, setData] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    setInterval(() => {
      console.log("updating date...");

      setData(new Date());
    }, 1000);
  }, []);

  return (
    <h2 className="clock">
    {language === "en" ? "Time:" : "Hora:"} {date.toLocaleTimeString()}
  </h2>
  );
}
