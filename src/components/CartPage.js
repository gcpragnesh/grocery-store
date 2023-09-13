import React from 'react';
import './styles/cart.css';

function Cart({ cart, handleCheckout, removeFromCart }) {
  const proceedToCheckout = () => {
    console.log('Proceeding to checkout...');
    handleCheckout(cart); 
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-details">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={proceedToCheckout} className="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
