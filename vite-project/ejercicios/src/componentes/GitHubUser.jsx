import useGithubUser from "./UseGitHubUser";

export function GitHubUser({ username }) {
  const{ data , loading , error }= useGithubUser(username)
  
    
  return (
    <div>
      {data && (
        <div>
          {loading && <h1>Cargando...</h1>}
      {error && <h1>Ha habido un error</h1>}
          <h1>{data.name}</h1>
          <h2>{data.login}</h2>
          <img src={data.avatar_url} alt="Avatar" />
        </div>
      )}
    </div>
  );
}