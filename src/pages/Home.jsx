import { Link } from 'react-router-dom'
import {
  BedDouble,
  Coffee,
  MapPin,
  MessageCircle,
  Wifi,
  Car,
  Flame,
  Tv,
  Sofa,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import RoomCard from '../components/RoomCard'
import TestimonialCard from '../components/TestimonialCard'
import { rooms } from '../data/rooms'
import { SITE, waLink, unsplash } from '../data/siteConfig'

const quickInfo = [
  { icon: BedDouble, label: 'Kamar Nyaman & Bersih' },
  { icon: Coffee, label: 'Coffee Shop di Lokasi' },
  { icon: MapPin, label: 'Lokasi Strategis Balikpapan' },
  { icon: MessageCircle, label: 'Booking Mudah via WhatsApp' },
]

const facilities = [
  { icon: Wifi, label: 'WiFi Cepat' },
  { icon: Car, label: 'Area Parkir' },
  { icon: Flame, label: 'Air Panas' },
  { icon: Tv, label: 'TV Kabel' },
  { icon: Coffee, label: 'Coffee Shop' },
  { icon: Sofa, label: 'Area Santai' },
  { icon: ShieldCheck, label: 'Keamanan 24 Jam' },
  { icon: BedDouble, label: 'Kasur Berkualitas' },
]

const testimonials = [
  {
    name: 'Budi S.',
    role: 'Tamu Bisnis · Jakarta',
    rating: 5,
    quote:
      'Kamarnya bersih, kasur empuk, dan yang bikin betah ada coffee shop di bawah. Pagi-pagi tinggal turun ngopi.',
  },
  {
    name: 'Rina K.',
    role: 'Liburan Keluarga · Samarinda',
    rating: 5,
    quote:
      'Kamar family-nya luas, anak-anak nyaman. Lokasinya strategis, dekat ke mana-mana. Pasti balik lagi.',
  },
  {
    name: 'Ahmad F.',
    role: 'Solo Traveler · Surabaya',
    rating: 5,
    quote:
      'Proses booking lewat WhatsApp cepat dan ramah. Kopinya enak, harga kamarnya masuk akal. Recommended.',
  },
]

// TODO: Replace with actual photos (stok Unsplash sementara)
const coffeeShots = [
  { label: 'Latte', src: unsplash('photo-1461023058943-07fcbe16d735', 400, 400) },
  { label: 'Cold Brew', src: unsplash('photo-1518057111178-44a106bad636', 400, 400) },
  { label: 'V60', src: unsplash('photo-1442512595331-e89e73853f31', 400, 400) },
  { label: 'Camilan', src: unsplash('photo-1525351484163-7529414344d8', 400, 400) },
]

export default function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
        {/* TODO: Replace with actual photo (stok Unsplash sementara) */}
        <img
          src={unsplash('photo-1564501049412-61c2a3083791', 1600, 1000)}
          alt="Eksterior Chasara Home & Coffee, Balikpapan"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/55 to-forest-900/85"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 lg:px-8">
          <div className="max-w-2xl">
            <p
              className="hero-rise font-medium uppercase tracking-[0.22em] text-gold-300"
              style={{ animationDelay: '0.05s', fontSize: '0.78rem' }}
            >
              {SITE.homeName} &amp; {SITE.coffeeName}
            </p>
            <h1
              className="hero-rise mt-5 text-4xl leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl"
              style={{ animationDelay: '0.18s' }}
            >
              Istirahat Nyaman, Kopi Nikmat —{' '}
              <span className="text-gold-400">Semua di Satu Tempat</span>
            </h1>
            <p
              className="hero-rise mt-5 max-w-xl text-lg text-cream-100/90"
              style={{ animationDelay: '0.32s' }}
            >
              {SITE.city}. Menginap tenang di guesthouse yang homey, lalu mulai harimu
              dengan secangkir kopi yang diseduh sepenuh hati.
            </p>
            <div
              className="hero-rise mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: '0.46s' }}
            >
              <Link
                to="/kamar"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-forest-900 shadow-lg shadow-forest-900/20 transition hover:bg-gold-400 active:translate-y-px"
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-cream-200 px-0 lg:grid-cols-4">
          {quickInfo.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              delay={i * 90}
              className="flex items-center gap-3.5 bg-white px-5 py-6 lg:px-8"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream-100 text-forest-700">
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-600">
              Tentang Kami
            </p>
            <h2 className="mt-4 text-3xl text-forest-800 sm:text-4xl">
              Dua hal yang bikin betah, dalam satu atap
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                {SITE.homeName} lahir dari ide sederhana: tempat menginap tak harus
                mewah untuk terasa seperti rumah. Kamar yang bersih, kasur yang nyaman,
                dan layanan yang hangat — itu yang kami rawat setiap hari.
              </p>
              <p>
                Dan karena pagi yang baik selalu dimulai dengan kopi, kami hadirkan{' '}
                {SITE.coffeeName} tepat di lokasi yang sama. Tamu tinggal turun, barista
                kami sudah siap menyeduh.
              </p>
            </div>
            <Link
              to="/kamar"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-forest-700 underline-offset-4 transition hover:gap-3 hover:text-gold-600"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-forest-900/10">
              {/* TODO: Replace with actual photo (stok Unsplash sementara) */}
              <img
                src={unsplash('photo-1554118811-1e0d58224f24', 800, 1000)}
                alt="Suasana hangat di Chasara Home & Coffee"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gold-500 px-6 py-5 text-forest-900 shadow-lg sm:block">
              <Sparkles className="h-5 w-5" />
              <p className="mt-2 font-display text-2xl leading-none">100%</p>
              <p className="text-xs font-medium">Homey & Hangat</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== PREVIEW KAMAR ============== */}
      <section className="bg-cream-100/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl text-forest-800 sm:text-4xl">Pilihan Kamar</h2>
              <p className="mt-3 max-w-md text-ink-soft">
                Dari menginap singkat sampai liburan keluarga, ada kamar yang pas untukmu.
              </p>
            </div>
            <Link
              to="/kamar"
              className="inline-flex items-center gap-2 font-semibold text-forest-700 transition hover:gap-3 hover:text-gold-600"
            >
              Lihat semua kamar
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => (
              <Reveal key={room.id} delay={i * 110}>
                <RoomCard room={room} variant="preview" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CHASARA COFFEE TEASER ============== */}
      <section className="relative overflow-hidden bg-coffee-700 text-cream-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, #c8a96e 0, transparent 40%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-300">
              {SITE.coffeeName}
            </p>
            <h2 className="mt-4 text-3xl text-cream-50 sm:text-4xl lg:text-5xl">
              Mulai Pagi dengan Kopi yang Tepat
            </h2>
            <p className="mt-5 max-w-md text-cream-100/85">
              Biji pilihan, diseduh manual maupun espresso-based. Ditemani camilan hangat,
              terbuka untuk tamu menginap maupun umum.
            </p>
            <Link
              to="/coffee"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-coffee-900 transition hover:bg-gold-400 active:translate-y-px"
            >
              Lihat Menu
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            {coffeeShots.map((shot) => (
              <div
                key={shot.label}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* TODO: Replace with actual photo */}
                <img
                  src={shot.src}
                  alt={`${shot.label} di ${SITE.coffeeName}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute bottom-2 left-3 text-sm font-medium text-cream-50 drop-shadow">
                  {shot.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============== FASILITAS UNGGULAN ============== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl text-forest-800 sm:text-4xl">Fasilitas Unggulan</h2>
          <p className="mt-3 text-ink-soft">
            Hal-hal kecil yang membuat menginapmu terasa mudah dan menyenangkan.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {facilities.map(({ icon: Icon, label }, i) => (
            <Reveal
              key={label}
              delay={i * 60}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-cream-200 bg-white p-7 text-center transition-colors hover:border-gold-400"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-cream-100 text-forest-700 transition-colors group-hover:bg-forest-800 group-hover:text-gold-400">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-ink">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== TESTIMONI ============== */}
      <section className="bg-cream-100/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-600">
              Kata Mereka
            </p>
            <h2 className="mt-4 text-3xl text-forest-800 sm:text-4xl">
              Dipercaya tamu dari berbagai kota
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA BANNER ============== */}
      <section className="mx-auto max-w-7xl px-5 pb-4 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-800 to-forest-900 px-7 py-16 text-center shadow-xl sm:px-12 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 15% 20%, #c8a96e 0, transparent 35%), radial-gradient(circle at 85% 85%, #c8a96e 0, transparent 35%)',
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
                  href={waLink(
                    'Halo Chasara Home, saya ingin menanyakan ketersediaan kamar.',
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-forest-900 transition hover:bg-gold-400 active:translate-y-px"
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
