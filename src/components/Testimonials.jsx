// Stub for /batch: replicate the learner testimonials / success-story carousel.
export default function Testimonials() {
  const reviews = Array.from({ length: 3 }, (_, i) => i + 1)
  return (
    <section id="testimonials" className="mx-auto max-w-container px-4 py-16">
      <h2 className="text-3xl font-extrabold">Success stories</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.map((n) => (
          <figure key={n} className="rounded-xl border border-gray-200 p-6">
            <blockquote className="text-cn-gray">
              {/* TODO: real testimonial */}“Coding Ninjas helped me land my dream job.”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div>
                <div className="text-sm font-semibold">Learner {n}</div>
                <div className="text-xs text-cn-gray">Software Engineer</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
