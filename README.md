# Thamili Book Haven – React (Vite)

A feature-rich bookstore frontend built with React + Vite. Includes cart and checkout, search and filters, wishlist, reviews, order history with status timeline, admin product management, and more.

## ✨ Features

- Storefront
  - Home, Categories, New Arrivals, Bestsellers
  - Live search with filters/sorting and type‑ahead suggestions
  - Recently Viewed on Home (tracked from book details)
  - Lazy‑loading images; responsive, mobile-friendly header
- Product
  - Book details page with quantity selector and persistent reviews (localStorage)
  - Average rating updates live as reviews are submitted
- Cart & Checkout
  - Cart with quantity controls and total
  - 3‑step checkout (Shipping → Payment → Review)
  - Coupons: `SAVE10` (10%) and `FLAT5` ($5)
  - Orders persisted (localStorage), redirect to Orders page on completion
- Orders
  - Order history list with items, shipping, totals, coupon applied
  - Status timeline (Processing → Shipped → Delivered) with quick status update
- Wishlist
  - Heart toggle on product cards and wishlist page (localStorage)
- Admin
  - Admin page at `/admin` to add/edit/delete books (localStorage store)
  - Storefront (New Arrivals / Bestsellers) consumes Admin books with fallback data
- Auth (demo)
  - Simple context with login/register/logout and header Home links on Login/Register pages

## 🗂️ Structure (relevant)

```
Thamili/book-shop/
  src/
    App.jsx
    Home.jsx
    Categories.jsx
    NewArrivals.jsx
    Bestsellers.jsx
    BookDetails.jsx
    SearchResults.jsx
    Cart.jsx
    Checkout.jsx
    Orders.jsx
    Wishlist.jsx
    Admin.jsx
    BooksStore.jsx
    Auth.jsx
    NotFound.jsx
    assets/
  README.md (this file)
```

## ▶️ Getting Started

Prerequisites:
- Node.js 18+ and npm 9+

Install and run (from the `Thamili/book-shop` directory):

```bash
npm install
npm run dev
```

PowerShell note (Windows):
- Use two commands instead of `cd ... && npm start`:
  - `cd "Thamili/book-shop"`
  - `npm run dev`

Vite dev server default: `http://localhost:5173` (check terminal output).

## 🔑 Demo Data & Persistence

- Books, Wishlist, Reviews, Orders use `localStorage`.
- Admin updates write to `books`.
- Recently Viewed stored in `recentlyViewed` (max 10).
- Reviews keyed by `reviews:<bookId>`.
- Orders stored under `orderHistory`.

## 🔐 Routes

- `/` Home
- `/categories` Categories
- `/new-arrivals` New Arrivals
- `/bestsellers` Bestsellers
- `/book/:bookId` Book Details
- `/search` Search Results (`?q=...`)
- `/cart` Cart
- `/checkout` Checkout
- `/orders` Order History (timeline)
- `/wishlist` Wishlist
- `/admin` Admin (local-only CRUD)
- `/login`, `/register` Auth screens
- `*` NotFound

## 🧭 Key Interactions

- Search:
  - Home header input supports Enter/click; `/search?q=term` shows results with filters/sorts.
  - Type‑ahead suggestions on Home via QuickSearch.
- Wishlist: click the ♥ on product cards; view at `/wishlist`.
- Reviews: submit on Book Details; average rating updates immediately.
- Coupons (Checkout Review step):
  - `SAVE10` → 10% off
  - `FLAT5` → $5 off
- Orders: view and adjust demo status on `/orders`.
- Admin: add/edit/delete products; storefront reflects changes.

## 🧩 Tech Stack

- React 18, Vite, React Router
- Context for Cart, Wishlist, Auth, Books store
- Framer Motion in Login/Register UI

## 🧱 Next Improvements

- Protect `/admin`, `/orders`, `/profile` behind real authentication
- Extract shared `Header` and translation constants
- Migrate inline styles to CSS modules or styled-components
- Backend API (Node/Express) + database for persistence
- Image optimization (sizes/formats) and skeleton loaders

## ⚙️ Scripts (typical Vite)

```jsonc
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

If these scripts aren’t present, add them to `package.json` in `Thamili/book-shop`.

## 🧪 Troubleshooting

- PowerShell `&&` not supported: run commands separately.
- `npm ENOENT package.json`: run commands inside `Thamili/book-shop`.
- Blank search: press Enter or click the search icon; Home also has type‑ahead.

---
Made with ❤️ for learning and rapid prototyping.
