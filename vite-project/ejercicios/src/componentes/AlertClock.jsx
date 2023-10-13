export function AlertClock() {
  function handleButtonClick() {
    const now = new data();
    alert(`the current time is ${now.toLocalTimeString()}`);
  }

  return (
    <div>
      <button Onclick={handleButtonClick}>click me!</button>
    </div>
  );
}
