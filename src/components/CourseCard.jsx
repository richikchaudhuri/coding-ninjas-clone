import { Link } from 'react-router-dom'
import { Star, Clock, ArrowRight } from 'lucide-react'
import { formatPrice } from '../data/courses.js'

export default function CourseCard({ course }) {
  const { slug, title, category, Icon, description, price, duration, rating } =
    course

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cn-orange/30 hover:shadow-lg">
      {/* Icon banner */}
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-cn-orange/10 via-orange-50 to-white">
        <Icon className="h-14 w-14 text-cn-orange transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-cn-orange shadow-sm backdrop-blur">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-cn-gray">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-cn-orange text-cn-orange" />
            {rating}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold text-cn-dark">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cn-gray">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-extrabold text-cn-dark">
            {formatPrice(price)}
          </span>
          <Link
            to={`/courses/${slug}`}
            className="inline-flex items-center gap-1 font-semibold text-cn-orange transition group-hover:gap-2"
          >
            Explore
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
