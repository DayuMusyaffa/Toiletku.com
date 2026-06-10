export const statusMeta = {
  kosong: {
    label: "Kosong",
    colorName: "Hijau",
    className: "status-empty",
  },
  digunakan: {
    label: "Digunakan",
    colorName: "Merah",
    className: "status-used",
  },
  maintenance: {
    label: "Maintenance",
    colorName: "Kuning",
    className: "status-maintenance",
  },
};

export const floors = [
  {
    id: "floor-1",
    name: "Toilet Lantai 1",
    area: "Lobby Utama",
    rooms: [
      { id: "1-1", name: "Kamar 1", status: "kosong" },
      { id: "1-2", name: "Kamar 2", status: "digunakan" },
      { id: "1-3", name: "Kamar 3", status: "kosong" },
      { id: "1-4", name: "Kamar 4", status: "maintenance" },
    ],
  },
  {
    id: "floor-2",
    name: "Toilet Lantai 2",
    area: "Area Kelas",
    rooms: [
      { id: "2-1", name: "Kamar 1", status: "kosong" },
      { id: "2-2", name: "Kamar 2", status: "kosong" },
      { id: "2-3", name: "Kamar 3", status: "digunakan" },
      { id: "2-4", name: "Kamar 4", status: "maintenance" },
    ],
  },
  {
    id: "floor-3",
    name: "Toilet Lantai 3",
    area: "Ruang Staff",
    rooms: [
      { id: "3-1", name: "Kamar 1", status: "digunakan" },
      { id: "3-2", name: "Kamar 2", status: "kosong" },
      { id: "3-3", name: "Kamar 3", status: "kosong" },
      { id: "3-4", name: "Kamar 4", status: "kosong" },
    ],
  },
];

export function getToiletStats() {
  const rooms = floors.flatMap((floor) => floor.rooms);

  return {
    total: rooms.length,
    kosong: rooms.filter((room) => room.status === "kosong").length,
    digunakan: rooms.filter((room) => room.status === "digunakan").length,
    maintenance: rooms.filter((room) => room.status === "maintenance").length,
  };
}
