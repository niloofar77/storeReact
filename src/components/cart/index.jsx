import React from 'react';
import { useCart } from '../../contexts/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>سبد خرید</h2>
      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} تومان
              <button onClick={() => removeFromCart(item.id)}>حذف</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={clearCart}>خالی کردن سبد خرید</button>
      )}
    </div>
  );
};


