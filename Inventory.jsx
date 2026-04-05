// InventoryPage.jsx
// Displays inventory shipment information for restaurant management.
//
// Purpose:
// - Allows staff to track incoming inventory items
// - Displays shipment details such as quantity, supplier, and status
// - Helps monitor stock levels and delivery progress
//
// Key Concepts:
// - Static data for shipments (demo/testing)
// - Array mapping to dynamically render shipment cards
// - Reusable Layout component for consistent UI design

import Layout from "../components/Layout";

function InventoryPage() {

  // Static shipment data (represents inventory deliveries)
  const shipments = [
    { id: 1, item: "Tomatoes", quantity: "50 lbs", supplier: "Fresh Farms", status: "Delivered" },
    { id: 2, item: "Chicken Breast", quantity: "100 lbs", supplier: "Prime Meats", status: "In Transit" },
    { id: 3, item: "Olive Oil", quantity: "20 bottles", supplier: "Golden Harvest", status: "Delivered" },
    { id: 4, item: "Rice", quantity: "75 lbs", supplier: "Grain House", status: "Pending" },
  ];

  return (
    <Layout title="Inventory Shipments">

      {/* SHIPMENT LIST DISPLAY */}
      <div className="content-grid">

        {/* Loop through shipments and render each as a card */}
        {shipments.map((shipment) => (
          <div className="info-card" key={shipment.id}>
            <h3>{shipment.item}</h3>

            {/* Shipment details */}
            <p><strong>Quantity:</strong> {shipment.quantity}</p>
            <p><strong>Supplier:</strong> {shipment.supplier}</p>
            <p><strong>Status:</strong> {shipment.status}</p>
          </div>
        ))}

      </div>
    </Layout>
  );
}

export default InventoryPage;
