import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Bizonysagtetel from './pages/Bizonysagtetel.jsx'
import Misszio from './pages/Misszio.jsx'
import Ajanlasok from './pages/Ajanlasok.jsx'
import Infok from './pages/Infok.jsx'

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bizonysagtetel" element={<Bizonysagtetel />} />
          <Route path="/misszio" element={<Misszio />} />
          <Route path="/ajanlasok" element={<Ajanlasok />} />
          <Route path="/infok" element={<Infok />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}
