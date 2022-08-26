import { Component } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
  forks: string;
  visibility: string;
};

interface Props {
  repo: Repo;
}

const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const unsaveRepo = (repoId: string) => {
  const nextState = savedRepos()?.filter((item) => item.id !== repoId);
  setSavedRepos(nextState);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const repoIsSaved = (repoId: string) => {
  const repo = savedRepos()?.filter((item) => item.id === repoId);
  return repo?.length > 0;
};

const RepoCards: Component<Props> = ({ repo }) => {
  return (
    <div class="card mb-2">
      <div class="card-header d-flex justify-content-between">
        {" "}
        <p>&#11088; Stars: {repo.stargazers_count}</p>
        <p>Forks: {repo.forks}</p>
      </div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        {repoIsSaved(repo.id) ? (
          <button class="btn btn-danger" onClick={() => unsaveRepo(repo.id)}>
            Unsave
          </button>
        ) : (
          <button class="btn btn-success" onClick={() => saveRepo(repo)}>
            Save
          </button>
        )}
      </div>
      <div class="card-footer text-capitalize">Visibility: {repo.visibility}</div>
    </div>
  );
};

export default RepoCards;
