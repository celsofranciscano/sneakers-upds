"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "@/components/common/NavLink";
function NavLinkProducts() {
  const pathname = usePathname();
  const isActive = pathname==='/dashboard/productos'
  return (
    <nav className=" bg-white dark:bg-zinc-900 p-4 rounded-md">
      <ul className="flex items-center  gap-8 font-bold">
        <li
          className={`hover:text-blue-500 rounded-md px-4 py-2 ${
            isActive ? "text-blue-500" : ""
          }`}
        >
          <Link href={"/dashboard/productos"}>Productos</Link>
        </li>

        <NavLink
          name={"Categorias"}
          path={"/dashboard/productos/categorias"}
          currentPath={pathname}
        />
        <NavLink
          name={"Imagenes"}
          path={"/dashboard/productos/imagenes"}
          currentPath={pathname}
        />
      </ul>
    </nav>
  );
}

export default NavLinkProducts;
