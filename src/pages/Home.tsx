import { Component, For } from "solid-js";
import { repos, setUserName, userName } from "../App";
import RepoCards, { Repo } from "../components/RepoCards";

const Home: Component = () => {
  const fetchUserName = (e: Event) => {
    e.preventDefault();
    const usernameInput = document.querySelector(
      "#usernameInput"
    ) as HTMLInputElement;
    setUserName(usernameInput.value);
    
  console.log(repos())
  };

  return (
    <div>
      <form class="mb-3" onSubmit={(e) => fetchUserName(e)}>
        <input
          type="text"
          name=""
          id="usernameInput"
          class="p-1 align-middle"
          required
        />
        <button class="btn btn-primary ms-3 w-auto rounded-0">Fetch</button>
      </form>
      <h3 class="text-white">Github Repos for {userName()}</h3>

      <For each={repos()}>{(repo: Repo) => <RepoCards repo={repo} />}</For>
    </div>
  );
};

export default Home;
