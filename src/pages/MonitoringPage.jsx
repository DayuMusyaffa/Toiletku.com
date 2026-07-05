import { Activity, Brush, DoorOpen, Wrench } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import StatusLegend from '../components/StatusLegend.jsx'
import ToiletCard from '../components/ToiletCard.jsx'
import { facilities, getToiletStats } from '../data/toilets.js'

const MonitoringPage = () => {
  const stats = getToiletStats()

  return (
    <main className="container-page py-12">
      <section className="mb-7 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="eyebrow">Realtime monitoring</span>
          <h1 className="max-w-4xl text-5xl font-black leading-none text-ink md:text-7xl">
            Monitoring kamar toilet yang mudah dibaca petugas dan pengunjung.
          </h1>
          <p className="mt-5 max-w-2xl text-slate-600 md:text-lg">
            Tampilan ini mempertahankan fungsi utama: melihat kamar kosong, digunakan, dan maintenance di tiap area.
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

      <section className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4" aria-label="Ringkasan status toilet">
        <StatCard title="Total Kamar" value={stats.total} description="Semua bilik toilet" />
        <StatCard title="Kosong" value={stats.kosong} description="Siap digunakan" tone="green" />
        <StatCard title="Digunakan" value={stats.digunakan} description="Sedang dipakai" tone="red" />
        <StatCard title="Maintenance" value={stats.maintenance} description="Butuh perhatian" tone="yellow" />
      </section>

      <StatusLegend />

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_326px]">
        <div className="grid gap-4 xl:grid-cols-2">
          {facilities.map((facility) => (
            <ToiletCard facility={facility} key={facility.id} />
          ))}
        </div>

        <aside className="card grid gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_56px_rgba(24,48,52,0.14)]">
          <h2 className="text-lg font-black text-ink">Catatan petugas</h2>
          <div className="group grid grid-cols-[36px_minmax(0,1fr)] gap-3 rounded-lg p-2 transition duration-300 hover:bg-cyan-50">
            <DoorOpen className="text-pool transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" size={22} />
            <div>
              <strong className="block">{stats.kosong} kamar kosong</strong>
              <span className="text-sm text-slate-600">Arahkan antrean ke area dengan warna hijau terbanyak.</span>
            </div>
          </div>
          <div className="group grid grid-cols-[36px_minmax(0,1fr)] gap-3 rounded-lg p-2 transition duration-300 hover:bg-cyan-50">
            <Brush className="text-pool transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" size={22} />
            <div>
              <strong className="block">Inspeksi visual</strong>
              <span className="text-sm text-slate-600">Gunakan checklist kebersihan sebelum jam ramai.</span>
            </div>
          </div>
          <div className="group grid grid-cols-[36px_minmax(0,1fr)] gap-3 rounded-lg p-2 transition duration-300 hover:bg-cyan-50">
            <Wrench className="text-pool transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" size={22} />
            <div>
              <strong className="block">{stats.maintenance} maintenance</strong>
              <span className="text-sm text-slate-600">Pasang tanda sementara dan prioritaskan perbaikan ringan.</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default MonitoringPage
