import { useState } from 'react'
import { LogIn, Sparkles } from 'lucide-react'
import { useLogin } from '../hooks/useLogin.js'
import { sampleAccount } from '../lib/apiClient.js'

const LoginPage = () => {
  const { user, loading, error, login, logout } = useLogin()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login(form)
  }

  const fillSampleAccount = () => {
    setForm({
      email: sampleAccount.email,
      password: sampleAccount.password,
    })
  }

  if (user) {
    return (
      <main className="min-h-[70vh] bg-slate-50 px-6 py-16 md:px-16">
        <section className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-8 text-center shadow-soft">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pool text-2xl font-black text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <p className="mb-2 text-sm font-black uppercase tracking-normal text-pool">Sudah Login</p>
          <h1 className="mb-2 text-2xl font-black text-ink">Halo, {user.name}</h1>
          <p className="text-sm text-slate-600">{user.email}</p>
          <p className="mb-6 mt-1 text-xs font-bold text-slate-500">{user.role}</p>
          <button
            type="button"
            onClick={logout}
            className="w-full rounded-lg bg-ink px-4 py-3 font-black text-white transition hover:bg-[#0f2529]"
          >
            Logout
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-[70vh] bg-slate-50 px-6 py-16 md:px-16">
      <section className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-flex items-center justify-center gap-2 text-sm font-black uppercase tracking-normal text-pool">
            <Sparkles size={16} />
            Login
          </p>
          <h1 className="mb-3 text-3xl font-black text-ink">Masuk ke ToiletKu</h1>
          <p className="text-sm leading-6 text-slate-600">
            Masukkan email dan password untuk masuk ke dashboard monitoring toilet.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pool focus:ring-2 focus:ring-cyan-100"
              placeholder="nama@toiletku.id"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-bold text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pool focus:ring-2 focus:ring-cyan-100"
              placeholder="Masukkan password"
            />
          </div>

          {error ? (
            <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-bold text-rose-600">{error.message}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-pool px-4 py-3 font-black text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-cyan-300"
          >
            <LogIn size={18} />
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </form>

        <button
          type="button"
          onClick={fillSampleAccount}
          className="mt-4 w-full rounded-lg border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm font-black text-pool transition hover:bg-cyan-100"
        >
          Isi akun contoh
        </button>

        <p className="mt-6 text-center text-xs text-slate-500">
          Akun contoh: {sampleAccount.email} / {sampleAccount.password}
        </p>
      </section>
    </main>
  )
}

export default LoginPage
