export default function Features() {
  const features = [
    {
      icon: '\uD83C\uDFA5',
      title: 'Live Mentorship',
      description:
        'Learn directly from experienced industry mentors through live, interactive classes tailored to your pace.',
    },
    {
      icon: '\uD83D\uDCAC',
      title: '24/7 Doubt Support',
      description:
        'Get your doubts resolved anytime with round-the-clock support from our dedicated teaching assistants.',
    },
    {
      icon: '\uD83D\uDEE0\uFE0F',
      title: 'Real-World Projects',
      description:
        'Build industry-grade projects that strengthen your portfolio and prepare you for real engineering challenges.',
    },
    {
      icon: '\uD83D\uDE80',
      title: 'Placement Assistance',
      description:
        'Get end-to-end placement support including resume reviews, mock interviews, and referrals to top companies.',
    },
  ];

  return (
    <section id="features" className="bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-cn-dark">
          Why Coding Ninjas?
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border-l-4 border-cn-orange bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cn-orange/10 text-2xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-cn-dark">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cn-gray">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
