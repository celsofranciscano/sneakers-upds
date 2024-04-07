function Stepper() {
  return (
    <div>
      <div className=" relative py-6">
        <div className="flex   justify-between ">
          <div className="w-full  h-0.5 bg-blue-600 "></div>
          <div className="w-full  h-0.5 bg-green-800 "></div>
        </div>
        <div className="flex absolute  w-full top-0 bottom-0 items-center  justify-between  ">
          <div className="text-center p-1 bg-zinc-950 border border-green-800 rounded-full">
            <svg
              className="w-4.5 h-4.5 text-gray-800 dark:text-white"
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
          </div>
          <div className="text-center p-1 bg-zinc-950 border border-green-800 rounded-full">
            <svg
              class="w-4.5 h-4.5 text-gray-800 dark:text-white"
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
                d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              />
            </svg>
          </div>
          <div className="text-center p-1 bg-zinc-950 border border-green-800 rounded-full">
            <svg
              class="w-4.5 h-4.5 text-gray-800 dark:text-white"
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
                stroke-width="1"
                d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex text-xs text-zinc-400  justify-between ">
        <div className="">Carrito</div>
        <div className=" ">Detalles de envio</div>
        <div className=" ">Pago</div>
      </div>
    </div>
  );
}

export default Stepper;
