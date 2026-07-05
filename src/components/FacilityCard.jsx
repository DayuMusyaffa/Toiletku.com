import { ArrowRight, Baby, Building2, CheckCircle2 } from 'lucide-react'
import ToiletIllustration from './ToiletIllustration.jsx'

const statusBadgeClass = {
  kosong: 'bg-emerald-50 text-emerald-700',
  digunakan: 'bg-red-50 text-red-700',
  maintenance: 'bg-amber-50 text-amber-700',
}

const FacilityCard = ({ facility, variant = 'facility', onAction }) => {
  const isBuilding = variant === 'building'

  return (
    <article className="card grid gap-4 p-5">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black text-ink">{facility.name}</h3>
          <p className="text-sm text-slate-600">{facility.area}</p>
        </div>
        <div className={`icon-box ${isBuilding ? 'bg-cyan-100 text-cyan-700' : ''}`}>
          {isBuilding ? <Building2 size={22} /> : <Baby size={22} />}
        </div>
      </header>
      <div className="grid min-h-32 place-items-center rounded-lg bg-[repeating-linear-gradient(90deg,transparent_0_26px,rgba(17,132,160,0.08)_26px_27px)] bg-cyan-50">
        <div className="w-32">
          <ToiletIllustration compact />
        </div>
      </div>
      <p className="text-sm text-slate-600">{facility.mood}</p>
      <div className="flex flex-wrap gap-2">
        {facility.amenities.map((amenity) => (
          <span className="inline-flex min-h-8 items-center gap-2 rounded-lg bg-slate-50 px-3 text-sm font-black text-slate-700" key={amenity}>
            <CheckCircle2 size={14} />
            {amenity}
          </span>
        ))}
        {isBuilding && facility.toiletCount ? (
          <span className="inline-flex min-h-8 items-center rounded-lg bg-cyan-50 px-3 text-sm font-black text-cyan-700">
            {facility.toiletCount} area toilet
          </span>
        ) : null}
      </div>
      {isBuilding && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5"
        >
          Lihat fasilitas toilet
          <ArrowRight size={16} />
        </button>
      ) : null}
      {!isBuilding && facility.rooms ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {facility.rooms.map((room) => (
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-3" key={room.id}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-black text-ink">{room.name}</span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-black ${statusBadgeClass[room.status] || 'bg-slate-100 text-slate-700'}`}>
                  {room.status === 'kosong' ? 'Kosong' : room.status === 'digunakan' ? 'Digunakan' : 'Maintenance'}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export default FacilityCard
