import { Link, useParams } from 'react-router-dom'
import {
  Star,
  Users,
  Clock,
  GraduationCap,
  Check,
  ChevronDown,
  Award,
  Briefcase,
  Infinity as InfinityIcon,
  Sparkles,
} from 'lucide-react'
import { getCourseBySlug, formatPrice } from '../data/courses.js'
import NotFound from './NotFound.jsx'
import Reveal from '../components/Reveal.jsx'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) return <NotFound />

  const {
    title,
    category,
    Icon,
    longDescription,
    price,
    originalPrice,
    duration,
    level,
    rating,
    reviews,
    students,
    highlights,
    curriculum,
    instructor,
  } = course

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)

  const includes = [
    { icon: InfinityIcon, label: 'Lifetime access to course content' },
    { icon: Users, label: '1-on-1 mentor support' },
    { icon: Award, label: 'Certificate of completion' },
    { icon: Briefcase, label: 'Placement assistance' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cn-dark text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 80% 30%, rgba(255,124,4,0.35) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-container px-4 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/courses" className="transition hover:text-white">
              Courses
            </Link>
            <span>/</span>
            <span className="text-gray-200">{title}</span>
          </nav>

          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cn-orange/15 px-3 py-1 text-xs font-semibold text-cn-orange">
                <Sparkles className="h-3.5 w-3.5" />
                {category}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                {longDescription}
              </p>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-cn-orange text-cn-orange" />
                  <span className="font-semibold">{rating}</span>
                  <span className="text-gray-400">({reviews.toLocaleString('en-IN')} reviews)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-gray-300">
                  <Users className="h-4 w-4" />
                  {students} learners
                </span>
                <span className="inline-flex items-center gap-1.5 text-gray-300">
                  <Clock className="h-4 w-4" />
                  {duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-gray-300">
                  <GraduationCap className="h-4 w-4" />
                  {level}
                </span>
              </div>
            </div>

            <div className="hidden h-32 w-32 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:flex">
              <Icon className="h-16 w-16 text-cn-orange" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-container px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main column */}
          <div className="lg:col-span-2">
            {/* What you'll learn */}
            <Reveal>
              <h2 className="text-2xl font-extrabold text-cn-dark">
                What you’ll learn
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cn-orange/10">
                      <Check className="h-3.5 w-3.5 text-cn-orange" />
                    </span>
                    <span className="text-sm leading-relaxed text-cn-gray">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Curriculum */}
            <Reveal className="mt-12">
              <h2 className="text-2xl font-extrabold text-cn-dark">Curriculum</h2>
              <p className="mt-2 text-sm text-cn-gray">
                {curriculum.length} modules ·{' '}
                {curriculum.reduce((n, m) => n + m.lessons.length, 0)} lessons
              </p>
              <div className="mt-5 space-y-3">
                {curriculum.map((module, i) => (
                  <details
                    key={module.title}
                    open={i === 0}
                    className="group rounded-xl border border-gray-200 bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-cn-dark">
                      <span className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cn-orange/10 text-sm font-bold text-cn-orange">
                          {i + 1}
                        </span>
                        {module.title}
                      </span>
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-cn-gray transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <ul className="space-y-2 border-t border-gray-100 px-5 py-4">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="flex items-center gap-3 text-sm text-cn-gray"
                        >
                          <Check className="h-4 w-4 flex-shrink-0 text-cn-orange" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </Reveal>

            {/* Instructor */}
            <Reveal className="mt-12">
              <h2 className="text-2xl font-extrabold text-cn-dark">
                Your instructor
              </h2>
              <div className="mt-5 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-cn-orange text-xl font-bold text-white">
                  {instructor.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cn-dark">
                    {instructor.name}
                  </h3>
                  <p className="text-sm font-medium text-cn-orange">
                    {instructor.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cn-gray">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sticky enroll sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-100">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-extrabold text-cn-dark">
                    {formatPrice(price)}
                  </span>
                  <span className="mb-1 text-base font-medium text-cn-gray line-through">
                    {formatPrice(originalPrice)}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-green-600">
                  {discount}% off · limited time
                </p>

                <Link
                  to="/signup"
                  className="mt-5 block rounded-lg bg-cn-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-cn-orange/25 transition hover:-translate-y-0.5 hover:bg-cn-orange-dark"
                >
                  Enroll now
                </Link>
                <Link
                  to="/courses"
                  className="mt-3 block rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-cn-dark transition hover:border-cn-orange hover:text-cn-orange"
                >
                  Browse more courses
                </Link>

                <ul className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                  {includes.map(({ icon: ItemIcon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-sm text-cn-gray"
                    >
                      <ItemIcon className="h-4 w-4 flex-shrink-0 text-cn-orange" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
