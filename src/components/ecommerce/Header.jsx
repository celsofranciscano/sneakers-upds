"use client";
import Link from "next/link";
import Theme from "../Theme";
import Cart from "./Cart";

function Header() {
  function menuToggle() {
    document.getElementById("aside").classList.toggle("hidden");
    document.getElementById("bg-opaciy").classList.toggle("hidden");
  }

  return (
    <>
      <header className="h-16 bg-white z-50 shadow-md fixed w-full  flex items-center justify-between dark:bg-zinc-900 px-2 md:px-12">
        <button
          onClick={menuToggle}
          id="menu-toggle"
          className=" border border-red-500 p-1 rounded-md md:hidden"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div>
          <img
            className="max-w-40"
            src="https://fairplaybo.vtexassets.com/assets/vtex/assets-builder/fairplaybo.fairplay-theme/1.0.5/imgs/logo-fairplaybo___edd19225884e46691e35a9a4df4aac8c.png"
            alt=""
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex  gap-8">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 ">
      <Cart />
          <Theme />

          <div className="hidden md:flex gap-4">
            <button className="border border-red-500 rounded-md px-4 py-1">
              Iniciar Sesion
            </button>
            <button className="bg-red-600 rounded-md px-4 py-1">
              Crear cuenta
            </button>
          </div>
        </div>
      </header>

      <div onClick={menuToggle} id="bg-opaciy" className=" bg-zinc-200 dark:bg-zinc-950 hidden opacity-50 top-16 h-screen fixed  w-full"></div>

      <aside
        id="aside"
        className="w-64 fixed hidden z-50 top-16 bg-white shadow-2xl dark:bg-zinc-900 h-screen pl-4 md:pl-12"
      >
        <nav className="">
          <ul className="grid gap-4">
            <li>
              <Link onClick={menuToggle} href="/">Inicio</Link>
            </li>
            <li>
              <Link onClick={menuToggle} href="/store">Store</Link>
            </li>
            <li>
              <Link onClick={menuToggle} href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
