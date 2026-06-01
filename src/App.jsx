import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Kamar from './pages/Kamar'
import Coffee from './pages/Coffee'
import Reservasi from './pages/Reservasi'
import Kontak from './pages/Kontak'

export default function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kamar" element={<Kamar />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/kontak" element={<Kontak />} />
          {/* Fallback ke beranda untuk rute tak dikenal */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
