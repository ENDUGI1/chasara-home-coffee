import { Star } from 'lucide-react'

/**
 * Kartu testimoni tamu dengan rating bintang.
 */
export default function TestimonialCard({ name, role, quote, rating = 5 }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-cream-200 bg-white p-7 shadow-sm">
      <div className="flex gap-1" aria-label={`Rating ${rating} dari 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'fill-coral-400 text-coral-400' : 'text-cream-200'}`}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 border-t border-cream-200 pt-4">
        <p className="font-semibold text-teal-800">{name}</p>
        <p className="text-sm text-ink-soft">{role}</p>
      </figcaption>
    </figure>
  )
}
