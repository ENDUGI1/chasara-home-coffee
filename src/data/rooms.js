import { unsplash } from './siteConfig'

// Data kamar Chasara Home (dummy — ganti dengan data asli bila tersedia).
export const rooms = [
  {
    id: 1,
    name: 'Kamar Standar',
    price: 250000,
    capacity: 2,
    available: true,
    facilities: ['AC', 'WiFi', 'TV', 'Kamar Mandi Dalam', 'Air Panas'],
    description: 'Nyaman dan lengkap untuk kebutuhan menginap harian.',
    // TODO: Replace with actual photo (stok Unsplash sementara)
    image: unsplash('photo-1566073771259-6a8506099945', 800, 500),
  },
  {
    id: 2,
    name: 'Kamar Deluxe',
    price: 350000,
    capacity: 2,
    available: true,
    facilities: [
      'AC',
      'WiFi',
      'TV 32"',
      'Kamar Mandi Dalam',
      'Air Panas',
      'Meja Kerja',
      'Kulkas Mini',
    ],
    description: 'Lebih luas dengan meja kerja, cocok untuk tamu bisnis.',
    // TODO: Replace with actual photo (stok Unsplash sementara)
    image: unsplash('photo-1611892440504-42a792e24d32', 800, 500),
  },
  {
    id: 3,
    name: 'Kamar Family',
    price: 450000,
    capacity: 4,
    available: false,
    facilities: [
      'AC',
      'WiFi',
      'TV 40"',
      'Kamar Mandi Dalam',
      'Air Panas',
      '2 Kasur',
      'Sofa',
    ],
    description: 'Luas dengan 2 kasur, ideal untuk keluarga.',
    // TODO: Replace with actual photo (stok Unsplash sementara)
    image: unsplash('photo-1582719478250-c89cae4dc85b', 800, 500),
  },
]

export const getRoomById = (id) => rooms.find((r) => r.id === Number(id))
