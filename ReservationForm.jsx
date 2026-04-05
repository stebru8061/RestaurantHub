// ReservationForm.jsx
// Handles customer reservation input form.
//
// Purpose:
// - Collects customer information for table reservations
// - Stores input data using React state
// - Demonstrates form handling and event management
//
// Key Concepts:
// - useState for managing form data
// - Controlled components (input values tied to state)
// - Event handling (onChange, onSubmit)
// - Basic validation using required fields

import { useState } from "react";

export default function ReservationForm() {

  // Stores all form input values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    partySize: "2",
  });

  // Updates form data when user types or selects a value
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handles form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Placeholder behavior (would connect to backend/database in production)
    alert("Reservation submitted! Connect this form to your database next.");

    // Logs form data for debugging/testing
    console.log(formData);
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>

      {/* FULL NAME INPUT */}
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* PHONE NUMBER INPUT */}
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* DATE AND TIME ROW */}
      <div className="form-row">

        {/* DATE INPUT */}
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* TIME INPUT */}
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

      </div>

      {/* PARTY SIZE DROPDOWN */}
      <div className="form-group">
        <label>Party Size</label>
        <select
          name="partySize"
          value={formData.partySize}
          onChange={handleChange}
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="4">4 Guests</option>
          <option value="6">6 Guests</option>
          <option value="8">8 Guests</option>
        </select>
      </div>

      {/* SUBMIT BUTTON */}
      <button type="submit" className="gold-button">
        Reserve Table
      </button>

    </form>
  );
}
