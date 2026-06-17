import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <Features />
      <HowItWorks />
      <section className="about-details-section py-16 bg-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Our Journey</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              RK Taxi Service was founded with a single mission: to make intercity and local travel across India reliable, safe, and transparent. Over the years, we have grown from a local fleet in Gujarat to a trusted travel companion covering over 200 cities.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Whether you are an individual needing a ride to the airport, a family heading out for a holiday, or a business requiring employee transit, we hold ourselves to the highest standards of safety, quality, and hospitality.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
