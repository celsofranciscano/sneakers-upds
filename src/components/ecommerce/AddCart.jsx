"use client";
import { useEcommerce } from "@/context/ContextEcommerce";
import { useState } from "react";

function AddCart({ disponible, params }) {
  const { cartItems, setCartItems } = useEcommerce();
  const [quantity, setQuantity] = useState(1);
  const [updateDisponible, setUpdateDisponible] = useState(disponible - 1);

  function rest() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setUpdateDisponible(updateDisponible + 1);
    }
  }
  function add() {
    if (updateDisponible >= 1) {
      setQuantity(quantity + 1);
      setUpdateDisponible(updateDisponible - 1);
    }
  }

  const addItem = () => {
    if (updateDisponible >= 1) {
      const newItem = {
        PK_product: params.productSlug,
        quantity: quantity,
      };

      setCartItems((prevCartItems) => {
        setQuantity(1);
        setUpdateDisponible(updateDisponible - 1);

        // Verifica si el producto ya existe en el carrito
        const existingProduct = prevCartItems.find(
          (item) => item.PK_product === newItem.PK_product
        );

        if (existingProduct) {
          // Si el producto ya existe, actualiza el quantity
          return prevCartItems.map((item) =>
            item.PK_product === newItem.PK_product
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        } else {
          // Si el producto no existe, agrega el nuevo producto
          return [...prevCartItems, newItem];
        }
      });
    }
  };
  return (
    <div className="grid gap-4 md:grid-cols-2 content-center">
      <div className="flex   items-center gap-4">
        <button
          onClick={rest}
          className="bg-blue-200 rounded-full  font-bold size-8"
        >
          -
        </button>
        <span className="bg-blue-600 rounded-md text-center text-xl text-white font-bold size-8">
          {quantity}
        </span>
        <button
          onClick={add}
          className="bg-blue-200 rounded-full  font-bold size-8"
        >
          +
        </button>
        <span>{updateDisponible} disponible</span>
      </div>
      <button
        onClick={addItem}
        className="bg-blue-600 flex justify-center py-2 items-center rounded-md text-white font-medium mt-4"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        <span>Agregar al Carrito</span>
      </button>
    </div>
  );
}

export default AddCart;
