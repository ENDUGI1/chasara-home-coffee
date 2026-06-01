import { Link } from 'react-router-dom'
import { Home, Instagram, MapPin, Phone } from 'lucide-react'
import { SITE, waLink } from '../data/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 overflow-hidden bg-forest-900 text-cream-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #c8a96e 0, transparent 45%), radial-gradient(circle at 85% 70%, #6b3f1f 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-800 text-gold-400">
                <Home className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-display text-2xl text-cream-50">Chasara</span>
            </div>
            <p className="mt-4 max-w-xs font-display text-lg italic text-gold-300">
              "{SITE.tagline}"
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-200/70">
              Guesthouse nyaman & coffee shop dalam satu tempat di {SITE.city}.
            </p>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer">
            <h3 className="font-display text-base text-cream-50">Jelajahi</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ['Beranda', '/'],
                ['Kamar', '/kamar'],
                ['Chasara Coffee', '/coffee'],
                ['Reservasi', '/reservasi'],
                ['Kontak', '/kontak'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-cream-200/75 transition hover:text-gold-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h3 className="font-display text-base text-cream-50">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={waLink('Halo Chasara Home, saya ingin bertanya.')}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-300"
                >
                  Chat WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-300"
                >
                  @{SITE.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-cream-200/60 sm:flex-row">
          <p>
            © {year} {SITE.name} · {SITE.city.split(',')[0]}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Chasara"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold-400 hover:text-gold-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={waLink('Halo Chasara Home, saya ingin bertanya.')}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Chasara"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-gold-400 hover:text-gold-300"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
