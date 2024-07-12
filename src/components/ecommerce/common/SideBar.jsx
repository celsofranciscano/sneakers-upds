"use client";
import Link from "next/link";
import Cart from "../Cart";
import { signOut } from "next-auth/react";
import LinkButton from "@/components/common/LinkButton";
import LinkButtonBorder from "@/components/common/LinkButtonBorder";
import { useSession } from "next-auth/react";
import Image from "next/image";

function SideBar() {
  const { data: session } = useSession();

  function menuToggle() {
    document.getElementById("aside").classList.toggle("hidden");
    document.getElementById("bg-opaciy").classList.toggle("hidden");
  }
  function btnclickperfil() {
    document.getElementById("card-perfil")?.classList.toggle("hidden");
  }

  return (
    <>
      <header className="h-16 bg-white  shadow-md fixed w-full  flex items-center justify-between  px-2 md:px-8 lg:px-20 ">
        <button
          onClick={menuToggle}
          id="menu-toggle"
          className=" border border-blue-500 p-1 rounded-md md:hidden"
        >
          <svg
            className="w-6 h-6 text-blue-950 "
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
        <div className="flex items-center gap-2">
          <img className="w-8" src="/logo.png" alt="" />
          <h1 className="font-bold text-2xl text-blue-500">Sneakers</h1>
        </div>
        <nav className="hidden md:block font-medium">
          <ul className="flex  gap-8">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 ">
          <Cart />

          {session?.user?.name ? (
            session?.user?.image ? (
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
                className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200  flex items-center justify-center "
              >
                {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
                <h1 className=" text-center text-xl"></h1>
              </div>
            )
          ) : (
            <div className="hidden md:flex items-center  gap-4">
              <LinkButtonBorder href={"/auth/login"} name={"Iniciar sesion"} />

              <LinkButton href={"/auth/register"} name={"Crear cuenta"} />
            </div>
          )}
        </div>
      </header>

      <div
        onClick={menuToggle}
        id="bg-opaciy"
        className=" bg-zinc-200  hidden md:hidden opacity-50 top-16 h-screen fixed  w-full"
      ></div>

      <aside
        id="aside"
        className="w-64 fixed hidden md:hidden z-50 top-16 bg-white shadow-2xl  h-screen p-2 md:pl-12"
      >
        <nav className=" grid  gap-4">
          <ul className="grid gap-4 font-medium">
            <li>
              <Link onClick={menuToggle} href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link onClick={menuToggle} href="/store">
                Store
              </Link>
            </li>
          </ul>

          <LinkButtonBorder href={"/auth/login"} name={"Iniciar sesion"} />

          <LinkButton href={"/auth/registe"} name={"Crear cuenta"} />
        </nav>
      </aside>

      <div
        id="card-perfil"
        className="fixed hidden w-fit h-fit bg-white text-sm  rounded-b-md top-16 right-4 p-4 md:right-10 shadow-md"
      >
        <div className="flex  items-center">
          {session?.user?.image ? (
            <Image
              width={40}
              height={40}
              className="w-10 m-auto h-10 rounded-full"
              src={session.user.image}
              alt="profile image"
            />
          ) : (
            <div className="w-9 h-9 rounded-full cursor-pointer bg-zinc-200  flex items-center justify-center ">
              {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
            </div>
          )}

          <div className="p-2 ">
            <p className="font-medium">{session?.user?.name}</p>
            <p className="tex-sm text-zinc-500">{session?.user?.email}</p>
          </div>
        </div>
        <ul onClick={btnclickperfil} className="grid gap-2 ">
          <li onClick={btnclickperfil}>
            <Link
              onClick={btnclickperfil}
              href="/perfil"
              className="flex items-center"
            >
              <svg
                className="w-5 h-5 text-zinc-800 "
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

          <li onClick={() => signOut()} className=" cursor-pointer">
            <button className="text-red-500 flex items-center">
              <svg
                className="w-5 h-5 "
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
              <span>Cerrar sesion</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
