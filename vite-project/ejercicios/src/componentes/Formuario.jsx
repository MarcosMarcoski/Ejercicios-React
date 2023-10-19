import { useState } from "react";

export function Formulario() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState(false);

  function handleOnChange(e) {
    e.preventDefault();
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  function handleOnClick() {
    setSubmit(true);
  }

  function handleForm() {
    setForm(!form);
  }

  return (
    <div>
      <button onClick={handleForm}>Desplegar Formulario</button>
     { form === true &&( <div>
        <input
          type="text"
          name="username"
          value={inputValue.username}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          value={inputValue.password}
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          value={inputValue.email}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>submit</button>
      </div>)}

      {submit === true && form === true && (
        <div>
          <ul>
            <li>username: {inputValue.username}</li>
            <li>password: {inputValue.password}</li>
            <li>email: {inputValue.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
