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
import { UncontrolledLogin } from "./componentes/UncontrolledForm";
import { FocusableInput } from "./componentes/FocusableInput";
import { StrictMode } from "./componentes/StrictMode";
import { TodoList } from "./componentes/TodoList";

export function App() {
  return (
    <div>
      <Counter />
      <Clock/>

      {/* <MouseClicker/> */}

      {/* <MultiButton /> */}

      {/* <InteractiveWelcome /> */}

      <Login />
      {/* <Formulario /> */}

      {/* <Colors /> */}

      {/* <UncontrolledLogin/> */}

      {/* <FocusableInput/> */}

      {/* <StrictMode/> */}

      <TodoList />
      <Welcome />
    </div>
  );
}
