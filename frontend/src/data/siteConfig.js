/**
 * EXPRESS BREWS — CENTRAL SITE CONFIGURATION
 * ------------------------------------------
 * Everything the owner may need to update lives here.
 *
 * IMAGES: All files in /public/images are AUTHENTIC Express Brews photos
 * provided by the owner (optimized & renamed for SEO). Replace the files
 * (or update the paths below) to refresh — no other code changes needed.
 *
 * UNVERIFIED / CONFIGURABLE FIELDS (update when confirmed):
 * - siteUrl (set to the production domain once live)
 * - googleMapsUrl / googleMapsEmbed (point to the verified Business Profile)
 * - menuUrl (link to the official full menu listing once confirmed)
 * - socialLinks (add official profiles once confirmed)
 * - rating / reviewCount (only fill from a single verified source)
 * - menu items & prices (OFFICIAL — transcribed from the café menu board, introductory prices)
 */

export const site = {
  businessName: "Express Brews",
  tagline: "Coffee • Food • Conversations",
  city: "Pune",
  area: "Parvati Paytha, Satara Road",
  siteUrl: "https://3697fc62-c098-40e4-8b6c-e8da56d5f505.preview.emergentagent.com",
  address: {
    line1: "Shop No. 1, Parvati Plaza",
    line2: "Taware Colony, Parvati Paytha",
    line3: "Satara Road, Pune",
    line4: "Maharashtra 411009, India",
  },
  addressSingleLine:
    "Shop No. 1, Parvati Plaza, Taware Colony, Parvati Paytha, Satara Road, Pune, Maharashtra 411009",
  phoneDisplay: "+91 98228 60644",
  phoneLink: "tel:+919822860644",
  whatsappNumber: "919822860644",
  whatsappLink:
    "https://wa.me/919822860644?text=Hi%20Express%20Brews%2C%20I%27d%20like%20to%20know%20more.",
  hoursDays: "Monday – Sunday",
  hoursDisplay: "11:00 AM – 11:00 PM",
  hoursShort: "11 AM – 11 PM",
  costForTwo: "₹500 for two (approx.)",
  googleMapsUrl:
    "https://www.google.com/maps/place/Express+Brews/@18.4883004,73.8541145,786m/",
  googleMapsEmbed:
    "https://www.google.com/maps?q=18.4883004,73.8541145&z=17&output=embed",
  menuUrl: "/menu",
  reviewsUrl:
    "https://www.google.com/maps/place/Express+Brews/@18.4883004,73.8541145,786m/",
  socialLinks: {
    instagram: "",
    facebook: "",
  },
  rating: null,
  reviewCount: null,
  services: ["Indoor seating", "Lunch & dinner", "Home delivery", "Digital payments"],
};

export const images = {
  logo: {
    src: "/images/express-brews-logo.png",
    alt: "Express Brews logo — café on Satara Road, Pune",
  },
  hero: {
    src: "/images/hero-express-brews-interior.jpg",
    alt: "Warm interior of Express Brews café on Satara Road, Pune, glowing in the evening",
  },
  about: {
    src: "/images/about-cafe-cheers.jpg",
    alt: "Guests sharing coffee and tea at Express Brews café, Parvati Paytha, Pune",
  },
  cta: {
    src: "/images/cta-mojito-storefront.jpg",
    alt: "A fresh mojito in front of the Express Brews sign on Satara Road, Pune",
  },
};

export const signatureItems = [
  {
    id: "01",
    name: "Peri Peri Hash Browns",
    category: "Food",
    description:
      "Crispy, comforting and one of the dishes guests mention again and again in their reviews.",
    image: "/images/pick-peri-peri-hash-browns.jpg",
    alt: "Peri Peri Hash Browns at Express Brews Pune",
    pos: "top",
  },
  {
    id: "02",
    name: "Cold Coffee",
    category: "Coffee",
    description: "A chilled café classic — the go-to order for regulars on warm Pune evenings.",
    image: "/images/pick-cold-coffee.jpg",
    alt: "Cold coffee served at Express Brews, Satara Road",
    pos: "bottom",
  },
  {
    id: "03",
    name: "Fresh Mojitos",
    category: "Beverages",
    description:
      "Blue Lagoon, Green Apple, Watermelon or Kala Khatta — the café's coolers, best had on a Pune evening.",
    image: "/images/pick-mojito.jpg",
    alt: "Fresh mojito in front of the Express Brews sign, Satara Road Pune",
  },
  {
    id: "04",
    name: "Chilli Garlic Bread",
    category: "Food",
    description: "Warm, garlicky and just spicy enough — a side that keeps coming back to the table.",
    image: "/images/pick-chilli-garlic-bread.jpg",
    alt: "Chilli cheese garlic toast at Express Brews Pune",
  },
  {
    id: "05",
    name: "Café Latte",
    category: "Coffee",
    description: "Latte art done properly — the cup guests photograph before they sip.",
    image: "/images/pick-cappuccino.jpg",
    alt: "Café latte with latte art at Express Brews, Parvati Paytha, Pune",
  },
  {
    id: "06",
    name: "Pizza",
    category: "Food",
    description: "From the board — Margarita, Corn Cheese, Veggies or Paneer Fantastic, baked fresh.",
    image: "/images/pick-pizza.jpg",
    alt: "Fresh pizza at Express Brews café, Satara Road, Pune",
  },
  {
    id: "07",
    name: "Grilled Sandwiches",
    category: "Food",
    description: "Grilled, generous and made for long conversations over coffee.",
    image: "/images/pick-sandwich.jpg",
    alt: "Grilled sandwiches at Express Brews café, Satara Road Pune",
  },
];

export const experiences = [
  {
    id: "01",
    title: "Coffee",
    text: "Rich brews and café favourites, from a straight espresso to a slow, creamy macchiato.",
    image: "/images/exp-coffee.jpg",
    alt: "Fresh coffee being brewed at Express Brews Pune",
  },
  {
    id: "02",
    title: "Beverages",
    text: "Refreshing coolers, shakes and indulgent drinks for every kind of afternoon.",
    image: "/images/exp-beverages.jpg",
    alt: "Refreshing beverages at Express Brews, Satara Road Pune",
  },
  {
    id: "03",
    title: "Food",
    text: "Comforting café food — sandwiches, pizza, burgers and more, made for sharing.",
    image: "/images/exp-food.jpg",
    alt: "Café food and pizza at Express Brews Pune",
  },
  {
    id: "04",
    title: "Continental",
    text: "A selection of casual continental plates for a relaxed lunch or dinner.",
    image: "/images/exp-continental.jpg",
    alt: "Continental dishes at Express Brews café Pune",
  },
];

// Menu data lives in /src/data/menuData.js (single source of truth).


export const galleryImages = [
  { src: "/images/gallery-indoor-seating.jpg", alt: "Indoor seating at Express Brews café, Satara Road Pune", caption: "Indoor Seating", tall: false },
  { src: "/images/gallery-storefront-dusk.jpg", alt: "Express Brews café storefront glowing at dusk, Parvati Paytha Pune", caption: "The Storefront at Dusk", tall: true },
  { src: "/images/gallery-outdoor-tables.jpg", alt: "Outdoor seating at Express Brews, Parvati Plaza, Satara Road Pune", caption: "Outdoor Tables", tall: true },
  { src: "/images/gallery-coffee-crew.jpg", alt: "Cold coffees served to a table of guests at Express Brews Pune", caption: "Coffee With the Crew", tall: false },
  { src: "/images/gallery-cold-coffee-trio.jpg", alt: "Three cold coffees on a tray at Express Brews Pune", caption: "Cold Coffee Trio", tall: false },
  { src: "/images/gallery-cheese-toast-tray.jpg", alt: "Cheese garlic toast and drinks at Express Brews Pune", caption: "Cheese Toast & Coolers", tall: true },
  { src: "/images/gallery-grilled-sandwich.jpg", alt: "Grilled sandwiches being finished with dip at Express Brews Pune", caption: "Off the Grill", tall: true },
  { src: "/images/gallery-burger-fries.jpg", alt: "Veg burger and fries at Express Brews café Pune", caption: "Burger Break", tall: true },
];

// Short excerpts reflecting themes from public guest reviews.
// Do not add platform names or ratings unless verified.
export const reviews = [
  { text: "Great coffee — the kind you plan your evening around.", tag: "Coffee" },
  { text: "The peri peri hash browns are an absolute must-try.", tag: "Food" },
  { text: "Cozy, clean and comfortable. Easy place to sit and talk for hours.", tag: "Ambience" },
  { text: "Loved the cold coffee and the chilli garlic bread.", tag: "Coffee & Food" },
  { text: "The Irish macchiato was a pleasant surprise.", tag: "Coffee" },
  { text: "Good sandwiches and friendly, quick service.", tag: "Service" },
  { text: "A nice spot on Satara Road for a relaxed coffee break.", tag: "Location" },
];

export const faqs = [
  {
    q: "Where is Express Brews in Pune?",
    a: "Express Brews is at Shop No. 1, Parvati Plaza, Taware Colony, Parvati Paytha, on Satara Road, Pune, Maharashtra 411009 — an easy café stop along the Satara Road stretch.",
  },
  {
    q: "What are Express Brews' opening hours?",
    a: "Express Brews is open every day of the week, Monday to Sunday, from 11:00 AM to 11:00 PM.",
  },
  {
    q: "What food does Express Brews serve?",
    a: "The café serves coffee, beverages and café-style food including sandwiches, burgers, pizza and continental dishes — alongside guest favourites like peri peri hash browns and chilli garlic bread.",
  },
  {
    q: "Does Express Brews offer coffee and beverages?",
    a: "Yes. Coffee is at the heart of the menu, along with a range of beverages such as cold coffee, coolers like Blue Lagoon, and indulgent options like kulfi falooda.",
  },
  {
    q: "Does Express Brews offer home delivery?",
    a: "Yes, home delivery is listed among the café's services, along with indoor seating and digital payments. Call or WhatsApp +91 98228 60644 to check delivery to your area.",
  },
  {
    q: "How much does it cost for two people at Express Brews?",
    a: "The approximate cost for two people is around ₹500, making it an easy everyday café for casual meetups and relaxed meals.",
  },
  {
    q: "How can I contact Express Brews?",
    a: "You can call Express Brews on +91 98228 60644, message on WhatsApp, or simply drop in at Parvati Plaza on Satara Road, Pune between 11 AM and 11 PM.",
  },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Specials", href: "/#specials" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Visit Us", href: "/#visit" },
];
