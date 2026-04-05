// SettingsPage.jsx
// Displays restaurant configuration and business information.
//
// Purpose:
// - Allows staff to view restaurant details such as name, phone, hours, and address
// - Acts as a settings overview page for business information
// - Can be extended in the future to allow editing/updating of settings
//
// Key Concepts:
// - Object data structure for storing restaurant info
// - Displaying structured data in a clean UI format
// - Reusable Layout component for consistent design

import Layout from "../components/Layout";

function SettingsPage() {

  // Static restaurant information (represents business settings)
  const restaurantInfo = {
    name: "Golden Fork Restaurant",
    phone: "(555) 123-4567",
    hours: "Monday - Sunday: 11:00 AM - 10:00 PM",
    address: "123 Main Street, Charleston, SC",
  };

  return (
    <Layout title="Restaurant Settings">

      {/* SETTINGS DISPLAY */}
      <div className="content-grid single-card">
        <div className="info-card">

          {/* Restaurant details */}
          <h3>{restaurantInfo.name}</h3>
          <p><strong>Phone:</strong> {restaurantInfo.phone}</p>
          <p><strong>Hours:</strong> {restaurantInfo.hours}</p>
          <p><strong>Address:</strong> {restaurantInfo.address}</p>

        </div>
      </div>

    </Layout>
  );
}

export default SettingsPage;
