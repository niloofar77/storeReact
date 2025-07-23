import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const[lovedItems,setLovedItems]=useState([])

  // const addToCart = (product) => {
  //   setCartItems((prevItems) => [...prevItems, product]);
  //   console.log("added")
  // };

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  
  const addToLovedItems = (product) => {
    setLovedItems((prevItems) => [...prevItems, product]);
    console.log("added")
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,addToLovedItems,lovedItems }}>
      {children}
    </CartContext.Provider>
  );
};