import axios from "axios";
import Link from "next/link";

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
        <Link
          href={`/store/${product.PK_product}`}
          key={product.PK_product}
          className="max-w-96 rounded-md shadow-md bg-white hover:scale-105 transition duration-150 ease-in-out "
        >
          <img
            className="w-full aspect-square object-cover  rounded-t-md"
            src={product.urlImage}
            alt=""
          />
          <div className=" rounded-b-md flex flex-col justify-center p-4 gap-4 ">
            {product.offerPrice ? (
              <div className="flex items-center justify-center gap-4">
                <span className="line-through text-zinc-500">
                  Bs {product.regularPrice}
                </span>
                <h1 className="text-2xl font-bold text-green-500">
                  Bs {product.offerPrice}
                </h1>
              </div>
            ) : (
              <h1 className="text-2xl font-bold text-center text-green-500">
                Bs {product.regularPrice}
              </h1>
            )}
            <h2 className="text-xl font-medium text-center ">{product.name}</h2>

            <p className="text-zinc-500 text-center text-zinc ">
              {product.description}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default CardProducts;
