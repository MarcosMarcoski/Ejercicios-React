import { HelloWorld } from "./componentes/HelloWorld";

export function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      {/* se repetirá tantas veces como quieras en el navegador */}
      <hr />
    </div>
  );
}
