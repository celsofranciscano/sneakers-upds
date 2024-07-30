"use client";
// components/SideBar.js
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import DarkMode from "@/components/common/DarkMode";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "@/components/common/NavLink";

function SideBar() {
  const pathname = usePathname();

  const isActive = "/dashboard" === pathname;

  const { data: session } = useSession();

  function handlebtnclick() {
    document.getElementById("sidebar")?.classList.toggle("hidden");
    // document.getElementById("capa-sidebar")?.classList.toggle("hidden");
  }

  function btnclickperfil() {
    document.getElementById("card-perfil")?.classList.toggle("hidden");
  }

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.getItem("theme") === "dark"
    );
  }, []);

  function toggleTheme() {
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") === "light" ? "dark" : "light"
    );
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <header className="bg-white dark:bg-zinc-900 h-16 shadow-sm dark:text-white fixed w-full flex items-center justify-between px-4 md:px-8">
        <a className="flex gap-1 items-center" href="/dashboard">
          <img className="w-8" src="/logo.png" alt="logo sneakers" />
          <span className="text-2xl font-extrabold dark:text-white text-black">
            Sneakers
          </span>
        </a>

        <div className="flex items-center justify-center gap-4">
          <DarkMode />

          {session?.user?.image ? (
            <Image
              onClick={btnclickperfil}
              className="w-9 h-9 rounded-full cursor-pointer"
              src={session?.user?.image}
              width={24}
              height={24}
              alt="perfil"
            />
          ) : (
            <div
              onClick={btnclickperfil}
              className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center"
            >
              {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
              <h1 className="text-center text-xl"></h1>
            </div>
          )}

          <button
            onClick={handlebtnclick}
            className="md:hidden bg-zinc-100 dark:bg-zinc-800 rounded-full p-0.5"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-zinc-300"
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
        </div>
      </header>

      <div
        onClick={handlebtnclick}
        id="capa-sidebar"
        className="hidden bg-zinc-900 h-screen top-16 fixed w-full dark:opacity-60 opacity-30"
      ></div>

      <aside
        id="sidebar"
        className="bg-white  dark:bg-zinc-900 w-72 md:w-60 border-r dark:border-none h-screen dark:text-white text-black fixed top-16 hidden md:block px-4 py-8"
      >
        <nav>
          <ul className="grid pt-8 font-medium">
            <li
              className={`hover:text-blue-500 rounded-md px-4 py-2 flex gap-2 ${
                isActive ? "text-blue-500" : ""
              }`}
              onClick={handlebtnclick}
            >
              <svg
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
                  stroke-width="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>

              <Link href={"/dashboard"} className="flex items-center gap-3">
                Inicio
              </Link>
            </li>

            <NavLink
              path="/dashboard/clientes"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Clientes"}
            >
              <svg
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
                  stroke-width="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
            </NavLink>

            <NavLink
              path="/dashboard/roles"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Roles"}
            >
              <svg
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
                  stroke-width="2"
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </NavLink>

            <NavLink
              path="/dashboard/productos"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Productos"}
            >
              <svg
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
                  stroke-width="2"
                  d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
                />
              </svg>
            </NavLink>
            <NavLink
              path="/dashboard/ventas"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Ventas"}
            >
              <svg
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
                  stroke-width="2"
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>
            </NavLink>
            <NavLink
              path="/dashboard/administradores"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Administradores"}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </NavLink>
            <NavLink
              path="/dashboard/envios"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Envios"}
            >
              <svg
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
                  stroke-width="2"
                  d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"
                />
              </svg>
            </NavLink>
            <NavLink
              path="/dashboard/finanzas"
              currentPath={pathname}
              onClick={handlebtnclick}
              name={"Finanzas"}
            >
              <svg
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
                  stroke-width="2"
                  d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
                />
              </svg>
            </NavLink>
          </ul>
        </nav>
        <button
          onClick={() => signOut()}
          className="text-red-500 flex absolute md:bottom-20 bottom-36 items-center gap-3 hover:bg-blue-200 dark:hover:bg-zinc-800 px-4 py-2 rounded-md"
        >
          <svg
            className="w-5 h-5"
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
              d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
            />
          </svg>
          <span>Cerrar sesión</span>
        </button>
      </aside>

      <div
        id="card-perfil"
        className="fixed hidden w-fit h-fit bg-white text-sm dark:bg-zinc-900 rounded-b-md top-16 right-4 p-4 md:right-10 shadow-md"
      >
        <div className="flex items-center">
          {session?.user?.image ? (
            <Image
              width={40}
              height={40}
              className="w-10 m-auto h-10 rounded-full"
              src={session.user.image}
              alt="profile image"
            />
          ) : (
            <div className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
              {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
            </div>
          )}

          <div className="p-2">
            <p className="text-white">{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
        </div>
        <ul onClick={btnclickperfil} className="grid gap-2">
          <li onClick={btnclickperfil}>
            <Link
              href="/dashboard/profile"
              onClick={btnclickperfil}
              className="flex items-center"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-zinc-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span>Tu perfil</span>
            </Link>
          </li>

          <li
            onClick={toggleTheme}
            className="cursor-pointer flex items-center"
          >
            <DarkMode />
            Dark mode
          </li>
          <li onClick={() => signOut()} className="cursor-pointer">
            <button className="text-red-500 flex items-center">
              <svg
                className="w-5 h-5"
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
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>
              <span>Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
