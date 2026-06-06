import Reveal from './Reveal.jsx'

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
  { value: "10,000+", label: "Placed" },
  { value: "500+", label: "Companies" },
  { value: "\u20B925 LPA", label: "Average CTC" },
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

        <div className="grid grid-cols-2 sm:grid-cols-4">
          {companies.map((name, i) => {
            const isTopRow = i < 4;
            const isLeftEdge = i % 4 === 0;
            return (
              <div
                key={name}
                className={[
                  "flex h-24 items-center justify-center border border-white/10",
                  // collapse shared borders
                  !isTopRow && "-mt-px",
                  !isLeftEdge && "sm:-ml-px",
                  i % 2 !== 0 && "max-sm:-ml-px",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="text-base font-semibold tracking-wide text-white/90">
                  {name}
                </span>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-cn-orange">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
