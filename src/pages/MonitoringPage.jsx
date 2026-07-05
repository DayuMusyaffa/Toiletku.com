import { Activity, Brush, DoorOpen, Wrench } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import StatusLegend from '../components/StatusLegend.jsx'
import ToiletCard from '../components/ToiletCard.jsx'
import { facilities, getToiletStats } from '../data/toilets.js'

const MonitoringPage = () => {
  const stats = getToiletStats()

  return (
    <main className="container-page py-12">
      <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-cyan-100 bg-white/80 p-5 shadow-soft md:flex-row md:items-start md:justify-between">
        <div>
          <span className="eyebrow">Realtime monitoring</span>
          <h1 className="max-w-4xl text-4xl font-black leading-none text-ink md:text-6xl">
            Pantau status toilet dengan tampilan yang lebih padat dan jelas.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Ringkasan status, daftar area, dan catatan petugas tersusun rapat agar mudah dibaca dari jauh.
          </p>
        </div>
        <div className="group inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-ink px-4 font-black text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(24,48,52,0.18)]">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-mint" />
          </span>
          <Activity className="transition duration-300 group-hover:rotate-12" size={18} />
          Live
        </div>
      </section>

      <section className="mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Ringkasan status toilet">
        <StatCard title="Total Kamar" value={stats.total} description="Semua bilik toilet" />
        <StatCard title="Kosong" value={stats.kosong} description="Siap digunakan" tone="green" />
        <StatCard title="Digunakan" value={stats.digunakan} description="Sedang dipakai" tone="red" />
        <StatCard title="Maintenance" value={stats.maintenance} description="Butuh perhatian" tone="yellow" />
      </section>

      <div className="mb-5 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-soft">
        <StatusLegend />
      </div>

      <section className="mb-5 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-sky-50 p-4 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-black text-ink">Catatan petugas</h2>
            <p className="text-sm text-slate-600">Ringkasan cepat untuk pengunjung dan petugas saat memantau toilet.</p>
          </div>
          <span className="w-fit rounded-full bg-cyan-600 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
            Prioritas
          </span>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          <div className="rounded-2xl border border-cyan-200 bg-white/90 p-3">
            <div className="flex items-start gap-2.5">
              <div className="rounded-xl bg-cyan-100 p-2 text-cyan-700">
                <DoorOpen size={16} />
              </div>
              <div>
                <strong className="block text-sm text-ink">{stats.kosong} kamar kosong</strong>
                <span className="text-sm leading-5 text-slate-600">Arahkan antrean ke area dengan warna hijau terbanyak.</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3">
            <div className="flex items-start gap-2.5">
              <div className="rounded-xl bg-slate-100 p-2 text-slate-700">
                <Brush size={16} />
              </div>
              <div>
                <strong className="block text-sm text-ink">Inspeksi visual</strong>
                <span className="text-sm leading-5 text-slate-600">Gunakan checklist kebersihan sebelum jam ramai.</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/90 p-3">
            <div className="flex items-start gap-2.5">
              <div className="rounded-xl bg-white p-2 text-amber-700">
                <Wrench size={16} />
              </div>
              <div>
                <strong className="block text-sm text-ink">{stats.maintenance} maintenance</strong>
                <span className="text-sm leading-5 text-slate-600">Pasang tanda sementara dan prioritaskan perbaikan ringan.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4">
        <div className="grid gap-4 lg:grid-cols-2">
          {facilities.map((facility) => (
            <ToiletCard facility={facility} key={facility.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default MonitoringPage
