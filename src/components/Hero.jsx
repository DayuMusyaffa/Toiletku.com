import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getToiletStats, hygieneHighlights } from '../data/toilets.js'
import ToiletIllustration from './ToiletIllustration.jsx'

const Hero = () => {
  const stats = getToiletStats()

  return (
    <section className="container-page grid min-h-[calc(100vh-86px)] items-center gap-8 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
      <div>
        <span className="eyebrow">
          <Sparkles size={16} />
          Mall modern, gedung terhubung, toilet yang mudah dipahami
        </span>
        <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-normal text-ink md:text-7xl lg:text-8xl">
          Toilet nyaman di {stats.buildings} gedung untuk anak, keluarga, dan semua pengunjung.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
          ToiletKu menampilkan area toilet, status kamar, dan panduan kebersihan dalam tampilan cerah agar informasi penting terasa ringan untuk semua umur.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="button button-primary" to="/monitoring">
            Lihat Monitoring
            <ArrowRight size={18} />
          </Link>
          <Link className="button" to="/panduan">
            Panduan Toilet
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-black text-slate-600">
          {hygieneHighlights.map((item) => {
            const Icon = item.icon
            return (
              <span className="inline-flex items-center gap-2" key={item.label}>
                <Icon size={16} />
                {item.label}
              </span>
            )
          })}
        </div>
      </div>

      <div className="relative min-h-[390px] md:min-h-[520px]" aria-hidden="true">
        <div className="absolute right-3 top-5 z-10 inline-flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-4 py-3 font-black text-pool shadow-soft">
          <CheckCircle2 size={18} />
          Bersih dicek
        </div>
        <div className="hero-pattern absolute inset-x-0 bottom-9 top-16 grid place-items-center overflow-hidden rounded-lg border border-ink/10 shadow-soft">
          <div className="absolute inset-x-[-20px] bottom-[-34px] h-40 -skew-y-3 bg-cyan-200" />
          <div className="relative z-10 w-[min(82%,390px)]">
            <ToiletIllustration />
          </div>
        </div>
        <div className="absolute left-7 top-24 z-20 grid h-14 w-14 place-items-center rounded-lg bg-sun text-ink shadow-[5px_5px_0_#fff]">
          <Droplets size={25} />
        </div>
        <div className="absolute bottom-28 right-7 z-20 grid h-14 w-14 place-items-center rounded-lg bg-mint text-ink shadow-[5px_5px_0_#fff]">
          <ShieldCheck size={25} />
        </div>
        <div className="absolute bottom-14 left-2 z-20 rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
          <strong className="block text-2xl leading-none text-emerald-600">{stats.kosong}</strong>
          <span className="block text-xs font-black text-slate-500">kamar siap dipakai</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
