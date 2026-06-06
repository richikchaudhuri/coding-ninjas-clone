import { Link } from 'react-router-dom'

const linkGroups = [
  {
    title: 'Courses',
    links: [
      { label: 'Full Stack Development', to: '/courses/full-stack-web-development' },
      { label: 'Data Structures', to: '/courses/data-structures-and-algorithms' },
      { label: 'Machine Learning', to: '/courses/machine-learning' },
      { label: 'Data Science', to: '/courses/data-science' },
      { label: 'All Courses', to: '/courses' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Careers', to: '/about' },
      { label: 'Blog', to: '/about' },
      { label: 'Contact', to: '/about' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Community', to: '/courses' },
      { label: 'Events', to: '/courses' },
      { label: 'Webinars', to: '/courses' },
      { label: 'Documentation', to: '/courses' },
      { label: 'Help Center', to: '/about' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/about' },
      { label: 'Terms of Service', to: '/about' },
      { label: 'Cookie Policy', to: '/about' },
      { label: 'Refund Policy', to: '/pricing' },
    ],
  },
]

const socials = [
  { label: 'LinkedIn', badge: 'in', href: 'https://www.linkedin.com/company/coding-ninjas' },
  { label: 'Twitter', badge: '𝕏', href: 'https://twitter.com/codingninjas' },
  { label: 'YouTube', badge: '▶', href: 'https://www.youtube.com/@codingninjas' },
  { label: 'Instagram', badge: 'IG', href: 'https://www.instagram.com/codingninjas' },
]

export default function Footer() {
  return (
    <footer className="bg-cn-navy text-gray-400">
      <div className="mx-auto max-w-container px-4 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-extrabold text-cn-orange">
              Coding Ninjas
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Learn. Build. Get hired. Your one-stop destination for mastering
              tech skills and launching your career.
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, badge, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-gray-300 transition-colors hover:bg-cn-orange hover:text-white"
                >
                  {badge}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-3 font-semibold text-white">{title}</h4>
              <ul className="space-y-2 text-sm">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          &copy; 2026 Coding Ninjas. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
