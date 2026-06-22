import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MessageCircle, Loader2, CalendarDays, Info } from 'lucide-react'
import Reveal from '../components/Reveal'
import Toast from '../components/Toast'
import { rooms, getRoomById } from '../data/rooms'
import { SITE, waLink, formatRupiah } from '../data/siteConfig'
import { useBooking } from '../hooks/useBooking'

function todayStr() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function addDays(dateStr, n) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + n)
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0
  const diff = (new Date(checkOut) - new Date(checkIn)) / 86_400_000
  return diff > 0 ? Math.round(diff) : 0
}

function formatTanggal(dateStr) {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Reservasi() {
  const [params] = useSearchParams()
  const preRoomId = params.get('kamar')
  // Hanya 1 tipe kamar → pilih otomatis.
  const defaultRoomId =
    preRoomId && getRoomById(preRoomId)
      ? String(preRoomId)
      : rooms.length === 1
        ? String(rooms[0].id)
        : ''

  const [form, setForm] = useState({
    nama: '',
    nomorHp: '',
    roomId: defaultRoomId,
    checkIn: '',
    checkOut: '',
    jumlahTamu: 1,
    catatan: '',
  })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState('')

  const { submitBooking, loading, error: submitError } = useBooking()

  const selectedRoom = form.roomId ? getRoomById(form.roomId) : null
  const nights = nightsBetween(form.checkIn, form.checkOut)
  const total = selectedRoom ? nights * selectedRoom.price : 0

  const minCheckIn = todayStr()
  const minCheckOut = form.checkIn ? addDays(form.checkIn, 1) : addDays(minCheckIn, 1)

  function update(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'checkIn' && next.checkOut && next.checkOut <= value) {
        next.checkOut = addDays(value, 1)
      }
      if (field === 'roomId') {
        const room = getRoomById(value)
        if (room && next.jumlahTamu > room.capacity) next.jumlahTamu = room.capacity
      }
      return next
    })
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const e = {}
    if (!form.nama.trim()) e.nama = 'Nama wajib diisi.'
    if (!form.nomorHp.trim()) e.nomorHp = 'Nomor WhatsApp wajib diisi.'
    else if (!/^[0-9+\-\s]{8,}$/.test(form.nomorHp)) e.nomorHp = 'Format nomor tidak valid.'
    if (!form.roomId) e.roomId = 'Pilih kamar terlebih dahulu.'
    if (!form.checkIn) e.checkIn = 'Tanggal check-in wajib diisi.'
    if (!form.checkOut) e.checkOut = 'Tanggal check-out wajib diisi.'
    else if (nights < 1) e.checkOut = 'Check-out harus setelah check-in.'
    if (selectedRoom && form.jumlahTamu > selectedRoom.capacity)
      e.jumlahTamu = `Maksimal ${selectedRoom.capacity} tamu untuk kamar ini.`
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function buildMessage() {
    return [
      'Halo Chasara Home 🏠',
      '',
      'Saya ingin reservasi kamar:',
      '',
      '📋 DETAIL BOOKING',
      `• Nama      : ${form.nama}`,
      `• Kamar     : ${selectedRoom?.name ?? '-'}`,
      `• Check-in  : ${formatTanggal(form.checkIn)}`,
      `• Check-out : ${formatTanggal(form.checkOut)}`,
      `• Durasi    : ${nights} malam`,
      `• Tamu      : ${form.jumlahTamu} orang`,
      `• Est. Harga: ${formatRupiah(total)}`,
      '',
      `📝 Catatan: ${form.catatan.trim() || '-'}`,
      '',
      'Mohon konfirmasinya. Terima kasih 🙏',
    ].join('\n')
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    if (!validate()) {
      const first = document.querySelector('[aria-invalid="true"]')
      first?.focus()
      return
    }

    await submitBooking({
      nama: form.nama.trim(),
      nomorHp: form.nomorHp.trim(),
      tipeKamar: selectedRoom.name,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      jumlahTamu: Number(form.jumlahTamu),
      catatan: form.catatan.trim(),
      estimasiHarga: total,
    })

    window.open(waLink(buildMessage()), '_blank', 'noopener')
    setToast('Reservasi terkirim! Lanjutkan konfirmasi di WhatsApp yang terbuka.')
  }

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 ${
      errors[field] ? 'border-red-400' : 'border-cream-200'
    }`

  return (
    <>
      <header className="bg-teal-800 pt-28 pb-14 text-cream-50 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral-300">
              Reservasi
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl text-cream-50 sm:text-5xl">
              Atur jadwal menginapmu
            </h1>
            <p className="mt-4 max-w-xl text-cream-100/85">
              Isi formulir di bawah, lalu kirim. Kamu akan diarahkan ke WhatsApp untuk
              konfirmasi akhir dengan tim kami.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          {/* FORM */}
          <form onSubmit={handleSubmit} noValidate className="order-2 lg:order-1">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="nama" className="mb-2 block text-sm font-medium text-ink">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  id="nama"
                  type="text"
                  value={form.nama}
                  onChange={(e) => update('nama', e.target.value)}
                  aria-invalid={Boolean(errors.nama)}
                  className={inputClass('nama')}
                  placeholder="Nama sesuai identitas"
                />
                {errors.nama && <p className="mt-1.5 text-sm text-red-600">{errors.nama}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="nomorHp" className="mb-2 block text-sm font-medium text-ink">
                  Nomor HP / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  id="nomorHp"
                  type="tel"
                  inputMode="tel"
                  value={form.nomorHp}
                  onChange={(e) => update('nomorHp', e.target.value)}
                  aria-invalid={Boolean(errors.nomorHp)}
                  className={inputClass('nomorHp')}
                  placeholder="08xxxxxxxxxx"
                />
                {errors.nomorHp && <p className="mt-1.5 text-sm text-red-600">{errors.nomorHp}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="roomId" className="mb-2 block text-sm font-medium text-ink">
                  Pilih Kamar <span className="text-red-500">*</span>
                </label>
                <select
                  id="roomId"
                  value={form.roomId}
                  onChange={(e) => update('roomId', e.target.value)}
                  aria-invalid={Boolean(errors.roomId)}
                  className={inputClass('roomId')}
                >
                  {rooms.length > 1 && <option value="">— Pilih tipe kamar —</option>}
                  {rooms.map((r) => (
                    <option key={r.id} value={r.id} disabled={!r.available}>
                      {r.name} · {formatRupiah(r.price)}/malam{r.available ? '' : ' (Penuh)'}
                    </option>
                  ))}
                </select>
                {errors.roomId && <p className="mt-1.5 text-sm text-red-600">{errors.roomId}</p>}
              </div>

              <div>
                <label htmlFor="checkIn" className="mb-2 block text-sm font-medium text-ink">
                  Check-in <span className="text-red-500">*</span>
                </label>
                <input
                  id="checkIn"
                  type="date"
                  min={minCheckIn}
                  value={form.checkIn}
                  onChange={(e) => update('checkIn', e.target.value)}
                  aria-invalid={Boolean(errors.checkIn)}
                  className={inputClass('checkIn')}
                />
                {errors.checkIn && <p className="mt-1.5 text-sm text-red-600">{errors.checkIn}</p>}
              </div>

              <div>
                <label htmlFor="checkOut" className="mb-2 block text-sm font-medium text-ink">
                  Check-out <span className="text-red-500">*</span>
                </label>
                <input
                  id="checkOut"
                  type="date"
                  min={minCheckOut}
                  value={form.checkOut}
                  onChange={(e) => update('checkOut', e.target.value)}
                  aria-invalid={Boolean(errors.checkOut)}
                  className={inputClass('checkOut')}
                />
                {errors.checkOut && <p className="mt-1.5 text-sm text-red-600">{errors.checkOut}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="jumlahTamu" className="mb-2 block text-sm font-medium text-ink">
                  Jumlah Tamu <span className="text-red-500">*</span>
                </label>
                <input
                  id="jumlahTamu"
                  type="number"
                  min={1}
                  max={selectedRoom?.capacity ?? 4}
                  value={form.jumlahTamu}
                  onChange={(e) => update('jumlahTamu', Number(e.target.value))}
                  aria-invalid={Boolean(errors.jumlahTamu)}
                  className={inputClass('jumlahTamu')}
                />
                <p className="mt-1.5 text-sm text-ink-soft">
                  {selectedRoom
                    ? `Kapasitas ${selectedRoom.name}: maksimal ${selectedRoom.capacity} tamu.`
                    : 'Pilih kamar untuk melihat kapasitas maksimal.'}
                </p>
                {errors.jumlahTamu && <p className="mt-1 text-sm text-red-600">{errors.jumlahTamu}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="catatan" className="mb-2 block text-sm font-medium text-ink">
                  Catatan Khusus <span className="font-normal text-ink-soft">(opsional)</span>
                </label>
                <textarea
                  id="catatan"
                  rows={3}
                  value={form.catatan}
                  onChange={(e) => update('catatan', e.target.value)}
                  className={inputClass('catatan')}
                  placeholder="Mis. perkiraan jam tiba, permintaan early check-in, dll."
                />
              </div>
            </div>

            {submitError && (
              <p
                role="alert"
                className="mt-5 flex items-start gap-2 rounded-xl bg-coral-50 px-4 py-3 text-sm text-coral-700"
              >
                <Info className="mt-0.5 h-4 w-4 shrink-0" />
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-4 font-semibold text-white transition hover:bg-coral-600 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Memproses…
                </>
              ) : (
                <>
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                  Kirim & Lanjut ke WhatsApp
                </>
              )}
            </button>
          </form>

          {/* SUMMARY */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm">
                  <div className="flex items-center gap-2 border-b border-cream-200 bg-cream-100/60 px-6 py-4">
                    <CalendarDays className="h-4 w-4 text-teal-700" />
                    <h2 className="font-display text-lg text-teal-800">Ringkasan Reservasi</h2>
                  </div>

                  <dl className="divide-y divide-cream-200 px-6">
                    <div className="flex items-center justify-between py-3.5 text-sm">
                      <dt className="text-ink-soft">Kamar</dt>
                      <dd className="font-medium text-ink">{selectedRoom?.name ?? 'Belum dipilih'}</dd>
                    </div>
                    <div className="flex items-center justify-between py-3.5 text-sm">
                      <dt className="text-ink-soft">Harga / malam</dt>
                      <dd className="font-medium text-ink">
                        {selectedRoom ? formatRupiah(selectedRoom.price) : '-'}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-3.5 text-sm">
                      <dt className="text-ink-soft">Durasi</dt>
                      <dd className="font-medium text-ink">{nights > 0 ? `${nights} malam` : '-'}</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="font-medium text-ink">Estimasi Total</dt>
                      <dd className="font-display text-2xl text-teal-800">
                        {total > 0 ? formatRupiah(total) : '-'}
                      </dd>
                    </div>
                  </dl>

                  <p className="flex items-start gap-2 bg-cream-100/60 px-6 py-4 text-xs leading-relaxed text-ink-soft">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-500" />
                    Harga final dikonfirmasi via WhatsApp. Estimasi belum termasuk promo
                    atau biaya tambahan (bila ada).
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <Toast message={toast} onClose={() => setToast('')} />
    </>
  )
}
