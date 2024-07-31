"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useEcommerce } from "@/context/ContextEcommerce";

function CardDetails() {
  const { cartItems, setTotal } = useEcommerce();
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
    // Calculate the total amount when products or cartItems change
    const calculateTotalAmount = () => {
      let total = 0;
      cartItems.forEach((cartItem) => {
        const product = products.find(
          (product) => parseInt(cartItem.PK_product) === product.PK_product
        );
        if (product) {
          total += cartItem.quantity * product.regularPrice;
        }
      });
      setTotal(total); // Update total in context
    };

    calculateTotalAmount();
  }, [products, cartItems, setTotal]);

  // Convert PK_product to numbers for comparison
  const cartProducts = products.filter((product) =>
    cartItems.some((item) => parseInt(item.PK_product) === product.PK_product)
  );

  if (cartProducts.length === 0) {
    return <p>Tu carrito está vacío</p>;
  }

  return (
    <section>
      {cartProducts.map((product, index) => {
        const cartItem = cartItems.find(
          (item) => parseInt(item.PK_product) === product.PK_product
        );
        const totalPrice = cartItem.quantity * product.regularPrice;
        return (
          <div
            key={index}
            className="bg-white grid mb-4 grid-cols-2 md:grid-cols-1 lg:grid-cols-2 rounded-md shadow-md"
          >
            <div className="relative">
              <img
                className="rounded-l-md w-full aspect-square object-cover"
                src={product.urlImage}
                alt={product.name}
              />
            </div>
            <div className="p-2 flex flex-col justify-between">
              <h2 className="font-medium">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <div className="flex gap-4 justify-between">
                <span className="text-blue-500 text-md font-bold">
                  Bs {totalPrice}{" "}
                  <span className="text-xs text-zinc-400">
                    x {cartItem.quantity}
                  </span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default CardDetails;
