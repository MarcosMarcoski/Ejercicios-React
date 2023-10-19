import { AlertClock } from "./componentes/AlertClock";
import { Clock } from "./componentes/Clock";
import { Counter } from "./componentes/Counter";
import { InteractiveWelcome } from "./componentes/InteractiveWelcome";
import { MouseClicker } from "./componentes/MouseClicker";
import { MultiButton } from "./componentes/MutiButton";
import { Welcome } from "./componentes/Welcome";
import { Login } from "./componentes/Login";
import { Formulario } from "./componentes/Formuario";
import { Colors } from "./componentes/Colors";

export function App() {
  return (
    <div>
      <Counter />
      {/* <Clock/> */}

      {/* <MouseClicker/> */}

      <MultiButton />

      <InteractiveWelcome />


      <Login/>

      <Formulario/>

      <Colors items={["orange", "blue", "red", "green", "yellow"]}/>
    </div>
  );
}
