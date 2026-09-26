export const CAFE_INFO = {
  name: "Autumn Leaf Cafe",
  tagline: "A Lush Garden Escape in Thukkuguda",
  subheading: "Artisanal Roastery, European Comfort Food & Pet-Friendly Lawns near ORR Exit 14 & Shamshabad Airport",
  phone: "+91 95339 63121",
  rawPhone: "919533963121",
  address: "Imamguda Road, Thukkuguda, Near ORR Exit 14, Hyderabad, Telangana 501359",
  landmark: "2 Mins from ORR Exit 14 • 15 Mins from RGIA Airport (Shamshabad)",
  coordinates: {
    lat: 17.2045,
    lng: 78.4892
  },
  hours: {
    weekday: "Mon – Thu: 8:00 AM – 9:00 PM",
    weekend: "Fri – Sun: 8:00 AM – 10:00 PM",
    weekdaySchedule: { open: 8, close: 21 },
    weekendSchedule: { open: 8, close: 22 }
  },
  highlights: [
    { icon: "ShieldCheck", title: "Pet-Friendly Lawns", desc: "Spacious green courtyard for your furry companions" },
    { icon: "Plane", title: "15 Mins from RGIA", desc: "Perfect layover & pre-flight gourmet dining spot" },
    { icon: "MapPin", title: "ORR Exit 14 Access", desc: "Hassle-free 2-minute drive off the Outer Ring Road" },
    { icon: "Coffee", title: "Artisanal Micro-Roastery", desc: "100% Arabica single-origin pour-overs & cold brews" },
    { icon: "Car", title: "Ample On-Site Parking", desc: "Dedicated valet & secure parking space for long drives" },
    { icon: "Sparkles", title: "Private Outdoor Events", desc: "Lush setting for birthday brunches & garden gatherings" }
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "breakfast", label: "Breakfast & Brunch" },
  { id: "coffee", label: "Artisan Coffee" },
  { id: "mains", label: "Mains & Pastas" },
  { id: "desserts", label: "Bakery & Desserts" },
  { id: "refreshers", label: "Refreshers & Teas" }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Avocado & Poached Egg Toast",
    category: "breakfast",
    price: 420,
    diet: "non-veg", // contains eggs
    tags: ["Chef's Special", "Gluten-Free Option"],
    description: "Smashed Hass avocado, organic poached eggs with runny golden yolks, microgreens & chilli flakes on toasted artisan sourdough.",
    image: "/images/avocado_toast.jpg",
    bestseller: true
  },
  {
    id: 2,
    name: "Autumn Leaf Garden Skillet",
    category: "breakfast",
    price: 380,
    diet: "veg",
    tags: ["Chef's Special"],
    description: "Sautéed wild mushrooms, baby spinach, roasted cherry tomatoes, bell peppers & melted cheddar served with warm garlic brioche.",
    image: "/images/avocado_toast.jpg",
    bestseller: false
  },
  {
    id: 3,
    name: "Classic French Omelette",
    category: "breakfast",
    price: 340,
    diet: "non-veg",
    tags: [],
    description: "Creamy folded three-egg omelette stuffed with herbs, caramelized onions & gruyère cheese with grilled breakfast sausages.",
    image: "/images/avocado_toast.jpg",
    bestseller: false
  },
  {
    id: 4,
    name: "Signature Spanish Latte",
    category: "coffee",
    price: 260,
    diet: "veg",
    tags: ["Bestseller", "Gluten-Free"],
    description: "Double shot Arabica espresso layered with sweetened condensed milk and silky textured velvet milk.",
    image: "/images/artisanal_coffee.jpg",
    bestseller: true
  },
  {
    id: 5,
    name: "Handcrafted Iced Cappuccino",
    category: "coffee",
    price: 240,
    diet: "veg",
    tags: ["Gluten-Free"],
    description: "Chilled double shot espresso poured over ice crystals with a thick cloud of sweetened cinnamon foam.",
    image: "/images/artisanal_coffee.jpg",
    bestseller: false
  },
  {
    id: 6,
    name: "Cold Brew Tonic & Orange Citrus",
    category: "coffee",
    price: 270,
    diet: "vegan",
    tags: ["Vegan", "Gluten-Free"],
    description: "16-hour steep single-origin Arabica cold brew infused with premium Indian tonic water and fresh blood orange slice.",
    image: "/images/artisanal_coffee.jpg",
    bestseller: true
  },
  {
    id: 7,
    name: "Truffle & Wild Mushroom Fettuccine",
    category: "mains",
    price: 540,
    diet: "veg",
    tags: ["Chef's Special"],
    description: "Fresh hand-rolled fettuccine tossed in rich white truffle cream, porcini dust & aged Parmigiano Reggiano.",
    image: "/images/truffle_pasta.jpg",
    bestseller: true
  },
  {
    id: 8,
    name: "Woodfired Herb Chicken Pizza",
    category: "mains",
    price: 580,
    diet: "non-veg",
    tags: ["Bestseller"],
    description: "Thin sourdough crust baked in stone oven topped with rosemary chicken, mozzarella, sundried tomatoes & fresh basil pesto.",
    image: "/images/truffle_pasta.jpg",
    bestseller: true
  },
  {
    id: 9,
    name: "Grilled Mediterranean Panini",
    category: "mains",
    price: 410,
    diet: "veg",
    tags: ["Vegan Option"],
    description: "Char-grilled zucchini, bell peppers, fresh mozzarella, and kalamata olive tapenade pressed in ciabatta bread.",
    image: "/images/truffle_pasta.jpg",
    bestseller: false
  },
  {
    id: 10,
    name: "Wild Berry Cheesecake",
    category: "desserts",
    price: 360,
    diet: "veg",
    tags: ["Chef's Special"],
    description: "Creamy baked New York style cheesecake topped with compote of fresh blueberries, raspberries & fresh mint.",
    image: "/images/berry_cheesecake.jpg",
    bestseller: true
  },
  {
    id: 11,
    name: "Warm Belgian Chocolate Lava Cake",
    category: "desserts",
    price: 350,
    diet: "veg",
    tags: [],
    description: "Decadent dark chocolate molten cake with oozing center, paired with artisanal Madagascar vanilla bean ice cream.",
    image: "/images/berry_cheesecake.jpg",
    bestseller: false
  },
  {
    id: 12,
    name: "Hibiscus Passionfruit Iced Tea",
    category: "refreshers",
    price: 220,
    diet: "vegan",
    tags: ["Vegan", "Gluten-Free"],
    description: "Organic steeped hibiscus flowers, passionfruit nectar, fresh mint leaves & sparkling spring water.",
    image: "/images/artisanal_coffee.jpg",
    bestseller: true
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Sun-Dappled Garden Lawns",
    category: "lawn",
    desc: "Spacious green open-air seating nestled under lush pergolas at Imamguda",
    url: "/images/hero_lawn.jpg"
  },
  {
    id: 2,
    title: "Warm Evening Fairy Lights",
    category: "ambience",
    desc: "Tranquil nighttime dining with glowing string lights and cozy garden couches",
    url: "/images/evening_lawn.jpg"
  },
  {
    id: 3,
    title: "Artisanal Pour-Over & Espresso",
    category: "coffee",
    desc: "Single-origin beans roasted and brewed by expert baristas",
    url: "/images/artisanal_coffee.jpg"
  },
  {
    id: 4,
    title: "Gourmet Avocado Eggs Benedict",
    category: "food",
    desc: "Fresh morning sourdough brunch crafted with local organic ingredients",
    url: "/images/avocado_toast.jpg"
  },
  {
    id: 5,
    title: "Truffle & Wild Mushroom Pasta",
    category: "food",
    desc: "Hand-rolled fettuccine tossed in aromatic shaved black truffle sauce",
    url: "/images/truffle_pasta.jpg"
  },
  {
    id: 6,
    title: "Freshly Baked Wild Berry Cheesecake",
    category: "food",
    desc: "Classic New York slice with homemade wild berry coulis",
    url: "/images/berry_cheesecake.jpg"
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Vikram R.",
    role: "Highway Traveler & Coffee Enthusiast",
    rating: 5,
    comment: "Stopped here right after exiting ORR Exit 14 on the way from Shamshabad airport. The lush garden setting at Imamguda is unbelievable! Best Spanish Latte and peaceful vibe."
  },
  {
    id: 2,
    name: "Ananya & Milo",
    role: "Pet Owner & Weekend Diner",
    rating: 5,
    comment: "Hands down the best pet-friendly cafe in Hyderabad! My golden retriever loved running around the open lawn while we enjoyed the avocado toast and truffle pasta."
  },
  {
    id: 3,
    name: "Dr. Sandeep K.",
    role: "Local Family Gathering",
    rating: 5,
    comment: "Perfect spot for family weekend breakfasts. Ample parking, warm staff, and quick WhatsApp booking. The evening garden lights make it extra special."
  }
];
