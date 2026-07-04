import { statusMeta } from '../data/toilets.js'

const StatusBadge = ({ status }) => {
  const meta = statusMeta[status]

  return (
    <span className={`inline-flex min-h-8 items-center justify-center gap-2 rounded-lg px-3 text-sm font-black ${meta.badge}`}>
      <span className={`status-dot ${meta.className}`} />
      {meta.label}
    </span>
  )
}

export default StatusBadge
