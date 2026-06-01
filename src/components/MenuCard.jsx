import { formatRupiah } from '../data/siteConfig'

/**
 * Kartu satu kategori menu Chasara Coffee, berisi daftar item + harga.
 */
export default function MenuCard({ category, items }) {
  return (
    <div className="rounded-3xl border border-coffee-700/15 bg-cream-50 p-7 shadow-sm">
      <h3 className="flex items-center gap-3 text-xl text-coffee-800">
        <span className="h-px w-6 bg-gold-500" aria-hidden />
        {category}
      </h3>
      <ul className="mt-5 divide-y divide-cream-200">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-3 py-3">
            <div className="flex-1">
              <p className="font-medium text-ink">{item.name}</p>
              <p className="text-sm text-ink-soft">{item.desc}</p>
            </div>
            <span className="shrink-0 font-semibold tabular-nums text-coffee-700">
              {formatRupiah(item.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
