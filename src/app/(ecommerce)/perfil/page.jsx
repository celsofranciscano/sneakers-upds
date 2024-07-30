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

    if (response.status === 200) {
      return (
        <section className="grid bg-white  gap-4 p-2 rounded-b-md">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-zinc-500 ">
              <thead className="text-xs text-zinc-700 uppercase bg-zinc-200  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Precio
                  </th>
                  <th className="px-6 py-3">Fecha</th>
                  <th scope="col" className="px-6 py-3">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.PK_sale}
                    className="odd:bg-white even:bg-zinc-50  border-b "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap "
                    >
                      BS {order.totalAmount}
                    </th>
                    <td className="px-6 py-4">
                      {new Date(order.createdAt).toLocaleString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-4">{order.salestatus} </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/perfil/pedido/${order.PK_sale}`}
                        className="font-medium text-blue-600  hover:underline"
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
  } catch (error) {
    return <h1>No se encontro registros</h1>;
  }
}

export default PerfilPage;
