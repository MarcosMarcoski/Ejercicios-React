export function MultiButton() {
  function handleButton(event) {
    console.log(event.target.name);
  }
  return (
    <div>
      <button name="uno" onClick={handleButton}>
        Uno
      </button>
      <button name="dos" onClick={handleButton}>
        Dos
      </button>
      <button name="tres" onClick={handleButton}>
        Tres
      </button>
    </div>
  );
}
