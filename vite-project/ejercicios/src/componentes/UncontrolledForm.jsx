
export function UncontrolledLogin() {
  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
        const data = {
            username : formData.get('username'),
            password : formData.get('password'),
            session : formData.get('session') === 'on' ? true : false,
        }
    console.log(data);
  }
  return (
    <form  onSubmit={handleFormSubmit}>
      <h1 className="bg-blue-200">Uncontrolled Form</h1>
      <input className="border rounded p-4 bg-pink-200" type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="session" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

// desventaja: no siempre es compatible con todos los navegadores

// ventaja: es muy eficaz en formularios HTML