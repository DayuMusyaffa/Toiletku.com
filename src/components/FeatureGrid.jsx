import { features } from '../data/toilets.js'
import FeatureCard from './FeatureCard.jsx'

const FeatureGrid = () => {
  return (
    <section className="bg-white/70 py-14">
      <div className="container-page">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-black leading-none text-ink md:text-5xl">
            Desain baru yang cerah dan inklusif.
          </h2>
          <p className="max-w-lg text-slate-600">
            Setiap bagian dibuat dengan ikon besar, kontras lembut, dan ilustrasi toilet supaya terasa ramah.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
