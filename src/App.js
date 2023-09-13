// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 

import ProductList from './components/ProductList';
import Cart from './components/CartPage';
import OrderList from './components/OrderList';

function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);


  const addToCart = (product) => {
  
    const productId = product.id;

    
    const isInCart = cart.find((item) => item.id === productId);

    if (isInCart) {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  const handleCheckout = () => {
    const itemsToCheckout = cart.filter((item) => item.quantity > 0);
    if (itemsToCheckout.length === 0) {
      alert('Your cart is empty. Add some items before checking out.');
    } else {
      const order = {
        id: new Date().getTime(),
        date: new Date().toLocaleString(),
        total: itemsToCheckout
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2),
      };
      setOrders((prevOrders) => [...prevOrders, order]);
      const resetCart = cart.map((item) => ({ ...item, quantity: 0 }));
      setCart(resetCart);
      alert('Checkout successful! Your order has been placed.');
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Grocery's</h1>
          <ul>
            <li><Link to="/">Product List</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Order History</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />}
          />
          <Route path="/orders" element={<OrderList orders={orders} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
