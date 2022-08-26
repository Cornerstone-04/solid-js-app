import { Component, createSignal, For } from 'solid-js';
import RepoCards, { Repo } from '../components/RepoCards';

const localRepos = JSON.parse(localStorage.getItem('savedRepos') || '[]')
const [savedRepos, setSavedRepos] = createSignal(localRepos as Repo[])

const SavedRepos: Component = () => {
    return (
        <div>
            <h2>Your saved repos </h2>
            <For each={savedRepos()}>{(repo: Repo) => <RepoCards repo={repo} />}</For>
        </div>
    )
}

export { savedRepos, setSavedRepos }
export default SavedRepos;