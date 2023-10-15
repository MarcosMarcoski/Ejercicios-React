export function MouseClicker() {
  function handleButton(event) {
    console.log(event.currentTarget.name);
  }

  return (
    <button name="one" onClick={handleButton}>
      <img width={24} height={20} />
      click me!
    </button>
  );
}
