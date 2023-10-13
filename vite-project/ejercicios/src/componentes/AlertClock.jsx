export function AlertClock() {
  function handleButtonClick() {
    const now = new Date();
    alert(`the current time is ${now.toLocaleDateString()}`);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>click me!</button>
    </div>
  );
}
