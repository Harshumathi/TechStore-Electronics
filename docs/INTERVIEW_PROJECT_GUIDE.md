# Tech Store (MobileFD) — Interview Guide

Use this doc to prepare your narration, screen recording, and answers. It is written so you can speak naturally in an interview without memorizing jargon.

---

## One-line pitch

“I built a mobile-first electronics storefront in **Next.js 15, React 19, and TypeScript**—product discovery, cart, wishlist, and theme toggle—with persistent state in `localStorage`. The codebase is typed end-to-end (`types/`, `src/data.ts`, `.tsx` components).”

---

## What the app does (business language)

- **Catalog:** Browse gadgets with search, brand filter, and sort (price, rating).
- **Merchandising:** Highlights best sellers separate from the full grid (similar to Amazon/Flipkart sections).
- **Cart & wishlist:** Add/remove, quantity controls, totals; sidebar UX for quick checkout-style flow.
- **Experience:** Dark/light mode, responsive layout, scroll-to-top from footer.

---

## Tech stack (say this clearly)

| Layer | Choice | Why it matters in interviews |
|--------|--------|------------------------------|
| Framework | Next.js 15 (App Router) | File-based routes, `layout` vs `page`, server/client split |
| UI | React 19 | Component model, hooks, controlled state |
| Styling | CSS (global + component-scoped patterns) | You understand layout and theming without relying only on a UI kit |
| State | React `useState` / `useEffect`, Context for user display name | Local UI state + light global context |
| Persistence | `localStorage` for cart and wishlist | Shows you know browser APIs and sync effects |
| Types | TypeScript (`strict`) | Safer props/state and clearer data shapes (`types/`, `data.ts`) |

---

## TypeScript + Next.js — what to say

- **TypeScript** gives you **types for props, state, and product data** (`types/`, typed `src/data.ts`) so refactors and interviews are easier to defend.
- **Next.js** provides **App Router** (`layout.tsx`, `page.tsx`), a production build, and a clear place to grow (more routes, metadata, images) without a separate backend in this project.

**Honest line for juniors:** “The storefront UI is mostly client-side: `ClientShell` holds cart and filters; the server `page` passes static catalog data from `data.ts`. I’d add a **real API route or external API** when the catalog needs to be dynamic.”

---

## What interviewers often check (for this kind of project)

1. **Can you explain your state flow?** Where cart lives, how it updates, what happens on refresh (`localStorage`).
2. **Trade-offs:** Why Context vs prop drilling for user name; why not Redux yet (small app → YAGNI).
3. **Performance instinct:** List keys, avoiding unnecessary re-renders (you can mention `useMemo`/`useCallback` if you add them).
4. **Accessibility & UX:** Focus trap in sidebars (if you add it), button types, contrast in dark mode.
5. **TypeScript-specific:** Where `Product` vs `CartItem` types are defined; why `strict` mode helps catch mistakes.
6. **Growth path:** “Next I’d add **routes** (e.g. React Router or Next.js), **product detail URLs**, and a **real API** for catalog/checkout.”

---

## Recording tips (tonight)

1. **30 seconds:** Problem + solution (mobile gadget store, Next.js + React + TypeScript).
2. **90 seconds:** Live demo — search, filter, cart, wishlist, theme toggle, refresh to show persistence.
3. **60 seconds:** Open repo — point to `src/app/page.tsx`, `src/app/ClientShell.tsx`, `types/`, `src/components/`, and where cart state is defined (`ClientShell`).
4. Close with one **improvement you’d add next** (e.g. product detail route, API, tests).

---

## Questions they might ask — short answers

**“Why TypeScript?”**  
Fewer prop/state bugs, clearer contracts for products and cart lines, easier onboarding for teams.

**“Where would you put a real backend?”**  
A separate API (REST or tRPC) or a framework’s route handlers; cart would move from `localStorage` to authenticated server state for multi-device carts.

**“How do you handle images at scale?”**  
CDN URLs, fixed dimensions or aspect ratio, `loading="lazy"` on `<img>`, or a framework image component if you adopt one later.

---

## Folder map (current)

- `src/app/page.tsx` — Home route: loads `products` from `src/data.ts`, wraps `UserProvider` + `ClientShell`.
- `src/app/ClientShell.tsx` — Client shell: cart, wishlist, filters, theme, product sections.
- `src/app/layout.tsx` — Root layout, metadata, global CSS.
- `types/types.ts` — Shared TypeScript types (`Product`, `CartItem`).
- `src/data.ts` — Product seed data (replace with API when learning backend).
- `components/` — UI sections (navbar, hero, product cards, sidebars).
- `Context/` — React Context for shared user display name.

---

*You built this to learn; in the interview, emphasize clarity, trade-offs, and what you’d do next—that often matters more than listing every library.*
