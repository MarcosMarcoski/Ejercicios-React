import { useState } from "react";

export function TodoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    const handleAddItem = () => {
      if (inputValue.trim() !== "") {
        setItems([...items, inputValue]);
        setInputValue("");
      }
    };
    const handleReset = () => {
      setItems([]);
    };
    const handleRemoveItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
    return (
      <div className="todoList-arriba">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <div>
          <input className="input-list"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="button-green" onClick={handleAddItem}>Agregar</button>
          <button className="button-red" onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  }