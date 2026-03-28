# Project structure — Next.js + React + TypeScript (current)

The app runs on **Next.js 15** (App Router) with **React 19** and **TypeScript**. Product data lives in **`src/data.ts`**; UI is split between the **App Router** shell and shared **`components/`**.

---

## Top-level layout

```
mobilefd/
├── next.config.ts
├── package.json
├── tsconfig.json
├── eslint.config.js
├── next-env.d.ts
├── public/
│   ├── favicon.svg
│   └── images/          (optional local assets)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, metadata, globals.css
│   │   ├── page.tsx        # Home route: UserProvider + ClientShell + data
│   │   ├── globals.css
│   │   ├── App.css         # Main storefront styles (imported by ClientShell)
│   │   └── ClientShell.tsx # client: cart, wishlist, filters, theme, product grid
│   ├── data.ts             # Product catalog (seed data)
│   └── assets/
├── types/
│   ├── index.ts
│   └── types.ts            # Product, CartItem
├── Context/
│   ├── UserContext.tsx
│   └── UserProvider.tsx
└── components/
    ├── NAVBAR/
    ├── HEROSECTION/
    ├── SECTIONS/
    ├── CartSidebar.tsx
    ├── WishlistSidebar.tsx
    ├── Footer.tsx
    └── ...
```

---

## Entry flow

| Piece | Role |
|--------|------|
| `src/app/page.tsx` | Server Component: imports `products` from `src/data.ts`, renders `UserProvider` → `ClientShell`. |
| `Context/UserProvider.tsx` | Client: provides user display name via React Context. |
| `src/app/ClientShell.tsx` | Client: storefront state (cart, wishlist, search, theme) and composition of `components/`. |
| `src/app/layout.tsx` | HTML shell, `<body>`, global CSS, favicon metadata. |

---

## Types and data

| File | Role |
|------|------|
| `types/types.ts` | `Product`, `CartItem` interfaces. |
| `src/data.ts` | Default export: array of `Product` (catalog). |

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
