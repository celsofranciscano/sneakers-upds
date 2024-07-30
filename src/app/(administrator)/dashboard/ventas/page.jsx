import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";

function SalesPage() {
  const columns = [
    "Nº",
    "ID",
    "Nombre",
    "Apellido",
    "Fecha",
    "Total",
    "Estado venta",
    "Acciones",
  ];
  const rows = [
    "PK_sale",
    "firstName",
    "lastName",
    "createdAt",
    "totalAmount",
    "salesStatus",
  ];
  return (
    <section className="grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Ventas</h1>
        <LinkButton href={"/dashboard/ventas/nuevo"} name={"Añadir nuevo"} />
      </div>
      <Table url={"sales"} columns={columns} rows={rows} pathname={"ventas"} id={"PK_sale"} />
    </section>
  );
}

export default SalesPage;
