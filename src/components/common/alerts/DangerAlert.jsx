function DangerAlert({message}) {
  return (
    <div className="w-full bg-zinc-200 dark:bg-zinc-900 text-red-500  flex items-center justify-between p-4 shadow-sm rounded-md">
      <div className="flex items-center gap-4">
        <svg
          className="w-6 h-6 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="text-sm text-red-500">
          {message}
        </p>
      </div>
    </div>
  );
}

export default DangerAlert;
