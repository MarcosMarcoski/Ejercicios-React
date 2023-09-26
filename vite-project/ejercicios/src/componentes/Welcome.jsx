import { Age } from "./Age";
export function Welcome({ name }) {
  return (
    <div>
      <p>
        welcome, <strong>{name}</strong>!
      </p>
      <Age Age={30}></Age>
    </div>
  );
}
