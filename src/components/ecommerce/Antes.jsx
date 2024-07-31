"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useEcommerce } from "@/context/ContextEcommerce";

function CardDetails() {
  const { cartItems } = useEcommerce();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(`/api/ecommerce/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    console.log("Products:", products);
    console.log("Cart Items:", cartItems);
  }, [products, cartItems]);

  // Convert PK_product to numbers for comparison
  const cartProducts = products.filter(product =>
    cartItems.some(item => parseInt(item.PK_product) === product.PK_product)
  );

  if (cartProducts.length === 0) {
    return <p>Tu carrito esta vacio</p>;
  }

  return (
    <section>
      {cartProducts.map((product, index) => {
        const cartItem = cartItems.find(item => parseInt(item.PK_product) === product.PK_product);
        const totalPrice = cartItem.quantity * product.regularPrice;
        return (
          <div key={index} className="bg-white grid mb-4 grid-cols-2 md:grid-cols-1 lg:grid-cols-2 rounded-md shadow-md">
            <div className="relative">
              <img
                className="rounded-l-md"
                src={product.urlImage}
                alt=""
              />
              <div className="flex w-full absolute top-0 bottom-0 items-center justify-between px-2">
                <button className="bg-opacity-50 bg-zinc-700 rounded-full text-white size-8 text-center">
                  -
                </button>
                <button className="bg-opacity-50 bg-zinc-700 rounded-full text-white size-8 text-center">
                  +
                </button>
              </div>
            </div>
            <div className="p-2 flex flex-col justify-between">
              <h2 className="font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <div className="flex gap-4 justify-between">
                <span className="text-blue-500 text-md font-bold">
                  Bs {totalPrice} <span className="text-xs text-zinc-400">x {cartItem.quantity}</span>
                </span>
                <button className="text-red-600">
                  <svg
                    className="w-5 h-5"
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
                      strokeWidth="1"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default CardDetails;
