import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { RoofMark } from './Logo'

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

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onHome = location.pathname === '/'
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
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Chasara Home & Coffee — beranda"
        >
          <RoofMark size={38} tone={solid ? 'solid' : 'outline'} />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl tracking-tight transition-colors ${
                solid ? 'text-teal-800' : 'text-cream-50'
              }`}
            >
              Chasara
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.25em] transition-colors ${
                solid ? 'text-coral-600' : 'text-cream-100/80'
              }`}
            >
              Home &amp; Coffee
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? 'text-coral-600'
                        : 'text-ink-soft hover:text-teal-700'
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
            className="hidden rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-coral-600 active:translate-y-px sm:inline-flex"
          >
            Pesan Kamar
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-full transition lg:hidden ${
              solid ? 'text-teal-800 hover:bg-cream-100' : 'text-cream-50 hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

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
                      ? 'bg-coral-50 text-coral-600'
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
              className="block rounded-xl bg-coral-500 px-4 py-3 text-center text-base font-semibold text-white"
            >
              Pesan Kamar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
