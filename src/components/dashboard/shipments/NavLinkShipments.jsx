"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "@/components/common/NavLink";
function NavLinkShipments() {
  const pathname = usePathname();
  const isActive = pathname==='/dashboard/envios'
  return (
    <nav className=" bg-white dark:bg-zinc-900 p-4 rounded-md">
      <ul className="flex items-center  gap-8 font-bold">
        <li
          className={`hover:text-blue-500 rounded-md px-4 py-2 ${
            isActive ? "text-blue-500" : ""
          }`}
        >
          <Link href={"/dashboard/envios"}>Envios</Link>
        </li>

        <NavLink
          name={"Metodos de envio"}
          path={"/dashboard/envios/metodos"}
          currentPath={pathname}
        />
   
      </ul>
    </nav>
  );
}

export default NavLinkShipments;
