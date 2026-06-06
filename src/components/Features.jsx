// Stub for /batch: replicate the "Why Coding Ninjas" feature highlights (mentorship, doubt support, projects).
export default function Features() {
  const features = [
    'Live mentorship',
    'Doubt support',
    'Real-world projects',
    'Placement assistance',
  ]
  return (
    <section id="features" className="bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-16">
        <h2 className="text-3xl font-extrabold">Why Coding Ninjas</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 h-10 w-10 rounded-lg bg-cn-orange/15" />
              <h3 className="font-semibold">{f}</h3>
              <p className="mt-1 text-sm text-cn-gray">{/* TODO: feature copy */}Short description.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
