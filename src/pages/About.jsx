import { Link } from 'react-router-dom'
import { Target, Users, Rocket, Heart } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const stats = [
  { value: '1M+', label: 'Learners taught' },
  { value: '1400+', label: 'Hiring partners' },
  { value: '10,000+', label: 'Careers launched' },
  { value: '50+', label: 'Expert-led courses' },
]

const values = [
  {
    icon: Rocket,
    title: 'Learn by building',
    description:
      'Every course is project-first. You graduate with a portfolio, not just notes.',
  },
  {
    icon: Users,
    title: 'Mentorship that matters',
    description:
      'Real engineers from top companies guide you through every roadblock.',
  },
  {
    icon: Target,
    title: 'Outcomes over hype',
    description:
      'We measure success by the offers our learners get — and we obsess over it.',
  },
  {
    icon: Heart,
    title: 'A community for life',
    description:
      'Join a network of peers, alumni, and mentors that grows with your career.',
  },
]

const team = [
  { name: 'Aarav Kapoor', role: 'Founder & CEO', initials: 'AK' },
  { name: 'Diya Sharma', role: 'Head of Curriculum', initials: 'DS' },
  { name: 'Rohan Verma', role: 'VP, Engineering', initials: 'RV' },
  { name: 'Ishita Menon', role: 'Director of Placements', initials: 'IM' },
  { name: 'Kabir Anand', role: 'Lead Mentor', initials: 'KA' },
  { name: 'Naina Gupta', role: 'Head of Community', initials: 'NG' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cn-dark text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 30% 30%, rgba(255,124,4,0.35) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-container px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-cn-orange">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
            We help people build the tech careers they deserve
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Coding Ninjas started with a simple belief: world-class tech
            education shouldn’t be locked behind elite colleges or price tags.
            Today, we’re a learning platform trusted by over a million students
            to turn curiosity into a career.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-200 bg-cn-orange/5">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-y-8 px-4 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-cn-orange md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-cn-gray">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-cn-dark md:text-3xl">
            Our story
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-cn-gray">
            <p>
              What began as a handful of weekend coding workshops has grown into
              one of the most loved learning communities in the country. Along
              the way, our mission never changed — make rigorous, outcome-driven
              tech education accessible to everyone.
            </p>
            <p>
              We pair industry-vetted curriculum with live mentorship, real
              projects, and dedicated placement support. The result: thousands of
              learners from every background landing roles at the companies they
              once only dreamed of.
            </p>
            <p>
              We’re just getting started — and we’d love for you to be part of
              the next chapter.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-container px-4">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold text-cn-dark md:text-3xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 80}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cn-orange/10">
                  <value.icon className="h-6 w-6 text-cn-orange" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-cn-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cn-gray">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-container px-4 py-16 md:py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold text-cn-dark md:text-3xl">
            Meet the team
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-cn-gray">
            A team of educators, engineers, and dreamers building the future of
            tech learning.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cn-orange to-cn-orange-light text-2xl font-bold text-white">
                {member.initials}
              </div>
              <h3 className="mt-3 text-sm font-bold text-cn-dark">
                {member.name}
              </h3>
              <p className="text-xs text-cn-gray">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cn-dark py-16 text-center text-white">
        <div className="mx-auto max-w-container px-4">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Join over a million learners building the careers they deserve.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/courses"
              className="rounded-lg bg-cn-orange px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cn-orange-dark"
            >
              Explore courses
            </Link>
            <Link
              to="/signup"
              className="rounded-lg border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/5"
            >
              Create free account
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
