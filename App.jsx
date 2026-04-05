// App.jsx
// Main application component for the RestaurantHub system.
//
// Purpose:
// - Defines all application routes using React Router
// - Connects public pages (Home, Menu, Reservations)
// - Connects staff/admin pages (Dashboard, Customers, Employees, etc.)
// - Maintains a consistent layout using Navbar and Footer
//
// This file acts as the central navigation system for the entire application.



import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public pages (accessible to all users)
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import Login from "./Pages/Login";

// Staff/Admin pages (restricted access in a full implementation)
import AdminDashboard from "./Pages/AdminDashboard";
import Customers from "./Pages/Customers";
import Employees from "./Pages/Employees";
import Inventory from "./Pages/Inventory";
import Sales from "./Pages/Sales";
import Settings from "./Pages/Settings";

export default function App() {
  return (
    <div className="app-shell">
      {/* Navigation bar displayed on all pages */}
      <Navbar />

      <main className="Page-shell">
        {/* React Router handles page navigation without reloading */}
        <Routes>

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />

          {/* Admin/Staff routes (should be protected with authentication in production) */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </main>

      {/* Footer displayed on all pages */}
      <Footer />
    </div>
  );
}
