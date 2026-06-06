const linkGroups = [
  {
    title: 'Courses',
    links: [
      'Full Stack Development',
      'Data Structures',
      'Machine Learning',
      'Data Science',
      'Web Development',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Community', 'Events', 'Webinars', 'Documentation', 'Help Center'],
  },
  {
    title: 'Legal',
    links: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Refund Policy',
    ],
  },
];

const socials = [
  { label: 'LinkedIn', icon: 'in' },
  { label: 'Twitter', icon: '𝕏' },
  { label: 'YouTube', icon: '▶' },
  { label: 'Instagram', icon: '📷' },
];

export default function Footer() {
  return (
    <footer className="bg-cn-navy text-gray-400">
      <div className="mx-auto max-w-container px-4 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span className="text-xl font-extrabold text-cn-orange">
              Coding Ninjas
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Learn. Build. Get hired. Your one-stop destination for mastering
              tech skills and launching your career.
            </p>
            <div className="mt-4 flex gap-4">
              {socials.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-3 font-semibold text-white">{title}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          &copy; 2024 Coding Ninjas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
