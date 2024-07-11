'use client'
import { createContext, useContext, useState } from "react";
import { SessionProvider } from "next-auth/react";



export const ContextEcommerce = createContext();

export function useEcommerce() {
  return useContext(ContextEcommerce);
}

export function EcommerceProvider({ children }) {
  const [cart, setCart] = useState(8);
  return (
    <ContextEcommerce.Provider value={{ cart, setCart }}>
      <SessionProvider>

      {children}
      </SessionProvider>
    </ContextEcommerce.Provider>
  );
}
