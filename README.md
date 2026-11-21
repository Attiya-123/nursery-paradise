# Paradise Nursery

Paradise Nursery is an online houseplant shop built with **React** and **Redux Toolkit**.
Browse plants by category, add them to a shopping cart, adjust quantities, and see live totals.

## Features
- Landing page with company name, About Us section and a **Get Started** button
- Product listing: 3 categories x 6 plants, each with thumbnail, name and price
- "Add to Cart" buttons that disable once added and update the cart-icon count
- Navbar (Home, Plants, Cart) on every page
- Cart page: per-item subtotal, total amount, +/- quantity, delete, Checkout ("Coming Soon") and Continue Shopping

## Run
```bash
npm install
npm run dev
```

## Structure
`src/App.jsx`, `App.css`, `AboutUs.jsx`, `Navbar.jsx`, `ProductList.jsx`, `CartItem.jsx`, `CartSlice.jsx`, `store.js`
