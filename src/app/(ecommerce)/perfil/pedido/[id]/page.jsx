import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NewRecirPage from "@/components/ecommerce/Pay";

export async function SalesDetailsPage({ params }) {
  const session = await getServerSession(authOptions);
  let orders = [];
  let metodo;
  let status;
  let pay;

  console.log(pay)

  try {
    const responsePay = await axios.get(
      `${process.env.URL_API}/api/ecommerce/paymentreceipts/${params.id}`
    );
    pay = responsePay.data;
    const response = await axios.get(
      `${process.env.URL_API}/api/ecommerce/profile/${session?.user?.email}/orders/${params.id}`
    );
    orders = response.data;
    const responseStatus = await axios.get(
      `${process.env.URL_API}/api/ecommerce/saledetail/${params.id}`
    );
    status = responseStatus.data;
    const responseMetodo = await axios.get(
      `${process.env.URL_API}/api/dashboard/paymentmethods`
    );
    metodo = responseMetodo.data[0];
  } catch (error) {
    console.error("Error fetching orders:", error);
  }

  try {
    
  } catch (error) {
    
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium text-gray-800 mb-6">
        Detalles de Pedido
      </h1>
      <section className="grid md:grid-cols-3 gap-4">
        <div className="">
          {orders.map((product, index) => (
            <div
              key={index}
              className="bg-white grid mb-4 grid-cols-2 md:grid-cols-1 lg:grid-cols-2 rounded-md shadow-md"
            >
              <div className="relative">
                <img
                  className="rounded-l-md w-full aspect-square object-cover"
                  src={product.urlImage}
                  alt={product.name}
                />
              </div>
              <div className="p-2 flex flex-col justify-between">
                <h2 className="font-medium">{product.name}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="text-sm">
                  Fecha de pedido:{" "}
                  {new Date(product.createdAt).toLocaleString()}
                </p>
                <div className="flex gap-4 justify-between">
                  <span className="text-blue-500 text-md font-bold">
                    Bs {product.subtotal}{" "}
                    <span className="text-xs text-zinc-400">
                      x {product.quantity}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>{metodo?.name}</h1>
          <img src={metodo?.qrCodeImage} alt="" />
          <p>{metodo?.description}</p>
        </div>

        <div>
          <h1 className="text-lg font-medium">{status?.name}</h1>
          <p>{status?.description}</p>
          <h1>Detalle</h1>
          <img src={pay?.receiptImage} alt="" />
          <p>{pay?.receiptDate}</p>
          <NewRecirPage params={params} />
        </div>
      </section>
    </section>
  );
}

export default SalesDetailsPage;
