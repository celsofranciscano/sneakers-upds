import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";

async function PersonalInformation() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className=" bg-fondo rounded-t-md bg-cover h-32 flex items-center justify-center">
        <div className="flex items-center md:gap-4">
          <img className="w-12" src="/logo.png" alt="" />

          <h1 className="text-2xl font-bold text-white">Sneakers</h1>
        </div>
      </div>
      <div className=" absolute top-40 left-4 md:left-24 gap-4">
        {session?.user?.image ? (
          <Image
            width={40}
            height={40}
            className="size-28 m-auto rounded-full"
            src={session.user.image}
            alt="profile image"
          />
        ) : (
          <div className="size-28 rounded-full  bg-zinc-200 text-4xl flex items-center justify-center ">
            {session?.user?.name?.charAt(0)?.toUpperCase() || ""}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 p-2 bg-white  border-b-2 pt-16 ">
        <div className=" py-2">
          <p className="font-medium text-lg">{session?.user?.name}</p>
          <p className="text-sm text-zinc-500">{session?.user?.email}</p>
          <p className="text-sm ">Rol: {session?.user?.role}</p>
        </div>
        <nav className=" md:col-span-2 py-2 font-medium ">
          <ul className="flex items-center gap-4 ">
            <li className="text-blue-500">
              <Link href="/perfil">Mis pedidos</Link>
            </li>
            <li>
              <Link href="/perfil/direccion">Direccion</Link>
            </li>
            {session?.user?.role !== "Cliente" && (
              <li>
                <Link
                  className="bg-blue-500 rounded-md text-white px-2"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default PersonalInformation;
