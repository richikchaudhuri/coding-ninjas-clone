import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { courses, categories } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function CoursesCatalog() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return courses.filter((course) => {
      const matchesCategory = active === 'All' || course.category === active
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [active, query])

  return (
    <>
      {/* Header band */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-cn-orange/5 to-white">
        <div className="mx-auto max-w-container px-4 py-14 md:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-cn-orange">
              Courses
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-cn-dark md:text-5xl">
              Find the right course for you
            </h1>
            <p className="mt-4 max-w-2xl text-cn-gray md:text-lg">
              Industry-vetted programs in development, data, and algorithms —
              each with hands-on projects, mentorship, and placement support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Controls + results */}
      <section className="mx-auto max-w-container px-4 py-12">
        {/* Search */}
        <div className="relative mx-auto max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cn-gray" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, e.g. “machine learning”"
            className="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm text-cn-dark shadow-sm transition focus:border-cn-orange focus:outline-none focus:ring-2 focus:ring-cn-orange/30"
          />
        </div>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cn-gray">
            <SlidersHorizontal className="h-4 w-4" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                active === cat
                  ? 'border-cn-orange bg-cn-orange text-white'
                  : 'border-gray-300 bg-white text-cn-gray hover:border-cn-orange hover:text-cn-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="mt-8 text-center text-sm text-cn-gray">
          Showing <span className="font-semibold text-cn-dark">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'course' : 'courses'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center">
            <p className="text-lg font-semibold text-cn-dark">No courses found</p>
            <p className="mt-2 text-sm text-cn-gray">
              Try a different search term or clear the filters.
            </p>
            <button
              onClick={() => {
                setActive('All')
                setQuery('')
              }}
              className="mt-5 rounded-lg bg-cn-orange px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cn-orange-dark"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}
