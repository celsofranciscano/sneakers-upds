import axios from "axios";

import ImageCard from "@/components/ecommerce/ImageCard";
import AddCart from "@/components/ecommerce/AddCart";
async function ProductSlug({ params }) {
  let product;
  let slides;

  const response = await axios.get(
    `${process.env.URL_API}/api/ecommerce/products/${params.productSlug}`
  );
  product = response.data;
  const responseImage = await axios.get(
    `${process.env.URL_API}//api/ecommerce/products/${params.productSlug}/images`
  );
  slides = responseImage.data;

  slides.unshift(product.urlImage);

  return (
    <>
      <section className="grid  md:grid-cols-5 gap-4 ">
        <ImageCard slides={slides} />
        <div className="p-4 flex flex-col gap-4 rounded-md  md:col-span-3">
          <h2 className="text-3xl font-bold">{product?.name}</h2>
          {product?.offerPrice ? (
            <div className="flex items-center  gap-4">
              <span className="line-through text-zinc-500">
                Bs {product?.regularPrice}
              </span>
              <h1 className="text-3xl font-bold text-green-500">
                Bs {product?.offerPrice}
              </h1>
            </div>
          ) : (
            <h1 className="text-3xl font-bold  text-green-500">
              Bs {product?.regularPrice}
            </h1>
          )}
          <p>{product?.description}</p>
          <AddCart disponible={product?.stock} params={params}/>
        </div>
      </section>
    </>
  );
}

export default ProductSlug;
