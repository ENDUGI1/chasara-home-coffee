import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal via IntersectionObserver.
 * Tambahkan class "reveal" pada elemen, lalu pasang ref ini.
 * Saat masuk viewport, class "is-visible" ditambahkan (animasi fade-up sekali).
 *
 * @param {object} options - opsi IntersectionObserver (mis. { threshold }).
 */
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Hormati preferensi reduced-motion: langsung tampilkan.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      options,
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
