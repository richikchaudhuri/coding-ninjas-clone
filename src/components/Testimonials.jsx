const testimonials = [
  {
    quote:
      "Coding Ninjas helped me transition from a non-tech background to a software engineer at Google. The structured curriculum and hands-on projects gave me the confidence to crack the toughest interviews.",
    name: "Priya S.",
    role: "SDE at Google",
  },
  {
    quote:
      "The DSA course was a game-changer for my placement prep. The way concepts build on each other made even the hardest topics approachable. Got placed at Amazon!",
    name: "Rahul M.",
    role: "SDE at Amazon",
  },
  {
    quote:
      "Best investment in my career. The mentorship and project-based learning are unmatched. I went from zero web-dev knowledge to a full stack role at Microsoft in under a year.",
    name: "Ananya K.",
    role: "Full Stack Developer at Microsoft",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-container px-4">
        <h2 className="text-center text-3xl font-extrabold text-cn-dark md:text-4xl">
          What Our Learners Say
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cn-gray">
          Hear from learners who transformed their careers with Coding Ninjas.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <span
                className="block font-serif text-5xl leading-none text-cn-orange"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="mt-2 text-cn-gray">{t.quote}</blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cn-orange text-sm font-bold text-white">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-cn-dark">{t.name}</div>
                  <div className="text-sm text-cn-gray">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
