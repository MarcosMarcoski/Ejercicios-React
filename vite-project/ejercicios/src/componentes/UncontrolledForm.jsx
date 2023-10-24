export function UncontrolledLogin() {
  function handleFormSubmit(e) {
    event.preventDefault();
    const formData = new FormData(e.target);
        const data = {
            username : formData.get('username'),
            password : formData.get('password'),
            session : formData.get('session') === 'on' ? true : false,
        }
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

// desventaja: no siempre es compatible con todos los navegadores

// ventaja: es muy eficaz en formularios HTML