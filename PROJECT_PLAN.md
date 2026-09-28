# 📅 Autumn Leaf Cafe — 10-Day Project Roadmap & Execution Plan

This document outlines the 10-day execution methodology, work planned, deliverables, and status for the **Autumn Leaf Cafe (Thukkuguda)** web application project.

---

## 🗓️ 10-Day Execution Breakdown

| Day | Focus & Work Planned | Key Deliverables Generated | Status |
|---|---|---|---|
| **Day 1** | **Requirement Gathering & Research**<br>Understand cafe business goals, target customer personas (highway travellers, pet owners, brunch diners), location advantage (ORR Exit 14 & RGIA Airport), timings, contact details, and website objectives. | Requirement document & project scope specification | ✅ Completed |
| **Day 2** | **Competitor & Market Research**<br>Analyze competitor cafe websites in Hyderabad. Identify essential features: direct WhatsApp booking, filterable menu, ambience photo gallery, live opening hours, and clear dietary indicators. | Competitor analysis matrix & feature list ([`COMPETITOR_ANALYSIS.md`](./COMPETITOR_ANALYSIS.md)) | ✅ Completed |
| **Day 3** | **Content Collection & Website Structure**<br>Collect cafe details, menu items with prices and dietary tags, high-resolution ambience images, customer reviews, and map coordinates. Design website sitemap structure. | Content dataset (`cafeData.js`) & sitemap architecture | ✅ Completed |
| **Day 4** | **UI/UX Design & Design System**<br>Establish visual aesthetics: Forest Green (`#1b3323`), Warm Amber (`#d4a359`), and Linen (`#fdfbf7`). Select typography, spacing system, component library, and responsive layouts. | UI design system, Tailwind configuration (`tailwind.config.js`) | ⏳ Pending |
| **Day 5** | **Homepage Development**<br>Build navigation bar with mobile drawer, hero section with background visuals and CTAs, highway traveler callout banner, key highlights, and footer. | Functional homepage components (`Navbar.jsx`, `Hero.jsx`, `HighwayBanner.jsx`, `Footer.jsx`) | ⏳ Pending |
| **Day 6** | **Menu & Gallery Development**<br>Create interactive food/beverage section with category tabs, search filter, bestseller badges, dietary tags, and responsive photo gallery with full-screen lightbox modal. | Menu component (`MenuSection.jsx`) & Gallery (`AmbienceGallery.jsx`) | ⏳ Pending |
| **Day 7** | **About, Contact & Location**<br>Build location & hours section featuring live open/closed calculations, Google Maps embed, landmarks, customer testimonials, and direct WhatsApp reservation modal. | Location component (`LocationSection.jsx`), Reviews (`ReviewsSection.jsx`), & WhatsApp modal (`WhatsAppReservationModal.jsx`) | ⏳ Pending |
| **Day 8** | **Responsive Design & Functionality**<br>Optimize website layout across Mobile, Tablet, and Desktop. Test navigation links, interactive buttons, modal triggers, search filtering, and responsive images. | Fully responsive & interactive web application | ⏳ Pending |
| **Day 9** | **Testing, SEO & Performance**<br>Verify clean HTML hierarchy, OpenGraph social meta tags, image alt text, accessibility, asset caching, and fast bundle size via Vite production build. | Tested, SEO-optimized production build (`dist/`) | ⏳ Pending |
| **Day 10** | **Final Review & Deployment**<br>Perform complete codebase audit, verify build output (`npm run build`), write documentation (`README.md`), initialize Git, and deploy to GitHub repository. | Final codebase + GitHub deployment (`isahakayan12/Autumn-Leaf-Cafe`) | ⏳ Pending |

---

## 🛠️ Project Deliverables Summary

1. **Requirement Document (Day 1)**: Target audience analysis, RGIA Airport & ORR Exit 14 layover strategy, and core website objectives.
2. **Competitor & Feature List (Day 2)**: Feature list based on leading Hyderabad garden cafes.
3. **Content Architecture (Day 3)**: Structured dataset (`cafeData.js`) covering menu, gallery images, and business details.
4. **Design Tokens (Day 4)**: Tailwind CSS theme with Forest Green, Warm Amber, and Linen Cream color palette.
5. **Core Application Components (Days 5–7)**: Responsive navbar, hero banner, interactive menu, ambience gallery, live hours status, and WhatsApp reservation engine.
6. **Testing & Deployment (Days 8–10)**: Responsive verification, production build optimization, and GitHub deployment.
