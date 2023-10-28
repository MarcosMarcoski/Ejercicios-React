import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h2>Focus</h2>
      <input className="b-example-divider" type="text" ref={inputRef} />
    </div>
  );
}
