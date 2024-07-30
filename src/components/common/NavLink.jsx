import Link from "next/link";
function NavLink({ path, currentPath, name, onClick ,children}) {
  const isActive = currentPath.startsWith(path);

  return (
    <li
      className={`hover:text-blue-500 rounded-md px-4 py-2 flex gap-2 ${
        isActive ? "text-blue-500" : ""
      }`}
      onClick={onClick}
    >
     {children}

      <Link href={path}>{name}</Link>
    </li>
  );
}

export default NavLink;
