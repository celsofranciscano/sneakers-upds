'use client'
import { useEcommerce } from "@/context/ContextEcommerce";
function AddCartBtn() {
  const {setCart, cart} = useEcommerce();

  function addCart(){
    setCart(cart +1)
  }

    return ( 
        <button onClick={addCart} className="bg-red-600 hidden md:flex justify-center py-2 items-center rounded-md w-full mt-4">
        <svg
          className="w-6 h-6  text-gray-800 dark:text-white"
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
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        <span>Agregar al Carrito</span>
      </button>
     );
}

export default AddCartBtn;