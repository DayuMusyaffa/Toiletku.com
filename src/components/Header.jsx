import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles, Toilet, X } from 'lucide-react'

const navItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Fasilitas', path: '/fasilitas' },
  { label: 'Monitoring', path: '/monitoring' },
  { label: 'Panduan', path: '/panduan' },
]

const linkClass = ({ isActive }) =>
  [
    'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-3 font-black transition',
    isActive
      ? 'border-pool/20 bg-cyan-50 text-pool'
      : 'border-transparent text-slate-600 hover:border-pool/20 hover:bg-cyan-50 hover:text-pool',
  ].join(' ')

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 px-4 py-4 backdrop-blur-xl md:px-14">
      <div className="mx-auto flex w-[min(1180px,100%)] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex items-center gap-3" to="/" onClick={closeMenu}>
            <span className="grid h-11 w-11 place-items-center rounded-lg border-2 border-ink bg-white text-pool shadow-sticker">
              <Toilet size={25} />
            </span>
            <span>
              <strong className="block text-lg leading-tight">ToiletKu</strong>
              <span className="block text-xs font-bold text-slate-500">Toilet ramah semua umur</span>
            </span>
          </Link>

          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-ink/10 bg-white md:hidden"
            type="button"
            aria-label="Buka menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <nav className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-2 md:flex md:flex-row md:items-center`} aria-label="Navigasi utama">
          {navItems.map((item) => (
            <NavLink className={linkClass} key={item.path} to={item.path} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
          <NavLink
            className={({ isActive }) =>
              `inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-ink bg-ink px-4 font-black text-white transition hover:bg-[#0f2529] ${
                isActive ? 'shadow-sticker' : ''
              }`
            }
            to="/login"
            onClick={closeMenu}
          >
            <Sparkles size={17} />
            Masuk
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
