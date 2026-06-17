import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdAccessTime, MdPhone } from "react-icons/md";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Book a Taxi", path: "/booking" },
  { label: "Our Services", path: "/services" },
  { label: "Our Fleet", path: "/fleet" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  "Local City Rides",
  "Outstation Trips",
  "Airport Transfers",
  "Corporate Cabs",
  "Wedding Cars",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg
                className="footer-logo-svg"
                viewBox="0 0 80 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 30 Q12 18 22 16 L38 14 Q50 13 58 18 L70 24 Q74 26 74 30 L74 36 Q74 38 72 38 L10 38 Q8 38 8 36 Z"
                  fill="#f5c518"
                />
                <path
                  d="M24 16 L28 22 L52 22 L56 18 Q50 13 38 14 Z"
                  fill="#0d0d1a"
                  opacity="0.6"
                />
                <circle cx="22" cy="38" r="6" fill="#0d0d1a" />
                <circle cx="22" cy="38" r="3" fill="#f5c518" />
                <circle cx="58" cy="38" r="6" fill="#0d0d1a" />
                <circle cx="58" cy="38" r="3" fill="#f5c518" />
                <line
                  x1="2"
                  y1="26"
                  x2="14"
                  y2="26"
                  stroke="#f5c518"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="2"
                  y1="30"
                  x2="10"
                  y2="30"
                  stroke="#f5c518"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="footer-logo-text">
                RK <strong>Taxi</strong> Service<small>Book your ride</small>
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mt-3"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Your trusted partner for reliable taxi services and unforgettable
              holiday experiences across India. Available 24×7 for all your
              travel needs.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com/taxiaapki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook style={{ fontSize: 20 }} />
              </a>
              <a
                href="https://www.instagram.com/taxi_aapki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram style={{ fontSize: 20 }} />
              </a>
              <a
                href="https://wa.me/919016160151"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp style={{ fontSize: 20 }} />
              </a>
              <a href="tel:+918460811110" aria-label="Phone">
                {" "}
                <img
                  width="22"
                  height="22"
                  src="https://img.icons8.com/ios/50/phone-disconnected.png"
                  alt="phone-disconnected"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/booking">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="footer-contact">
              <div className="fc-item">
                <MdLocationOn
                  style={{ fontSize: 18, color: "#7c3aed", flexShrink: 0 }}
                />
                <span>
                  Office No. 509, "SILVER PRIME", Rail Nagar, Rajkot – 360001,
                  Gujarat
                </span>
              </div>
              <div className="fc-item">
                <MdPhone
                  style={{ fontSize: 18, color: "#7c3aed", flexShrink: 0 }}
                />
                <a href="tel:+918460811110">+91 84608 11110</a>
              </div>
              <div className="fc-item">
                <MdEmail
                  style={{ fontSize: 18, color: "#7c3aed", flexShrink: 0 }}
                />
                <a href="mailto:support@taxiaapki.com">support@taxiaapki.com</a>
              </div>
              <div className="fc-item">
                <MdAccessTime
                  style={{ fontSize: 18, color: "#7c3aed", flexShrink: 0 }}
                />
                <span>Available 24 × 7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {year} RK taxi service. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
