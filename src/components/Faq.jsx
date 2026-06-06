// Stub for /batch: replicate the FAQ accordion (expand/collapse questions).
export default function Faq() {
  const questions = [
    'What courses does Coding Ninjas offer?',
    'Do I get placement support?',
    'Are there EMI options?',
    'Is there a free trial?',
  ]
  return (
    <section id="faq" className="mx-auto max-w-container px-4 py-16">
      <h2 className="text-3xl font-extrabold">Frequently asked questions</h2>
      <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
        {questions.map((q) => (
          <details key={q} className="group py-4">
            <summary className="cursor-pointer list-none font-medium">
              {q}
              <span className="float-right text-cn-gray group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 text-sm text-cn-gray">{/* TODO: answer copy */}Answer goes here.</p>
          </details>
        ))}
      </div>
    </section>
  )
}
