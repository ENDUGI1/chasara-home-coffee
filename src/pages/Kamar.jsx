import {
  BedDouble,
  Wind,
  Flame,
  Refrigerator,
  Tv,
  Archive,
  GlassWater,
  Sparkles,
  ShieldCheck,
  LogIn,
  LogOut,
  Clock,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import RoomCard from '../components/RoomCard'
import { rooms, roomGallery } from '../data/rooms'
import { houseRules, checkInfo } from '../data/siteConfig'

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

export default function Kamar() {
  const room = rooms[0]

  return (
    <>
      {/* Page header */}
      <header className="bg-teal-800 pt-28 pb-16 text-cream-50 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral-300">
              Akomodasi
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl text-cream-50 sm:text-5xl">
              Deluxe Room — nyaman & lengkap
            </h1>
            <p className="mt-4 max-w-xl text-cream-100/85">
              Kamar dengan double bed, AC, water heater, dan kamar mandi dalam.
              Konfirmasi ketersediaan tanggal via WhatsApp.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Featured room */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <RoomCard room={room} variant="full" />
        </Reveal>
      </section>

      {/* Galeri */}
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <Reveal className="mb-8">
          <h2 className="text-2xl text-teal-800 sm:text-3xl">Galeri Kamar</h2>
          <p className="mt-2 text-ink-soft">Intip langsung suasana kamar & kamar mandi.</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {roomGallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 70}
              className="overflow-hidden rounded-2xl border border-cream-200"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fasilitas (anchor target dari navbar) */}
      <section id="fasilitas" className="scroll-mt-24 bg-cream-100/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl text-teal-800 sm:text-4xl">Fasilitas</h2>
            <p className="mt-3 text-ink-soft">Tersedia untuk seluruh tamu Chasara Home.</p>
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
        </div>
      </section>

      {/* Info check-in / early / late */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <Reveal className="rounded-3xl border border-cream-200 bg-white p-7 text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cream-100 text-teal-700">
              <Clock className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-lg text-teal-800">Check-in / out</h3>
            <p className="mt-1 text-sm text-ink-soft">14.00 / 12.00 WITA</p>
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
      </section>

      {/* Peraturan */}
      <section className="bg-teal-900 py-20 text-cream-50 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-coral-300" />
            <h2 className="text-2xl text-cream-50 sm:text-3xl">Peraturan Menginap</h2>
          </Reveal>
          <p className="mt-2 text-cream-100/70">
            Demi kenyamanan bersama, mohon perhatikan ketentuan berikut.
          </p>
          <ol className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {houseRules.map((rule, i) => (
              <Reveal
                key={rule}
                delay={i * 40}
                as="li"
                className="flex gap-3 border-b border-white/10 pb-4"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral-500/20 text-xs font-bold text-coral-300">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-cream-100/90">{rule}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-8 text-sm italic text-cream-200/60">
            Pelanggaran aturan dapat dikenakan denda atau check-out paksa.
          </p>
        </div>
      </section>
    </>
  )
}
