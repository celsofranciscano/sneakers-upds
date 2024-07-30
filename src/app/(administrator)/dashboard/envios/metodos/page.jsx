import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";
function ShipmentsMethodsPage() {
  const columns = [
    "Nº",
    "ID",
    "Ciudad",
    "Descripcion",
    "Precio",
    "Estado",
    "Acciones",
  ];
  const rows = ["PK_shipment", "city", "description", "price", "status"];
  return (
    <section className=" grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Metodos de envio</h1>

        <LinkButton
          href={"/dashboard/envios/metodos/nuevo"}
          name={"Añadir nuevo"}
        />
      </div>

      <Table url={"shipments"} columns={columns} rows={rows} />
    </section>
  );
}

export default ShipmentsMethodsPage;
