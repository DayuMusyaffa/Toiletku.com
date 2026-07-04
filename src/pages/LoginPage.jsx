import { useState } from 'react'
import { LogIn, Sparkles } from 'lucide-react'
import ToiletIllustration from '../components/ToiletIllustration.jsx'
import { useLogin } from '../hooks/useLogin.js'

const LoginPage = () => {
  const { user, message, login, logout } = useLogin()
  const [name, setName] = useState('')
  const [role, setRole] = useState('Petugas Kebersihan')

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ name, role })
  }

  return (
    <main className="container-page grid gap-8 py-12 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
      <section>
        <span className="eyebrow">
          <Sparkles size={16} />
          Demo login
        </span>
        <h1 className="max-w-3xl text-5xl font-black leading-none text-ink md:text-7xl">
          Masuk sebagai petugas ToiletKu.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-600 md:text-lg">
          Halaman ini mengikuti gaya project referensi yang punya login demo, tetapi disesuaikan untuk monitoring
          toilet.
        </p>
        <div className="mt-6 grid min-h-44 place-items-center rounded-lg bg-cyan-50 p-6">
          <div className="w-48">
            <ToiletIllustration compact />
          </div>
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-xl font-black text-ink">Form petugas</h2>
        <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label className="font-black text-slate-700" htmlFor="name">Nama</label>
            <input
              className="min-h-12 rounded-lg border border-ink/15 bg-white px-3 outline-none transition focus:border-pool focus:ring-4 focus:ring-cyan-100"
              id="name"
              onChange={(event) => setName(event.target.value)}
              placeholder="Contoh: Rina"
              type="text"
              value={name}
            />
          </div>
          <div className="grid gap-2">
            <label className="font-black text-slate-700" htmlFor="role">Peran</label>
            <input
              className="min-h-12 rounded-lg border border-ink/15 bg-white px-3 outline-none transition focus:border-pool focus:ring-4 focus:ring-cyan-100"
              id="role"
              onChange={(event) => setRole(event.target.value)}
              type="text"
              value={role}
            />
          </div>
          <button className="button button-primary" type="submit">
            <LogIn size={18} />
            Masuk Dashboard
          </button>
        </form>

        {message && <p className="mt-4 font-black text-pool">{message}</p>}
        {user && (
          <button className="button mt-3" type="button" onClick={logout}>
            Keluar dari demo
          </button>
        )}
      </section>
    </main>
  )
}

export default LoginPage
