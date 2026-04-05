// Layout.jsx
// Reusable layout component for admin/staff pages.
//
// Purpose:
// - Provides a consistent page structure (title, header, navigation)
// - Wraps content for all admin-related pages
// - Includes navigation controls such as Dashboard and Logout
//
// Key Concepts:
// - Props (title, children) for dynamic content rendering
// - useNavigate for programmatic navigation
// - Reusability to reduce repeated code across pages

import { Link, useNavigate } from "react-router-dom";

function Layout({ title, children }) {

  // Hook used for navigation without page reload
  const navigate = useNavigate();

  // Handles logout action by redirecting user to login page
  function handleLogout() {
    navigate("/login");
  }

  return (
    <div className="page">

      {/* TOP BAR: Displays page title and navigation controls */}
      <div className="topbar">
        <div>
          {/* Dynamic page title passed as a prop */}
          <h1>{title}</h1>
          <p>Restaurant Admin Panel</p>
        </div>

        {/* Navigation actions (Dashboard + Logout) */}
        <div className="topbar-actions">

          {/* Link to main admin dashboard */}
          <Link to="/admin" className="nav-btn">
            Dashboard
          </Link>

          {/* Logout button triggers navigation to login page */}
          <button onClick={handleLogout}>Logout</button>

        </div>
      </div>

      {/* CHILD CONTENT: Renders page-specific content */}
      {children}

    </div>
  );
}

export default Layout;
