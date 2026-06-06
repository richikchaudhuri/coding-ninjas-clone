import { useState } from 'react';

const navLinks = ['Courses', 'Practice', 'Compete', 'Mentor'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4">
        <span className="text-xl font-extrabold tracking-tight text-cn-orange">
          Coding Ninjas
        </span>

        <nav className="hidden items-center gap-8 text-sm font-medium text-cn-dark md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors hover:text-cn-orange"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-md px-4 py-2 text-sm font-semibold text-cn-dark transition-colors hover:text-cn-orange">
            Login
          </button>
          <button className="rounded-md bg-cn-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
            Sign Up
          </button>
        </div>

        <button
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
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
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-cn-dark transition-colors hover:bg-gray-50 hover:text-cn-orange"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <button className="rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-cn-dark transition-colors hover:text-cn-orange">
              Login
            </button>
            <button className="rounded-md bg-cn-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
              Sign Up
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
