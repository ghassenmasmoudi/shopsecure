import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🛒 ShopSecure</h1>
        <p>Boutique en ligne — Projet DevSecOps</p>
      </header>
      <main style={{ display: 'flex', gap: '2rem', padding: '2rem', justifyContent: 'center' }}>
        <ProductList onAdd={addToCart} />
        <Cart items={cart} onRemove={removeFromCart} />
      </main>
    </div>
  );
}

export default App;