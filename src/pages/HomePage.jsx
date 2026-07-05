import FeatureGrid from '../components/FeatureGrid.jsx'
import Hero from '../components/Hero.jsx'
import StatCard from '../components/StatCard.jsx'
import { getToiletStats } from '../data/toilets.js'

const HomePage = () => {
  const stats = getToiletStats()

  return (
    <>
      <Hero />
      <section className="container-page py-12" aria-label="Ringkasan ToiletKu">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-black leading-none text-ink md:text-5xl">
            Status mall dan gedung dalam satu pandangan.
          </h2>
          <p className="max-w-lg text-slate-600">
            Label terbaru mencerminkan jumlah gedung, area toilet, dan status kamar yang tersedia di mall saat ini.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <StatCard title="Gedung Terhubung" value={stats.buildings} description="Gedung yang tersedia di mall" tone="blue" />
          <StatCard title="Area Toilet" value={stats.facilities} description="Area toilet di semua gedung" tone="blue" />
          <StatCard title="Kamar Siap Dipakai" value={stats.kosong} description="Bilik kosong dan siap digunakan" tone="green" />
          <StatCard title="Sedang Digunakan" value={stats.digunakan} description="Bilik yang sedang dipakai" tone="red" />
          <StatCard title="Maintenance" value={stats.maintenance} description="Perlu perhatian petugas" tone="yellow" />
        </div>
      </section>
      <FeatureGrid />
    </>
  )
}

export default HomePage
