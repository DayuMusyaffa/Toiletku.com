const toneClasses = {
  green: 'bg-emerald-50',
  red: 'bg-red-50',
  yellow: 'bg-amber-50',
  blue: 'bg-cyan-50',
}

const StatCard = ({ title, value, description, tone = '' }) => {
  return (
    <article className={`card min-h-40 p-5 ${toneClasses[tone] || ''}`}>
      <span className="font-black text-slate-600">{title}</span>
      <strong className="mt-2 block text-4xl font-black leading-none text-ink">{value}</strong>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  )
}

export default StatCard
