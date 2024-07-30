import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";
function SalesStatusesPage() {
  const columns = [
    "Nº",
    "ID",
    "Estado",
    "Descripcion",
    "Estado",
    "Acciones",
  ];
  const rows = [
    "PK_salestatus",
    "name",
    "description",
    "status"
  ];
  return (
    <section className="grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Estados de venta</h1>
        <LinkButton
          href={"/dashboard/ventas/estado/nuevo"}
          name={"Añadir nuevo"}
        />
      </div>

      <Table
        url={"salesstatuses"}
        columns={columns}
        rows={rows}
        pathname={"estado"}
      />
    </section>
  );
}

export default SalesStatusesPage;
