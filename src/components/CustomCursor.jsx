import { useEffect, useRef, useState } from 'react'

/**
 * Awwwards-style cursor: a precise orange dot that tracks the pointer 1:1 plus a
 * larger ring that trails with inertia and swells over interactive elements.
 *
 * Purely an enhancement — it only mounts on devices with a fine pointer and when
 * the user hasn't asked to reduce motion, and it hides the native cursor only
 * while active (see `.has-custom-cursor` in index.css). Touch users are untouched.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    setEnabled(true)
    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }
    const onOver = (e) => {
      const interactive =
        e.target.closest &&
        e.target.closest('a, button, input, textarea, select, [role="button"]')
      if (ringRef.current) ringRef.current.classList.toggle('is-hover', !!interactive)
    }
    const onDown = () => ringRef.current && ringRef.current.classList.add('is-down')
    const onUp = () => ringRef.current && ringRef.current.classList.remove('is-down')

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      root.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cc-ring" aria-hidden="true" />
      <div ref={dotRef} className="cc-dot" aria-hidden="true" />
    </>
  )
}
