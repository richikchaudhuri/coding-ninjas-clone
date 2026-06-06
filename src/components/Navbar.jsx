// Stub for /batch: replicate the Coding Ninjas top navigation (logo, mega-menu, search, login/CTA).
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4">
        <span className="text-xl font-extrabold tracking-tight text-cn-orange">
          Coding Ninjas
        </span>
        <nav className="hidden items-center gap-6 text-sm font-medium text-cn-gray md:flex">
          {/* TODO: Explore, Courses, For Colleges, Login, CTA */}
          <span>Nav links</span>
        </nav>
        <button className="rounded-md bg-cn-orange px-4 py-2 text-sm font-semibold text-white">
          Login
        </button>
      </div>
    </header>
  )
}
