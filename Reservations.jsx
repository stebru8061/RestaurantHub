// Reservations.jsx
// Reservation page for booking a table at the restaurant.
//
// Purpose:
// - Provides customers with a way to reserve a table
// - Displays reservation instructions and contact information
// - Integrates the ReservationForm component for user input
//
// Key Concepts:
// - Component composition (using ReservationForm)
// - Clean layout combining text and form
// - User-focused design for booking experience

import ReservationForm from "../components/ReservationForm";

export default function Reservations() {
  return (
    <section className="page">
      <div className="container reservation-layout">

        {/* RESERVATION INFORMATION SECTION */}
        <div>
          <p className="eyebrow">Reserve Your Table</p>
          <h1>Book an Elegant Evening</h1>

          {/* Description for users */}
          <p>
            Reserve your dining experience online or call us directly for large
            party accommodations and special requests.
          </p>

          {/* Contact phone option */}
          <p className="reservation-phone">Call: (555) 234-7812</p>
        </div>

        {/* RESERVATION FORM COMPONENT */}
        {/* Handles user input and submission */}
        <ReservationForm />

      </div>
    </section>
  );
}
