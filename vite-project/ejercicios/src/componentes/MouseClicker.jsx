export function MouseClicker(){
function handleButton (event){
    console.log(event.currentTarget.name)
}

    return (
        <button name="one" onClick={handleButton}>click me!</button>

    )
}