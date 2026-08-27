/**
 * EXPRESS BREWS — OFFICIAL MENU DATA (single source of truth)
 * -----------------------------------------------------------
 * Transcribed from the café's own menu board (introductory prices).
 * The whole board is vegetarian — every item is marked vegetarian: true.
 * Update names/prices/descriptions/images here; the UI reads only this file.
 *
 * price: number, or "hot / cold" string where the board lists both.
 * image: real café photo in /public/images/menu (WebP), or null.
 * tags:  "featured" = mentioned in public guest reviews (Guest Favourites).
 */

export const featuredLabel = "Guest Favourites";

export const menuCategoriesFull = [
  { id: "all", label: "All" },
  {
    id: "coffee",
    label: "Coffee",
    foot: "Flavours ₹40 — Hazelnut · Irish · Caramel · Vanilla    |    Add-ons — Crush ₹20 · Ice Cream ₹30 · Extra Espresso Shot ₹40",
  },
  { id: "tea-world", label: "Tea & World Coffee" },
  { id: "mojitos", label: "Mojitos & Iced Teas" },
  { id: "thickshakes", label: "Thickshakes", foot: "Add-on — Ice Cream ₹30" },
  { id: "fries-maggi", label: "Fries & Maggi" },
  { id: "veggie-delight", label: "Veggie Delight" },
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "sandwiches", label: "Sandwiches" },
];

export const menuItems = [
  // COFFEE
  { id: "coffee-001", category: "Coffee", name: "Classic Cold Coffee", description: "Cold · Guest favourite", price: 39, image: "/images/menu/express-brews-classic-cold-coffee.webp", vegetarian: true, tags: ["featured"] },
  { id: "coffee-002", category: "Coffee", name: "Thick Cold Coffee", description: "Cold", price: 59, image: "/images/menu/express-brews-thick-cold-coffee.webp", vegetarian: true, tags: [] },
  { id: "coffee-003", category: "Coffee", name: "Iced Coffee", description: "Cold", price: 79, image: null, vegetarian: true, tags: [] },
  { id: "coffee-004", category: "Coffee", name: "Instant Coffee", description: "Hot", price: 49, image: null, vegetarian: true, tags: [] },
  { id: "coffee-005", category: "Coffee", name: "Espresso", description: "Hot", price: 69, image: null, vegetarian: true, tags: [] },
  { id: "coffee-006", category: "Coffee", name: "Americano (Black Coffee)", description: "Hot / Cold", price: "79 / 89", image: null, vegetarian: true, tags: [] },
  { id: "coffee-007", category: "Coffee", name: "Cappuccino", description: "Hot", price: 89, image: null, vegetarian: true, tags: [] },
  { id: "coffee-008", category: "Coffee", name: "Café Latte", description: "Hot", price: 79, image: "/images/menu/express-brews-cafe-latte.webp", vegetarian: true, tags: [] },
  { id: "coffee-009", category: "Coffee", name: "Cafe Mocha", description: "Hot", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "coffee-010", category: "Coffee", name: "Affogato", description: "Cold", price: 129, image: null, vegetarian: true, tags: [] },
  { id: "coffee-011", category: "Coffee", name: "Macchiato", description: "Hot · Add Irish flavour for an Irish Macchiato", price: 149, image: null, vegetarian: true, tags: [] },
  { id: "coffee-012", category: "Coffee", name: "Hot Chocolate", description: "Hot", price: 89, image: null, vegetarian: true, tags: [] },

  // TEA & WORLD COFFEE
  { id: "tea-001", category: "Tea & World Coffee", name: "South Indian Filter Coffee", description: "Hot", price: 49, image: null, vegetarian: true, tags: [] },
  { id: "tea-002", category: "Tea & World Coffee", name: "Vietnamese Coffee", description: "Hot / Cold", price: "89 / 99", image: null, vegetarian: true, tags: [] },
  { id: "tea-003", category: "Tea & World Coffee", name: "Thai Coffee (Gafae Yen)", description: "Cold", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "tea-004", category: "Tea & World Coffee", name: "Green Tea", description: "", price: 29, image: null, vegetarian: true, tags: [] },
  { id: "tea-005", category: "Tea & World Coffee", name: "Masala Tea", description: "", price: 29, image: null, vegetarian: true, tags: [] },
  { id: "tea-006", category: "Tea & World Coffee", name: "Lemon Tea", description: "", price: 29, image: null, vegetarian: true, tags: [] },

  // MOJITOS & ICED TEAS
  { id: "mojito-001", category: "Mojitos & Iced Teas", name: "Virgin Mojito", description: "", price: 79, image: null, vegetarian: true, tags: [] },
  { id: "mojito-002", category: "Mojitos & Iced Teas", name: "Watermelon Mojito", description: "", price: 89, image: null, vegetarian: true, tags: [] },
  { id: "mojito-003", category: "Mojitos & Iced Teas", name: "Kala Khatta Mojito", description: "", price: 89, image: null, vegetarian: true, tags: [] },
  { id: "mojito-004", category: "Mojitos & Iced Teas", name: "Blue Lagoon Mojito", description: "Guest favourite", price: 89, image: null, vegetarian: true, tags: ["featured"] },
  { id: "mojito-005", category: "Mojitos & Iced Teas", name: "Green Apple Mojito", description: "", price: 89, image: "/images/menu/express-brews-green-apple-mojito.webp", vegetarian: true, tags: [] },
  { id: "mojito-006", category: "Mojitos & Iced Teas", name: "Iced Tea", description: "", price: 89, image: null, vegetarian: true, tags: [] },
  { id: "mojito-007", category: "Mojitos & Iced Teas", name: "Lemon Iced Tea", description: "", price: 89, image: null, vegetarian: true, tags: [] },
  { id: "mojito-008", category: "Mojitos & Iced Teas", name: "Peach Iced Tea", description: "", price: 89, image: null, vegetarian: true, tags: [] },

  // THICKSHAKES
  { id: "shake-001", category: "Thickshakes", name: "Vanilla Thickshake", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "shake-002", category: "Thickshakes", name: "Mango Thickshake", description: "", price: 109, image: null, vegetarian: true, tags: [] },
  { id: "shake-003", category: "Thickshakes", name: "Chocolate Thickshake", description: "", price: 109, image: null, vegetarian: true, tags: [] },
  { id: "shake-004", category: "Thickshakes", name: "Rose Thickshake", description: "", price: 109, image: null, vegetarian: true, tags: [] },
  { id: "shake-005", category: "Thickshakes", name: "Brownie Thickshake", description: "", price: 119, image: null, vegetarian: true, tags: [] },
  { id: "shake-006", category: "Thickshakes", name: "Lotus Biscoff Thickshake", description: "", price: 119, image: null, vegetarian: true, tags: [] },
  { id: "shake-007", category: "Thickshakes", name: "Kit Kat Thickshake", description: "", price: 119, image: null, vegetarian: true, tags: [] },
  { id: "shake-008", category: "Thickshakes", name: "Oreo Thickshake", description: "", price: 119, image: null, vegetarian: true, tags: [] },
  { id: "shake-009", category: "Thickshakes", name: "Caramel Thickshake", description: "", price: 109, image: null, vegetarian: true, tags: [] },
  { id: "shake-010", category: "Thickshakes", name: "Strawberry Thickshake", description: "", price: 109, image: null, vegetarian: true, tags: [] },

  // FRIES & MAGGI
  { id: "fries-001", category: "Fries & Maggi", name: "French Fries (Plain & Salty)", description: "", price: 69, image: null, vegetarian: true, tags: [] },
  { id: "fries-002", category: "Fries & Maggi", name: "Cheesy French Fries", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "fries-003", category: "Fries & Maggi", name: "Peri Peri Fries", description: "", price: 69, image: null, vegetarian: true, tags: [] },
  { id: "fries-004", category: "Fries & Maggi", name: "Peri Peri Cheesy Fries", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "fries-005", category: "Fries & Maggi", name: "Masala Fries", description: "", price: 69, image: null, vegetarian: true, tags: [] },
  { id: "fries-006", category: "Fries & Maggi", name: "Loaded Cheese Fries", description: "", price: 129, image: null, vegetarian: true, tags: [] },
  { id: "maggi-001", category: "Fries & Maggi", name: "Plain Maggi", description: "", price: 59, image: null, vegetarian: true, tags: [] },
  { id: "maggi-002", category: "Fries & Maggi", name: "Masala Maggi", description: "", price: 79, image: null, vegetarian: true, tags: [] },
  { id: "maggi-003", category: "Fries & Maggi", name: "Vegetable Maggi", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "maggi-004", category: "Fries & Maggi", name: "Cheese Maggi", description: "", price: 89, image: "/images/menu/express-brews-cheese-maggi.webp", vegetarian: true, tags: [] },
  { id: "maggi-005", category: "Fries & Maggi", name: "Veg Loaded Cheese Maggi", description: "", price: 129, image: null, vegetarian: true, tags: [] },

  // VEGGIE DELIGHT
  { id: "veggie-001", category: "Veggie Delight", name: "Potato Cheese Shots (10 pcs)", description: "", price: 89, image: null, vegetarian: true, tags: [] },
  { id: "veggie-002", category: "Veggie Delight", name: "Chilly Potato Bites (10 pcs)", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "veggie-003", category: "Veggie Delight", name: "Cheese Corn Nuggets (6 pcs)", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "veggie-004", category: "Veggie Delight", name: "Veggie Fingers (6 pcs)", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "veggie-005", category: "Veggie Delight", name: "Loaded Fries & Veggie Fingers", description: "", price: 149, image: null, vegetarian: true, tags: [] },
  { id: "veggie-006", category: "Veggie Delight", name: "Hash Browns (4 pcs)", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "veggie-007", category: "Veggie Delight", name: "Peri Peri Hash Browns (4 pcs)", description: "Guest favourite", price: 119, image: "/images/menu/express-brews-peri-peri-hash-browns.webp", vegetarian: true, tags: ["featured"] },

  // BURGERS
  { id: "burger-001", category: "Burgers", name: "Veg Grilled Burger", description: "", price: 89, image: "/images/menu/express-brews-veg-grilled-burger.webp", vegetarian: true, tags: [] },
  { id: "burger-002", category: "Burgers", name: "Veg Cheese Grilled Burger", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "burger-003", category: "Burgers", name: "Veg Tandoori Grilled Burger", description: "", price: 99, image: null, vegetarian: true, tags: [] },

  // PIZZA
  { id: "pizza-001", category: "Pizza", name: "Margarita Pizza", description: "", price: 149, image: null, vegetarian: true, tags: [] },
  { id: "pizza-002", category: "Pizza", name: "Veggies Pizza", description: "", price: 169, image: null, vegetarian: true, tags: [] },
  { id: "pizza-003", category: "Pizza", name: "Corn Cheese Pizza", description: "", price: 149, image: "/images/menu/express-brews-corn-cheese-pizza.webp", vegetarian: true, tags: ["featured"] },
  { id: "pizza-004", category: "Pizza", name: "Paneer Fantastic Pizza", description: "", price: 179, image: null, vegetarian: true, tags: [] },

  // SANDWICHES
  { id: "sandwich-001", category: "Sandwiches", name: "Plain Bread Butter", description: "", price: 59, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-002", category: "Sandwiches", name: "Veg Club Sandwich", description: "", price: 89, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-003", category: "Sandwiches", name: "Cheese Chutney Grilled Sandwich", description: "", price: 109, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-004", category: "Sandwiches", name: "Cheese Corn Grilled Sandwich", description: "", price: 129, image: "/images/menu/express-brews-cheese-corn-grilled-sandwich.webp", vegetarian: true, tags: [] },
  { id: "sandwich-005", category: "Sandwiches", name: "Masala Bombay Grilled Sandwich", description: "", price: 119, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-006", category: "Sandwiches", name: "Chilly Garlic Potato Grilled Sandwich", description: "", price: 119, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-007", category: "Sandwiches", name: "Veg Loaded Grilled Sandwich", description: "", price: 149, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-008", category: "Sandwiches", name: "Paneer Spicy Grilled Sandwich", description: "", price: 159, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-009", category: "Sandwiches", name: "Chocolate Grilled Sandwich", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-010", category: "Sandwiches", name: "Pizza Sandwich (Loaded)", description: "", price: 139, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-011", category: "Sandwiches", name: "Plain Garlic Toast", description: "", price: 69, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-012", category: "Sandwiches", name: "Cheese Garlic Toast", description: "", price: 99, image: "/images/menu/express-brews-cheese-garlic-toast.webp", vegetarian: true, tags: [] },
  { id: "sandwich-013", category: "Sandwiches", name: "Masala Garlic Toast", description: "", price: 99, image: null, vegetarian: true, tags: [] },
  { id: "sandwich-014", category: "Sandwiches", name: "Chilly Cheese Garlic Toast", description: "Guest favourite", price: 99, image: "/images/menu/express-brews-chilly-cheese-garlic-toast.webp", vegetarian: true, tags: ["featured"] },
];

export const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  hasMenuSection: menuCategoriesFull
    .filter((c) => c.id !== "all")
    .map((c) => ({
      "@type": "MenuSection",
      name: c.label,
      hasMenuItem: menuItems
        .filter((i) => i.category === c.label)
        .map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          offers: {
            "@type": "Offer",
            price: String(i.price).split(" ")[0],
            priceCurrency: "INR",
          },
        })),
    })),
};
