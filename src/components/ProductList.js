import React from 'react';

const products = [
  { id: 1, name: 'T-shirt DevSecOps', price: 25 },
  { id: 2, name: 'Mug Kubernetes', price: 15 },
  { id: 3, name: 'Sticker Docker', price: 5 },
];

function ProductList({ onAdd }) {
  return (
    <div>
      <h2>Produits</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: '1rem' }}>
            <strong>{p.name}</strong> — {p.price} €
            <button onClick={() => onAdd(p)} style={{ marginLeft: '1rem' }}>
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;