// Stub for /batch: replicate the hiring-partners / company logos strip and placement highlights.
export default function Placements() {
  const logos = Array.from({ length: 8 }, (_, i) => i + 1)
  return (
    <section id="placements" className="bg-cn-dark text-white">
      <div className="mx-auto max-w-container px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold">Our learners work at</h2>
        <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {logos.map((n) => (
            <div
              key={n}
              className="flex h-16 items-center justify-center rounded-lg bg-white/10 text-sm text-cn-gray"
            >
              {/* TODO: company logo */}Logo {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
