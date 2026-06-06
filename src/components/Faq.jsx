import { Plus } from 'lucide-react'
import Reveal from './Reveal.jsx'

const faqs = [
  {
    question: 'What is Coding Ninjas?',
    answer:
      'Coding Ninjas is an ed-tech platform that offers coding courses designed to help students and professionals master programming skills and land their dream jobs in the tech industry.',
  },
  {
    question: 'What courses do you offer?',
    answer:
      'We offer courses in Full Stack Development, Data Structures & Algorithms, Machine Learning, Web Development, and many more domains to help you build a successful career in tech.',
  },
  {
    question: 'Do you provide placement assistance?',
    answer:
      'Yes, we have a dedicated placement cell that works with 1000+ hiring partners to help our students secure job opportunities at top companies across the industry.',
  },
  {
    question: 'What is the duration of courses?',
    answer:
      'Course duration varies from 3 to 12 months depending on the program you choose and the pace at which you learn. Each course is self-paced with mentor support.',
  },
  {
    question: 'Can beginners join?',
    answer:
      'Absolutely! We have courses designed for complete beginners with no prior coding experience. Our structured curriculum takes you from the basics to advanced concepts step by step.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'We offer a 7-day refund policy. If you are not satisfied with the course within the first 7 days of purchase, you can request a full refund — no questions asked.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <h2 className="mb-10 text-center text-3xl font-extrabold text-cn-dark">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-cn-dark">
                {question}
                <Plus className="ml-4 h-5 w-5 shrink-0 text-cn-gray transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-cn-gray">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
