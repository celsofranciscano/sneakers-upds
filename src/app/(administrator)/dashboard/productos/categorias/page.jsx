import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";
function CategoriesPage() {
  const columns = [
    "Nº",
    "ID",
    "Categoria",
    "URL",
    "Descripcion",
    "Estado",
    "Acciones",
  ];
  const rows = [
    "PK_category",
    "name",
    "urlCategory",
    "description",
    "status"
  ];
  return (
    <section className="grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Categorias</h1>
        <LinkButton
          href={"/dashboard/productos/categorias/crear"}
          name={"Añadir Nuevo"}
        />
      </div>

      <Table url={"categories"} columns={columns} rows={rows} pathname={"categorias"} id={"PK_category"} />
    </section>
  );
}

export default CategoriesPage;
