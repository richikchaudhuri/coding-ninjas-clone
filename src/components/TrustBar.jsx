export default function TrustBar() {
  const stats = [
    { value: '1M+', label: 'Learners' },
    { value: '1400+', label: 'Hiring Partners' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '50+', label: 'Courses' },
  ]

  return (
    <section className="bg-cn-orange/5 py-8 md:py-12">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-y-8 px-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={[
              'text-center',
              i < stats.length - 1 && 'md:border-r md:border-gray-200',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <p className="text-3xl font-bold text-cn-orange md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-cn-gray">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
