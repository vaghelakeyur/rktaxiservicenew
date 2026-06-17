import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedCursor from './components/AnimatedCursor'
import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const BookingPage = lazy(() => import('./pages/BookingPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const FleetPage = lazy(() => import('./pages/FleetPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const Footer = lazy(() => import('./components/Footer'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

const SectionFallback = () => <div style={{ minHeight: '400px' }} aria-hidden="true" />

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigation />
      <AnimatedCursor />
      <Navbar />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
