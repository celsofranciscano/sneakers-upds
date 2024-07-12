import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function SalesDetailsPage({ params }) {
  const session = await getServerSession(authOptions);
  let orders = [];

  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/ecommerce/profile/${session?.user?.email}/orders/${params.id}`
    );
    orders = response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Detalles de Venta</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order.PK_saledetail}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={`/${order.urlProduct}.jpg`}
              alt={order.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{order.name}</h2>
              <p className="text-gray-600 mb-2">
                Cantidad: {order.quantity} | Precio Unitario: ${order.unitPrice}
              </p>
              <p className="text-gray-600 mb-2">Subtotal: ${order.subtotal}</p>
              <p className="text-gray-600 mb-2">
                Fecha de Creación:{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>
              <p className="text-sm text-gray-700">{order.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SalesDetailsPage;
