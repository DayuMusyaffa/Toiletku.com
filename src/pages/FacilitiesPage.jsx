import { ArrowLeft, Building2, MapPin } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import FacilityCard from '../components/FacilityCard.jsx'
import { malls } from '../data/toilets.js'

const FacilitiesPage = () => {
  const { buildingId } = useParams()
  const navigate = useNavigate()
  const mall = malls[0]
  const selectedBuilding = mall?.buildings.find((building) => building.id === buildingId)

  if (!mall) {
    return null
  }

  return (
    <main className="container-page py-12">
      <section className="mb-7">
        <span className="eyebrow">Fasilitas toilet</span>
        <h1 className="max-w-4xl text-5xl font-black leading-none text-ink md:text-7xl">
          {selectedBuilding ? `Toilet di ${selectedBuilding.name}` : 'Pilih gedung di mall untuk melihat fasilitas toilet.'}
        </h1>
        <p className="mt-5 max-w-2xl text-slate-600 md:text-lg">
          {selectedBuilding
            ? `${selectedBuilding.mood} Toilet di gedung ini tersedia dalam beberapa area yang mudah dijangkau.`
            : `${mall.mood} Pilih gedung yang ingin Anda kunjungi, lalu lihat area toilet yang tersedia.`}
        </p>
      </section>

      {selectedBuilding ? (
        <>
          <section className="mb-6 rounded-2xl border border-cyan-100 bg-white/80 p-5 shadow-soft">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 font-black text-cyan-700">
                <Building2 size={16} />
                {selectedBuilding.area}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-black text-slate-700">
                <MapPin size={16} />
                {mall.name}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="max-w-2xl text-slate-600">{selectedBuilding.mood}</p>
              <button
                type="button"
                onClick={() => navigate('/fasilitas')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition duration-300 hover:border-cyan-200 hover:text-cyan-700"
              >
                <ArrowLeft size={16} />
                Kembali ke daftar gedung
              </button>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {selectedBuilding.facilities.map((facility) => (
              <FacilityCard facility={facility} key={facility.id} />
            ))}
          </section>
        </>
      ) : (
        <section className="grid gap-4 lg:grid-cols-3">
          {mall.buildings.map((building) => (
            <FacilityCard
              facility={building}
              key={building.id}
              variant="building"
              onAction={() => navigate(`/fasilitas/${building.id}`)}
            />
          ))}
        </section>
      )}
    </main>
  )
}

export default FacilitiesPage
