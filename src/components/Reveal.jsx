import { useReveal } from '../hooks/useReveal'

/**
 * Membungkus children dengan animasi scroll-reveal (fade-up sekali).
 * `delay` (ms) untuk efek stagger antar elemen.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
