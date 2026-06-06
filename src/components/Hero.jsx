const techBadges = [
  { label: 'React', color: '#61DAFB' },
  { label: 'Python', color: '#3776AB' },
  { label: 'Java', color: '#F89820' },
  { label: 'C++', color: '#00599C' },
  { label: 'JavaScript', color: '#F7DF1E' },
  { label: 'Data Science', color: '#8B5CF6' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cn-dark text-white">
      <div className="relative z-10 mx-auto grid max-w-container gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:gap-12 md:py-28 lg:py-32">
        <div className="animate-fade-up">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Get the career you
            <br />
            deserve,{' '}
            <span className="bg-gradient-to-r from-cn-orange to-yellow-400 bg-clip-text text-transparent">
              faster
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-cn-gray sm:text-lg">
            Industry-vetted courses designed by experts, hands-on projects,
            1-on-1 mentorship, and dedicated placement support to help you
            land your dream tech career.
          </p>

          <button
            className="mt-8 rounded-lg bg-cn-orange px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-cn-orange/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-xl hover:shadow-cn-orange/30 focus:outline-none focus:ring-2 focus:ring-cn-orange focus:ring-offset-2 focus:ring-offset-cn-dark sm:text-base"
          >
            Explore Courses
          </button>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm"
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: badge.color }}
                  aria-hidden="true"
                />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[400px]">
          <div
            className="absolute inset-0 opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 60% 40%, rgba(255,124,4,0.45) 0%, transparent 65%)',
            }}
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 opacity-30 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 30% 70%, rgba(42,96,222,0.5) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md animate-float sm:h-64 sm:w-64">
            <span className="text-5xl font-bold text-cn-orange">&lt;/&gt;</span>
            <span className="mt-3 text-sm font-medium text-gray-400">
              Start Coding
            </span>
          </div>

          <span
            className="absolute left-6 top-10 h-3 w-3 rounded-full bg-cn-orange opacity-60"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-16 right-8 h-2 w-2 rounded-full bg-blue-500 opacity-50"
            aria-hidden="true"
          />
          <span
            className="absolute right-16 top-6 h-2.5 w-2.5 rounded-full bg-yellow-400 opacity-50"
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,124,4,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
