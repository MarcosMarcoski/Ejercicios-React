import { useState } from "react";

export function Container({ title, children }) {
  const [collapse, setCollapse] = useState(false);
  function handleToggleCollapse() {
    setCollapse((t) => !t);
  }
  return (
    <div>
      <div className="container">
        {title}
        <button onClick={handleToggleCollapse} className="container">
          click me!
        </button>
      </div>
      {collapse && <div>{children}</div>}
    </div>
  );
}
