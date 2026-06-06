// Stub for /batch: replicate the multi-column footer (links, social, app badges, legal).
export default function Footer() {
  const columns = ['Courses', 'Company', 'Resources', 'Legal']
  return (
    <footer className="bg-cn-navy text-cn-gray">
      <div className="mx-auto max-w-container px-4 py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="text-lg font-extrabold text-cn-orange">Coding Ninjas</span>
            <p className="mt-2 text-sm">{/* TODO: tagline + socials */}Learn. Build. Get hired.</p>
          </div>
          {columns.map((col) => (
            <div key={col}>
              <h4 className="mb-3 font-semibold text-white">{col}</h4>
              <ul className="space-y-2 text-sm">
                {/* TODO: real footer links */}
                <li>Link one</li>
                <li>Link two</li>
                <li>Link three</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm">
          © {new Date().getFullYear()} Coding Ninjas Clone. For educational use only.
        </div>
      </div>
    </footer>
  )
}
