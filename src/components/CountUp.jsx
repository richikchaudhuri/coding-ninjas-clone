import useCountUp from '../hooks/useCountUp.js'

/**
 * A number that counts up from 0 the first time it scrolls into view.
 * - `compact` uses Intl compact notation (1000000 → "1M").
 * - `decimals` keeps a fixed number of fraction digits (e.g. 4.8 ratings).
 * - `prefix` / `suffix` wrap the value (e.g. "₹", "+", " LPA").
 */
export default function CountUp({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  compact = false,
  duration = 1800,
  className,
}) {
  const [ref, value] = useCountUp(end, { duration })

  const formatter = new Intl.NumberFormat('en-US', {
    notation: compact ? 'compact' : 'standard',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatter.format(value)}
      {suffix}
    </span>
  )
}
