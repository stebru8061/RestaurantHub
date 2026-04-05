// SalesPage.jsx
// Displays sales report data for restaurant management.
//
// Purpose:
// - Allows staff and managers to view daily sales performance
// - Displays total sales and tax information
// - Helps track financial activity within the restaurant
//
// Key Concepts:
// - Static data structure for reports (demo/testing)
// - Array mapping to dynamically render report cards
// - Reusable Layout component for consistent page structure

import Layout from "../components/Layout";

function SalesPage() {

  // Static sales report data (represents daily financial records)
  const reports = [
    { id: 1, date: "March 25, 2026", totalSales: "$1,240.00", tax: "$105.40" },
    { id: 2, date: "March 26, 2026", totalSales: "$1,480.00", tax: "$125.80" },
    { id: 3, date: "March 27, 2026", totalSales: "$1,365.00", tax: "$116.03" },
    { id: 4, date: "March 28, 2026", totalSales: "$1,590.00", tax: "$135.15" },
  ];

  return (
    <Layout title="Sales Reports">

      {/* SALES REPORT DISPLAY */}
      <div className="content-grid">

        {/* Loop through reports and render each as a card */}
        {reports.map((report) => (
          <div className="info-card" key={report.id}>
            <h3>{report.date}</h3>

            {/* Sales details */}
            <p><strong>Total Sales:</strong> {report.totalSales}</p>
            <p><strong>Sales Tax:</strong> {report.tax}</p>
          </div>
        ))}

      </div>
    </Layout>
  );
}

export default SalesPage;
