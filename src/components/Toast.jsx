import { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'

/**
 * Toast sukses sederhana. Auto-dismiss 5 detik, aria-live agar terbaca screen reader.
 */
export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [message, onClose])

  if (!message) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-[100] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-2xl border border-forest-700/20 bg-forest-800 px-5 py-4 text-cream-50 shadow-2xl shadow-forest-900/30"
    >
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={2} />
      <p className="flex-1 text-sm leading-relaxed">{message}</p>
      <button
        onClick={onClose}
        aria-label="Tutup notifikasi"
        className="-mr-1 -mt-1 rounded-full p-1 text-cream-200 transition hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" strokeWidth={2} />
      </button>
    </div>
  )
}
