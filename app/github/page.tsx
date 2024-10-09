// app/github-repos/page.tsx

import React from 'react';

// This function runs on the server and fetches data from GitHub API
async function fetchRepos() {
  const res = await fetch('https://api.github.com/users/github/repos');
  const repos = await res.json();
  return repos.slice(0, 5); // Limit to 5 repos for simplicity
}

const GitHubRepos = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      <h1>Top GitHub Repositories</h1>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a> - ⭐ {repo.stargazers_count} stars
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
