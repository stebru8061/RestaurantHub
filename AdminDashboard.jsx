// AdminDashboard.jsx
// This page includes full CRUD functionality and wildcard search.
// Users can add, edit, delete, and search customer records on the same page.
// Admin dashboard for RestaurantHub.
//
// Purpose:
// - Provides full CRUD functionality for customer reservation records
// - Allows managers to add, edit, delete, and search customers in one place
// - Demonstrates core application features such as state management and filtering
//
// Key Concepts Used:
// - useState for managing form data and customer records
// - useMemo for efficient search filtering
// - Conditional rendering for edit vs add mode
// - Dynamic updates without page reload

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Amanda Smith",
      email: "amanda.smith@email.com",
      phone: "843-555-1001",
      reservationDate: "2026-03-20",
    },
    {
      id: 2,
      name: "Daniel Brown",
      email: "daniel.brown@email.com",
      phone: "843-555-1002",
      reservationDate: "2026-03-21",
    },
    {
      id: 3,
      name: "Maria Johnson",
      email: "maria.j@email.com",
      phone: "843-555-1003",
      reservationDate: "2026-03-22",
    },
    {
      id: 4,
      name: "Andrew Miller",
      email: "andrew.m@email.com",
      phone: "843-555-1004",
      reservationDate: "2026-03-23",
    },
    {
      id: 5,
      name: "Anna Williams",
      email: "anna.w@email.com",
      phone: "843-555-1005",
      reservationDate: "2026-03-24",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reservationDate: "",
  });

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      reservationDate: "",
    });
    setEditingId(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.reservationDate.trim()
    ) {
      setStatusMessage("Please complete all fields.");
      return;
    }

    if (editingId !== null) {
      const updatedCustomers = customers.map((customer) =>
        customer.id === editingId ? { ...customer, ...formData } : customer
      );

      setCustomers(updatedCustomers);
      setStatusMessage("Customer record updated successfully.");
    } else {
      const newCustomer = {
        id: Date.now(),
        ...formData,
      };

      setCustomers([...customers, newCustomer]);
      setStatusMessage("Customer record added successfully.");
    }

    clearForm();
  }

  function handleEdit(customer) {
    setEditingId(customer.id);
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      reservationDate: customer.reservationDate,
    });
    setStatusMessage("Editing selected record.");
  }

  function handleDelete(id) {
    const updatedCustomers = customers.filter((c) => c.id !== id);
    setCustomers(updatedCustomers);

    if (editingId === id) {
      clearForm();
    }

    setStatusMessage("Customer record deleted successfully.");
  }

  const filteredCustomers = useMemo(() => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return customers;

    const escaped = trimmed.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped.replace(/\*/g, ".*"), "i");

    return customers.filter((c) =>
      regex.test(c.name) ||
      regex.test(c.email) ||
      regex.test(c.phone) ||
      regex.test(c.reservationDate)
    );
  }, [searchTerm, customers]);

  return (
    <section className="page">
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">Management Portal</p>
          <h1>Admin Dashboard</h1>
          <p>
            This area allows restaurant managers to search, add, edit, and
            delete customer reservation records.
          </p>
        </div>

        {/* FORM */}
        <div className="dashboard-card search-card">
          <h2>{editingId !== null ? "Edit Customer Record" : "Add Customer Record"}</h2>

          {statusMessage && <p className="status-message">{statusMessage}</p>}

          <form onSubmit={handleSubmit} className="auth-form">
            <input name="name" value={formData.name} onChange={handleFormChange} placeholder="Name" />
            <input name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" />
            <input name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Phone" />
            <input type="date" name="reservationDate" value={formData.reservationDate} onChange={handleFormChange} />

            <button type="submit">
              {editingId !== null ? "Save Changes" : "Add Record"}
            </button>
          </form>
        </div>

        {/* SEARCH */}
        <div className="dashboard-card search-card">
          <h2>Customer Search</h2>

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search (* wildcard)"
          />

          <p>Results: {filteredCustomers.length}</p>

          {filteredCustomers.map((c) => (
            <div key={c.id} className="result-card">
              <h3>{c.name}</h3>
              <p>{c.email}</p>
              <p>{c.phone}</p>
              <p>{c.reservationDate}</p>

              <button onClick={() => handleEdit(c)}>Edit</button>
              <button onClick={() => handleDelete(c.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* ✅ CLICKABLE CARDS */}
        <div className="dashboard-grid">
          <Link to="/reservations" className="dashboard-card">
            <h2>Reservations</h2>
            <p>View upcoming bookings, customer names, and reservation times.</p>
          </Link>

          <Link to="/customers" className="dashboard-card">
            <h2>Customers</h2>
            <p>Search customer records and manage reservation history.</p>
          </Link>

          <Link to="/employees" className="dashboard-card">
            <h2>Employees</h2>
            <p>Manage employee records, roles, and contact details.</p>
          </Link>

          <Link to="/inventory" className="dashboard-card">
            <h2>Inventory Shipments</h2>
            <p>Track incoming stock shipments and current inventory items.</p>
          </Link>

          <Link to="/sales" className="dashboard-card">
            <h2>Sales Reports</h2>
            <p>Review sales activity and sales tax summary information.</p>
          </Link>

          <Link to="/settings" className="dashboard-card">
            <h2>Restaurant Settings</h2>
            <p>Update hours of operation, phone number, and business details.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
