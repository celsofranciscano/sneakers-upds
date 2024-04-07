'use client'
import { createContext, useContext, useState } from "react";

export const ContextEcommerce = createContext();

export function useEcommerce() {
  return useContext(ContextEcommerce);
}

export function EcommerceProvider({ children }) {
  const [cart, setCart] = useState(8);
  return (
    <ContextEcommerce.Provider value={{ cart, setCart }}>
      {children}
    </ContextEcommerce.Provider>
  );
}
