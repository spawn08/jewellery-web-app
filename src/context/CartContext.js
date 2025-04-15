import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // load cart from browser localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart)
        setCart(JSON.parse(savedCart))
  }, [])

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
        const existingItemIndex = prevCart.findIndex(item => item.id === product.id);

        if(existingItemIndex >= 0) {
            const updatedCart = [...prevCart];
            updatedCart[existingItemIndex] = {
                ...updatedCart[existingItemIndex],
                quantity: updatedCart[existingItemIndex].quantity + quantity
            }
        }
    })
  }

  return <CartContext.Provider value={{
    cart, total, addToCart
  }}>{children}</CartContext.Provider>;
};
