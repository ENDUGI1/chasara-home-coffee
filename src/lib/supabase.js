import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Flag: true bila kredensial Supabase sudah diisi di .env.
// Dipakai komponen untuk fallback graceful (tetap kirim WhatsApp walau DB belum siap).
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey)

if (!isSupabaseConfigured && import.meta.env.DEV) {
  console.warn(
    '[Supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY belum diisi. ' +
      'Booking tetap terkirim via WhatsApp, tapi tidak tersimpan ke database. ' +
      'Lihat README untuk setup.',
  )
}

// Bila belum dikonfigurasi, createClient dipanggil dengan placeholder agar import tidak crash.
// Komponen wajib mengecek isSupabaseConfigured sebelum melakukan query.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-anon-key',
)
