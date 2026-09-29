# 🎨 Autumn Leaf Cafe — UI/UX Design System & Specification

This document details the complete UI/UX Design System, visual aesthetics, color tokens, typography scales, spacing tokens, and component guidelines for the **Autumn Leaf Cafe (Thukkuguda)** web application, established under **Day 4** of the project roadmap.

---

## 🎨 1. Core Visual Palette

The color system is crafted to evoke an organic, earthy garden café ambiance suitable for highway travelers, airport commuters, pet owners, and brunch guests.

| Token Name | Hex Code | Purpose & Usage |
|---|---|---|
| **Forest Green (Primary)** | `#1b3323` | Dominant brand color, header highlights, CTA buttons, dark cards, footer background. |
| **Warm Amber (Accent)** | `#d4a359` | Key accent color, badges, highlights, warm glow effects, star ratings, CTA borders. |
| **Linen Cream (Background)** | `#fdfbf7` | Primary web app body background, card containers, warm subtle contrast surfaces. |
| **Terracotta (Secondary Accent)** | `#c86d51` | Highway callout tags, bestseller badges, interactive focus highlights. |
| **Deep Midnight Green** | `#0c1a12` | Deep contrast background for dark sections (Reviews, Footer overlays). |

### Tonal Color Scales (Tailwind Configured)
- **`forest`**: `50 (#f2f7f4)` ... `900 (#1b3323)` ... `950 (#0c1a12)`
- **`amber` / `warmgold`**: `50 (#fcf8f0)` ... `500 (#d4a359)` ... `900 (#623e28)`
- **`linen`**: `50 (#fdfbf7)` ... `100 (#f8f4eb)` ... `500 (#c4a27f)`
- **`terracotta`**: `DEFAULT (#c86d51)` ... `hover (#b55c42)`

---

## 🔤 2. Typography Hierarchy

The typographic pairing balances classical editorial elegance (Serif) with modern, clean legibility (Sans-serif).

### Fonts Loaded
- **Primary Serif**: `Cormorant Garamond` (Headings `h1` to `h4`, quotes, brand titles)
- **Primary Sans**: `Plus Jakarta Sans` (Body copy, UI buttons, filter tabs, menu item prices)

### Typography Scale
- **Display Heading (`h1`)**: `text-4xl` to `text-6xl`, font-serif, leading-tight, tracking-tight.
- **Section Heading (`h2`)**: `text-3xl` to `text-4xl`, font-serif, font-bold.
- **Card Heading (`h3`)**: `text-xl` to `text-2xl`, font-serif, font-semibold.
- **Body Large**: `text-base` to `text-lg`, font-sans, line-height 1.6.
- **Body Regular**: `text-sm`, font-sans, text-slate-700 / linen-800.
- **Caption / Badge**: `text-xs`, font-sans, tracking-wider, uppercase, font-bold.

---

## 💎 3. Glassmorphism & Visual Effects

To create a premium, tactile feel, custom backdrop-blur glass utilities are defined:

1. **`glass-nav`**: `rgba(253, 251, 247, 0.90)` backdrop-blur (14px) — sticky navbar translucency.
2. **`glass-card`**: `rgba(255, 255, 255, 0.80)` backdrop-blur (12px) — light mode interactive cards.
3. **`glass-dark`**: `rgba(12, 26, 18, 0.75)` backdrop-blur (14px) — floating modals and dark panels.
4. **`glass-amber`**: `rgba(212, 163, 89, 0.12)` backdrop-blur (8px) — featured callouts & badges.

---

## 🧱 4. Component Token Specifications

### Button Standard
- **Primary Action (`.btn-primary`)**: Forest Green background (`#1b3323`), white text, amber subtle border, scale transform on click.
- **Amber Action (`.btn-amber`)**: Warm Amber background (`#d4a359`), dark forest text, amber glow shadow.
- **Secondary Action (`.btn-secondary`)**: Linen-200 background, forest text, subtle border.

### Badges & Micro-animations
- **Live Status Badge (`.badge-pulse`)**: Glowing pulse ring indicating real-time open status.
- **Float Animation (`.animate-float`)**: Gentle 5-second vertical keyframe oscillation for hero badges.

---

## 📱 5. Responsive Layout Breakpoints

- **Mobile**: `< 640px` (Single column, full-width drawers, compact touch targets)
- **Tablet**: `640px – 1024px` (Dual column grids, medium hero heights)
- **Desktop**: `> 1024px` (Multi-column grids, fixed max-w-7xl containers, expansive padding)

---

## 🎯 Status

- **UI Design System**: Established & Configured ✅
- **Tailwind Config**: Implemented (`tailwind.config.js`) ✅
- **CSS Tokens & Utilities**: Integrated (`src/index.css`) ✅
