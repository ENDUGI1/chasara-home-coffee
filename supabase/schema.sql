-- ============================================================
-- Chasara Home & Coffee — Skema database Supabase
-- Cara pakai: buka Supabase Dashboard > SQL Editor > New query,
-- tempel seluruh isi file ini, lalu klik "Run".
--
-- CATATAN: Tabel diberi nama "chasara_bookings" (bukan "bookings")
-- agar tidak bentrok dengan tabel project lain di Supabase yang sama.
-- ============================================================

-- Tabel penyimpanan reservasi dari form website.
create table if not exists chasara_bookings (
  id uuid default gen_random_uuid() primary key,
  nama text not null,
  nomor_hp text not null,
  tipe_kamar text not null,
  check_in date not null,
  check_out date not null,
  jumlah_tamu integer not null,
  catatan text,
  estimasi_harga integer,
  status text default 'pending',
  created_at timestamp with time zone default now()
);

-- Aktifkan Row Level Security.
alter table chasara_bookings enable row level security;

-- Izinkan publik (key publik dari website) HANYA menambah data (insert),
-- bukan membaca. Cocok untuk form reservasi.
-- Catatan: pakai "to public" agar berlaku untuk anon key MAUPUN publishable key
-- (sb_publishable_...) format baru Supabase.
drop policy if exists "Allow public insert from booking form" on chasara_bookings;
create policy "Allow public insert from booking form"
  on chasara_bookings for insert
  to public
  with check (true);

-- Untuk melihat daftar booking, gunakan Supabase Dashboard (Table Editor),
-- atau buat policy SELECT khusus untuk admin yang sudah login.
