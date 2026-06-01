// ============================================================
// Konfigurasi global Chasara Home & Coffee
// Ganti nilai di sini saat data asli sudah tersedia.
// ============================================================

// TODO: Ganti dengan nomor WhatsApp asli Pak Agus (format internasional tanpa "+").
export const WHATSAPP_NUMBER = '6281234567890'

export const SITE = {
  name: 'Chasara Home & Coffee',
  homeName: 'Chasara Home',
  coffeeName: 'Chasara Coffee',
  tagline: 'Nyaman Menginap, Nikmat Ngopi',
  city: 'Balikpapan, Kalimantan Timur',
  // TODO: Ganti dengan alamat asli.
  address: 'Jl. Contoh No. 123, Balikpapan, Kalimantan Timur',
  instagram: 'chasarahome',
  instagramUrl: 'https://instagram.com/chasarahome',
  hoursGuesthouse: 'Check-in 14.00 · Check-out 12.00 WITA',
  hoursCoffee: 'Setiap hari · 07.00 – 22.00 WITA',
}

/**
 * Membuat URL wa.me dengan pesan terformat.
 * @param {string} message - teks pesan (belum di-encode).
 */
export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Format angka ke Rupiah: 250000 -> "Rp 250.000"
export function formatRupiah(value) {
  return 'Rp ' + value.toLocaleString('id-ID')
}

// Helper URL foto stok Unsplash (gratis, boleh hotlink).
// TODO: ganti dengan foto asli Chasara saat sudah tersedia.
export function unsplash(id, w, h) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`
}
