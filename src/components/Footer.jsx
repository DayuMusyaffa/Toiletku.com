import { Toilet } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-ink px-4 py-12 text-white md:px-14">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 text-center md:grid-cols-4">
        <div className="flex flex-col items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg border-2 border-white bg-white text-pool shadow-[5px_5px_0_#ffd35a]">
            <Toilet size={24} />
          </span>
          <strong className="text-lg">ToiletKu</strong>
          <span className="text-xs font-bold text-cyan-100">Restroom Web Experience</span>
        </div>

        <div className="flex flex-col items-center gap-3 px-4">
          <strong>Profil</strong>
          <p className="text-sm text-cyan-100">
            Web Toilet Ceria Untuk Keluarga, Pelajar, Pengunjung, dan Petugas Gedung.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 px-4">
          <strong>Menu</strong>
          <ul className="grid gap-2 text-sm text-cyan-100">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/fasilitas" className="hover:text-blue-500">
                Fasilitas
              </Link>
            </li>
            <li>
              <Link to="/monitoring" className="hover:text-blue-500">
                Monitoring
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3 px-4">
          <strong>Kontak</strong>
          <ul className="grid gap-2 text-sm text-cyan-100">
            <li>halo@toiletku.id</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 w-[min(1180px,100%)] border-t border-white/10 pt-5 text-center text-sm text-cyan-100">
        © 2026 ToiletKu. Dibuat untuk pengalaman toilet yang lebih nyaman.
      </div>
    </footer>
  )
}

export default Footer
