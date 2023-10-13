export function Welcome({ name, age }) {
  return (
    <div>
      <p>
        welcome, <strong>{name}</strong>!
      </p>

      {age && <p>You are {age} years old.</p>}
    </div>
  );
}
