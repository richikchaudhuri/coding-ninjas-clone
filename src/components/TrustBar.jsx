import { Users, Building2, Star, BookOpen } from 'lucide-react'
import Reveal from './Reveal.jsx'

const stats = [
  { Icon: Users, value: '1M+', label: 'Learners' },
  { Icon: Building2, value: '1400+', label: 'Hiring Partners' },
  { Icon: Star, value: '4.8/5', label: 'Average Rating' },
  { Icon: BookOpen, value: '50+', label: 'Courses' },
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
              {s.value}
            </p>
            <p className="mt-1 text-sm text-cn-gray">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
