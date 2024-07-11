import { useEcommerce } from "@/context/ContextEcommerce";
import Link from 'next/link'
function Cart({}) {
    const {cart}= useEcommerce();
  return (
    <Link href="/carrito" className="relative">
      <svg
        className="w-8 h-8 mr-2 text-blue-600"
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
      <span className="absolute flex items-center justify-center top-0 right-0 bg-blue-600 text-white rounded-full size-5 ">
        {cart}
      </span>
    </Link>
  );
}

export default Cart;
