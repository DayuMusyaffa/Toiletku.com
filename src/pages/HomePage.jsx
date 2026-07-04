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
            Status gedung dalam satu pandangan.
          </h2>
          <p className="max-w-lg text-slate-600">
            Angka besar, label jelas, dan warna ramah membuat informasi toilet mudah dibaca dari jauh.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Area Toilet" value={stats.area} description="Tersebar di beberapa lantai" tone="blue" />
          <StatCard title="Kamar Kosong" value={stats.kosong} description="Siap digunakan pengunjung" tone="green" />
          <StatCard title="Digunakan" value={stats.digunakan} description="Sedang dipakai saat ini" tone="red" />
          <StatCard title="Maintenance" value={stats.maintenance} description="Sedang dibersihkan" tone="yellow" />
        </div>
      </section>
      <FeatureGrid />
    </>
  )
}

export default HomePage
