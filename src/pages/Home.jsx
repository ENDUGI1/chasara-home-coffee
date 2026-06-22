import { Link } from 'react-router-dom'
import {
  BedDouble,
  Coffee,
  MapPin,
  MessageCircle,
  Wind,
  Flame,
  Refrigerator,
  Tv,
  Archive,
  GlassWater,
  Sparkles,
  ArrowRight,
  Clock,
  LogIn,
  LogOut,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'
import { SITE, waLink, checkInfo, formatRupiah } from '../data/siteConfig'

// Sorotan menu untuk teaser (bukan seluruh menu — selengkapnya di /coffee).
const coffeeHighlights = [
  { name: 'Chasara Latte', price: 20000, desc: 'Signature house blend', signature: true },
  { name: 'Aren Latte', price: 15000, desc: 'Manis gula aren' },
  { name: 'Matcha Latte', price: 18000, desc: 'Matcha lembut' },
  { name: 'Pisang Goreng', price: 15000, desc: 'Camilan favorit' },
]

const quickInfo = [
  { icon: BedDouble, label: 'Kamar Nyaman & Bersih' },
  { icon: Coffee, label: 'Coffee Shop di Lantai 3' },
  { icon: MapPin, label: 'Lokasi Strategis Balikpapan' },
  { icon: MessageCircle, label: 'Booking Mudah via WhatsApp' },
]

const facilities = [
  { icon: BedDouble, label: 'Double Bed' },
  { icon: Wind, label: 'AC' },
  { icon: Flame, label: 'Water Heater' },
  { icon: Refrigerator, label: 'Kulkas' },
  { icon: Tv, label: 'TV' },
  { icon: Archive, label: 'Lemari' },
  { icon: GlassWater, label: 'Dispenser Umum' },
  { icon: Sparkles, label: 'Amenities' },
]

export default function Home() {
  const room = rooms[0]

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
        <img
          src="/images/room-02.jpeg"
          alt="Kamar Deluxe Chasara Home, Balikpapan"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-teal-900/75 via-teal-900/55 to-charcoal-900/85"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 lg:px-8">
          <div className="max-w-2xl">
            <p
              className="hero-rise font-medium uppercase tracking-[0.22em] text-coral-300"
              style={{ animationDelay: '0.05s', fontSize: '0.78rem' }}
            >
              {SITE.homeName} &amp; {SITE.coffeeName}
            </p>
            <h1
              className="hero-rise mt-5 text-4xl leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl"
              style={{ animationDelay: '0.18s' }}
            >
              Istirahat Nyaman, Kopi Nikmat —{' '}
              <span className="text-coral-400">Semua di Satu Tempat</span>
            </h1>
            <p
              className="hero-rise mt-5 max-w-xl text-lg text-cream-100/90"
              style={{ animationDelay: '0.32s' }}
            >
              {SITE.city}. Menginap tenang di guesthouse yang homey, lalu naik ke lantai
              3 untuk secangkir kopi di Chasara Coffee.
            </p>
            <div className="hero-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.46s' }}>
              <Link
                to="/kamar"
                className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-charcoal-900/20 transition hover:bg-coral-600 active:translate-y-px"
              >
                Lihat Kamar
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                to="/reservasi"
                className="inline-flex items-center gap-2 rounded-full border border-cream-100/40 bg-white/5 px-7 py-3.5 font-semibold text-cream-50 backdrop-blur-sm transition hover:bg-white/15"
              >
                Reservasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== QUICK INFO BAR ============== */}
      <section className="border-b border-cream-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-cream-200 lg:grid-cols-4">
          {quickInfo.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              delay={i * 90}
              className="flex items-center gap-3.5 bg-white px-5 py-6 lg:px-8"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream-100 text-teal-700">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium leading-snug text-ink">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== TENTANG CHASARA ============== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral-600">
              Tentang Kami
            </p>
            <h2 className="mt-4 text-3xl text-teal-800 sm:text-4xl">
              Dua hal yang bikin betah, dalam satu gedung
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                {SITE.homeName} menghadirkan kamar yang bersih, nyaman, dan tertata
                dengan interior modern — tempat menginap yang terasa seperti rumah di
                jantung Balikpapan.
              </p>
              <p>
                Dan ketika ingin bersantai, cukup naik ke lantai 3. Di sana{' '}
                {SITE.coffeeName} siap dengan kopi dan camilan, terbuka untuk tamu maupun
                umum.
              </p>
            </div>
            <Link
              to="/kamar"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-teal-700 underline-offset-4 transition hover:gap-3 hover:text-coral-600"
            >
              Lihat Kamar
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-teal-900/10">
              <img
                src="/images/room-01.jpeg"
                alt="Suasana kamar Chasara Home"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-coral-500 px-6 py-5 text-white shadow-lg sm:block">
              <Sparkles className="h-5 w-5" />
              <p className="mt-2 font-display text-2xl leading-none">Homey</p>
              <p className="text-xs font-medium opacity-90">&amp; Hangat</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== FEATURED KAMAR ============== */}
      <section className="bg-cream-100/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl text-teal-800 sm:text-4xl">Kamar Kami</h2>
            <p className="mt-3 text-ink-soft">
              Satu tipe kamar terbaik — Deluxe Room — dengan fasilitas lengkap dan harga
              yang ramah.
            </p>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <RoomCard room={room} variant="full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== CHASARA COFFEE TEASER ============== */}
      <section className="relative overflow-hidden bg-charcoal-900 text-cream-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #d9714a 0, transparent 42%)' }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral-300">
              {SITE.coffeeName} · {SITE.coffeeFloor}
            </p>
            <h2 className="mt-3 font-script text-4xl text-coral-300 sm:text-5xl">
              {SITE.coffeeTagline}
            </h2>
            <p className="mt-5 max-w-md text-cream-100/85">
              Dari Espresso sampai Chasara Latte signature, ditemani camilan hangat. Buka
              setiap hari pukul 16.00–22.00 WITA, terbuka untuk umum.
            </p>
            <Link
              to="/coffee"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 font-semibold text-white transition hover:bg-coral-600 active:translate-y-px"
            >
              Lihat Menu
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-script text-3xl text-coral-300">Menu Pilihan</p>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream-200/55">
                  Coffee · Snack
                </span>
              </div>
              <ul className="mt-5 divide-y divide-white/10">
                {coffeeHighlights.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4 py-3.5">
                    <div>
                      <p className="flex items-center gap-2 font-medium text-cream-50">
                        {item.name}
                        {item.signature && (
                          <span className="rounded-full bg-coral-500/25 px-2 py-0.5 text-[10px] font-semibold text-coral-200">
                            Signature
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-cream-200/55">{item.desc}</p>
                    </div>
                    <span className="shrink-0 font-semibold tabular-nums text-coral-300">
                      {formatRupiah(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/coffee"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-300 underline-offset-4 transition hover:gap-2.5 hover:text-coral-200"
              >
                Lihat menu lengkap
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== FASILITAS ============== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl text-teal-800 sm:text-4xl">Fasilitas Kamar</h2>
          <p className="mt-3 text-ink-soft">
            Semua yang kamu butuhkan untuk menginap dengan nyaman.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {facilities.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              delay={i * 60}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-cream-200 bg-white p-7 text-center transition-colors hover:border-coral-300"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-cream-100 text-teal-700 transition-colors group-hover:bg-teal-800 group-hover:text-coral-300">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-ink">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== INFO MENGINAP ============== */}
      <section className="bg-cream-100/60 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral-600">
              Informasi Menginap
            </p>
            <h2 className="mt-3 text-3xl text-teal-800 sm:text-4xl">Fleksibel untukmu</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal className="rounded-3xl border border-cream-200 bg-white p-7 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cream-100 text-teal-700">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg text-teal-800">Check-in / out</h3>
              <p className="mt-1 text-sm text-ink-soft">Check-in 14.00 · Check-out 12.00 WITA</p>
            </Reveal>

            <Reveal delay={100} className="rounded-3xl border border-coral-200 bg-coral-50 p-7 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-coral-600">
                <LogIn className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 flex items-center justify-center gap-2 text-lg text-coral-700">
                {checkInfo.earlyCheckIn.title}
                <span className="rounded-full bg-coral-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  GRATIS
                </span>
              </h3>
              <p className="mt-1 text-sm text-coral-700/80">{checkInfo.earlyCheckIn.note}</p>
            </Reveal>

            <Reveal delay={200} className="rounded-3xl border border-cream-200 bg-white p-7 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sage-100 text-sage-700">
                <LogOut className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg text-teal-800">{checkInfo.lateCheckOut.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{checkInfo.lateCheckOut.note}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== CTA BANNER ============== */}
      <section className="mx-auto max-w-7xl px-5 pb-4 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-800 to-teal-900 px-7 py-16 text-center shadow-xl sm:px-12 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 15% 20%, #d9714a 0, transparent 35%), radial-gradient(circle at 85% 85%, #8aa897 0, transparent 35%)',
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl text-cream-50 sm:text-4xl lg:text-5xl">
                Siap Menginap? Hubungi Kami Sekarang
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-cream-100/85">
                Tim kami siap membantu mengatur jadwal menginapmu. Cepat, ramah, dan
                tanpa ribet.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={waLink('Halo Chasara Home, saya ingin menanyakan ketersediaan kamar.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 font-semibold text-white transition hover:bg-coral-600 active:translate-y-px"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                  Chat WhatsApp
                </a>
                <Link
                  to="/reservasi"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-7 py-3.5 font-semibold text-cream-50 transition hover:bg-white/10"
                >
                  Form Reservasi
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
