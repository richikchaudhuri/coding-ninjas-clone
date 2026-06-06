import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Reveal from './Reveal.jsx'

const testimonials = [
  {
    quote:
      "Coding Ninjas helped me transition from a non-tech background to a software engineer at Google. The structured curriculum and hands-on projects gave me the confidence to crack the toughest interviews.",
    name: 'Priya S.',
    role: 'SDE at Google',
  },
  {
    quote:
      'The DSA course was a game-changer for my placement prep. The way concepts build on each other made even the hardest topics approachable. Got placed at Amazon!',
    name: 'Rahul M.',
    role: 'SDE at Amazon',
  },
  {
    quote:
      'Best investment in my career. The mentorship and project-based learning are unmatched. I went from zero web-dev knowledge to a full stack role at Microsoft in under a year.',
    name: 'Ananya K.',
    role: 'Full Stack Developer at Microsoft',
  },
]

const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const goTo = (i) => setIndex((i + count) % count)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(id)
  }, [count])

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-container px-4">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-cn-dark md:text-4xl">
            What Our Learners Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-cn-gray">
            Hear from learners who transformed their careers with Coding Ninjas.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <figure key={t.name} className="w-full flex-shrink-0 px-1">
                  <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
                    <Quote className="mx-auto h-10 w-10 text-cn-orange/30" />
                    <blockquote className="mt-4 text-lg leading-relaxed text-cn-dark">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-center gap-3">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cn-orange text-sm font-bold text-white">
                        {initials(t.name)}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-cn-dark">{t.name}</div>
                        <div className="text-sm text-cn-gray">{t.role}</div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-cn-dark shadow-md transition hover:border-cn-orange hover:text-cn-orange sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-cn-dark shadow-md transition hover:border-cn-orange hover:text-cn-orange sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-cn-orange' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
