// MenuCard.jsx
// Reusable component for displaying a single menu item.
//
// Purpose:
// - Displays the name, description, and price of a menu item
// - Ensures consistent styling across all menu sections
// - Promotes code reusability and cleaner structure
//
// Key Concepts:
// - Props (name, description, price) for dynamic content
// - Component reuse to avoid repeating UI code

export default function MenuCard({ name, description, price }) {
  return (
    <div className="menu-card">

      {/* Top section: item name and price */}
      <div className="menu-card-top">
        <h3>{name}</h3>

        {/* Displays formatted price */}
        <span className="price">${price}</span>
      </div>

      {/* Item description */}
      <p>{description}</p>
    </div>
  );
}
