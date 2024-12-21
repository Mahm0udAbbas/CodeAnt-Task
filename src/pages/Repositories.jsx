import RepoHeader from "../features/Repositories.jsx/RepoHeader";
import RepoList from "../features/Repositories.jsx/RepoList";

export default function Repositories() {
  return (
    <section className="md:rounded-md md:border md:border-[#E9EAEB]">
      <RepoHeader />
      <RepoList />
    </section>
  );
}
