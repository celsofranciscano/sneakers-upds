import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
async function PerfilPage() {
  const session = await getServerSession(authOptions);

  let orders = [];
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/ecommerce/profile/${session?.user?.email}/orders`
    );
    orders = response.data;
  } catch (error) {}
  return (
    <section className="grid bg-white  gap-4 p-2 rounded-b-md">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-zinc-500 ">
          <thead class="text-xs text-zinc-700 uppercase bg-zinc-200  ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Precio
              </th>
              <th class="px-6 py-3">Fecha</th>
              <th scope="col" class="px-6 py-3">
                Estado
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr class="odd:bg-white even:bg-zinc-50  border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap "
                >
                  BS {order.totalAmount}
                </th>
                <td class="px-6 py-4">
                  {new Date(order.createdAt).toLocaleString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </td>
                <td class="px-6 py-4">{order.salestatus} </td>
                <td class="px-6 py-4">
                  <Link
                    href={`/perfil/pedido/${order.PK_sale}`}
                    class="font-medium text-blue-600  hover:underline"
                  >
                    Detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PerfilPage;
