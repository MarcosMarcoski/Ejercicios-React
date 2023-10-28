import axios from "axios";
import { useEffect, useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    function fetchData() {
      axios
        .get(`https://api.github.com/users`)
        .then((response) => setUsers(response.data))
        .catch((e) => console.error("Error", e));
    }
    fetchData();
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li className="lista" key={user.id} onClick={() => handleUserClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {selectedUser && <GitHubUser username={selectedUser} />}
    </div>
  );
}
