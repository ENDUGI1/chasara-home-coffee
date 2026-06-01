import { MapPin, MessageCircle, Instagram, Clock, Navigation } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SITE, waLink } from '../data/siteConfig'

// TODO: Ganti koordinat dengan lokasi asli Chasara Home.
// Placeholder: pusat kota Balikpapan.
const MAPS_EMBED =
  'https://www.google.com/maps?q=Balikpapan,Kalimantan+Timur&output=embed'
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Balikpapan'

export default function Kontak() {
  return (
    <>
      <header className="bg-forest-800 pt-28 pb-14 text-cream-50 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-300">
              Kontak
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl text-cream-50 sm:text-5xl">
              Mampir atau hubungi kami
            </h1>
            <p className="mt-4 max-w-xl text-cream-100/85">
              Punya pertanyaan soal kamar, menginap, atau coffee shop? Kami senang
              membantu.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          {/* Info */}
          <Reveal>
            <div className="space-y-6">
              <InfoRow icon={MapPin} title="Alamat">
                {SITE.address}
              </InfoRow>
              <InfoRow icon={MessageCircle} title="WhatsApp">
                <a
                  href={waLink('Halo Chasara Home, saya ingin bertanya.')}
                  target="_blank"
                  rel="noreferrer"
                  className="text-forest-700 underline-offset-4 hover:underline"
                >
                  Chat langsung via WhatsApp
                </a>
              </InfoRow>
              <InfoRow icon={Instagram} title="Instagram">
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-forest-700 underline-offset-4 hover:underline"
                >
                  @{SITE.instagram}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} title="Jam Operasional">
                <span className="block">Guesthouse: {SITE.hoursGuesthouse}</span>
                <span className="block">Coffee: {SITE.hoursCoffee}</span>
              </InfoRow>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={waLink('Halo Chasara Home, saya ingin bertanya.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 font-semibold text-cream-50 transition hover:bg-forest-700 active:translate-y-px"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat WhatsApp
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-6 py-3 font-semibold text-forest-800 transition hover:border-gold-400 active:translate-y-px"
                >
                  <Navigation className="h-4 w-4" />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-cream-200 shadow-sm">
              <iframe
                title="Lokasi Chasara Home di Google Maps"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full lg:h-[460px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream-100 text-forest-700">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div>
        <h2 className="font-display text-lg text-forest-800">{title}</h2>
        <div className="mt-1 text-ink-soft">{children}</div>
      </div>
    </div>
  )
}
