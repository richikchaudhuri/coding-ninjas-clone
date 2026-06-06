import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Decelerating curve — fast at first, easing into the final value.
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

/**
 * Animates a number from `start` to `end` the first time the observed element
 * scrolls into view. Returns `[ref, value]` — attach `ref` to the element you
 * want to watch and render `value`. Respects prefers-reduced-motion and gracefully
 * jumps to the final value when IntersectionObserver/rAF aren't available.
 */
export default function useCountUp(end, { duration = 1800, start = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(start)

  useEffect(() => {
    const node = ref.current

    if (
      !node ||
      prefersReducedMotion() ||
      typeof IntersectionObserver === 'undefined' ||
      typeof requestAnimationFrame === 'undefined'
    ) {
      setValue(end)
      return
    }

    let frame = 0
    let startTime = 0
    let cancelled = false

    const tick = (now) => {
      if (!startTime) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(start + (end - start) * easeOutCubic(progress))
      if (progress < 1 && !cancelled) {
        frame = requestAnimationFrame(tick)
      }
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          obs.disconnect()
          frame = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => {
      cancelled = true
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration, start])

  return [ref, value]
}
