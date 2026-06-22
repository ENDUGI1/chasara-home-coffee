import { Star } from 'lucide-react'
import { formatRupiah } from '../data/siteConfig'

/**
 * Kartu satu kategori menu Chasara Coffee, berisi daftar item + harga.
 */
export default function MenuCard({ category, items }) {
  return (
    <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-sm">
      <h3 className="flex items-center gap-3 text-xl text-teal-800">
        <span className="h-px w-6 bg-coral-400" aria-hidden />
        {category}
      </h3>
      <ul className="mt-5 divide-y divide-cream-200">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-3 py-3">
            <div className="flex-1">
              <p className="flex items-center gap-1.5 font-medium text-ink">
                {item.name}
                {item.signature && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-coral-50 px-2 py-0.5 text-[10px] font-semibold text-coral-600">
                    <Star className="h-2.5 w-2.5 fill-coral-500 text-coral-500" />
                    Signature
                  </span>
                )}
              </p>
              <p className="text-sm text-ink-soft">{item.desc}</p>
            </div>
            <span className="shrink-0 font-semibold tabular-nums text-coral-600">
              {formatRupiah(item.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
