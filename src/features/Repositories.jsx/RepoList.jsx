import RepoItem from "./RepoItem";

const repositories = [
  {
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    lastUpdated: "Updated 1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    language: "Javascript",
    size: "5871 KB",
    lastUpdated: "Updated 2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    lastUpdated: "Updated 5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    language: "Swift",
    size: "3096 KB",
    lastUpdated: "Updated 3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    language: "Java",
    size: "6210 KB",
    lastUpdated: "Updated 6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    lastUpdated: "Updated 4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    language: "PHP",
    size: "5432 KB",
    lastUpdated: "Updated 7 days ago",
  },
];

export default function RepoList() {
  return (
    <ul>
      {repositories.map((repo) => (
        <RepoItem key={repo.name} repo={repo} />
      ))}
    </ul>
  );
}
