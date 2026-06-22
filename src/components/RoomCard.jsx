import { Link } from 'react-router-dom'
import { Check, Users } from 'lucide-react'
import { formatRupiah } from '../data/siteConfig'

function AvailabilityBadge({ available }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
        available ? 'bg-teal-800/85 text-cream-50' : 'bg-charcoal-900/85 text-cream-100'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${available ? 'bg-coral-400' : 'bg-cream-200'}`} />
      {available ? 'Tersedia' : 'Penuh'}
    </span>
  )
}

/**
 * RoomCard
 * variant="preview" — kartu vertikal ringkas (beranda).
 * variant="full"    — kartu landscape lengkap dengan checklist fasilitas (halaman Kamar).
 */
export default function RoomCard({ room, variant = 'preview' }) {
  if (variant === 'full') {
    return (
      <article className="group grid overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-teal-900/5 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
          <img
            src={room.image}
            alt={`Foto ${room.name} Chasara Home`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <AvailabilityBadge available={room.available} />
          </div>
        </div>

        <div className="flex flex-col p-7 lg:p-9">
          <div className="flex items-center gap-2 text-sm text-ink-soft">
            <Users className="h-4 w-4 text-coral-500" />
            <span>Maks. {room.capacity} tamu</span>
          </div>
          <h3 className="mt-2 text-2xl text-teal-800 lg:text-3xl">{room.name}</h3>
          <p className="mt-2 text-ink-soft">{room.description}</p>

          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {room.facilities.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-ink">
                <Check className="h-4 w-4 shrink-0 text-sage-600" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-7">
            <p className="leading-none">
              <span className="text-2xl font-bold text-teal-800">{formatRupiah(room.price)}</span>
              <span className="text-sm text-ink-soft"> / malam</span>
            </p>
            <Link
              to={`/reservasi?kamar=${room.id}`}
              className="inline-flex rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-600 active:translate-y-px"
            >
              Pesan Kamar Ini
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={room.image}
          alt={`Foto ${room.name} Chasara Home`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <AvailabilityBadge available={room.available} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-ink-soft">
          <Users className="h-3.5 w-3.5 text-coral-500" />
          <span>Maks. {room.capacity} tamu</span>
        </div>
        <h3 className="mt-1.5 text-xl text-teal-800">{room.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{room.description}</p>

        <div className="mt-5 flex items-end justify-between pt-1">
          <p className="leading-none">
            <span className="text-xl font-bold text-teal-800">{formatRupiah(room.price)}</span>
            <span className="text-xs text-ink-soft"> / malam</span>
          </p>
          <Link
            to={`/reservasi?kamar=${room.id}`}
            className="text-sm font-semibold text-coral-600 underline-offset-4 transition hover:underline"
          >
            Pesan →
          </Link>
        </div>
      </div>
    </article>
  )
}
