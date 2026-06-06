import { Link } from 'react-router-dom'

/**
 * Coding Ninjas brand lockup — an orange ninja badge + the two-tone lowercase
 * "coding ninjas" wordmark, matching codingninjas.com.
 *
 * The badge is a faithful SVG re-creation (not the proprietary logo asset).
 * Pass `light` on dark backgrounds (e.g. the footer) so "coding" stays legible.
 */
export default function Logo({ to = '/', light = false, className = '' }) {
  return (
    <Link
      to={to}
      aria-label="Coding Ninjas home"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        {/* Orange rounded-square badge */}
        <rect width="32" height="32" rx="9" fill="#FF7C04" />
        {/* Masked ninja: dark hood, white eye-slit, two eyes */}
        <circle cx="16" cy="15.5" r="8" fill="#0B0B14" />
        <rect x="8.5" y="13.6" width="15" height="3.8" rx="1.9" fill="#fff" />
        <circle cx="12.7" cy="15.5" r="1.15" fill="#0B0B14" />
        <circle cx="19.3" cy="15.5" r="1.15" fill="#0B0B14" />
      </svg>
      <span className="text-xl font-bold lowercase leading-none tracking-tight">
        <span className={light ? 'text-white' : 'text-cn-dark'}>coding</span>{' '}
        <span className="text-cn-gray">ninjas</span>
      </span>
    </Link>
  )
}
