import { Toilet } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ink px-4 py-12 text-white md:px-14">
      <div className="mx-auto grid w-[min(1180px,100%)] gap-8 md:grid-cols-[1.2fr_repeat(3,minmax(0,0.55fr))]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg border-2 border-white bg-white text-pool shadow-[5px_5px_0_#ffd35a]">
              <Toilet size={24} />
            </span>
            <span>
              <strong className="block text-lg">ToiletKu</strong>
              <span className="block text-xs font-bold text-cyan-100">Restroom web experience</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cyan-100">
            Web toilet ceria untuk keluarga, pelajar, pengunjung, dan petugas gedung.
          </p>
        </div>
        <div>
          <strong>Menu</strong>
          <ul className="mt-3 grid gap-2 text-sm text-cyan-100">
            <li>Beranda</li>
            <li>Fasilitas</li>
            <li>Monitoring</li>
          </ul>
        </div>
        <div>
          <strong>Tema</strong>
          <ul className="mt-3 grid gap-2 text-sm text-cyan-100">
            <li>Ramah anak</li>
            <li>Bersih dan cerah</li>
            <li>Mudah dipahami</li>
          </ul>
        </div>
        <div>
          <strong>Kontak</strong>
          <ul className="mt-3 grid gap-2 text-sm text-cyan-100">
            <li>halo@toiletku.id</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 w-[min(1180px,100%)] border-t border-white/10 pt-5 text-sm text-cyan-100">
        © 2026 ToiletKu. Dibuat untuk pengalaman toilet yang lebih nyaman.
      </div>
    </footer>
  )
}

export default Footer
