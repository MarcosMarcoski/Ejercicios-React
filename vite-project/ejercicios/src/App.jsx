import { AlertClock } from "./componentes/AlertClock";
import { Counter } from "./componentes/Counter";
import { Welcome } from "./componentes/Welcome";

export function App() {
  return (
    <div>
      <Welcome name={"John"} age={16} />
      <Counter/>

    
    </div>
  );
}
