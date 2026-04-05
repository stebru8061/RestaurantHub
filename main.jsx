// main.jsx
// Entry point for the RestaurantHub React application.
//
// Purpose:
// - Renders the main App component into the HTML root element
// - Wraps the app with BrowserRouter to enable page navigation
// - Applies global styles from index.css
//
// Key Concepts:
// - ReactDOM for rendering the app
// - BrowserRouter for client-side routing
// - React.StrictMode for highlighting potential issues during development

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Creates a root element and renders the React application
ReactDOM.createRoot(document.getElementById("root")).render(

  // StrictMode helps detect potential problems during development
  <React.StrictMode>

    {/* Enables routing between pages without full page reload */}
    <BrowserRouter>

      {/* Main application component */}
      <App />

    </BrowserRouter>

  </React.StrictMode>
);
