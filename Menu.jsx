// Menu.jsx
// Displays the restaurant menu organized into categories.
//
// Purpose:
// - Allows customers to view available food items
// - Organizes menu into sections (Starters, Main Courses, Desserts)
// - Uses reusable components to maintain consistent design
//
// Key Concepts:
// - Array data structures for menu items
// - Mapping over arrays to dynamically render components
// - Component reuse (MenuCard)
// - Clean UI organization by category

import MenuCard from "../components/MenuCard";

export default function Menu() {

  // Starter menu items
  const starters = [
    {
      name: "Truffle Burrata",
      description: "Creamy burrata, roasted tomatoes, basil oil, and truffle drizzle.",
      price: "18",
    },
    {
      name: "Crispy Calamari",
      description: "Served with lemon aioli and a charred chili glaze.",
      price: "16",
    },
  ];

  // Main course menu items
  const mains = [
    {
      name: "Filet Mignon",
      description: "Tender cut of beef with garlic mashed potatoes and red wine jus.",
      price: "38",
    },
    {
      name: "Herb Seared Salmon",
      description: "Atlantic salmon with seasonal vegetables and citrus butter sauce.",
      price: "29",
    },
  ];

  // Dessert menu items
  const desserts = [
    {
      name: "Vanilla Bean Crème Brûlée",
      description: "Classic custard with caramelized sugar topping.",
      price: "12",
    },
    {
      name: "Chocolate Torte",
      description: "Rich dark chocolate torte with fresh berries.",
      price: "13",
    },
  ];

  return (
    <section className="page">
      <div className="container">

        {/* PAGE HEADER */}
        <div className="page-header">
          <p className="eyebrow">Our Menu</p>
          <h1>Curated Dining</h1>
          <p>
            Explore a seasonal menu crafted with quality ingredients and elegant
            presentation.
          </p>
        </div>

        {/* STARTERS SECTION */}
        <div className="menu-section">
          <h2>Starters</h2>

          {/* Render each starter using MenuCard component */}
          <div className="menu-grid">
            {starters.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* MAIN COURSES SECTION */}
        <div className="menu-section">
          <h2>Main Courses</h2>

          {/* Render each main dish */}
          <div className="menu-grid">
            {mains.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* DESSERTS SECTION */}
        <div className="menu-section">
          <h2>Desserts</h2>

          {/* Render each dessert item */}
          <div className="menu-grid">
            {desserts.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
