import { useState } from 'react'
import { features } from '../data/toilets.js'
import FeatureCard from './FeatureCard.jsx'

const FeatureGrid = () => {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <section className="bg-white/70 py-14">
      <div className="container-page">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-black leading-none text-ink md:text-5xl">
            Fitur yang terasa hidup dan mudah dipakai.
          </h2>
          <p className="max-w-lg text-slate-600">
            Klik setiap kartu untuk melihat fokus fitur yang paling relevan dengan kebutuhan pengunjung saat ini.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-5 shadow-soft">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-ink px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
              Fitur terpilih
            </span>
            <span className="text-sm font-black text-cyan-700">{activeFeature.title}</span>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">{activeFeature.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              feature={feature}
              key={feature.title}
              isActive={activeFeature.title === feature.title}
              onSelect={() => setActiveFeature(feature)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
