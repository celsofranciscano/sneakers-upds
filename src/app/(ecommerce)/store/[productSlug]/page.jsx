import AddCartBtn from "@/components/ecommerce/AddCartBtn";
import Disponible from "@/components/ecommerce/Disponible";
import ImageCard from "@/components/ecommerce/ImageCard";
function ProductSlug() {
  const slides = [
    "https://i.pinimg.com/564x/ec/66/d0/ec66d097dee68b82b70b17d7c2d9410b.jpg",
    "https://i.pinimg.com/564x/e9/4b/3b/e94b3bdf54b32a95917f0e03933576c7.jpg",
    "https://i.pinimg.com/564x/34/a4/b2/34a4b2945df92a8f496ef1c1e41b841d.jpg",
  ];
  return (
    <>
      <section className="grid  md:grid-cols-5 gap-12 ">
       <ImageCard slides={slides} />
        <div className="bg-white p-4 dark:bg-zinc-900 rounded-md shadow-md col-span-2">
          <h2 className="text-3xl font-bold">Zapatilla Blancas para hombres</h2>
          <div className="flex text-3xl gap-8 py-4 items-center">
            <span className="text-red-500 font-bold ">Bs 20</span>

            <span className="text-zinc-300  line-through">Bs 60</span>
          </div>
          <ol className="list-disc pl-8 text-zinc-400 my-4">
            <li>Resisten al agua</li>
            <li>Cordones automaticos</li>
            <li>Plantillas confeccionadas</li>
          </ol>
          <Disponible disponible={8} />
          <AddCartBtn />
        </div>
        <div className="bg-white rounded-md shadow-md dark:bg-zinc-900 p-4">
          <h2 className="text-center font-bold pb-4">Tu carrito</h2>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <img
                  className="rounded-sm "
                  src="https://i.pinimg.com/564x/6d/70/07/6d7007794ab6023b1d453cefc932eacd.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-sm">Zapatilla Blancas para hombres</h2>
                <p className="text-xs text-zinc-400">Color :Red</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className=" text-zinc-400">
                <span className="text-red-600 font-semibold">Bs 400</span> x{" "}
                <span className="text-white">5 pares</span>
              </p>

              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
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
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
            </div>
            <h2 className="text-center">Total: Bs 400</h2>
            <button className="bg-red-600 py-2 rounded-md w-full">
              Pasar a Checkout
            </button>
          </div>
        </div>
      </section>

      <h2>Descripcion</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        voluptatem doloribus odio nam ducimus molestiae. Excepturi quibusdam
        ipsam error porro ab iste illo, impedit ipsum minus, laboriosam ad id
        dolorem?
      </p>
    </>
  );
}

export default ProductSlug;
