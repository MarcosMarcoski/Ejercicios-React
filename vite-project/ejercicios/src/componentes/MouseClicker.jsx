export function MouseClicker() {
  function handleButton(event) {
    console.log(event.currentTarget.name);
  }
  function handleImage(event) {
    console.log(event.currenTarget.img);
  }

  return (
    <button name="one" onClick={handleButton}>
      <img onClick={handleImage} width={24} height={20} />
      click me!
    </button>
  );
}

// sigue imprimiendo el name "one" porque la imagen está dentro del button
