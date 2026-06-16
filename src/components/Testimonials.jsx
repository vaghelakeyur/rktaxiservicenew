import { memo } from 'react'
import useInView from '../hooks/useInView'
import { MdStar, MdLocalTaxi } from 'react-icons/md'
import './Testimonials.css'

const testimonials = [
  { name: 'Ravi Sharma',  role: 'Software Engineer, Bangalore', avatar: 'R', stars: 5, text: '"Booked a Sedan for an airport drop at 4 AM and the driver was already waiting 10 minutes early. Incredible service and the cab was spotlessly clean!"', trip: 'Rajkot → Ahmedabad Airport' },
  { name: 'Priya Patel',  role: 'Teacher, Ahmedabad',           avatar: 'P', stars: 5, text: '"We used RK taxi service for our family trip to Manali. The Innova was comfortable, the driver knew the roads perfectly, and the price was exactly as quoted."', trip: 'Delhi → Manali (Round Trip)' },
  { name: 'Amit Joshi',   role: 'Business Owner, Surat',        avatar: 'A', stars: 5, text: '"I book corporate cabs through RK taxi service for my team every month. Reliable, professional, and always on time. Highly recommended for business travel."', trip: 'Monthly Corporate Account' },
  { name: 'Neha Gupta',   role: 'Doctor, Mumbai',               avatar: 'N', stars: 5, text: '"The real-time tracking gives me peace of mind when my parents travel alone. The driver was polite and helped with their luggage. RK taxi service is my only choice now."', trip: 'Mumbai → Pune Outstation' },
  { name: 'Suresh Mehta', role: 'Retired Officer, Rajkot',      avatar: 'S', stars: 5, text: '"Excellent service for our Goa holiday package. Everything was arranged perfectly — accommodation, sightseeing, and the return cab. A wonderful experience."', trip: 'Goa Holiday Package' },
  { name: 'Kavya Reddy',  role: 'Student, Hyderabad',           avatar: 'K', stars: 5, text: '"The booking was super easy and the Sedan arrived in under 10 minutes. Very affordable and the driver took the fastest route. Will definitely use again!"', trip: 'Local City Ride' },
]

const STARS = Array.from({ length: 5 }, (_, i) => i)

const TestimonialCard = memo(function TestimonialCard({ t, className }) {
  return (
    <div className={className}>
      <div className="test-stars flex gap-0.5 mb-3">
        {STARS.map(i => <MdStar key={i} style={{ fontSize: 18, color: '#f5c518' }} />)}
      </div>
      <p className="test-text text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{t.text}</p>
      <div className="test-author flex items-center gap-3">
        <div className="test-avatar">{t.avatar}</div>
        <div>
          <div className="test-name text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
          <div className="test-role text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
          <div className="test-trip flex items-center gap-1 text-xs mt-0.5" style={{ color: 'var(--primary)' }}>
            <MdLocalTaxi style={{ fontSize: 14 }} />{t.trip}
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Testimonials() {
  const [titleRef, titleVisible] = useInView()
  const [gridRef, gridVisible]   = useInView()

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div ref={titleRef} className={`section-title reveal reveal-up${titleVisible ? ' visible' : ''}`}>
          <span className="badge">Testimonials</span>
          <h2>What Our Passengers Say</h2>
          <p>Real stories from real travellers who trust RK taxi service for every journey.</p>
        </div>

        <div ref={gridRef} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              t={t}
              className={`testimonial-card reveal reveal-up${gridVisible ? ' visible' : ''} stagger-${(i % 6) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
