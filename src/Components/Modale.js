import React, { useEffect, useState } from "react";

const USERNAME = "github-john-doe";

const GitHubIdentity = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Erreur lors du chargement du profil GitHub");
      }
    };

    fetchUser();
  }, []);

  //   Empêche le rendu tant que les données n’existent pas
  if (!user) return null;

  return (
    <div className="github-identity">
      <img
        src={user.avatar_url}
        alt={`Avatar de ${user.login}`}
        width="120"
        style={{ borderRadius: "50%" }}
      />

      <h2>{user.name || user.login}</h2>
      <p>{user.location || ""}</p>

      <ul>
        <li>Repositories : {user.public_repos}</li>
        <li>Followers : {user.followers}</li>
        <li>Following : {user.following}</li>
      </ul>
    </div>
  );
};

export default GitHubIdentity;
