import { useState } from 'react'
import { Clock, Users2, MapPin, PartyPopper, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import MenuCard from '../components/MenuCard'
import { menu } from '../data/menu'
import { SITE, waLink } from '../data/siteConfig'

export default function Coffee() {
  const categories = ['Semua', ...menu.map((m) => m.category)]
  const [active, setActive] = useState('Semua')

  const visible = active === 'Semua' ? menu : menu.filter((m) => m.category === active)

  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden bg-charcoal-900 pt-28 pb-16 text-cream-50 lg:pt-32 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{ backgroundImage: 'radial-gradient(circle at 85% 15%, #d9714a 0, transparent 45%)' }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral-300">
              {SITE.coffeeName} · {SITE.coffeeFloor}
            </p>
            <h1 className="mt-3 font-script text-5xl text-coral-300 sm:text-6xl">
              {SITE.coffeeTagline}
            </h1>
            <p className="mt-4 max-w-xl text-cream-100/85">
              Dari Espresso klasik sampai Chasara Latte signature. Mampir, baik kamu tamu
              yang menginap maupun sekadar ingin ngopi.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Info bar */}
      <div className="border-b border-cream-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 lg:px-8">
          <span className="flex items-center gap-2.5 text-ink">
            <Clock className="h-4 w-4 text-coral-500" />
            {SITE.hoursCoffee}
          </span>
          <span className="flex items-center gap-2.5 text-ink">
            <MapPin className="h-4 w-4 text-coral-500" />
            {SITE.coffeeFloor}
          </span>
          <span className="flex items-center gap-2.5 text-ink">
            <Users2 className="h-4 w-4 text-coral-500" />
            Terbuka untuk umum
          </span>
        </div>
      </div>

      {/* Menu */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div role="tablist" aria-label="Filter kategori menu" className="flex flex-wrap gap-2">
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
                    ? 'bg-coral-500 text-white shadow-sm'
                    : 'border border-cream-200 bg-white text-ink-soft hover:border-coral-300 hover:text-coral-600'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((group, i) => (
            <Reveal key={group.category} delay={i * 90}>
              <MenuCard category={group.category} items={group.items} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Harga dapat berubah sewaktu-waktu. Sebagian menu tersedia panas/dingin —
          tanyakan ke barista kami.
        </p>
      </section>

      {/* Kolaborasi & event */}
      <section className="bg-cream-100/60 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-coral-500 text-white">
              <PartyPopper className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h2 className="mt-6 text-3xl text-teal-800 sm:text-4xl">
              Kolaborasi, Event & Private Party
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Chasara Coffee terbuka untuk kolaborasi, acara, hingga reservasi private
              party. Punya ide atau ingin menggelar acara di lantai 3? Yuk ngobrol.
            </p>
            <a
              href={waLink(
                'Halo Chasara Coffee, saya tertarik untuk kolaborasi/event. Boleh info lebih lanjut?',
                SITE.coffeePhone.wa,
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-800 px-7 py-3.5 font-semibold text-cream-50 transition hover:bg-teal-700 active:translate-y-px"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              Hubungi {SITE.coffeePhone.label}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
