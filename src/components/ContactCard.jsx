const ContactCard = ({ email, phone, socials }) => {
  return (
    <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
          Contact Details
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Let&apos;s connect
        </h2>
        <div className="mt-5 space-y-3 text-sm text-slate-200">
          <p>
            <span className="text-slate-400">Email:</span> {email}
          </p>
          <p>
            <span className="text-slate-400">Phone:</span> {phone}
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Social links
        </p>
        <ul className="mt-4 space-y-3 text-sm text-slate-200">
          {socials.map((social) => {
            const isDisabled = !social.href

            return (
              <li key={social.label}>
                {isDisabled ? (
                  <div className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-2 text-slate-500">
                    <span>{social.label}</span>
                    <span className="text-xs">Unavailable</span>
                  </div>
                ) : (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-2 transition hover:border-emerald-300/50 hover:text-white"
                  >
                    <span>{social.label}</span>
                    <span className="text-xs text-emerald-300">Visit</span>
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ContactCard
