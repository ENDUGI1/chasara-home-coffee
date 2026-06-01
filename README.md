# Chasara Home & Coffee

Website UMKM untuk **Chasara Home** (guesthouse) & **Chasara Coffee** (coffee shop) yang
berada dalam satu lokasi di Balikpapan, Kalimantan Timur.

Dibangun dengan **React + Vite**, **Tailwind CSS v4**, **React Router**, **Lucide Icons**,
dan **Supabase** untuk menyimpan data reservasi.

---

## 🚀 Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173

Build produksi:

```bash
npm run build
npm run preview
```

---

## 🔑 Konfigurasi Supabase

Form reservasi tetap berfungsi (kirim ke WhatsApp) **walau Supabase belum dikonfigurasi**.
Untuk juga menyimpan booking ke database:

1. Buat project di [supabase.com](https://supabase.com).
2. Salin `.env.example` menjadi `.env`, lalu isi:

   ```env
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGci...
   ```

   (Dapatkan dari **Project Settings → API**.)

3. Jalankan SQL berikut di **SQL Editor** Supabase untuk membuat tabel
   `chasara_bookings` (cara cepat: jalankan saja file [`supabase/schema.sql`](supabase/schema.sql)):

   ```sql
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

   -- Aktifkan Row Level Security dan izinkan insert publik dari form.
   alter table chasara_bookings enable row level security;

   create policy "Allow public insert from booking form"
     on chasara_bookings for insert
     to anon
     with check (true);
   ```

   > Tabel sengaja dinamai `chasara_bookings` agar tidak bentrok dengan tabel
   > project lain bila Supabase project-nya dipakai bersama.

   > Catatan: policy di atas hanya mengizinkan **insert** dari publik (untuk form),
   > bukan membaca data. Untuk melihat daftar booking, gunakan Supabase Dashboard
   > atau buat policy `select` khusus untuk admin yang terautentikasi.

4. Restart `npm run dev` agar variabel environment terbaca.

---

## ⚙️ Hal yang perlu diganti (cari `TODO` di kode)

| Item                | Lokasi                                  |
| ------------------- | --------------------------------------- |
| Nomor WhatsApp      | `src/data/siteConfig.js` (`WHATSAPP_NUMBER`) |
| Alamat & Instagram  | `src/data/siteConfig.js` (`SITE`)       |
| Foto kamar          | `src/data/rooms.js` (`image`)           |
| Foto hero & lainnya | `src/pages/Home.jsx` (placehold.co)     |
| Koordinat Maps      | `src/pages/Kontak.jsx`                   |
| Menu & harga coffee | `src/data/menu.js`                      |

Semua foto saat ini memakai placeholder [placehold.co](https://placehold.co) berwarna
brand. Cari komentar `{/* TODO: Replace with actual photo */}` untuk menggantinya.

---

## 📦 Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Import project di [vercel.com](https://vercel.com) (framework otomatis terdeteksi: Vite).
3. Tambahkan **Environment Variables** `VITE_SUPABASE_URL` & `VITE_SUPABASE_ANON_KEY`.
4. Deploy.

---

## 🗂️ Struktur

```
src/
├── components/   # Navbar, Footer, RoomCard, MenuCard, TestimonialCard, dll.
├── pages/        # Home, Kamar, Coffee, Reservasi, Kontak
├── data/         # rooms.js, menu.js, siteConfig.js
├── hooks/        # useReveal, useBooking
├── lib/          # supabase.js
├── App.jsx
└── main.jsx
```
