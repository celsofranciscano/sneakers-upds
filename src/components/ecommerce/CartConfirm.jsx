function CartConfirm() {
    return ( 
        <div className="flex md:fixed md:mt-24 mb-4  md:w-[45%] md:right-12  sticky top-20 z-10  bg-white flex-col items-center gap-2 p-8 md:py-[62px] dark:bg-zinc-900 rounded-md shadow-md">
        <span className="flex items-center text-zinc-400">
          <svg
            class="w-5 h-5 text-gray-800 dark:text-zinc-400"
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
              d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
            />
          </svg>
          <span>2 Zapatillas</span>
        </span>
        <div className="flex items-center gap-4">
          <span className="line-through text-zinc-400">Bs 60</span>
          <h1 className="text-4xl font-bold text-green-300">Bs 42</h1>
        </div>
        <button className="bg-blue-600 rounded-md py-2 w-full">
          Datalles de envio
        </button>
        <button className="border border-blue-500 py-2 w-full rounded-md">
          Seguir Comprando
        </button>
      </div>
     );
}

export default CartConfirm;