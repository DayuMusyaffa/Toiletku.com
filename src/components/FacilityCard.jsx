import { Baby, CheckCircle2 } from 'lucide-react'
import ToiletIllustration from './ToiletIllustration.jsx'

const FacilityCard = ({ facility }) => {
  return (
    <article className="card grid gap-4 p-5">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black text-ink">{facility.name}</h3>
          <p className="text-sm text-slate-600">{facility.area}</p>
        </div>
        <div className="icon-box">
          <Baby size={22} />
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
      </div>
    </article>
  )
}

export default FacilityCard
