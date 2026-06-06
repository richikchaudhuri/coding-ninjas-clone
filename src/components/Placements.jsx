import Reveal from './Reveal.jsx'
import Marquee from './Marquee.jsx'
import CountUp from './CountUp.jsx'

const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Adobe",
  "Flipkart",
  "Goldman Sachs",
  "Uber",
];

const stats = [
  { end: 10000, suffix: "+", label: "Placed" },
  { end: 500, suffix: "+", label: "Companies" },
  { prefix: "\u20B9", end: 25, suffix: " LPA", label: "Average CTC" },
];

export default function Placements() {
  return (
    <section id="placements" className="bg-black text-white py-20">
      <div className="mx-auto max-w-container px-4">
        <Reveal>
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
            Our Learners Work At
          </h2>
        </Reveal>

        <Marquee className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {companies.map((name) => (
            <span
              key={name}
              className="mx-3 inline-flex h-14 shrink-0 items-center whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-8 text-lg font-semibold tracking-wide text-white/80 transition-colors hover:border-cn-orange/40 hover:text-white"
            >
              {name}
            </span>
          ))}
        </Marquee>

        <Reveal className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-cn-orange">
                <CountUp prefix={stat.prefix} end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
