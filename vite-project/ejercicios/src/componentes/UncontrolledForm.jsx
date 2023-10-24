export function UncontrolledLogin() {
  function handleFormSubmit(e) {
    event.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const data = { username, password };
    console.log(data);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Uncontrolled Form</h1>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="session" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
