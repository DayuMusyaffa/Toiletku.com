import { BookOpenCheck } from 'lucide-react'
import { guideSteps } from '../data/toilets.js'
import { restroomTips } from '../lib/restroomCopy.js'

const GuidePage = () => {
  return (
    <main className="container-page py-12">
      <section className="mb-7 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="eyebrow">Panduan ringan</span>
          <h1 className="max-w-4xl text-5xl font-black leading-none text-ink md:text-7xl">
            Cara memakai ToiletKu tanpa bingung.
          </h1>
          <p className="mt-5 max-w-2xl text-slate-600 md:text-lg">
            Bahasa dan visualnya dibuat sederhana supaya anak, keluarga, dan pengunjung baru cepat paham.
          </p>
        </div>
        <div className="inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-ink px-4 font-black text-white">
          <BookOpenCheck size={18} />
          Mudah
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {guideSteps.map((step, index) => (
          <article className="card grid content-start gap-3 p-5" key={step.title}>
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink font-black text-white">{index + 1}</span>
            <h3 className="text-lg font-black text-ink">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-lg bg-white/70 py-10">
        <div className="px-4">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-3xl font-black leading-none text-ink md:text-5xl">
              Tips menjaga toilet tetap nyaman.
            </h2>
            <p className="max-w-lg text-slate-600">
              Bagian ini bisa dikembangkan menjadi konten edukasi singkat di layar depan toilet.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {restroomTips.map((tip) => (
              <article className="card p-5" key={tip}>
                <p className="text-sm text-slate-600">{tip}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default GuidePage
