/**
 * RoofMark — ikon atap khas logo Chasara (chevron teal).
 * size: diameter dalam px.
 * tone: 'solid' (bg teal, atap terang) | 'outline' (transparan, atap teal).
 */
export function RoofMark({ size = 36, tone = 'solid', className = '' }) {
  const solid = tone === 'solid'
  return (
    <span
      className={`grid place-items-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: solid ? 'var(--color-teal-800)' : 'transparent',
        border: solid ? 'none' : '1px solid color-mix(in srgb, var(--color-teal-500) 50%, transparent)',
      }}
    >
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 32 22"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 17 16 5l13 12"
          stroke={solid ? 'var(--color-teal-400)' : 'var(--color-teal-600)'}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.5 16 6.2l3 2.7-7 5.6z"
          fill={solid ? 'var(--color-teal-400)' : 'var(--color-teal-600)'}
        />
      </svg>
    </span>
  )
}
