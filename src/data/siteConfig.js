// ============================================================
// Konfigurasi global Chasara Home & Coffee (data resmi client)
// ============================================================

// Nomor WhatsApp utama untuk reservasi (format internasional tanpa "+").
// 0878-9820-3915
export const WHATSAPP_NUMBER = '6287898203915'

export const SITE = {
  name: 'Chasara Home & Coffee',
  homeName: 'Chasara Home',
  coffeeName: 'Chasara Coffee',
  tagline: 'Nyaman Menginap, Nikmat Ngopi',
  coffeeTagline: 'Secangkir Kopi, Sejuta Inspirasi',
  city: 'Balikpapan, Kalimantan Timur',
  address: 'Jl. Kampung Pinisi, Klandasan, Balikpapan Selatan, Kalimantan Timur',
  instagram: 'guesthouse_chasara',
  instagramUrl: 'https://instagram.com/guesthouse_chasara',
  phones: [
    { label: '0878-9820-3915', wa: '6287898203915' },
    { label: '0813-5041-4621', wa: '6281350414621' },
  ],
  coffeePhone: { label: '0882-1000-4155', wa: '6288210004155' },
  hoursGuesthouse: 'Check-in 14.00 · Check-out 12.00 WITA',
  hoursCoffee: 'Setiap hari · 16.00 – 22.00 WITA',
  coffeeFloor: 'Lantai 3, Chasara Home',
}

// Peraturan menginap (dari poster resmi Chasara Home).
export const houseRules = [
  'Check-in 14.00 – Check-out 12.00 WITA.',
  'Wajib menunjukkan KTP/Paspor saat check-in.',
  'Dilarang merokok di kamar. Denda Rp 500.000.',
  'Dilarang membawa hewan peliharaan.',
  'Jaga kebersihan & selalu kunci kamar.',
  'Kerusakan fasilitas menjadi tanggung jawab tamu.',
  'Dilarang membawa alkohol & senjata tajam.',
  'Dilarang melakukan tindakan asusila maupun melanggar hukum.',
]

// Info early check-in & late check-out.
export const checkInfo = {
  earlyCheckIn: {
    title: 'Early Check-in',
    price: 90000,
    note: '30% dari harga kamar. Saat ini GRATIS (promo).',
    promo: true,
  },
  lateCheckOut: {
    title: 'Late Check-out',
    price: 90000,
    note: '30% dari harga kamar. Berlaku jam 13.00–17.00 WITA.',
    promo: false,
  },
}

/**
 * Membuat URL wa.me dengan pesan terformat.
 * @param {string} message - teks pesan (belum di-encode).
 * @param {string} [number] - nomor tujuan (default: WHATSAPP_NUMBER).
 */
export function waLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

// Format angka ke Rupiah: 250000 -> "Rp 250.000"
export function formatRupiah(value) {
  return 'Rp ' + value.toLocaleString('id-ID')
}
