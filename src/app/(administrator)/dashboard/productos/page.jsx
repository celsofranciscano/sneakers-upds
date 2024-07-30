import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";

function ProductsPage() {
  const columns = [
    "Nº",
    "ID",
    "Nombre",
    "URL",
    "Precio",
    "Oferta",
    "Stock",
    "Categoria",
    "Estado",
    "Acciones",
  ];
  const rows = [
    "PK_product",
    "name",
    "urlProduct",
    "regularPrice",
    "offerPrice",
    "stock",
    "categoryName",
    "status",
  ];
  return (
    <section className="grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Productos</h1>
        <LinkButton href={"/dashboard/productos/nuevo"} name={"Añadir nuevo"} />
      </div>

      <Table url={"products"} columns={columns} rows={rows} pathname={"productos"} id={"PK_product"}/>
    </section>
  );
}

export default ProductsPage;
