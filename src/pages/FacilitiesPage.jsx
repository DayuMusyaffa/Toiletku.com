import FacilityCard from '../components/FacilityCard.jsx'
import { facilities } from '../data/toilets.js'

const FacilitiesPage = () => {
  return (
    <main className="container-page py-12">
      <section className="mb-7">
        <span className="eyebrow">Fasilitas toilet</span>
        <h1 className="max-w-4xl text-5xl font-black leading-none text-ink md:text-7xl">
          Area toilet dibuat jelas untuk pengunjung semua umur.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-600 md:text-lg">
          Pilih area berdasarkan lokasi, kebutuhan keluarga, dan fasilitas pendukung seperti wastafel rendah atau
          ruang ganti bayi.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard facility={facility} key={facility.id} />
        ))}
      </section>
    </main>
  )
}

export default FacilitiesPage
