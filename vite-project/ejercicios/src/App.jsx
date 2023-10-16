import { AlertClock } from "./componentes/AlertClock";
import { Clock } from "./componentes/Clock";
import { Counter } from "./componentes/Counter";
import { InteractiveWelcome } from "./componentes/InteractiveWelcome";
import { MouseClicker } from "./componentes/MouseClicker";
import { MultiButton } from "./componentes/MutiButton";
import { Welcome } from "./componentes/Welcome";

export function App() {
  return (
    <div>
      <Counter />
      {/* <Clock/> */}

      {/* <MouseClicker/> */}

      <MultiButton />

      <InteractiveWelcome />
    </div>
  );
}
