import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Minus, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const plans = [
  {
    name: 'Starter',
    tagline: 'Explore and learn the basics',
    monthly: 0,
    highlight: false,
    features: [
      'Access to free lessons',
      'Community forum access',
      'Curated practice problems',
      'Email support',
    ],
    cta: 'Start for free',
  },
  {
    name: 'Pro',
    tagline: 'For serious career switchers',
    monthly: 3999,
    highlight: true,
    features: [
      'Access to all courses',
      'Hands-on guided projects',
      '24/7 doubt support',
      'Weekly mentor sessions',
      'Certificate of completion',
    ],
    cta: 'Get Pro',
  },
  {
    name: 'Premium',
    tagline: 'Everything, plus a job guarantee',
    monthly: 6999,
    highlight: false,
    features: [
      'Everything in Pro',
      '1-on-1 personal mentorship',
      'Mock interviews & feedback',
      'Dedicated placement support',
      'Job-ready guarantee',
    ],
    cta: 'Go Premium',
  },
]

const comparison = [
  { feature: 'Access to all courses', values: [false, true, true] },
  { feature: 'Hands-on projects', values: [false, true, true] },
  { feature: 'Community support', values: [true, true, true] },
  { feature: '24/7 doubt support', values: [false, true, true] },
  { feature: 'Mentor sessions', values: [false, true, true] },
  { feature: '1-on-1 mentorship', values: [false, false, true] },
  { feature: 'Mock interviews', values: [false, false, true] },
  { feature: 'Placement assistance', values: [false, false, true] },
  { feature: 'Certificate', values: [false, true, true] },
]

function priceLabel(monthly, annual) {
  if (monthly === 0) return { amount: 'Free', suffix: 'forever' }
  const value = annual ? Math.round(monthly * 0.8) : monthly
  return { amount: '₹' + value.toLocaleString('en-IN'), suffix: '/month' }
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <>
      {/* Header */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-cn-orange/5 to-white">
        <div className="mx-auto max-w-container px-4 py-14 text-center md:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-cn-orange">
              Pricing
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-cn-dark md:text-5xl">
              Simple, transparent plans
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-cn-gray md:text-lg">
              Choose the plan that fits your goals. Upgrade, downgrade, or cancel
              anytime — no hidden fees.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  !annual ? 'bg-cn-orange text-white' : 'text-cn-gray hover:text-cn-dark'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  annual ? 'bg-cn-orange text-white' : 'text-cn-gray hover:text-cn-dark'
                }`}
              >
                Annual
                <span className="ml-1.5 text-xs font-bold text-green-600">−20%</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plan cards */}
      <section className="mx-auto max-w-container px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const { amount, suffix } = priceLabel(plan.monthly, annual)
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 transition ${
                  plan.highlight
                    ? 'border-cn-orange shadow-xl shadow-cn-orange/10 lg:-translate-y-3'
                    : 'border-gray-200 hover:border-cn-orange/40 hover:shadow-lg'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-cn-orange px-3 py-1 text-xs font-bold text-white shadow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-bold text-cn-dark">{plan.name}</h3>
                <p className="mt-1 text-sm text-cn-gray">{plan.tagline}</p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-cn-dark">
                    {amount}
                  </span>
                  <span className="mb-1.5 text-sm text-cn-gray">{suffix}</span>
                </div>
                {plan.monthly > 0 && annual && (
                  <p className="mt-1 text-xs font-medium text-green-600">
                    Billed annually
                  </p>
                )}

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-cn-gray"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cn-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`mt-7 block rounded-lg px-6 py-3 text-center text-sm font-bold transition ${
                    plan.highlight
                      ? 'bg-cn-orange text-white shadow-lg shadow-cn-orange/25 hover:-translate-y-0.5 hover:bg-cn-orange-dark'
                      : 'border border-gray-300 text-cn-dark hover:border-cn-orange hover:text-cn-orange'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-container px-4">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold text-cn-dark md:text-3xl">
              Compare plans
            </h2>
          </Reveal>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-sm font-semibold text-cn-gray">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-4 py-4 text-center text-sm font-bold ${
                        plan.highlight ? 'text-cn-orange' : 'text-cn-dark'
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-3.5 pr-4 text-sm text-cn-dark">
                      {row.feature}
                    </td>
                    {row.values.map((included, i) => (
                      <td key={i} className="px-4 py-3.5 text-center">
                        {included ? (
                          <Check className="mx-auto h-5 w-5 text-cn-orange" />
                        ) : (
                          <Minus className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
