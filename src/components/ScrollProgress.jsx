import { useEffect, useState } from 'react'

/**
 * A thin bar fixed to the top of the viewport that fills as the page scrolls.
 * Scroll handling is rAF-throttled and the fill uses a CSS transform (scaleX)
 * so updates stay cheap. Sits above the navbar (z-[60]) and ignores pointer events.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0
      setProgress(Math.min(Math.max(ratio, 0), 1))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1">
      <div
        className="h-full origin-left bg-gradient-to-r from-cn-orange to-yellow-400 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
