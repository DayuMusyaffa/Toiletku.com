import { statusMeta } from '../data/toilets.js'

const StatusLegend = () => {
  return (
    <section className="card mb-4 flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-lg font-black text-ink">Legenda status</h2>
        <p className="text-sm text-slate-600">Warna dibuat sederhana agar pengunjung baru cepat mengerti.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(statusMeta).map(([status, meta]) => (
          <span className="inline-flex min-h-8 items-center gap-2 rounded-lg bg-slate-50 px-3 text-sm font-black" key={status}>
            <span className={`status-dot ${meta.className}`} />
            {meta.label}
          </span>
        ))}
      </div>
    </section>
  )
}

export default StatusLegend
