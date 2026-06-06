// Stub for /batch: replicate the course/category cards grid with tabs and pricing badges.
export default function Courses() {
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1)
  return (
    <section id="courses" className="mx-auto max-w-container px-4 py-16">
      <h2 className="text-3xl font-extrabold">Our courses</h2>
      <p className="mt-2 text-cn-gray">{/* TODO: section subtitle */}Pick a track and start learning.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((n) => (
          <article
            key={n}
            className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 h-32 rounded-lg bg-gray-100" />
            <h3 className="font-semibold">Course {n}</h3>
            <p className="mt-1 text-sm text-cn-gray">{/* TODO: course details */}Course description</p>
          </article>
        ))}
      </div>
    </section>
  )
}
