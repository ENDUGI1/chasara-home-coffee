import { useState } from 'react'
import { Clock, Users2, Coffee as CoffeeIcon } from 'lucide-react'
import Reveal from '../components/Reveal'
import MenuCard from '../components/MenuCard'
import { menu } from '../data/menu'
import { SITE, unsplash } from '../data/siteConfig'

export default function Coffee() {
  const categories = ['Semua', ...menu.map((m) => m.category)]
  const [active, setActive] = useState('Semua')

  const visible = active === 'Semua' ? menu : menu.filter((m) => m.category === active)

  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden bg-coffee-700 pt-28 pb-14 text-cream-50 lg:pt-32 lg:pb-16">
        {/* TODO: Replace with actual photo (stok Unsplash sementara) */}
        <img
          src={unsplash('photo-1495474472287-4d71bcdd2085', 1600, 600)}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-700/50"
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-300">
              <CoffeeIcon className="h-4 w-4" />
              {SITE.coffeeName}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl text-cream-50 sm:text-5xl">
              Kopi yang diseduh sepenuh hati
            </h1>
            <p className="mt-4 max-w-xl text-cream-100/85">
              Dari espresso klasik sampai seduhan manual single origin. Mampir, baik kamu
              tamu yang menginap maupun sekadar ingin ngopi.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Info bar */}
      <div className="border-b border-cream-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm sm:flex-row sm:items-center sm:gap-8 lg:px-8">
          <span className="flex items-center gap-2.5 text-ink">
            <Clock className="h-4 w-4 text-coffee-700" />
            {SITE.hoursCoffee}
          </span>
          <span className="flex items-center gap-2.5 text-ink">
            <Users2 className="h-4 w-4 text-coffee-700" />
            Terbuka untuk umum
          </span>
        </div>
      </div>

      {/* Menu */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        {/* Tab filter */}
        <div
          role="tablist"
          aria-label="Filter kategori menu"
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition active:translate-y-px ${
                  isActive
                    ? 'bg-coffee-700 text-cream-50 shadow-sm'
                    : 'border border-cream-200 bg-white text-ink-soft hover:border-coffee-700/40 hover:text-coffee-800'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((group, i) => (
            <Reveal key={group.category} delay={i * 90}>
              <MenuCard category={group.category} items={group.items} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Harga dapat berubah sewaktu-waktu. Tersedia varian dingin untuk sebagian menu —
          tanyakan ke barista kami.
        </p>
      </section>
    </>
  )
}
