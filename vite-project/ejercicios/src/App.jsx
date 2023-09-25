import { HelloWorld } from "./componentes/HelloWorld";
import { Mensaje } from "./componentes/Mensaje";

export function App() {
  return (
    <div>
      <HelloWorld />
      <Mensaje/>

      {/* sí, ya que es otro componente creado por separado y lo podemos reutilizar. En en el navegador saldrá debajo del Hello */}
      
      <hr />
    </div>
  );
}
