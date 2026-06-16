import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnimatedCursor from './components/AnimatedCursor'
import './App.css'

const BookingForm  = lazy(() => import('./components/BookingForm'))
const Services     = lazy(() => import('./components/Services'))
const HowItWorks   = lazy(() => import('./components/HowItWorks'))
const Fleet        = lazy(() => import('./components/Fleet'))
const Features     = lazy(() => import('./components/Features'))
const Packages     = lazy(() => import('./components/Packages'))
const Destinations = lazy(() => import('./components/Destinations'))

const Footer       = lazy(() => import('./components/Footer'))
const ScrollToTop  = lazy(() => import('./components/ScrollToTop'))

const SectionFallback = () => <div style={{ minHeight: '200px' }} aria-hidden="true" />

function App() {
  return (
    <>
      <AnimatedCursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <BookingForm />
          <Services />
          <HowItWorks />
          <Fleet />
          <Features />
          <Packages />
          <Destinations />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  )
}

export default App
