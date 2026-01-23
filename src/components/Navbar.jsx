import { NavLink } from 'react-router-dom'
import githubLogo from '../assets/github-logo.svg'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <img
            src={githubLogo}
            alt="GitHub logo"
            className="h-12 w-12 rounded-2xl border border-white/10 bg-slate-950/40 p-2"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Brad Traversy Git Dashboard
            </p>
            
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-full border px-4 py-2 transition',
                  isActive
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-200'
                    : 'border-white/10 text-slate-300 hover:border-cyan-300/60 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
