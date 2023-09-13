// OrderList.js
import React from 'react';

function OrderList({ orders }) {
  return (
    <div className="order-list">
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id}<br />
            Date: {order.date}<br />
            Total: ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
