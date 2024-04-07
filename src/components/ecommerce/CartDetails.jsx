function CardDetails() {
  return (
    <div className="bg-white grid mb-4 grid-cols-2 dark:bg-zinc-900 rounded-md shadow-md">
      <div className="relative">
        <img
          className="rounded-l-md"
          src="https://i.pinimg.com/564x/ec/66/d0/ec66d097dee68b82b70b17d7c2d9410b.jpg"
          alt=""
        />
        <div className="flex w-full absolute top-0 bottom-0 items-center justify-between px-2  ">
          <button className="bg-opacity-50 bg-zinc-700 rounded-full  text-white size-8 text-center">
            -
          </button>
          <button className="bg-opacity-50 bg-zinc-700 rounded-full  text-white size-8 text-center">
            +
          </button>
        </div>
      </div>
      <div className="p-2 md:py-12 flex flex-col justify-between">
        <h2 className="font-bold">Zapatillas Hermosas</h2>
        <ul className="list-disc pl-6 text-zinc-400 leading-tight">
          <li>Color: Rojo</li>
          <li>Tamaño: XL</li>
          <li>Estilo: Cuello V</li>
          <li>Material: Algodon</li>
        </ul>
        <div className="flex gap-4 justify-between">
          <span className="text-green-300 text-md font-bold">
            Bs 80 <span className="text-xs text-zinc-400">x</span> 5
          </span>
          <button className="text-red-600">
            <svg
              class="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
