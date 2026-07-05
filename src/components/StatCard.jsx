const toneClasses = {
  green: {
    panel: 'bg-emerald-50 hover:border-emerald-200',
    bar: 'bg-emerald-500',
  },
  red: {
    panel: 'bg-red-50 hover:border-red-200',
    bar: 'bg-red-500',
  },
  yellow: {
    panel: 'bg-amber-50 hover:border-amber-200',
    bar: 'bg-amber-400',
  },
  blue: {
    panel: 'bg-cyan-50 hover:border-cyan-200',
    bar: 'bg-pool',
  },
  default: {
    panel: 'hover:border-cyan-200',
    bar: 'bg-ink',
  },
}

const StatCard = ({ title, value, description, tone = '' }) => {
  const styles = toneClasses[tone] || toneClasses.default

  return (
    <article className={`card group min-h-40 overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(24,48,52,0.14)] ${styles.panel}`}>
      <span className="font-black text-slate-600">{title}</span>
      <strong className="mt-2 block text-4xl font-black leading-none text-ink transition duration-300 group-hover:scale-105">{value}</strong>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <span className={`mt-5 block h-1.5 w-14 rounded-full transition-all duration-300 group-hover:w-full ${styles.bar}`} />
    </article>
  )
}

export default StatCard
