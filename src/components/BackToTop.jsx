import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Floating action button that fades in once the user scrolls past ~500px and
 * smooth-scrolls back to the top on click. Hidden and non-interactive until then.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setVisible(window.scrollY > 500)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-cn-orange text-white shadow-lg transition-all duration-300 hover:bg-cn-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cn-orange focus-visible:ring-offset-2 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
