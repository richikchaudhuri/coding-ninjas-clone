import { Video, MessagesSquare, Wrench, Rocket } from 'lucide-react'
import Reveal from './Reveal.jsx'

const features = [
  {
    Icon: Video,
    title: 'Live Mentorship',
    description:
      'Learn directly from experienced industry mentors through live, interactive classes tailored to your pace.',
  },
  {
    Icon: MessagesSquare,
    title: '24/7 Doubt Support',
    description:
      'Get your doubts resolved anytime with round-the-clock support from our dedicated teaching assistants.',
  },
  {
    Icon: Wrench,
    title: 'Real-World Projects',
    description:
      'Build industry-grade projects that strengthen your portfolio and prepare you for real engineering challenges.',
  },
  {
    Icon: Rocket,
    title: 'Placement Assistance',
    description:
      'Get end-to-end placement support including resume reviews, mock interviews, and referrals to top companies.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-cn-dark">
            Why Coding Ninjas?
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className="rounded-xl border-l-4 border-cn-orange bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cn-orange/10">
                <f.Icon className="h-6 w-6 text-cn-orange" />
              </div>
              <h3 className="text-lg font-bold text-cn-dark">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cn-gray">
                {f.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
