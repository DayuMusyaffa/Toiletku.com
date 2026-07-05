import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import FacilitiesPage from './pages/FacilitiesPage.jsx'
import GuidePage from './pages/GuidePage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import MonitoringPage from './pages/MonitoringPage.jsx'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-sky-50 text-ink">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fasilitas" element={<FacilitiesPage />} />
          <Route path="/fasilitas/:buildingId" element={<FacilitiesPage />} />
          <Route path="/monitoring" element={<MonitoringPage />} />
          <Route path="/panduan" element={<GuidePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
