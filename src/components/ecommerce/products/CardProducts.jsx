import LinkButton from "@/components/common/LinkButton";
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
          className="max-w-96 rounded-md shadow-sm"
        >
          <div className="w-full h-72 overflow-hidden rounded-t-md">
            <img className="w-full h-full object-cover" src={product.urlImage} alt="" />
          </div>
          <div className="bg-white rounded-b-md flex flex-col justify-center p-4 gap-4 dark:bg-zinc-900">
            <div className="flex items-center justify-between text-black dark:text-white">
              <h2 className="text-lg">{product.name}</h2>
              <span>Bs {product.regularPrice}</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400">
              {product.description}
            </p>
            <LinkButton href={`/store/${product.PK_product}`} name={"Detalle"} />
          </div>
        </section>
      ))}
    </>
  );
}

export default CardProducts;
