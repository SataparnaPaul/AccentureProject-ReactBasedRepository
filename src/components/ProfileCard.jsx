import { useMemo, useState } from 'react'

const ProfileCard = ({ user }) => {
  const [avatarError, setAvatarError] = useState(false)
  const fallbackAvatar =
    'https://avatars.githubusercontent.com/u/5550850?v=4'
  const avatarSrc = user?.avatar_url || fallbackAvatar
  const initials = useMemo(() => {
    if (!user?.name) {
      return user?.login?.slice(0, 2).toUpperCase() || 'GH'
    }

    return user.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('')
  }, [user])

  return (
    <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/10 md:grid-cols-[140px_1fr]">
      <div className="flex items-center justify-center">
        {avatarError ? (
          <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-white/20 bg-slate-950/60 text-2xl font-semibold text-cyan-200">
            {initials}
          </div>
        ) : (
          <img
            src={avatarSrc}
            alt={user.name || user.login}
            className="h-32 w-32 rounded-3xl border border-white/20 object-cover"
            loading="lazy"
            onError={(event) => {
              if (event.currentTarget.src !== fallbackAvatar) {
                event.currentTarget.src = fallbackAvatar
                return
              }
              setAvatarError(true)
            }}
          />
        )}
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
