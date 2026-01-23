import RepoCard from './RepoCard.jsx'

const RepoList = ({ repos }) => {
  if (!repos.length) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-sm text-slate-300">
        No repositories to display yet.
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default RepoList
