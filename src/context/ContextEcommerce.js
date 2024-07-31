"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

const CART_ITEMS_KEY = 'ecommerce_cartItems';
const ContextEcommerce = createContext();

export const useEcommerce = () => useContext(ContextEcommerce);

export function EcommerceProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCartItems = localStorage.getItem(CART_ITEMS_KEY);
      if (savedCartItems) {
        try {
          setCartItems(JSON.parse(savedCartItems));
        } catch (error) {
          console.error("Error parsing cart items:", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && cartItems.length > 0) {
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <ContextEcommerce.Provider value={{ cartItems, setCartItems,total,setTotal }}>
      <SessionProvider>{children}</SessionProvider>
    </ContextEcommerce.Provider>
  );
}