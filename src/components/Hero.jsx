// Stub for /batch: replicate the Coding Ninjas hero (headline, subcopy, primary CTA, hero visual).
export default function Hero() {
  return (
    <section id="hero" className="bg-cn-dark text-white">
      <div className="mx-auto grid max-w-container gap-8 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Become a top coder
            <span className="text-cn-orange"> with Coding Ninjas</span>
          </h1>
          <p className="mt-4 max-w-md text-cn-gray">
            {/* TODO: real hero subcopy */}
            Industry-vetted courses, mentorship, and placement support.
          </p>
          <button className="mt-6 rounded-md bg-cn-orange px-6 py-3 font-semibold text-white">
            Explore courses
          </button>
        </div>
        <div className="flex h-64 items-center justify-center rounded-xl bg-white/5 text-cn-gray">
          {/* TODO: hero illustration / banner */}
          Hero visual
        </div>
      </div>
    </section>
  )
}
