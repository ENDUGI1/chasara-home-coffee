import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Home, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/kamar', label: 'Kamar' },
  { to: '/coffee', label: 'Coffee' },
  { to: '/kamar#fasilitas', label: 'Fasilitas' },
  { to: '/reservasi', label: 'Reservasi' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup menu mobile setiap pindah halaman.
  useEffect(() => {
    setOpen(false)
  }, [location])

  // Kunci scroll body saat menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onHome = location.pathname === '/'
  // Di beranda, navbar mengambang transparan di atas hero; setelah scroll jadi solid.
  const solid = scrolled || !onHome

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-cream-200/70 bg-cream-50/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2"
          aria-label="Chasara Home & Coffee — beranda"
        >
          <span
            className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
              solid
                ? 'border-forest-800/20 bg-forest-800 text-gold-400'
                : 'border-white/30 bg-white/10 text-gold-400 backdrop-blur'
            }`}
          >
            <Home className="h-4 w-4" strokeWidth={2} />
          </span>
          <span
            className={`font-display text-xl leading-none tracking-tight transition-colors ${
              solid ? 'text-forest-800' : 'text-cream-50'
            }`}
          >
            Chasara
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? 'text-forest-800'
                        : 'text-ink-soft hover:text-forest-800'
                      : isActive
                        ? 'text-white'
                        : 'text-cream-100/90 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/reservasi"
            className="hidden rounded-full bg-forest-800 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-forest-700 active:translate-y-px sm:inline-flex"
          >
            Pesan Kamar
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-full transition lg:hidden ${
              solid ? 'text-forest-800 hover:bg-cream-100' : 'text-cream-50 hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-t border-cream-200 bg-cream-50 transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? 'bg-forest-800/5 text-forest-800'
                      : 'text-ink-soft hover:bg-cream-100'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/reservasi"
              className="block rounded-xl bg-forest-800 px-4 py-3 text-center text-base font-semibold text-cream-50"
            >
              Pesan Kamar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
