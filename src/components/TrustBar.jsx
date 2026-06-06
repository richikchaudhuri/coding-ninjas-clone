import { Users, Building2, Star, BookOpen } from 'lucide-react'
import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'

const stats = [
  { Icon: Users, end: 1000000, compact: true, suffix: '+', label: 'Learners' },
  { Icon: Building2, end: 1400, suffix: '+', label: 'Hiring Partners' },
  { Icon: Star, end: 4.8, decimals: 1, suffix: '/5', label: 'Average Rating' },
  { Icon: BookOpen, end: 50, suffix: '+', label: 'Courses' },
]

export default function TrustBar() {
  return (
    <section className="bg-cn-orange/5 py-8 md:py-12">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-y-8 px-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 70}
            className={[
              'text-center',
              i < stats.length - 1 && 'md:border-r md:border-gray-200',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <s.Icon className="mx-auto h-6 w-6 text-cn-orange" />
            <p className="mt-2 text-3xl font-bold text-cn-orange md:text-4xl">
              <CountUp
                end={s.end}
                decimals={s.decimals}
                compact={s.compact}
                suffix={s.suffix}
              />
            </p>
            <p className="mt-1 text-sm text-cn-gray">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
