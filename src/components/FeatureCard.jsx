const FeatureCard = ({ feature, isActive, onSelect }) => {
  const Icon = feature.icon

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`card group grid min-h-44 content-start gap-4 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_56px_rgba(24,48,52,0.14)] ${isActive ? 'border-cyan-300 bg-cyan-50/80 shadow-soft' : ''}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`icon-box ${isActive ? 'bg-cyan-100 text-cyan-700' : ''}`}>
          <Icon size={24} />
        </div>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-black ${isActive ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
          {isActive ? 'Terpilih' : 'Lihat'}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-black text-ink">{feature.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
      </div>
    </button>
  )
}

export default FeatureCard
