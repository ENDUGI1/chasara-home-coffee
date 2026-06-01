import { useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

/**
 * Custom hook untuk submit reservasi.
 * - Menyimpan ke tabel "chasara_bookings" di Supabase (jika dikonfigurasi).
 * - Mengembalikan status loading & error sehingga UI bisa memberi feedback.
 *
 * Mengembalikan { submitBooking, loading, error, saved }.
 *   saved = true bila berhasil tersimpan ke DB; false bila DB dilewati (mode WA-only).
 */
export function useBooking() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function submitBooking(payload) {
    setLoading(true)
    setError(null)

    // Mode tanpa DB: lewati penyimpanan, biarkan flow WhatsApp tetap jalan.
    if (!isSupabaseConfigured) {
      setLoading(false)
      return { saved: false }
    }

    try {
      const { error: dbError } = await supabase.from('chasara_bookings').insert([
        {
          nama: payload.nama,
          nomor_hp: payload.nomorHp,
          tipe_kamar: payload.tipeKamar,
          check_in: payload.checkIn,
          check_out: payload.checkOut,
          jumlah_tamu: payload.jumlahTamu,
          catatan: payload.catatan || null,
          estimasi_harga: payload.estimasiHarga,
        },
      ])

      if (dbError) throw dbError
      setLoading(false)
      return { saved: true }
    } catch (err) {
      // Catatan: kegagalan DB tidak boleh memblokir tamu menghubungi via WA.
      console.error('[useBooking] Gagal menyimpan ke Supabase:', err)
      setError(
        'Data tidak tersimpan ke sistem, tapi kamu tetap bisa lanjut konfirmasi via WhatsApp.',
      )
      setLoading(false)
      return { saved: false, error: err }
    }
  }

  return { submitBooking, loading, error }
}
