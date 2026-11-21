import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

// Generates a leaf-themed SVG thumbnail so images always load offline.
// Replace `image` with real photo URLs if you prefer.
const thumb = (emoji, bg) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="${bg}"/><text x="150" y="190" font-size="130" text-anchor="middle">${emoji}</text></svg>`
  );

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 15, image: thumb('🌿', '#d8f3dc'), description: 'Produces oxygen at night' },
      { name: 'Spider Plant', cost: 12, image: thumb('🍃', '#b7e4c7'), description: 'Filters formaldehyde and xylene' },
      { name: 'Peace Lily', cost: 18, image: thumb('🌼', '#e9f5db'), description: 'Removes mold spores' },
      { name: 'Boston Fern', cost: 20, image: thumb('🌱', '#d8f3dc'), description: 'Adds humidity to the air' },
      { name: 'Rubber Plant', cost: 17, image: thumb('🪴', '#c7f9cc'), description: 'Absorbs airborne toxins' },
      { name: 'Aloe Vera', cost: 14, image: thumb('🌵', '#d9ed92'), description: 'Purifies air and soothes burns' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', cost: 20, image: thumb('💜', '#e0c3fc'), description: 'Calming scent' },
      { name: 'Jasmine', cost: 18, image: thumb('🤍', '#f8f9fa'), description: 'Sweet floral fragrance' },
      { name: 'Rosemary', cost: 15, image: thumb('🌿', '#ccd5ae'), description: 'Herb with a woody aroma' },
      { name: 'Mint', cost: 12, image: thumb('🍃', '#b7e4c7'), description: 'Refreshing, easy to grow' },
      { name: 'Lemon Balm', cost: 14, image: thumb('🍋', '#fefae0'), description: 'Citrus scent that repels pests' },
      { name: 'Gardenia', cost: 22, image: thumb('🌸', '#ffe5ec'), description: 'Rich, creamy blossoms' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', cost: 25, image: thumb('🪴', '#c7f9cc'), description: 'Thrives in low light' },
      { name: 'Pothos', cost: 10, image: thumb('🍀', '#d8f3dc'), description: 'Nearly impossible to kill' },
      { name: 'Jade Plant', cost: 13, image: thumb('🌳', '#b5e48c'), description: 'Stores water in its leaves' },
      { name: 'Cast Iron Plant', cost: 19, image: thumb('🌿', '#99d98c'), description: 'Tolerates neglect' },
      { name: 'Succulent Mix', cost: 16, image: thumb('🌵', '#d9ed92'), description: 'Tiny, colorful, drought-proof' },
      { name: 'Chinese Evergreen', cost: 21, image: thumb('🌱', '#b7e4c7'), description: 'Handles dim rooms' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  return (
    <div className="product-page">
      {plantsArray.map((group) => (
        <section key={group.category}>
          <h2 className="category-title">{group.category}</h2>
          <div className="product-grid">
            {group.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <div className="price">${plant.cost}</div>
                <small>{plant.description}</small>
                <button
                  disabled={isInCart(plant.name)}
                  onClick={() =>
                    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }))
                  }
                >
                  {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
