import { Link } from 'react-router-dom'
import { ArrowUpRight, Play } from 'lucide-react'
import Marquee from './Marquee.jsx'

const disciplines = [
  'Full-Stack',
  'DSA',
  'AI / ML',
  'System Design',
  'Data Science',
  'DevOps',
  'Aptitude',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-cn-dark text-white"
    >
      {/* ---- Ambient background ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* warm + cool glows */}
        <div
          className="absolute -right-32 -top-40 h-[42rem] w-[42rem] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,124,4,0.45) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute -bottom-48 -left-24 h-[38rem] w-[38rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(42,96,222,0.5) 0%, transparent 60%)',
          }}
        />
        {/* dotted grid, faded toward edges */}
        <div
          className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '42px 42px',
          }}
        />
        {/* slow-rotating dashed ring */}
        <div className="absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="h-[34rem] w-[34rem] animate-spin-slow rounded-full border border-dashed border-white/15" />
          <div className="absolute inset-10 rounded-full border border-white/5" />
        </div>
      </div>

      {/* ---- Content ---- */}
      <div className="mx-auto max-w-container px-4 pb-10 pt-16 sm:pt-20 md:pb-16 md:pt-28">
        {/* eyebrow */}
        <div className="flex animate-fade-up items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-white/55">
          <span className="text-cn-orange">(01)</span>
          <span className="h-px w-10 bg-white/25" />
          <span>India&rsquo;s #1 Coding Bootcamp</span>
        </div>

        {/* headline */}
        <h1 className="mt-7 font-display font-extrabold uppercase leading-[0.88] tracking-tight text-[clamp(2.75rem,11vw,8.75rem)]">
          <span
            className="block animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            Learn.
          </span>
          <span
            className="block animate-fade-up text-transparent [-webkit-text-stroke:1.5px_#F4EFE9] md:[-webkit-text-stroke:2.5px_#F4EFE9]"
            style={{ animationDelay: '200ms' }}
          >
            Build.
          </span>
          <span
            className="block animate-fade-up text-cn-orange"
            style={{ animationDelay: '320ms' }}
          >
            Get hired.
          </span>
        </h1>

        {/* subcopy + CTAs */}
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1.1fr_1fr] md:items-end">
          <p
            className="max-w-xl animate-fade-up text-base leading-relaxed text-white/65 sm:text-lg"
            style={{ animationDelay: '420ms' }}
          >
            Industry-vetted courses, real-world projects, 1-on-1 mentorship and
            dedicated placement support — engineered to land you the tech career
            you actually deserve.
          </p>

          <div
            className="flex animate-fade-up flex-wrap items-center gap-4 md:justify-end"
            style={{ animationDelay: '520ms' }}
          >
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 rounded-full bg-cn-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-cn-orange/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cn-orange-light hover:shadow-xl hover:shadow-cn-orange/30"
            >
              Explore courses
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition-colors duration-200 hover:border-white/60">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-cn-orange">
                <Play className="h-3 w-3 translate-x-px fill-current" />
              </span>
              Watch our story
            </button>
          </div>
        </div>
      </div>

      {/* ---- Kinetic discipline marquee (seam into next section) ---- */}
      <Marquee className="border-y border-white/10 bg-white/[0.02] py-5 md:py-7">
        {disciplines.map((word, i) => (
          <span
            key={word}
            className={`mx-7 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl ${
              i % 2 === 0
                ? 'text-white/85'
                : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]'
            }`}
          >
            {word}
            <span className="ml-7 text-cn-orange">&#10022;</span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}
