import { AlertClock } from "./componentes/AlertClock";
import { Clock } from "./componentes/Clock";
import { Counter } from "./componentes/Counter";
import { MouseClicker } from "./componentes/MouseClicker";
import { Welcome } from "./componentes/Welcome";

export function App() {
  return (
    <div>
      <Welcome name={"John"} age={16} />
      <Counter/>
      {/* <Clock/> */}

      <MouseClicker/>

    
    </div>
  );
}
