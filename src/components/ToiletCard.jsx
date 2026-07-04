import { MapPin, Toilet } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'

const ToiletCard = ({ facility }) => {
  return (
    <article className="card p-5">
      <header className="mb-4 flex justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-ink">{facility.name}</h2>
          <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={15} />
            {facility.area}
          </p>
        </div>
        <span className="h-fit whitespace-nowrap rounded-lg bg-cyan-50 px-3 py-1.5 text-xs font-black text-slate-600">
          {facility.rooms.length} kamar
        </span>
      </header>

      <div className="grid gap-3">
        {facility.rooms.map((room) => (
          <div className="grid min-h-16 grid-cols-[46px_minmax(0,1fr)] items-center gap-3 rounded-lg border border-ink/10 bg-white p-2 md:grid-cols-[46px_minmax(0,1fr)_auto]" key={room.id}>
            <div className="icon-box">
              <Toilet size={23} />
            </div>
            <div>
              <strong className="block text-ink">{room.name}</strong>
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
