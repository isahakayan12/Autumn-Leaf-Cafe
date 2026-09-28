# 🌿 Autumn Leaf Cafe (Thukkuguda) — Web Application

> **A Lush Garden Escape in Thukkuguda**  
> Artisanal Roastery, European Comfort Food & Pet-Friendly Lawns near ORR Exit 14 & Shamshabad Airport (RGIA).

---

## 📅 10-Day Project Roadmap & Status

| Day | Focus & Work Planned | Deliverables | Status |
|---|---|---|---|
| **Day 1** | **Requirement Gathering & Research** | Requirement document + project scope | ✅ Completed |
| **Day 2** | **Competitor & Market Research** | Competitor analysis + feature list ([`COMPETITOR_ANALYSIS.md`](./COMPETITOR_ANALYSIS.md)) | ✅ Completed |
| **Day 3** | **Content Collection & Website Structure** | Content sheet + sitemap | ✅ Completed |
| **Day 4** | **UI/UX Design** | Website wireframe/UI design | ⏳ Pending |
| **Day 5** | **Homepage Development** | Functional homepage | ⏳ Pending |
| **Day 6** | **Menu & Gallery Development** | Menu + gallery pages/sections | ⏳ Pending |
| **Day 7** | **About, Contact & Location** | Complete inner pages | ⏳ Pending |
| **Day 8** | **Responsive Design & Functionality** | Responsive functional website | ⏳ Pending |
| **Day 9** | **Testing, SEO & Performance** | Tested and optimized website | ⏳ Pending |
| **Day 10** | **Final Review & Deployment** | Final website + deployment + project documentation | ⏳ Pending |

*Detailed breakdown available in [`PROJECT_PLAN.md`](./PROJECT_PLAN.md)*.

---

## ☕ Overview

**Autumn Leaf Cafe** is a modern, responsive web application crafted for the Thukkuguda branch in Hyderabad. Designed to deliver an elegant digital experience, it showcases artisanal coffee, fresh brunch menu options, lush outdoor ambience photos, location details, customer feedback, and an instant **WhatsApp Table Reservation Engine**.

---

## ✨ Features & Highlights

* 📱 **Instant WhatsApp Table Reservations**: Direct modal booking engine formatting date, time, party size, and seating preference (Garden vs. Indoor) sent straight to café management via WhatsApp.
* 🍔 **Interactive Menu Section**: Search and filter by category (Breakfast, Artisan Coffee, Mains, Desserts, Refreshers) with dietary icons (Veg, Non-Veg, Vegan, Gluten-Free) and Bestseller callouts.
* 🌳 **Ambience & Photo Gallery**: High-resolution showcase of sun-dappled lawns, evening fairy-light seating, and artisanal coffee prep.
* 📍 **Location & Live Hours**: Integrated open/closed indicator, Google Maps directions, and proximity highlights (2 mins off ORR Exit 14, 15 mins from RGIA Shamshabad Airport).
* ⭐ **Customer Testimonials**: Highlighted Google ratings (4.9 ★) and verified visitor reviews.
* 🎨 **Bespoke Theme**: Custom Tailwind design system using Forest Green, Warm Amber/Gold, and Linen Cream palette.

---

## 🛠️ Tech Stack

* **Frontend**: React 18
* **Build Tool**: Vite 5
* **Styling**: Tailwind CSS + PostCSS
* **Icons**: Lucide React
* **Deployment**: GitHub Pages / Vercel / Netlify ready

---

## 🚀 Getting Started Locally

### Prerequisites
* Node.js (v18+ recommended)
* npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/isahakayan12/Autumn-Leaf-Cafe.git
   cd Autumn-Leaf-Cafe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
Autumn-Leaf-Cafe/
├── public/
│   └── images/              # Media assets & dish photos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                   # Sticky navigation bar
│   │   ├── Hero.jsx                     # Header section & CTAs
│   │   ├── HighwayBanner.jsx            # ORR Exit 14 / Airport highlights
│   │   ├── MenuSection.jsx              # Interactive menu & search
│   │   ├── AmbienceGallery.jsx          # Photo gallery with modal viewer
│   │   ├── LocationSection.jsx          # Live hours & map embed
│   │   ├── ReviewsSection.jsx           # Customer reviews
│   │   ├── WhatsAppReservationModal.jsx # WhatsApp booking engine
│   │   └── Footer.jsx                   # Contact & social links
│   ├── data/
│   │   └── cafeData.js                  # Café menu, info, & gallery dataset
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── PROJECT_PLAN.md           # 10-Day Project Roadmap & Status
├── README.md                 # Documentation
├── tailwind.config.js
└── vite.config.js
```

---

## 📜 License

This project is created for **Autumn Leaf Cafe**. All rights reserved.
