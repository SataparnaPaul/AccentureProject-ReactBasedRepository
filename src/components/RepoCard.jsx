const RepoCard = ({ repo }) => {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div>
        <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
        <p className="mt-2 text-sm text-slate-300">
          {repo.description || 'No description available.'}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
          Stars: {repo.stargazers_count}
        </span>
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
          Forks: {repo.forks_count}
        </span>
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
          Language: {repo.language || 'N/A'}
        </span>
      </div>
    </article>
  )
}

export default RepoCard
