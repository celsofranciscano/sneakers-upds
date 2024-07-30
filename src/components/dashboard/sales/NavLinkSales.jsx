"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "@/components/common/NavLink";
function NavLinkSales() {
  const pathname = usePathname();
  const isActive = pathname==='/dashboard/ventas'
  return (
    <nav className=" bg-white dark:bg-zinc-900 p-4 text-black dark:text-white rounded-md">
      <ul className="flex items-center  gap-4 md:gap-8 font-medium">
        <li
          className={`hover:text-blue-500   py-2 ${
            isActive ? "text-blue-500" : ""
          }`}
        >
          <Link href={"/dashboard/ventas"}>Ventas</Link>
        </li>

        <NavLink
          name={"Estados de venta"}
          path={"/dashboard/ventas/estado"}
          currentPath={pathname}
        />
      
      </ul>
    </nav>
  );
}

export default NavLinkSales;
