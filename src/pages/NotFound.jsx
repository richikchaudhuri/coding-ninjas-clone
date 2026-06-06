import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-container flex-col items-center px-4 py-28 text-center">
      <p className="text-7xl font-extrabold text-cn-orange md:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-cn-dark md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-cn-gray">
        The page you’re looking for doesn’t exist or may have been moved. Let’s
        get you back on track.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-cn-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
      >
        Back to home
      </Link>
    </section>
  )
}
