/**
 * Infinite horizontal marquee. Renders its children twice back-to-back and
 * slides the pair leftward forever for a seamless loop; hovering pauses it.
 * Honors prefers-reduced-motion (`motion-reduce:animate-none`) so the row sits
 * still for users who opt out of motion.
 */
export default function Marquee({ children, className = '' }) {
  const track =
    'flex shrink-0 animate-marquee items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]'

  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div className={track}>{children}</div>
      <div className={track} aria-hidden="true">
        {children}
      </div>
    </div>
  )
}
