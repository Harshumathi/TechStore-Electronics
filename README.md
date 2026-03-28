# TechStore Electronics ◆

A modern, full-featured ecommerce frontend for premium electronics — built with **Next.js 15**, **TypeScript**, and **React 19**.

🌐 **Live Demo:** [tech-store-electronics.vercel.app](https://tech-store-electronics.vercel.app)

---

## Screenshot

<img width="1899" height="894" alt="Screenshot 2026-03-29 004315" src="https://github.com/user-attachments/assets/381f1fc4-750e-4c32-b3bf-22c57f5693ef" />


---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework — SSR, routing, image optimization |
| React 19 | UI library |
| TypeScript | Type safety |
| CSS (Custom) | Styling with dark/light theme support |
| Vercel | Deployment |

---

## Features

- **Server Side Rendering** — Product data is fetched on the server before the page reaches the browser. Users see products immediately on first load with no loading spinner.
- **Dark / Light Mode** — Toggle between themes, synced with body class
- **Product Search** — Search by product name or brand in real time
- **Brand Filter** — Filter products by brand
- **Sort** — Sort by price (low to high, high to low) or top rated
- **Add to Cart** — Add products, increase/decrease quantity, remove items
- **Wishlist** — Save products to wishlist, move to cart from wishlist
- **Persistent State** — Cart and wishlist saved to localStorage, survives page refresh
- **Cart Sidebar** — Slide-in cart with grand total and checkout button
- **Wishlist Sidebar** — Slide-in wishlist with add to cart functionality
- **Best Sellers Section** — Highlighted best selling products
- **Responsive Design** — Works across desktop and mobile
- **Contact Section** — Support contact form

---

## Architecture

This project is built using the **Next.js App Router** pattern with a clear separation between Server and Client Components.

```
app/
├── layout.tsx        ← Root HTML shell
├── page.tsx          ← Server Component — loads product data on server
├── ClientShell.tsx   ← Client Component — manages all state and interactivity
└── globals.css

components/
├── NAVBAR/           ← NavBar, NavLogo, NavLinks, Toggle, Cart, Wishlist
├── HEROSECTION/      ← Hero banner
├── SECTIONS/         ← BestSellers, AllProducts, ProductCard, Contact
├── CartSidebar.tsx
├── WishlistSidebar.tsx
└── Footer.tsx

lib/
└── products.ts       ← Async data fetching function (server-side)
```

### Why Next.js over plain React?

In plain React, everything renders in the browser — the user sees a blank screen until JavaScript loads and data fetches. For an ecommerce site this hurts both user experience and SEO.

With Next.js, `page.tsx` is a **Server Component** that runs on the server before the page reaches the browser:

```tsx
// app/page.tsx — runs on SERVER
async function getProducts() {
  return products  // data ready before browser loads
}

export default async function Home() {
  const products = await getProducts()
  return <ClientShell products={products} />
}
```

All interactive logic (cart, wishlist, search, dark mode) lives in `ClientShell.tsx` which is a **Client Component** (`"use client"`). This separation is the core pattern of Next.js App Router.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Harshumathi/TechStore-Electronics.git

# Navigate into the project
cd TechStore-Electronics

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

This project is deployed on **Vercel** — the platform built for Next.js.

Every push to the `main` branch automatically triggers a new deployment.

🌐 [tech-store-electronics.vercel.app](https://tech-store-electronics.vercel.app)

---

## Project Background

This project was originally built with **React + TypeScript + Vite** and later migrated to **Next.js App Router** to implement Server Side Rendering, improve performance, and align with industry standards for modern ecommerce applications.

The migration involved:
- Converting `App.tsx` into a Server Component (`page.tsx`) + Client Component (`ClientShell.tsx`)
- Adding `"use client"` directives to all interactive components
- Replacing `<img>` tags with `next/image` for automatic optimization
- Replacing `<a>` tags with `next/link` for client-side navigation
- Wrapping data loading in an async server function (`lib/products.ts`)

---

## Author

**Harshumathi**
- GitHub: [@Harshumathi](https://github.com/Harshumathi)
- Live Project: [tech-store-electronics.vercel.app](https://tech-store-electronics.vercel.app)
