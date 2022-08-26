import { Routes, Route } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";
import { baseURL } from "./baseURL";

const [userName, setUserName] = createSignal("Cornerstone-04");
const [repos, setRepos] = createSignal([]);

createEffect(async () => {
  const res = await fetch(`${baseURL}/${userName()}/repos?sort=created`);
  setRepos(await res.json());
});
const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-repos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export { userName, setUserName, repos, setRepos };
export default App;
