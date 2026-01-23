import { useMemo, useState } from 'react'

const RepoCard = ({ repo }) => {
  const [isOpen, setIsOpen] = useState(false)

  const detailRows = useMemo(
    () => [
      { label: 'Full name', value: repo.full_name },
      { label: 'Default branch', value: repo.default_branch },
      { label: 'Visibility', value: repo.visibility },
      { label: 'Open issues', value: repo.open_issues_count },
      { label: 'Watchers', value: repo.watchers_count },
      { label: 'License', value: repo.license?.name || 'N/A' },
      { label: 'Updated', value: new Date(repo.updated_at).toLocaleDateString() },
    ],
    [repo],
  )

  return (
    <article
      className="group flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setIsOpen((prev) => !prev)
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
            {isOpen ? 'Collapse' : 'Details'}
          </span>
        </div>
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
      {isOpen && (
        <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-slate-200">
          <div className="flex flex-wrap gap-3">
            {detailRows.map((row) => (
              <span
                key={row.label}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1"
              >
                {row.label}: {row.value || 'N/A'}
              </span>
            ))}
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-cyan-200 transition hover:text-cyan-100"
            onClick={(event) => event.stopPropagation()}
          >
            View on GitHub
            <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
              External
            </span>
          </a>
        </div>
      )}
    </article>
  )
}

export default RepoCard
