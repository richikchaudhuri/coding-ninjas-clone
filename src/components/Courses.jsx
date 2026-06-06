import { useState } from 'react'

const categories = ['All', 'Full Stack', 'Data Science', 'DSA', 'Machine Learning']

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    category: 'Full Stack',
    description:
      'Master front-end and back-end technologies. Build production-ready web apps with React, Node.js, and databases.',
    icon: '\uD83D\uDCBB',
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    category: 'DSA',
    description:
      'Strengthen your problem-solving skills. Cover arrays, trees, graphs, dynamic programming, and more.',
    icon: '\uD83E\uDDE9',
  },
  {
    id: 3,
    title: 'Machine Learning',
    category: 'Machine Learning',
    description:
      'Learn supervised and unsupervised learning, neural networks, and real-world ML pipelines with Python.',
    icon: '\uD83E\uDD16',
  },
  {
    id: 4,
    title: 'Data Science',
    category: 'Data Science',
    description:
      'Dive into statistics, data wrangling, visualization, and predictive modeling using Python and SQL.',
    icon: '\uD83D\uDCCA',
  },
  {
    id: 5,
    title: 'Competitive Programming',
    category: 'DSA',
    description:
      'Sharpen your coding speed and accuracy. Practice with contest-level problems and advanced algorithms.',
    icon: '\uD83C\uDFC6',
  },
  {
    id: 6,
    title: 'Web Development with MERN',
    category: 'Full Stack',
    description:
      'Build modern web applications using MongoDB, Express, React, and Node.js from scratch.',
    icon: '\uD83C\uDF10',
  },
]

export default function Courses() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? courses : courses.filter((c) => c.category === active)

  return (
    <section id="courses" className="mx-auto max-w-container px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold text-cn-dark sm:text-4xl">
        Explore Our Courses
      </h2>
      <p className="mt-3 text-center text-cn-gray">
        Pick a track and start building real-world skills today.
      </p>

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
        {filtered.map((course) => (
          <article
            key={course.id}
            className="group flex flex-col rounded-xl border border-gray-200 bg-white transition hover:shadow-lg"
          >
            {/* Image placeholder */}
            <div className="flex h-40 items-center justify-center rounded-t-xl bg-gray-100 text-5xl">
              {course.icon}
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-cn-dark">{course.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cn-gray">
                {course.description}
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-cn-orange transition hover:underline"
              >
                Explore &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
