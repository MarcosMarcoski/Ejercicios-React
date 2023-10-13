import { Button } from "./Button";

export function AlertClock() {
  function handleShowTime() {
    const now = new Date();
    alert(`the current time is ${now.toLocaleDateString()}`);
  }

  return (
    <div>
      <p>click the button below to show the current time!</p>
      <Button onclick={handleShowTime} label={"click me!"} />
    </div>
  );
}
