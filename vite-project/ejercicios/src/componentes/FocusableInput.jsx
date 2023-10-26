import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h2>Focus</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}
