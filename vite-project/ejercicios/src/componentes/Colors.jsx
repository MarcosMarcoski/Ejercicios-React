import { Color } from "./color"

export function Colors() {
    
    const ListColors = ["orange", "blue", "green"]
    
  return (
    <ul>
        {ListColors.map((color, index) => (
          <Color key={index} color={color} />
        ))}
    </ul>
  );
}
