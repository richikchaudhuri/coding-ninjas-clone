import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const perks = [
  'Access 50+ industry-vetted courses',
  'Learn from mentors at top tech companies',
  'Build real projects for your portfolio',
  'Dedicated placement support',
]

// Shared branded split-screen frame for the Login and Signup pages.
export default function AuthShell({
  title,
  subtitle,
  children,
  altPrompt,
  altLabel,
  altTo,
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-cn-dark p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 30%, rgba(255,124,4,0.4) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <Link
          to="/"
          className="relative text-xl font-extrabold tracking-tight text-cn-orange"
        >
          Coding Ninjas
        </Link>

        <div className="relative">
          <h2 className="text-3xl font-extrabold leading-tight">
            Start learning with the best in tech.
          </h2>
          <ul className="mt-8 space-y-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cn-orange" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-sm text-gray-400">
          “The structured path and mentorship got me my dream job.” — Priya, now
          at Google
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center px-4 py-14 sm:px-8">
        <div className="w-full max-w-md">
          {/* Mobile brand */}
          <Link
            to="/"
            className="mb-8 inline-block text-xl font-extrabold tracking-tight text-cn-orange lg:hidden"
          >
            Coding Ninjas
          </Link>

          <h1 className="text-2xl font-extrabold text-cn-dark md:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-cn-gray">{subtitle}</p>

          {children}

          <p className="mt-8 text-center text-sm text-cn-gray">
            {altPrompt}{' '}
            <Link
              to={altTo}
              className="font-semibold text-cn-orange hover:underline"
            >
              {altLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
