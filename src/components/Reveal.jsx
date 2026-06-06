import useScrollReveal from '../hooks/useScrollReveal.js'

// Wraps content and fades + slides it into view the first time it is scrolled
// to. `delay` (ms) lets callers stagger a sequence of reveals.
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  const [ref, visible] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
