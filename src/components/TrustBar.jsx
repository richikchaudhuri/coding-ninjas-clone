// Stub for /batch: replicate the stats / trust strip (learners, ratings, hiring partners).
export default function TrustBar() {
  const stats = [
    { value: '1M+', label: 'Learners' },
    { value: '1400+', label: 'Hiring partners' },
    { value: '4.8/5', label: 'Average rating' },
    { value: '50+', label: 'Courses' },
  ]
  return (
    <section className="border-b border-gray-200 bg-cn-orange/5">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-cn-dark">{s.value}</div>
            <div className="text-sm text-cn-gray">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
