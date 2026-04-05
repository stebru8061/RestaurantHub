// CustomersPage.jsx
// Displays customer reservation data with search functionality.
//
// Purpose:
// - Allows staff to view customer records
// - Provides a search feature across multiple fields
// - Demonstrates filtering and state management in React
//
// Key Concepts:
// - useState for managing search input
// - useMemo for efficient filtering
// - Dynamic rendering of customer data

import { useMemo, useState } from "react";
import Layout from "../components/Layout";

function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    {
      id: 1,
      name: "Sophia Carter",
      email: "sophia@email.com",
      phone: "555-111-1001",
      reservationDate: "April 2, 2026",
      reservationTime: "6:30 PM",
    },
    {
      id: 2,
      name: "Liam Bennett",
      email: "liam@email.com",
      phone: "555-111-1002",
      reservationDate: "April 3, 2026",
      reservationTime: "7:00 PM",
    },
    {
      id: 3,
      name: "Emma Brooks",
      email: "emma@email.com",
      phone: "555-111-1003",
      reservationDate: "April 4, 2026",
      reservationTime: "5:45 PM",
    },
    {
      id: 4,
      name: "Noah Hayes",
      email: "noah@email.com",
      phone: "555-111-1004",
      reservationDate: "April 5, 2026",
      reservationTime: "8:15 PM",
    },
    {
      id: 5,
      name: "Olivia Reed",
      email: "olivia@email.com",
      phone: "555-111-1005",
      reservationDate: "April 6, 2026",
      reservationTime: "6:00 PM",
    },
    {
      id: 6,
      name: "Mason Price",
      email: "mason@email.com",
      phone: "555-111-1006",
      reservationDate: "April 7, 2026",
      reservationTime: "7:30 PM",
    },
    {
      id: 7,
      name: "Ava Collins",
      email: "ava@email.com",
      phone: "555-111-1007",
      reservationDate: "April 8, 2026",
      reservationTime: "5:30 PM",
    },
    {
      id: 8,
      name: "Ethan Ward",
      email: "ethan@email.com",
      phone: "555-111-1008",
      reservationDate: "April 9, 2026",
      reservationTime: "8:00 PM",
    },
    {
      id: 9,
      name: "Isabella James",
      email: "isabella@email.com",
      phone: "555-111-1009",
      reservationDate: "April 10, 2026",
      reservationTime: "6:45 PM",
    },
    {
      id: 10,
      name: "Lucas Foster",
      email: "lucas@email.com",
      phone: "555-111-1010",
      reservationDate: "April 11, 2026",
      reservationTime: "7:15 PM",
    },
    {
      id: 11,
      name: "Mia Turner",
      email: "mia@email.com",
      phone: "555-111-1011",
      reservationDate: "April 12, 2026",
      reservationTime: "6:20 PM",
    },
    {
      id: 12,
      name: "James Perry",
      email: "james@email.com",
      phone: "555-111-1012",
      reservationDate: "April 13, 2026",
      reservationTime: "7:50 PM",
    },
  ];

  const filteredCustomers = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return customers.filter((customer) => {
      return (
        customer.name.toLowerCase().includes(search) ||
        customer.email.toLowerCase().includes(search) ||
        customer.phone.includes(search) ||
        customer.reservationDate.toLowerCase().includes(search) ||
        customer.reservationTime.toLowerCase().includes(search)
      );
    });
  }, [searchTerm]);

  return (
    <Layout title="Customers">
      <div className="info-card search-panel">
        <label htmlFor="search">
          <strong>Search Customers</strong>
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search by name, email, phone, date, or time"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="content-grid">
        {filteredCustomers.map((customer) => (
          <div className="info-card" key={customer.id}>
            <h3>{customer.name}</h3>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
            <p><strong>Reservation Date:</strong> {customer.reservationDate}</p>
            <p><strong>Reservation Time:</strong> {customer.reservationTime}</p>
          </div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <p className="status-message">No matching customers found.</p>
      )}
    </Layout>
  );
}

export default CustomersPage;
