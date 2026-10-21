import React from 'react';

function Cart({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Panier ({items.length})</h2>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {item.name} — {item.price} €
              <button onClick={() => onRemove(index)} style={{ marginLeft: '1rem' }}>
                Retirer
              </button>
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total : {total} €</strong></p>
    </div>
  );
}

export default Cart;