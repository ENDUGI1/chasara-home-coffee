import {
  Wifi,
  Car,
  Flame,
  Tv,
  Coffee,
  Sofa,
  ShieldCheck,
  BedDouble,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

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

export default function Kamar() {
  return (
    <>
      {/* Page header */}
      <header className="bg-forest-800 pt-28 pb-16 text-cream-50 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-300">
              Akomodasi
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl text-cream-50 sm:text-5xl">
              Pilih kamar yang paling pas untukmu
            </h1>
            <p className="mt-4 max-w-xl text-cream-100/85">
              Semua kamar dilengkapi AC, WiFi, dan kamar mandi dalam dengan air panas.
              Harga sudah termasuk fasilitas standar — konfirmasi ketersediaan via
              WhatsApp.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Room list */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="space-y-8">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 80}>
              <RoomCard room={room} variant="full" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fasilitas (anchor target dari navbar) */}
      <section id="fasilitas" className="scroll-mt-24 bg-cream-100/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl text-forest-800 sm:text-4xl">Fasilitas</h2>
            <p className="mt-3 text-ink-soft">
              Tersedia untuk seluruh tamu yang menginap di Chasara Home.
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
        </div>
      </section>
    </>
  )
}
