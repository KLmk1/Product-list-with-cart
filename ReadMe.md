# June Project — Product List with Cart

A small web/mobile project that provides a product catalog and a simple shopping cart. Intended as a starter template for learning frontend state management, APIs, and basic persistence.

## Features
- Browse a product list (name, price, description, image URL, stock)
- Add/remove items to/from a cart
- Update item quantities in the cart
- Cart total and item subtotal calculations
- Persist cart in local storage (or simple backend endpoint)
- Example seed data and minimal UI patterns

## Getting started

1. Clone the repo:
    git clone <repo-url>
2. Install dependencies:
    npm install
3. Run the dev server:
    npm start

(Adjust to your framework: create-react-app, Vite, Next.js, etc.)

## Project structure (suggested)
- /src
  - /components
     - ProductList.jsx
     - ProductCard.jsx
     - Cart.jsx
  - /data
     - products.json
  - /utils
     - cart.js
  - App.jsx
- public
- package.json
- README.md

## Example product list (products.json)
[
  {
     "id": "p1",
     "name": "Wireless Headphones",
     "price": 59.99,
     "description": "Comfortable over-ear wireless headphones",
     "image": "/images/headphones.jpg",
     "stock": 25
  },
  {
     "id": "p2",
     "name": "Portable Charger",
     "price": 24.99,
     "description": "10,000 mAh compact power bank",
     "image": "/images/charger.jpg",
     "stock": 40
  },
  {
     "id": "p3",
     "name": "Smart Lamp",
     "price": 39.99,
     "description": "Wi‑Fi enabled lamp with dimming",
     "image": "/images/lamp.jpg",
     "stock": 15
  }
]

## Cart behavior (examples)

- Add item:
  cart.add(productId, quantity = 1)
- Remove item:
  cart.remove(productId)
- Update quantity:
  cart.update(productId, quantity)
- Get totals:
  cart.getItems() -> [{ id, name, price, quantity, subtotal }]
  cart.getTotal() -> number

Example simple cart utility (conceptual):
const cart = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  save() { localStorage.setItem('cart', JSON.stringify(this.items)); },
  add(id, qty=1) { /* merge or push */ this.save(); },
  remove(id) { /* filter out */ this.save(); },
  update(id, qty) { /* set qty or remove if 0 */ this.save(); },
  getTotal() { return this.items.reduce((s,i)=>s+i.price*i.quantity,0); }
}

## UI tips
- Show product grid with Add to Cart and quantity control.
- Disable Add button when stock is 0.
- Show cart as drawer/modal with item list, qty control, remove button, and checkout CTA.
- Persist cart to localStorage and restore on load.
- Validate stock before increasing quantity.

## Testing
- Unit-test cart operations (add/remove/update/total).
- Test UI flows: add item, change quantity, persist, clear cart.

## Contributing
- Fork, create a branch, add tests and features, submit a PR.

## License
Specify a license (e.g., MIT) or add your company/project license.

---
This README is a starting point; adapt the tech stack and implementation details to your project.