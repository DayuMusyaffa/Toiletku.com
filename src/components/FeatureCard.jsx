const FeatureCard = ({ feature }) => {
  const Icon = feature.icon

  return (
    <article className="card grid min-h-44 content-start gap-4 p-5">
      <div className="icon-box">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-lg font-black text-ink">{feature.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
      </div>
    </article>
  )
}

export default FeatureCard
