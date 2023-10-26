import { useEffect, useRef } from "react";

export function StrictMode() {
  const strictMode = useRef(false);

  useEffect(() => {
    if (!strictMode.current) {
      strictMode.current = true;
      console.log("El componente se monto por primera vez");
    } else {
      console.log("El componente se actualizo");
    }
  }, []);
  return <div></div>;
}
