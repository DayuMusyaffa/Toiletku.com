import { Baby, Droplets, HeartHandshake, ShieldCheck, Sparkles, TimerReset } from 'lucide-react'

export const statusMeta = {
  kosong: {
    label: 'Kosong',
    className: 'bg-emerald-500',
    badge: 'bg-emerald-50 text-emerald-700',
  },
  digunakan: {
    label: 'Digunakan',
    className: 'bg-red-500',
    badge: 'bg-red-50 text-red-700',
  },
  maintenance: {
    label: 'Maintenance',
    className: 'bg-amber-400',
    badge: 'bg-amber-50 text-amber-700',
  },
}

export const features = [
  {
    title: 'Ramah Anak',
    description: 'Ikon besar dan warna lembut membuat status toilet mudah dipahami semua umur.',
    icon: Baby,
  },
  {
    title: 'Kebersihan Terlihat',
    description: 'Informasi sabun, wastafel, dan inspeksi tampil ringkas untuk petugas dan pengunjung.',
    icon: Sparkles,
  },
  {
    title: 'Akses Aman',
    description: 'Area keluarga, anak, dan prioritas dibuat jelas agar pengunjung cepat menemukan pilihan.',
    icon: ShieldCheck,
  },
  {
    title: 'Cepat Dipantau',
    description: 'Status kamar kosong, digunakan, dan maintenance bisa dibaca dalam satu layar.',
    icon: TimerReset,
  },
]

export const facilities = [
  {
    id: 'lobby',
    name: 'Toilet Lobby Ceria',
    area: 'Lantai 1 - dekat informasi',
    mood: 'Paling dekat untuk pengunjung baru',
    amenities: ['Toilet keluarga', 'Wastafel rendah', 'Sabun otomatis'],
    rooms: [
      { id: '1-1', name: 'Kamar A', status: 'kosong' },
      { id: '1-2', name: 'Kamar B', status: 'digunakan' },
      { id: '1-3', name: 'Kamar C', status: 'kosong' },
      { id: '1-4', name: 'Kamar D', status: 'maintenance' },
    ],
  },
  {
    id: 'kids',
    name: 'Toilet Anak Bahagia',
    area: 'Lantai 2 - zona kelas',
    mood: 'Tinggi pintu dan wastafel nyaman untuk anak',
    amenities: ['Step stool', 'Pengering tangan', 'Poster cuci tangan'],
    rooms: [
      { id: '2-1', name: 'Kamar A', status: 'kosong' },
      { id: '2-2', name: 'Kamar B', status: 'kosong' },
      { id: '2-3', name: 'Kamar C', status: 'digunakan' },
      { id: '2-4', name: 'Kamar D', status: 'kosong' },
    ],
  },
  {
    id: 'family',
    name: 'Toilet Keluarga Nyaman',
    area: 'Lantai 3 - area komunal',
    mood: 'Ruang lebih lapang untuk pendamping',
    amenities: ['Ruang ganti bayi', 'Pegangan aman', 'Aroma segar'],
    rooms: [
      { id: '3-1', name: 'Kamar A', status: 'digunakan' },
      { id: '3-2', name: 'Kamar B', status: 'kosong' },
      { id: '3-3', name: 'Kamar C', status: 'maintenance' },
      { id: '3-4', name: 'Kamar D', status: 'kosong' },
    ],
  },
]

export const guideSteps = [
  {
    title: 'Cek warna status',
    description: 'Hijau kosong, merah sedang dipakai, kuning sedang dibersihkan atau diperbaiki.',
  },
  {
    title: 'Pilih area terdekat',
    description: 'Buka halaman fasilitas untuk menemukan toilet anak, keluarga, atau lobby.',
  },
  {
    title: 'Jaga antrean nyaman',
    description: 'Ikuti arahan petugas dan beri prioritas untuk anak, lansia, dan keluarga.',
  },
]

export const hygieneHighlights = [
  { label: 'Cuci tangan 20 detik', icon: Droplets },
  { label: 'Petugas ramah siap bantu', icon: HeartHandshake },
  { label: 'Area dicek berkala', icon: Sparkles },
]

export function getToiletStats() {
  const rooms = facilities.flatMap((facility) => facility.rooms)

  return {
    area: facilities.length,
    total: rooms.length,
    kosong: rooms.filter((room) => room.status === 'kosong').length,
    digunakan: rooms.filter((room) => room.status === 'digunakan').length,
    maintenance: rooms.filter((room) => room.status === 'maintenance').length,
  }
}
