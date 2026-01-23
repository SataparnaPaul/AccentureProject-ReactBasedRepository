const ProfileCard = ({ user }) => {
  return (
    <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/10 md:grid-cols-[140px_1fr]">
      <div className="flex items-center justify-center">
        <img
          src={user.avatar_url}
          alt={user.name || user.login}
          className="h-32 w-32 rounded-3xl border border-white/20 object-cover"
        />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          GitHub Profile
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          {user.name || 'Name not available'}
        </h2>
        <p className="mt-1 text-sm text-slate-300">@{user.login}</p>
        <p className="mt-4 text-sm text-slate-200">{user.bio || 'No bio yet.'}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
            Followers: {user.followers}
          </span>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
            Following: {user.following}
          </span>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
            Public repos: {user.public_repos}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
