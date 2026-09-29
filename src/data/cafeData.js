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
  {
    "id": "all",
    "label": "All Items"
  },
  {
    "id": "breakfast",
    "label": "Breakfast"
  },
  {
    "id": "hot-coffee",
    "label": "Hot Coffees"
  },
  {
    "id": "cold-coffee",
    "label": "Cold Coffees"
  },
  {
    "id": "small-plates",
    "label": "Small Plates"
  },
  {
    "id": "pasta-risotto",
    "label": "Pasta & Risotto"
  },
  {
    "id": "big-plates",
    "label": "Big Plates"
  },
  {
    "id": "rice-bowls",
    "label": "Rice Bowls"
  },
  {
    "id": "sandwiches",
    "label": "Sandwiches"
  },
  {
    "id": "burgers",
    "label": "Burgers"
  },
  {
    "id": "salads",
    "label": "Salads"
  },
  {
    "id": "soups",
    "label": "Soups"
  },
  {
    "id": "desserts",
    "label": "Desserts"
  },
  {
    "id": "ice-teas",
    "label": "Ice Teas"
  },
  {
    "id": "teas",
    "label": "Teas"
  },
  {
    "id": "beverages",
    "label": "Beverages"
  },
  {
    "id": "milkshakes",
    "label": "Milkshakes"
  },
  {
    "id": "smoothies",
    "label": "Smoothies"
  }
];

export const MENU_ITEMS = [
  {
    "id": 1,
    "name": "Local Fresh Juice",
    "category": "beverages",
    "price": 180,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Fresh local fruit juice.",
    "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 2,
    "name": "Lemonade",
    "category": "beverages",
    "price": 120,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Refreshing lemonade.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 3,
    "name": "Bubble Gum Mojito",
    "category": "beverages",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Bubble-gum flavored mojito.",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 4,
    "name": "Watermelon Mojito",
    "category": "beverages",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Watermelon-based mojito.",
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 5,
    "name": "Blueberry Cheesecake",
    "category": "desserts",
    "price": 340,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Cheesecake with blueberry flavor/topping.",
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 6,
    "name": "Strawberry Cheesecake",
    "category": "desserts",
    "price": 340,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Cheesecake with strawberry flavor/topping.",
    "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 7,
    "name": "Caramel Cheese Cake",
    "category": "desserts",
    "price": 340,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Cheesecake with caramel.",
    "image": "https://images.unsplash.com/photo-1508737027454-e6454ef46afd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 8,
    "name": "Dark Chocolate Mousse",
    "category": "desserts",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Dark chocolate mousse.",
    "image": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 9,
    "name": "Milk Chocolate Mousse",
    "category": "desserts",
    "price": 300,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Milk chocolate mousse.",
    "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 10,
    "name": "Tiramisu",
    "category": "desserts",
    "price": 320,
    "diet": "non-veg",
    "tags": [
      "Contains Egg"
    ],
    "description": "Classic tiramisu.",
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 11,
    "name": "Classic Caesar Salad",
    "category": "salads",
    "price": 400,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Classic Caesar-style salad.",
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 12,
    "name": "Quinoa Salad",
    "category": "salads",
    "price": 400,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Quinoa-based salad.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 13,
    "name": "Tex-Mex Salad",
    "category": "salads",
    "price": 370,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Tex-Mex inspired salad.",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 14,
    "name": "Butter Chicken Rice Bowl",
    "category": "rice-bowls",
    "price": 610,
    "diet": "non-veg",
    "tags": [
      "Non-Veg",
      "Bestseller"
    ],
    "description": "Butter chicken served with rice.",
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 15,
    "name": "Korean Katsu Rice Bowl",
    "category": "rice-bowls",
    "price": 610,
    "diet": "non-veg",
    "tags": [
      "Non-Veg",
      "Bestseller"
    ],
    "description": "Korean-style katsu with rice.",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 16,
    "name": "Lamb Meat Rice Bowl",
    "category": "rice-bowls",
    "price": 780,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Lamb meat served with rice.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 17,
    "name": "Paneer Butter Masala Rice",
    "category": "rice-bowls",
    "price": 570,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Paneer butter masala with rice.",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 18,
    "name": "Thai Curry Non-Veg",
    "category": "rice-bowls",
    "price": 610,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Thai curry with non-vegetarian protein and rice.",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 19,
    "name": "Thai Curry Veg",
    "category": "rice-bowls",
    "price": 550,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Vegetarian Thai curry with rice.",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 20,
    "name": "Affogato",
    "category": "hot-coffee",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Espresso served with ice cream.",
    "image": "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 21,
    "name": "Hot Chocolate",
    "category": "hot-coffee",
    "price": 250,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Hot chocolate.",
    "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 22,
    "name": "Espresso",
    "category": "hot-coffee",
    "price": 160,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Espresso coffee.",
    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 23,
    "name": "Doppio",
    "category": "hot-coffee",
    "price": 210,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Double espresso.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 24,
    "name": "Americano",
    "category": "hot-coffee",
    "price": 210,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Espresso with hot water.",
    "image": "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 25,
    "name": "Latte",
    "category": "hot-coffee",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Espresso with steamed milk.",
    "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 26,
    "name": "Cappuccino",
    "category": "hot-coffee",
    "price": 220,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Espresso with steamed milk and foam.",
    "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 27,
    "name": "Mocha",
    "category": "hot-coffee",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Chocolate-flavored espresso drink.",
    "image": "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 28,
    "name": "Flat White",
    "category": "hot-coffee",
    "price": 210,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Espresso with steamed milk.",
    "image": "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 29,
    "name": "Grilled Cottage Cheese Steak",
    "category": "big-plates",
    "price": 570,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Grilled cottage cheese prepared as a steak.",
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 30,
    "name": "Seafood Casserole",
    "category": "big-plates",
    "price": 680,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Mixed seafood casserole.",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 31,
    "name": "Sunday Roast Chicken",
    "category": "big-plates",
    "price": 610,
    "diet": "non-veg",
    "tags": [
      "Non-Veg",
      "Bestseller"
    ],
    "description": "Roast chicken.",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 32,
    "name": "Creamy Chicken Picatta",
    "category": "big-plates",
    "price": 590,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Chicken piccata with creamy sauce.",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 33,
    "name": "Nasi Goreng Chicken",
    "category": "big-plates",
    "price": 530,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Indonesian-style fried rice with chicken.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 34,
    "name": "French Fries",
    "category": "small-plates",
    "price": 220,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Crispy French fries.",
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 35,
    "name": "Chicken Wings",
    "category": "small-plates",
    "price": 420,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Chicken wings.",
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 36,
    "name": "Cheese Poppers",
    "category": "small-plates",
    "price": 420,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Crispy cheese poppers.",
    "image": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 37,
    "name": "Chipotle Chicken Skewers",
    "category": "small-plates",
    "price": 490,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Chicken skewers with chipotle seasoning.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 38,
    "name": "Fish & Chips",
    "category": "small-plates",
    "price": 470,
    "diet": "non-veg",
    "tags": [
      "Non-Veg",
      "Bestseller"
    ],
    "description": "Fried fish with chips.",
    "image": "https://images.unsplash.com/photo-1579208030886-b937da0925dc?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 39,
    "name": "Mediterranean Prawns",
    "category": "small-plates",
    "price": 550,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Mediterranean-style prawns.",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 40,
    "name": "Mexican Nacho's Bowl",
    "category": "small-plates",
    "price": 400,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Mexican-style nacho bowl.",
    "image": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 41,
    "name": "Overload Fries",
    "category": "small-plates",
    "price": 400,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Loaded/overloaded fries.",
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 42,
    "name": "Moroccan Fish Kabab",
    "category": "small-plates",
    "price": 510,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Moroccan-style fish kebab.",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 43,
    "name": "Avocado Toast",
    "category": "small-plates",
    "price": 490,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Toast topped with avocado.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 44,
    "name": "Dynamite Prawn",
    "category": "small-plates",
    "price": 510,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Prawns with dynamite-style sauce.",
    "image": "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 45,
    "name": "Meaty Canape Platter",
    "category": "small-plates",
    "price": 430,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Assorted meat canapes.",
    "image": "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 46,
    "name": "Turkish Smoked Lamb Kebab",
    "category": "small-plates",
    "price": 570,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Smoked lamb kebab.",
    "image": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 47,
    "name": "Veg Canape Platter",
    "category": "small-plates",
    "price": 380,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Assorted vegetarian canapes.",
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 48,
    "name": "Wild Mushroom Toast",
    "category": "small-plates",
    "price": 400,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Toast with wild mushrooms.",
    "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 49,
    "name": "Afghani Chicken",
    "category": "small-plates",
    "price": 470,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Afghani-style chicken.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 50,
    "name": "Chicken Kung Pao",
    "category": "small-plates",
    "price": 460,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Kung Pao chicken.",
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 51,
    "name": "Fried Chicken Tenders",
    "category": "small-plates",
    "price": 430,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Breaded fried chicken tenders.",
    "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 52,
    "name": "Smoked Chicken Kabab",
    "category": "small-plates",
    "price": 490,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Smoked chicken kebab.",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 53,
    "name": "Veg Tempura",
    "category": "small-plates",
    "price": 410,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Crispy tempura vegetables.",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 54,
    "name": "Tuscon Ferro Soup",
    "category": "soups",
    "price": 370,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Soup listed under this menu name.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 55,
    "name": "Chicken Clear Soup",
    "category": "soups",
    "price": 400,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Clear chicken soup.",
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 56,
    "name": "Hungarian Mushroom Soup",
    "category": "soups",
    "price": 380,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Hungarian-style mushroom soup.",
    "image": "https://images.unsplash.com/photo-1603105037880-880cd4edfb5d?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 57,
    "name": "Tomato & Basil Soup",
    "category": "soups",
    "price": 350,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Tomato soup with basil.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 58,
    "name": "Apple Cinnamon Stuffed French Toast",
    "category": "breakfast",
    "price": 370,
    "diet": "non-veg",
    "tags": [
      "Contains Egg"
    ],
    "description": "French toast stuffed/flavored with apple and cinnamon.",
    "image": "https://images.unsplash.com/photo-1484723091479-0097771360da?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 59,
    "name": "Fruit Bowl",
    "category": "breakfast",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Assorted fresh fruit.",
    "image": "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 60,
    "name": "Omelette",
    "category": "breakfast",
    "price": 170,
    "diet": "non-veg",
    "tags": [
      "Contains Egg"
    ],
    "description": "Egg omelette.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 61,
    "name": "Grilled Cheese Sandwich",
    "category": "sandwiches",
    "price": 420,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Grilled cheese sandwich.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 62,
    "name": "Basil Pesto Veg Medley Sandwich",
    "category": "sandwiches",
    "price": 440,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Vegetable sandwich with basil pesto.",
    "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 63,
    "name": "Spinach & Corn Cheese Sandwich",
    "category": "sandwiches",
    "price": 400,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Spinach, corn and cheese sandwich.",
    "image": "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 64,
    "name": "Grilled Chicken Sandwich",
    "category": "sandwiches",
    "price": 440,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Grilled chicken sandwich.",
    "image": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 65,
    "name": "Basil Pesto Non-Veg Medley",
    "category": "sandwiches",
    "price": 490,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Non-vegetarian sandwich with basil pesto.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 66,
    "name": "Paneer Tikka Sandwich",
    "category": "sandwiches",
    "price": 420,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Paneer tikka sandwich.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 67,
    "name": "Smoked Chicken Sandwich",
    "category": "sandwiches",
    "price": 490,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Smoked chicken sandwich.",
    "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 68,
    "name": "Jamaican Jerk Chicken Burger",
    "category": "burgers",
    "price": 490,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Chicken burger with Jamaican jerk seasoning.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 69,
    "name": "Chicken Cheese Burger",
    "category": "burgers",
    "price": 510,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Chicken burger with cheese.",
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 70,
    "name": "Classic Lamb Burger",
    "category": "burgers",
    "price": 550,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Lamb burger.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 71,
    "name": "Crispy Chicken Burger",
    "category": "burgers",
    "price": 490,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Crispy chicken burger.",
    "image": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 72,
    "name": "Crispy Fish Burger",
    "category": "burgers",
    "price": 490,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Crispy fish burger.",
    "image": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 73,
    "name": "Mushroom Alfredo",
    "category": "pasta-risotto",
    "price": 450,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Creamy Alfredo pasta with mushrooms.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 74,
    "name": "Aglio-e-olio",
    "category": "pasta-risotto",
    "price": 420,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Pasta with garlic and olive oil.",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 75,
    "name": "Basil Pesto Pasta",
    "category": "pasta-risotto",
    "price": 470,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Pasta with basil pesto.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 76,
    "name": "Classic Pulled Chicken Sundried Tomato Risotto",
    "category": "pasta-risotto",
    "price": 580,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Risotto with pulled chicken and sundried tomato.",
    "image": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 77,
    "name": "Creamy Saffron Shrimps Risotto",
    "category": "pasta-risotto",
    "price": 610,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Creamy saffron risotto with shrimp.",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 78,
    "name": "Mac & Cheese",
    "category": "pasta-risotto",
    "price": 490,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Macaroni with cheese sauce.",
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 79,
    "name": "Truffle Mushroom Risotto",
    "category": "pasta-risotto",
    "price": 560,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Risotto with truffle and mushrooms.",
    "image": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 80,
    "name": "Peri-Peri Chicken Pasta",
    "category": "pasta-risotto",
    "price": 540,
    "diet": "non-veg",
    "tags": [
      "Non-Veg"
    ],
    "description": "Pasta with peri-peri chicken.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 81,
    "name": "Lemon Ice Tea",
    "category": "ice-teas",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Lemon iced tea.",
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 82,
    "name": "Peach Ice Tea",
    "category": "ice-teas",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Peach iced tea.",
    "image": "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 83,
    "name": "Red Grape Ice Tea",
    "category": "ice-teas",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Red grape iced tea.",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 84,
    "name": "Matcha Ice Tea",
    "category": "ice-teas",
    "price": 290,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Iced matcha tea.",
    "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 85,
    "name": "Taro Ice Tea",
    "category": "ice-teas",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Taro iced tea.",
    "image": "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 86,
    "name": "Cold Coffee",
    "category": "cold-coffee",
    "price": 280,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Chilled coffee.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 87,
    "name": "Hot Buttered Toffee Coffee",
    "category": "cold-coffee",
    "price": 290,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Coffee with buttered toffee flavor.",
    "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 88,
    "name": "Chilled Black Coffee",
    "category": "cold-coffee",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Chilled black coffee.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 89,
    "name": "2-Milk Cold Coffee",
    "category": "cold-coffee",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Cold coffee prepared with two types of milk.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 90,
    "name": "Iced Latte",
    "category": "cold-coffee",
    "price": 320,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Iced latte.",
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 91,
    "name": "Iced Mocha",
    "category": "cold-coffee",
    "price": 340,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Iced mocha.",
    "image": "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 92,
    "name": "Chocolate Milkshake",
    "category": "milkshakes",
    "price": 290,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Chocolate milkshake.",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 93,
    "name": "Strawberry Milkshake",
    "category": "milkshakes",
    "price": 290,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Strawberry milkshake.",
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 94,
    "name": "Coffee Brownie Shake",
    "category": "milkshakes",
    "price": 350,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Coffee and brownie milkshake.",
    "image": "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 95,
    "name": "Oreo Shake",
    "category": "milkshakes",
    "price": 290,
    "diet": "veg",
    "tags": [
      "Vegetarian",
      "Bestseller"
    ],
    "description": "Oreo milkshake.",
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    "bestseller": true
  },
  {
    "id": 96,
    "name": "Otto \u2014 Watermelon, Basil & Lime",
    "category": "smoothies",
    "price": 270,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Watermelon, basil and lime cooler.",
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 97,
    "name": "Apple Cinnamon Green Tea",
    "category": "teas",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Green tea with apple and cinnamon.",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 98,
    "name": "Peach Oolong Tea",
    "category": "teas",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Peach-flavored oolong tea.",
    "image": "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 99,
    "name": "Lavender Green Tea",
    "category": "teas",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Green tea with lavender.",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 100,
    "name": "Jasmine Tea",
    "category": "teas",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Jasmine tea.",
    "image": "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 101,
    "name": "Chamomile Green Tea",
    "category": "teas",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Chamomile green tea.",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
  },
  {
    "id": 102,
    "name": "Hibiscus Green Tea",
    "category": "teas",
    "price": 230,
    "diet": "veg",
    "tags": [
      "Vegetarian"
    ],
    "description": "Hibiscus green tea.",
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    "bestseller": false
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
