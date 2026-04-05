// Home.jsx
// Main landing page for the RestaurantHub application.
//
// Purpose:
// - Introduces the restaurant brand (Lumière)
// - Provides navigation to key features (Reservations and Menu)
// - Displays important information such as hours and contact details
//
// Key Concepts:
// - Uses React Router <Link> for navigation without page reload
// - Structured layout with hero section and informational cards
// - Focus on user experience and visual presentation

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page">

      {/* HERO SECTION: Main introduction and call-to-action */}
      <div className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">

            {/* Branding and tagline */}
            <p className="eyebrow">Fine Dining Experience</p>
            <h1>Modern Elegance in Every Bite</h1>

            {/* Description of restaurant experience */}
            <p className="hero-text">
              Welcome to Lumière, a refined restaurant experience where elegant
              design, seasonal ingredients, and exceptional service come
              together.
            </p>

            {/* Navigation buttons for key actions */}
            <div className="hero-actions">
              <Link to="/reservations" className="gold-button">
                Reserve a Table
              </Link>
              <Link to="/menu" className="outline-button">
                View Menu
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* INFORMATION SECTION: Displays key business details */}
      <div className="container section-grid">

        {/* Opening hours card */}
        <div className="info-card">
          <h2>Opening Hours</h2>
          <p>Monday–Thursday: 4:00 PM – 10:00 PM</p>
          <p>Friday–Saturday: 4:00 PM – 11:30 PM</p>
          <p>Sunday: 3:00 PM – 9:00 PM</p>
        </div>

        {/* Contact / reservation info card */}
        <div className="info-card">
          <h2>Reservations by Phone</h2>
          <p>Call us directly to schedule your dining experience.</p>
          <p className="phone-number">(555) 234-7812</p>
        </div>

      </div>
    </section>
  );
}
