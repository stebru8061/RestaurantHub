// Footer.jsx
// Displays the footer section of the RestaurantHub application.
//
// Purpose:
// - Provides restaurant branding, hours, and contact information
// - Appears consistently across all pages
// - Enhances user experience with important business details
//
// Note:
// - This is a reusable component included in the main App layout


export default function Footer() {
  return (
    <footer className="footer">

      {/* Container for organizing footer content into columns */}
      <div className="container footer-grid">

        {/* Restaurant branding section */}
        <div>
          <h3>Lumière</h3>
          <p>Modern elegance in every bite.</p>
        </div>

        {/* Business hours section */}
        <div>
          <h4>Hours</h4>
          <p>Mon–Thu: 4:00 PM – 10:00 PM</p>
          <p>Fri–Sat: 4:00 PM – 11:30 PM</p>
          <p>Sun: 3:00 PM – 9:00 PM</p>
        </div>

        {/* Contact information section */}
        <div>
          <h4>Contact</h4>
          <p>(555) 234-7812</p>
          <p>123 Main Street, Charleston, SC</p>
        </div>

      </div>
    </footer>
  );
}
