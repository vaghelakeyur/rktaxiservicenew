import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Destinations from '../components/Destinations'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | RK Taxi Service</title>
        <meta
          name="description"
          content="RK Taxi Service provides reliable local rides, airport transfers, outstation trips, and comfortable cab booking services."
        />
        <meta
          name="keywords"
          content="RK Taxi Service, taxi booking, cab service, airport transfer, outstation taxi, local taxi"
        />
        <meta property="og:title" content="Home | RK Taxi Service" />
        <meta
          property="og:description"
          content="Book safe and comfortable taxi rides with RK Taxi Service for local, airport, and outstation travel."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <HowItWorks />
      <Destinations />
      <Testimonials />
    </>
  )
}
