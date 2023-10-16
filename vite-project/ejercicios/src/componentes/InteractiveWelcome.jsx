import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <Welcome name={inputValue} />
    </div>
  );
}
