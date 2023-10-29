import useGithubUser from "./UseGitHubUser";

export function GitHubUser({ username }) {
  const data = useGithubUser(username);
  
    
  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h2>{data.login}</h2>
          <img src={data.avatar_url} alt="Avatar" />
        </div>
      )}
    </div>
  );
}