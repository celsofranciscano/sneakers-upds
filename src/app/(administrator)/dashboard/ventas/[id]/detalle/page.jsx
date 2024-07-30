import axios from "axios";
import Table from "@/components/dashboard/common/Table";
import LinkButton from "@/components/common/LinkButton";
async function DetailSalePage({ params }) {
  let sale;
  let user;
  let status;
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/dashboard/sales/${params.id}`
    );
    sale = response.data;
    const responseUser = await axios.get(
      `${process.env.URL_API}/api/dashboard/users/${sale?.FK_user}`
    );
    user = responseUser.data;

    const responseStatus = await axios.get(
      `${process.env.URL_API}/api/dashboard/salesstatuses/${sale?.FK_salestatus}`
    );
    status = responseStatus.data;
  } catch (error) {}

  const columns = [
    "Nº",
    "ID",
    "Cantidad",
    "Precio unitario",
    "Subtotal",
    "Acciones",
  ];
  const rows = [
    "PK_saledetail",
    "quantity",
    "unitPrice",
    "subtotal"
  ];

  return (
    <section className=" grid gap-4 ">
      <h1 className="text-2xl font-medium dark:text-white text-black">
        Detalle Venta
      </h1>
      <div className="flex gap-4 rounded-md bg-white dark:bg-zinc-900 p-4   ">
        <div className="">
     
          <h1 className="font-medium text-2xl text-black dark:text-white">
            Cliente: {user.firstName} {user.lastName}
          </h1>
          <h1 className=" text-xl text-black dark:text-white">
            Estado: {status.name}
          </h1>
      
          {sale.status && (
            <span className="bg-blue-500 text-white text-sm px-2 rounded-md">
              Activo
            </span>
          )}
        </div>
      </div>
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Detalle de la venta</h1>
        <LinkButton href={"detalle/nuevo"} name={"Añadir nuevo"} />
      </div>
      <Table url={`sales/${params.id}/saledetails`} columns={columns} rows={rows} pathname={"detalle"} id={"PK_saledetail"} />

    </section>
  );
}

export default DetailSalePage;
