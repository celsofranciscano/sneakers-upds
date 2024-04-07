import AddCartBtn from "./AddCartBtn";
import Link from 'next/link'

function CardProducts({ name, precio, precioOferta }) {
  return (
    <Link href={"store/detalles"} className="bg-white dark:bg-zinc-900 shadow-md hover:scale-105 transition hover:duration-300 cursor-pointer rounded-md">
      <img
        className="rounded-t-md"
        src="https://i.pinimg.com/564x/6d/70/07/6d7007794ab6023b1d453cefc932eacd.jpg"
        alt=""
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-red-500 font-bold text-lg">Bs {precio}</span>

          <span className="text-zinc-300  line-through">Bs {precioOferta}</span>
        </div>
        <h2 className="text-lg font-bold">{name}</h2>
        <AddCartBtn />
      </div>
    </Link>
  );
}

export default CardProducts;
