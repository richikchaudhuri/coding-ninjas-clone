import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const navLinks = [
  { label: 'Courses', to: '/courses' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // Elevate / condense the bar once the page is scrolled a touch.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 8)
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

  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-cn-orange ${
      isActive ? 'text-cn-orange' : 'text-cn-dark'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'border-gray-200 bg-white/95 shadow-sm'
          : 'border-transparent bg-white/80'
      }`}
    >
      <div
        className={`mx-auto flex max-w-container items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-md px-4 py-2 text-sm font-semibold text-cn-dark transition-colors hover:text-cn-orange"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-md bg-cn-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Sign Up
          </Link>
        </div>

        <button
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-cn-dark transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cn-dark transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cn-dark transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-cn-orange ${
                      isActive ? 'text-cn-orange' : 'text-cn-dark'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-md border border-gray-200 px-4 py-2 text-center text-sm font-semibold text-cn-dark transition-colors hover:text-cn-orange"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={closeMenu}
              className="rounded-md bg-cn-orange px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
