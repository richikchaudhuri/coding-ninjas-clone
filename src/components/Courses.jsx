import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { courses, categories } from '../data/courses.js'
import CourseCard from './CourseCard.jsx'
import Reveal from './Reveal.jsx'

export default function Courses() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? courses : courses.filter((c) => c.category === active)

  // Keep the homepage section focused — show the first six matches.
  const visible = filtered.slice(0, 6)

  return (
    <section id="courses" className="mx-auto max-w-container px-4 py-16">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold text-cn-dark sm:text-4xl">
          Explore Our Courses
        </h2>
        <p className="mt-3 text-center text-cn-gray">
          Pick a track and start building real-world skills today.
        </p>
      </Reveal>

      {/* Filter pills */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
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

      {/* Course cards grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 rounded-lg border border-cn-orange px-6 py-3 text-sm font-bold text-cn-orange transition hover:bg-cn-orange hover:text-white"
        >
          View all courses
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
