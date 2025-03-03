import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
