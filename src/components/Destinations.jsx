import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useInView from '../hooks/useInView'
import { MdLocationOn, MdDirectionsCar, MdAccessTime, MdPhone } from 'react-icons/md'
import { prefillBooking } from '../utils/bookingStore'
import './Destinations.css'

const rajkotDestinations = [
  {
    name: 'Rajkot to Gandhinagar',
    distance: '225 km',
    duration: '4–5 hours',
    description:
      'Book a comfortable taxi from Rajkot to Gandhinagar, Gujarat\'s capital city. Our reliable cab service ensures a smooth and safe journey.',
    attractions: ['Akshardham Temple', 'Sarita Udyan', 'Indroda Nature Park'],
    image: '/DestinationImg/Akshardham_Gandhinagar_Gujarat.jpg',
    alt: 'Akshardham Temple, Gandhinagar',
  },
  {
    name: 'Rajkot to Ahmedabad',
    distance: '220 km',
    duration: '4–5 hours',
    description:
      'Travel from Rajkot to Ahmedabad in comfort with our taxi service. Our reliable cabs connect you to Gujarat\'s largest city with ease.',
    attractions: ['Sabarmati Ashram', 'Kankaria Lake', 'Sidi Saiyyed Mosque'],
    image: '/DestinationImg/ahmedabad2.jpg',
    alt: 'Sidi Saiyyed Mosque, Ahmedabad',
  },
  {
    name: 'Rajkot to Mumbai',
    distance: '875 km',
    duration: '14–16 hours',
    description:
      'Need a long-distance taxi from Rajkot to Mumbai? Our comfortable cabs and experienced drivers make the overnight journey easy.',
    attractions: ['Gateway of India', 'Marine Drive', 'Juhu Beach'],
    image: '/DestinationImg/mumbai.webp',
    alt: 'Mumbai skyline at night',
  },
  {
    name: 'Rajkot to Morbi',
    distance: '65 km',
    duration: '1.5 hours',
    description:
      'Book a quick and comfortable taxi ride from Rajkot to Morbi. Our professional cab service gets you there fast and affordably.',
    attractions: ['Hanging Bridge', 'Mani Mandir', 'Green Lake Garden'],
    image: '/DestinationImg/photo4jpg.jpg',
    alt: 'Morbi heritage site',
  },
  {
    name: 'Rajkot to Jamnagar',
    distance: '145 km',
    duration: '2.5–3 hours',
    description:
      'Travel from Rajkot to Jamnagar with our reliable taxi service. Experience comfortable journey to the Brass City of India.',
    attractions: ['Lakhota Lake', 'Bala Hanuman Temple', 'Marine National Park'],
    image: '/DestinationImg/temple-view.jpg',
    alt: 'Lakhota Lake, Jamnagar',
  },
  {
    name: 'Rajkot to Junagadh',
    distance: '105 km',
    duration: '2–2.5 hours',
    description:
      'Book a taxi from Rajkot to Junagadh for a comfortable journey to the historic city at the foothills of Mount Girnar.',
    attractions: ['Girnar Hill', 'Uparkot Fort', 'Mahabat Maqbara'],
    image: '/DestinationImg/junagadh.jpg',
    alt: 'Uparkot Fort, Junagadh',
  },
  {
    name: 'Rajkot to Sasan Gir',
    distance: '160 km',
    duration: '3–3.5 hours',
    description:
      'Experience a comfortable journey from Rajkot to Sasan Gir, home of the Asiatic Lions. Our taxi makes wildlife tourism easy.',
    attractions: ['Gir National Park', 'Devaliya Safari Park', 'Kamleshwar Dam'],
    image: '/DestinationImg/sasan-gir1.webp',
    alt: 'Gir National Park, Sasan',
  },
  {
    name: 'Rajkot to Diu',
    distance: '235 km',
    duration: '4–5 hours',
    description:
      'Plan your beach getaway with our taxi service from Rajkot to Diu. Enjoy a comfortable and safe ride to this charming coastal town.',
    attractions: ['Diu Fort', 'Nagoa Beach', "St. Paul's Church"],
    image: '/DestinationImg/diu.jpg',
    alt: 'Nagoa Beach, Diu',
  },
  {
    name: 'Rajkot to Porbandar',
    distance: '190 km',
    duration: '3.5–4 hours',
    description:
      'Travel from Rajkot to Porbandar, birthplace of Mahatma Gandhi, in our comfortable taxis with professional drivers.',
    attractions: ['Kirti Mandir', 'Porbandar Beach', 'Huzoor Palace'],
    image: '/DestinationImg/porbandar.png',
    alt: 'Kirti Mandir, Porbandar',
  },
  {
    name: 'Rajkot to Udaipur',
    distance: '535 km',
    duration: '9–10 hours',
    description:
      'Book a long-distance taxi from Rajkot to Udaipur. Visit the City of Lakes with our reliable cab and experienced driver.',
    attractions: ['Lake Palace', 'City Palace', 'Jagdish Temple'],
    image: '/DestinationImg/udaipur.avif',
    alt: 'Lake Palace, Udaipur',
  },
  {
    name: 'Rajkot to Bhavnagar',
    distance: '180 km',
    duration: '3–3.5 hours',
    description:
      'Need a taxi from Rajkot to Bhavnagar? Our comfortable cabs ensure a pleasant journey to this coastal city in Saurashtra.',
    attractions: ['Takhteshwar Temple', 'Victoria Park', 'Nilambagh Palace'],
    image: '/DestinationImg/bhavnagar.jpg',
    alt: 'Nilambagh Palace, Bhavnagar',
  },
  {
    name: 'Rajkot to Bhuj',
    distance: '220 km',
    duration: '4–4.5 hours',
    description:
      'Experience comfortable travel from Rajkot to Bhuj with our taxi service. Visit the heart of Kutch with ease and style.',
    attractions: ['Aina Mahal', 'Prag Mahal', 'Bhujodi Village'],
    image: '/DestinationImg/Bhuj.jpg',
    alt: 'Prag Mahal, Bhuj',
  },
  {
    name: 'Rajkot to Gandhidham',
    distance: '250 km',
    duration: '4.5–5 hours',
    description:
      'Book a taxi from Rajkot to Gandhidham for business or leisure. Our professional cab service covers the Kandla Port route comfortably.',
    attractions: ['Kandla Port', 'Gandhi Smruthi', 'Rambaugg Garden'],
    image: '/DestinationImg/gandhidam.jpg',
    alt: 'Gandhidham, Gujarat',
  },
  {
    name: 'Rajkot to Mount Abu',
    distance: '485 km',
    duration: '8–9 hours',
    description:
      'Plan your hill station trip with our taxi service from Rajkot to Mount Abu. Experience Rajasthan\'s only hill station in comfort.',
    attractions: ['Dilwara Temples', 'Nakki Lake', 'Sunset Point'],
    image: '/DestinationImg/abu.jpg',
    alt: 'Nakki Lake, Mount Abu',
  },
]

const ahmedabadDestinations = [
  {
    name: 'Ahmedabad to Rajkot',
    distance: '220 km',
    duration: '4–5 hours',
    description:
      'Book a comfortable taxi from Ahmedabad to Rajkot. Our professional cab service makes the journey smooth and stress-free.',
    attractions: ['Jubilee Garden', 'Watson Museum', 'Rotary Dolls Museum'],
    image: '/DestinationImg/rajkot.webp',
    alt: 'Rajkot city',
  },
  {
    name: 'Ahmedabad to Surat',
    distance: '265 km',
    duration: '4–5 hours',
    description:
      'Travel from Ahmedabad to Surat comfortably. Our reliable taxi service connects you to Gujarat\'s diamond city with ease.',
    attractions: ['Surat Castle', 'Dumas Beach', 'Dutch Garden'],
    image: '/DestinationImg/surat.jpg',
    alt: 'Dumas Beach, Surat',
  },
  {
    name: 'Ahmedabad to Vadodara',
    distance: '110 km',
    duration: '2–2.5 hours',
    description:
      'Book a quick taxi ride from Ahmedabad to Vadodara. Our cabs connect you to the cultural capital of Gujarat in no time.',
    attractions: ['Laxmi Vilas Palace', 'Sayaji Baug', 'Baroda Museum'],
    image: '/DestinationImg/vadodara.jpg',
    alt: 'Laxmi Vilas Palace, Vadodara',
  },
  {
    name: 'Ahmedabad to Gandhinagar',
    distance: '30 km',
    duration: '45–60 min',
    description:
      'Take a quick taxi from Ahmedabad to Gandhinagar, Gujarat\'s capital. Our cabs ensure a fast and comfortable ride.',
    attractions: ['Akshardham Temple', 'Indroda Nature Park', 'Sarita Udyan'],
    image: '/DestinationImg/Akshardham_Gandhinagar_Gujarat.jpg',
    alt: 'Akshardham Temple, Gandhinagar',
  },
  {
    name: 'Ahmedabad to Mumbai',
    distance: '530 km',
    duration: '8–9 hours',
    description:
      'Book a long-distance taxi from Ahmedabad to Mumbai. Our comfortable cabs and experienced drivers make the journey pleasant.',
    attractions: ['Gateway of India', 'Marine Drive', 'Juhu Beach'],
    image: '/DestinationImg/mumbai.webp',
    alt: 'Mumbai skyline',
  },
  {
    name: 'Ahmedabad to Udaipur',
    distance: '260 km',
    duration: '4.5–5 hours',
    description:
      'Plan a trip to Udaipur from Ahmedabad with our taxi service. Enjoy the beautiful City of Lakes with a comfortable ride.',
    attractions: ['Lake Palace', 'City Palace', 'Jagdish Temple'],
    image: '/DestinationImg/udaipur.avif',
    alt: 'Lake Palace, Udaipur',
  },
  {
    name: 'Ahmedabad to Dwarka',
    distance: '450 km',
    duration: '7–8 hours',
    description:
      'Book a taxi from Ahmedabad to Dwarka for a comfortable pilgrimage journey to one of the sacred Char Dham sites.',
    attractions: ['Dwarkadhish Temple', 'Bet Dwarka', 'Nageshwar Jyotirlinga'],
    image: '/DestinationImg/dwarka.jpg',
    alt: 'Dwarka temple',
  },
  {
    name: 'Ahmedabad to Bhuj',
    distance: '340 km',
    duration: '5.5–6 hours',
    description:
      'Travel from Ahmedabad to Bhuj with our cab service. Explore the vibrant culture of Kutch with ease and comfort.',
    attractions: ['Aina Mahal', 'Prag Mahal', 'Rann of Kutch'],
    image: '/DestinationImg/Bhuj.jpg',
    alt: 'Prag Mahal, Bhuj',
  },
  {
    name: 'Ahmedabad to Mount Abu',
    distance: '220 km',
    duration: '4–4.5 hours',
    description:
      'Escape to Rajasthan\'s only hill station with our taxi from Ahmedabad to Mount Abu. A refreshing getaway awaits.',
    attractions: ['Dilwara Temples', 'Nakki Lake', 'Sunset Point'],
    image: '/DestinationImg/abu.jpg',
    alt: 'Nakki Lake, Mount Abu',
  },
  {
    name: 'Ahmedabad to Jaipur',
    distance: '660 km',
    duration: '10–11 hours',
    description:
      'Book a long-distance taxi from Ahmedabad to Jaipur. Discover the Pink City with our comfortable cab and reliable drivers.',
    attractions: ['Amber Fort', 'Hawa Mahal', 'Jantar Mantar'],
    image: '/DestinationImg/jaipur.webp',
    alt: 'Amber Fort, Jaipur',
  },
  {
    name: 'Ahmedabad to Porbandar',
    distance: '390 km',
    duration: '6–7 hours',
    description:
      'Visit the birthplace of Mahatma Gandhi with our taxi from Ahmedabad to Porbandar. Safe, comfortable, and on-time.',
    attractions: ['Kirti Mandir', 'Porbandar Beach', 'Huzoor Palace'],
    image: '/DestinationImg/porbandar.png',
    alt: 'Kirti Mandir, Porbandar',
  },
  {
    name: 'Ahmedabad to Junagadh',
    distance: '325 km',
    duration: '5–5.5 hours',
    description:
      'Book a taxi from Ahmedabad to Junagadh for a comfortable trip to this historic city at the foothills of Mount Girnar.',
    attractions: ['Girnar Hill', 'Uparkot Fort', 'Mahabat Maqbara'],
    image: '/DestinationImg/junagadh.jpg',
    alt: 'Uparkot Fort, Junagadh',
  },
]

function DestCard({ dest, index, visible }) {
  const navigate = useNavigate()

  const handleError = (e) => {
    e.target.style.display = 'none'
    e.target.nextElementSibling.style.display = 'flex'
  }

  // Parse "City A to City B" → pickup & drop
  const handleBook = (e) => {
    e.preventDefault()
    const parts = dest.name.split(' to ')
    const pickup = parts[0]?.trim() || ''
    const drop = parts[1]?.trim() || ''
    prefillBooking({ pickup, drop })
    navigate('/booking', { state: { pickup, drop } })
  }

  return (
    <div className={`dest-card reveal reveal-up${visible ? ' visible' : ''} stagger-${(index % 3) + 1}`}>
      {/* Image */}
      <div className="dest-img-wrap">
        <img
          src={dest.image}
          alt={dest.alt}
          className="dest-img"
          onError={handleError}
          loading="lazy"
        />
        <div className="dest-img-fallback" style={{ display: 'none' }}>
          <span>🗺️</span>
        </div>
        <div className="dest-overlay" />
      </div>

      {/* Body */}
      <div className="dest-body">
        <h3 className="dest-title">
          <MdLocationOn className="dest-pin-icon" aria-hidden="true" />
          {dest.name}
        </h3>

        <div className="dest-meta">
          <span className="dest-meta-item">
            <MdDirectionsCar aria-hidden="true" />
            {dest.distance}
          </span>
          <span className="dest-meta-item">
            <MdAccessTime aria-hidden="true" />
            {dest.duration}
          </span>
        </div>

        <p className="dest-desc">{dest.description}</p>

        <div className="dest-attractions">
          <strong>Key Attractions:</strong>
          <ul>
            {dest.attractions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="dest-footer">
        <button className="btn-primary dest-btn" onClick={handleBook}>
          Book {dest.name} Taxi
        </button>
      </div>
    </div>
  )
}

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('rajkot')
  const [titleRef, titleVisible] = useInView()
  const [gridRef, gridVisible] = useInView()
  const [ctaRef, ctaVisible] = useInView()

  const destinations = activeTab === 'rajkot' ? rajkotDestinations : ahmedabadDestinations

  return (
    <section className="destinations-section" id="destinations">
      <div className="container">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`section-title reveal reveal-up${titleVisible ? ' visible' : ''}`}
        >
          <span className="badge">Our Destinations</span>
          <h2>Popular Routes</h2>
          <p>Comfortable, reliable taxi service to all major destinations. Book your ride in advance and travel stress-free.</p>
        </div>

        {/* Tab Switcher */}
        <div className="dest-tabs" role="tablist" aria-label="Route source city">
          <div className={`dest-tab-indicator active-${activeTab}`} />
          <button
            role="tab"
            aria-selected={activeTab === 'rajkot'}
            className={`dest-tab-btn${activeTab === 'rajkot' ? ' active' : ''}`}
            onClick={() => setActiveTab('rajkot')}
          >
            From Rajkot
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'ahmedabad'}
            className={`dest-tab-btn${activeTab === 'ahmedabad' ? ' active' : ''}`}
            onClick={() => setActiveTab('ahmedabad')}
          >
            From Ahmedabad
          </button>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="destinations-grid">
          {destinations.map((dest, i) => (
            <DestCard
              key={dest.name}
              dest={dest}
              index={i}
              visible={gridVisible}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div
          ref={ctaRef}
          className={`destinations-cta reveal reveal-up${ctaVisible ? ' visible' : ''}`}
        >
          <p>Don't see your destination? We cover all routes across Gujarat and beyond.</p>
          <a href="tel:+918460811110" className="btn-primary">
            <MdPhone style={{ fontSize: 18 }} /> Call for Custom Route
          </a>
        </div>
      </div>
    </section>
  )
}
