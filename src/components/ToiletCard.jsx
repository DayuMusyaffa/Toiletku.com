import { MapPin, Toilet } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'

const ToiletCard = ({ facility }) => {
  return (
    <article className="card group/card p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_56px_rgba(24,48,52,0.14)]">
      <header className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-black text-ink transition duration-300 group-hover/card:text-pool">{facility.name}</h2>
          <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="transition duration-300 group-hover/card:-translate-y-0.5 group-hover/card:text-pool" size={14} />
            {facility.area}
          </p>
        </div>
        <span className="h-fit whitespace-nowrap rounded-lg bg-cyan-50 px-2.5 py-1 text-[11px] font-black text-slate-600 transition duration-300 group-hover/card:bg-white group-hover/card:text-pool group-hover/card:shadow-soft">
          {facility.rooms.length} kamar
        </span>
      </header>

      <div className="grid gap-2">
        {facility.rooms.map((room) => (
          <div className="group grid min-h-14 grid-cols-[38px_minmax(0,1fr)] items-center gap-2 rounded-lg border border-ink/10 bg-white p-2 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50/60 hover:shadow-soft md:grid-cols-[38px_minmax(0,1fr)_auto]" key={room.id}>
            <div className="icon-box h-9 w-9 rounded-md p-0 transition duration-300 group-hover:bg-white group-hover:text-pool group-hover:shadow-sm">
              <Toilet className="transition duration-300 group-hover:scale-110" size={18} />
            </div>
            <div>
              <strong className="block text-sm text-ink transition duration-300 group-hover:text-pool">{room.name}</strong>
              <span className="block text-xs text-slate-500">{facility.mood}</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <StatusBadge status={room.status} />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default ToiletCard
