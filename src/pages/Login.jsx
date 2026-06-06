import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react'
import AuthShell from '../components/AuthShell.jsx'
import { GoogleIcon, GitHubIcon } from '../components/BrandIcons.jsx'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.email) next.email = 'Email is required'
    else if (!emailRegex.test(form.email)) next.email = 'Enter a valid email address'
    if (!form.password) next.password = 'Password is required'
    else if (form.password.length < 6)
      next.password = 'Password must be at least 6 characters'
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to continue your learning journey."
      altPrompt="New to Coding Ninjas?"
      altLabel="Create an account"
      altTo="/signup"
    >
      {submitted ? (
        <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
          <h2 className="mt-3 text-lg font-bold text-cn-dark">You’re logged in!</h2>
          <p className="mt-1 text-sm text-cn-gray">
            This is a front-end demo — no account is actually created.
          </p>
          <Link
            to="/"
            className="mt-5 inline-block rounded-lg bg-cn-orange px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cn-orange-dark"
          >
            Go to homepage
          </Link>
        </div>
      ) : (
        <>
          {/* Social */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-cn-dark transition hover:bg-gray-50"
            >
              <GoogleIcon className="h-5 w-5" />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2.5 text-sm font-semibold text-cn-dark transition hover:bg-gray-50"
            >
              <GitHubIcon className="h-5 w-5" />
              GitHub
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-medium uppercase text-cn-gray">or</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cn-dark">
                Email
              </label>
              <div className="relative mt-1.5">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-cn-gray" />
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className={`w-full rounded-lg border bg-white py-2.5 pl-11 pr-4 text-sm text-cn-dark transition focus:outline-none focus:ring-2 focus:ring-cn-orange/30 ${
                    errors.email
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-gray-300 focus:border-cn-orange'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-cn-dark">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-semibold text-cn-orange hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative mt-1.5">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-cn-gray" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={update('password')}
                  placeholder="••••••••"
                  className={`w-full rounded-lg border bg-white py-2.5 pl-11 pr-11 text-sm text-cn-dark transition focus:outline-none focus:ring-2 focus:ring-cn-orange/30 ${
                    errors.password
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-gray-300 focus:border-cn-orange'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-cn-gray transition hover:text-cn-dark"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <label className="flex items-center gap-2 text-sm text-cn-gray">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cn-orange focus:ring-cn-orange"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-cn-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cn-orange/25 transition hover:-translate-y-0.5 hover:bg-cn-orange-dark"
            >
              Log in
            </button>
          </form>
        </>
      )}
    </AuthShell>
  )
}
