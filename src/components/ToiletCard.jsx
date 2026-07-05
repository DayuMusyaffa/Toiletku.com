import { MapPin, Toilet } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'

const ToiletCard = ({ facility }) => {
  return (
    <article className="card group/card p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_56px_rgba(24,48,52,0.14)]">
      <header className="mb-4 flex justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-ink transition duration-300 group-hover/card:text-pool">{facility.name}</h2>
          <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="transition duration-300 group-hover/card:-translate-y-0.5 group-hover/card:text-pool" size={15} />
            {facility.area}
          </p>
        </div>
        <span className="h-fit whitespace-nowrap rounded-lg bg-cyan-50 px-3 py-1.5 text-xs font-black text-slate-600 transition duration-300 group-hover/card:bg-white group-hover/card:text-pool group-hover/card:shadow-soft">
          {facility.rooms.length} kamar
        </span>
      </header>

      <div className="grid gap-3">
        {facility.rooms.map((room) => (
          <div className="group grid min-h-16 grid-cols-[46px_minmax(0,1fr)] items-center gap-3 rounded-lg border border-ink/10 bg-white p-2 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50/60 hover:shadow-soft md:grid-cols-[46px_minmax(0,1fr)_auto]" key={room.id}>
            <div className="icon-box transition duration-300 group-hover:bg-white group-hover:text-pool group-hover:shadow-sm">
              <Toilet className="transition duration-300 group-hover:scale-110" size={23} />
            </div>
            <div>
              <strong className="block text-ink transition duration-300 group-hover:text-pool">{room.name}</strong>
              <span className="block text-sm text-slate-500">{facility.mood}</span>
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
