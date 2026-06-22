// Data kamar Chasara Home (data resmi client).
// Saat ini hanya tersedia 1 tipe kamar: Deluxe Room.
export const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    price: 300000,
    capacity: 2,
    available: true,
    facilities: [
      'Double Bed',
      'AC',
      'Water Heater',
      'Kulkas',
      'TV',
      'Lemari',
      'Dispenser Umum',
      'Amenities',
    ],
    description:
      'Kamar nyaman dengan double bed, interior modern, dan pencahayaan hangat. Lengkap dengan kamar mandi dalam ber-water heater.',
    image: '/images/room-01.jpeg',
  },
]

// Galeri foto kamar untuk halaman Kamar.
export const roomGallery = [
  { src: '/images/room-01.jpeg', alt: 'Kamar Deluxe Chasara Home — tempat tidur & lukisan' },
  { src: '/images/room-04.jpeg', alt: 'Area TV & meja kamar Deluxe' },
  { src: '/images/room-02.jpeg', alt: 'Suasana kamar Deluxe dengan pencahayaan hangat' },
  { src: '/images/room-07.jpeg', alt: 'Meja, kulkas mini & lemari kamar Deluxe' },
  { src: '/images/bath-01.jpeg', alt: 'Kamar mandi dalam dengan shower & water heater' },
  { src: '/images/bath-02.jpeg', alt: 'Wastafel & cermin kamar mandi' },
]

export const getRoomById = (id) => rooms.find((r) => r.id === Number(id))
