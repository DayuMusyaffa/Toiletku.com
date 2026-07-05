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

export const malls = [
  {
    id: 'grand-plaza',
    name: 'Mall Grand Plaza',
    area: 'Pusat kota',
    mood: 'Mall modern dengan beberapa gedung terhubung dan area toilet yang mudah dijangkau.',
    highlights: ['3 gedung terhubung', 'Area toilet bersih setiap lantai', 'Lift prioritas untuk keluarga'],
    buildings: [
      {
        id: 'gedung-a',
        name: 'Gedung A',
        area: 'Dekat pintu utama',
        mood: 'Akses dekat eskalator, cocok untuk pengunjung baru.',
        amenities: ['Lift prioritas', 'Area keluarga', 'Ruang ganti bayi'],
        toiletCount: 6,
        facilities: [
          {
            id: 'gedung-a-lobby',
            name: 'Toilet Lobby',
            area: 'Lantai 1 - dekat informasi',
            mood: 'Paling dekat untuk pengunjung baru',
            amenities: ['Toilet keluarga', 'Wastafel rendah', 'Sabun otomatis'],
            rooms: [
              { id: 'a-1', name: 'Kamar 1', status: 'kosong' },
              { id: 'a-2', name: 'Kamar 2', status: 'digunakan' },
              { id: 'a-3', name: 'Kamar 3', status: 'kosong' },
              { id: 'a-4', name: 'Kamar 4', status: 'maintenance' },
            ],
          },
          {
            id: 'gedung-a-kids',
            name: 'Toilet Anak',
            area: 'Lantai 2 - zona kelas',
            mood: 'Tinggi pintu dan wastafel nyaman untuk anak',
            amenities: ['Step stool', 'Pengering tangan', 'Poster cuci tangan'],
            rooms: [
              { id: 'a-5', name: 'Kamar 1', status: 'kosong' },
              { id: 'a-6', name: 'Kamar 2', status: 'kosong' },
              { id: 'a-7', name: 'Kamar 3', status: 'digunakan' },
              { id: 'a-8', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-a-family',
            name: 'Toilet Keluarga',
            area: 'Lantai 3 - area komunal',
            mood: 'Ruang lebih lapang untuk pendamping',
            amenities: ['Ruang ganti bayi', 'Pegangan aman', 'Aroma segar'],
            rooms: [
              { id: 'a-9', name: 'Kamar 1', status: 'digunakan' },
              { id: 'a-10', name: 'Kamar 2', status: 'kosong' },
              { id: 'a-11', name: 'Kamar 3', status: 'maintenance' },
              { id: 'a-12', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-a-priority',
            name: 'Toilet Prioritas',
            area: 'Lantai 2 - dekat lift utama',
            mood: 'Cocok untuk lansia dan penumpang prioritas',
            amenities: ['Pintu lebih lebar', 'Pegangan tangan', 'Lantai anti slip'],
            rooms: [
              { id: 'a-13', name: 'Kamar 1', status: 'kosong' },
              { id: 'a-14', name: 'Kamar 2', status: 'kosong' },
              { id: 'a-15', name: 'Kamar 3', status: 'digunakan' },
              { id: 'a-16', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-a-foodcourt',
            name: 'Toilet Food Court',
            area: 'Lantai 1 - area kuliner',
            mood: 'Dekat kios makanan dan area santai',
            amenities: ['Wastafel otomatis', 'Air panas', 'Rak sandal'],
            rooms: [
              { id: 'a-17', name: 'Kamar 1', status: 'kosong' },
              { id: 'a-18', name: 'Kamar 2', status: 'digunakan' },
              { id: 'a-19', name: 'Kamar 3', status: 'kosong' },
              { id: 'a-20', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-a-event',
            name: 'Toilet Event Hall',
            area: 'Lantai 3 - dekat ruang acara',
            mood: 'Tersedia untuk tamu acara dan pengunjung ramai',
            amenities: ['Area tunggu', 'Cermin besar', 'Kipas ventilasi'],
            rooms: [
              { id: 'a-21', name: 'Kamar 1', status: 'maintenance' },
              { id: 'a-22', name: 'Kamar 2', status: 'kosong' },
              { id: 'a-23', name: 'Kamar 3', status: 'digunakan' },
              { id: 'a-24', name: 'Kamar 4', status: 'kosong' },
            ],
          },
        ],
      },
      {
        id: 'gedung-b',
        name: 'Gedung B',
        area: 'Dekat area retail premium',
        mood: 'Tersedia toilet nyaman untuk pengunjung belanja.',
        amenities: ['Area tunggu', 'Akses kursi roda', 'Tempat sampah pintar'],
        toiletCount: 5,
        facilities: [
          {
            id: 'gedung-b-lobby',
            name: 'Toilet Premium',
            area: 'Lantai 1 - dekat butik',
            mood: 'Nyaman dan bersih untuk area premium',
            amenities: ['Sabun lux', 'Hand dryer', 'Cermin besar'],
            rooms: [
              { id: 'b-1', name: 'Kamar 1', status: 'kosong' },
              { id: 'b-2', name: 'Kamar 2', status: 'kosong' },
              { id: 'b-3', name: 'Kamar 3', status: 'digunakan' },
              { id: 'b-4', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-b-kids',
            name: 'Toilet Anak',
            area: 'Lantai 2 - dekat play area',
            mood: 'Bisa dipakai sambil menunggu anak bermain',
            amenities: ['Step stool', 'Poster edukasi', 'Wastafel rendah'],
            rooms: [
              { id: 'b-5', name: 'Kamar 1', status: 'kosong' },
              { id: 'b-6', name: 'Kamar 2', status: 'digunakan' },
              { id: 'b-7', name: 'Kamar 3', status: 'kosong' },
              { id: 'b-8', name: 'Kamar 4', status: 'maintenance' },
            ],
          },
          {
            id: 'gedung-b-family',
            name: 'Toilet Keluarga',
            area: 'Lantai 3 - dekat area santai',
            mood: 'Lebih lapang untuk pendamping anak',
            amenities: ['Ruang ganti bayi', 'Pegangan aman', 'Aroma segar'],
            rooms: [
              { id: 'b-9', name: 'Kamar 1', status: 'kosong' },
              { id: 'b-10', name: 'Kamar 2', status: 'digunakan' },
              { id: 'b-11', name: 'Kamar 3', status: 'kosong' },
              { id: 'b-12', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-b-priority',
            name: 'Toilet Prioritas',
            area: 'Lantai 2 - dekat escalator',
            mood: 'Akses nyaman untuk pengguna kursi roda',
            amenities: ['Pintu lebih lebar', 'Pegangan tangan', 'Lantai anti slip'],
            rooms: [
              { id: 'b-13', name: 'Kamar 1', status: 'kosong' },
              { id: 'b-14', name: 'Kamar 2', status: 'kosong' },
              { id: 'b-15', name: 'Kamar 3', status: 'digunakan' },
              { id: 'b-16', name: 'Kamar 4', status: 'maintenance' },
            ],
          },
          {
            id: 'gedung-b-foodcourt',
            name: 'Toilet Food Court',
            area: 'Lantai 1 - pusat kuliner',
            mood: 'Cocok untuk kunjungan singkat saat makan',
            amenities: ['Sirkulasi udara baik', 'Wastafel otomatis', 'Rak sandal'],
            rooms: [
              { id: 'b-17', name: 'Kamar 1', status: 'kosong' },
              { id: 'b-18', name: 'Kamar 2', status: 'digunakan' },
              { id: 'b-19', name: 'Kamar 3', status: 'kosong' },
              { id: 'b-20', name: 'Kamar 4', status: 'kosong' },
            ],
          },
        ],
      },
      {
        id: 'gedung-c',
        name: 'Gedung C',
        area: 'Dekat area hiburan',
        mood: 'Strategis untuk keluarga yang datang ke bioskop dan arena bermain.',
        amenities: ['Area istirahat', 'Pintu otomatis', 'Ruang ganti bayi'],
        toiletCount: 5,
        facilities: [
          {
            id: 'gedung-c-lobby',
            name: 'Toilet Lobby',
            area: 'Lantai 1 - dekat pintu',
            mood: 'Mudah dijangkau sebelum masuk area hiburan',
            amenities: ['Wastafel rendah', 'Sabun otomatis', 'Kursi tunggu'],
            rooms: [
              { id: 'c-1', name: 'Kamar 1', status: 'kosong' },
              { id: 'c-2', name: 'Kamar 2', status: 'digunakan' },
              { id: 'c-3', name: 'Kamar 3', status: 'kosong' },
              { id: 'c-4', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-c-kids',
            name: 'Toilet Anak',
            area: 'Lantai 2 - dekat arena bermain',
            mood: 'Sangat cocok untuk anak kecil',
            amenities: ['Step stool', 'Poster cuci tangan', 'Wastafel rendah'],
            rooms: [
              { id: 'c-5', name: 'Kamar 1', status: 'kosong' },
              { id: 'c-6', name: 'Kamar 2', status: 'kosong' },
              { id: 'c-7', name: 'Kamar 3', status: 'digunakan' },
              { id: 'c-8', name: 'Kamar 4', status: 'maintenance' },
            ],
          },
          {
            id: 'gedung-c-family',
            name: 'Toilet Keluarga',
            area: 'Lantai 3 - dekat bioskop',
            mood: 'Ruang lebih luas untuk pendamping',
            amenities: ['Ruang ganti bayi', 'Pegangan aman', 'Aroma segar'],
            rooms: [
              { id: 'c-9', name: 'Kamar 1', status: 'digunakan' },
              { id: 'c-10', name: 'Kamar 2', status: 'kosong' },
              { id: 'c-11', name: 'Kamar 3', status: 'maintenance' },
              { id: 'c-12', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-c-priority',
            name: 'Toilet Prioritas',
            area: 'Lantai 2 - dekat lift',
            mood: 'Akses nyaman bagi pengunjung lansia',
            amenities: ['Pintu lebih lebar', 'Pegangan tangan', 'Lantai anti slip'],
            rooms: [
              { id: 'c-13', name: 'Kamar 1', status: 'kosong' },
              { id: 'c-14', name: 'Kamar 2', status: 'kosong' },
              { id: 'c-15', name: 'Kamar 3', status: 'digunakan' },
              { id: 'c-16', name: 'Kamar 4', status: 'kosong' },
            ],
          },
          {
            id: 'gedung-c-foodcourt',
            name: 'Toilet Food Court',
            area: 'Lantai 1 - dekat area makan',
            mood: 'Cocok untuk pengunjung yang sedang beristirahat',
            amenities: ['Wastafel otomatis', 'Sirkulasi udara baik', 'Rak sandal'],
            rooms: [
              { id: 'c-17', name: 'Kamar 1', status: 'kosong' },
              { id: 'c-18', name: 'Kamar 2', status: 'digunakan' },
              { id: 'c-19', name: 'Kamar 3', status: 'kosong' },
              { id: 'c-20', name: 'Kamar 4', status: 'kosong' },
            ],
          },
        ],
      },
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
    description: 'Buka halaman fasilitas untuk memilih gedung dan melihat toilet di dalamnya.',
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

export const facilities = malls.flatMap((mall) => mall.buildings.flatMap((building) => building.facilities))

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
