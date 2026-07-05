import { statusMeta } from '../data/toilets.js'

const StatusBadge = ({ status }) => {
  const meta = statusMeta[status]

  return (
    <span className={`inline-flex min-h-8 items-center justify-center gap-2 rounded-lg px-3 text-sm font-black transition duration-300 group-hover:scale-105 ${meta.badge}`}>
      <span className={`status-dot ${meta.className} transition duration-300 group-hover:ring-4 group-hover:ring-white`} />
      {meta.label}
    </span>
  )
}

export default StatusBadge
