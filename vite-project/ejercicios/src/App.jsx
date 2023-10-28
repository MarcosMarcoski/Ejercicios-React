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
import { Container } from "./componentes/Container";
import { createContext, useState } from "react";

export const LanguageContext = createContext('en')


export function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <Counter />
      <LanguageContext.Provider value={language}>
      <div>
        <select className="idioma" value={language} onChange={handleLanguageChange}>
          <option value="en">Inglés</option>
          <option value="es">Español</option>
        </select>
        <Clock />
      </div>
    </LanguageContext.Provider>

      {/* <MouseClicker/> */}

      {/* <MultiButton /> */}

      {/* <InteractiveWelcome /> */}

      <Login />
      {/* <Formulario /> */}

      {/* <Colors /> */}

      <UncontrolledLogin/>

      <FocusableInput/>

      {/* <StrictMode/> */}
<Container title={<h1>Título</h1>}>
      <TodoList />
      <Welcome />
</Container>
      
    </div>
  );
}
