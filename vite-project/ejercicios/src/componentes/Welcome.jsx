export function Welcome({ name, age }) {
  return (
    <div>
      <p>
        welcome, <strong>{name}</strong>!
      </p>

      {age > 18 && <p>You are {age} years old.</p>}
    </div>
  );
}
