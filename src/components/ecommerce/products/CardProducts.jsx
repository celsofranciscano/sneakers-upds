import Link from "next/link";

import axios from "axios";

async function CardProducts() {
  let products;
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/ecommerce/products`
    );
    products = response.data;
  } catch (error) {}

  return (
    <>
      {products.map((product) => (
        <section
          key={product.PK_product}
          className=" max-w-96  rounded-md shadow-sm  "
        >
          <img
            className=" rounded-t-md "
            src="https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg"
            alt=""
          ></img>
          <div className="bg-white rounded-b-md flex flex-col  justify-center p-4 gap-4 dark:bg-zinc-900 ">
            <div className="flex items-center justify-between text-black dark:text-white">
              <h2 className=" text-lg ">{product.name}</h2>
              <span className="">Bs {product.regularPrice}</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 ">
              {product.description}
              
            </p>
            <p className="flex items-center gap-1">
              <span className="text-zinc-500 dark:text-zinc-400">4.9 |</span>
              <svg
                class="w-5 h-5 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path>
              </svg>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 font-medium text-sm rounded-full hover:bg-blue-600 active:bg-blue-700">
              Agregar al carrito
            </button>
          </div>
        </section>
      ))}
    </>
  );
}

export default CardProducts;
