import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";

function UsersPage() {
  const columns = [
    "Nº",
    "ID",
    "Nombre",
    "Apellido",
    "Email",
    "Estado",
    "Acciones",
  ];
  const rows = ["PK_user", "firstName", "lastName", "email", "status"];
  return (
    <section className=" grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium dark:text-white text-black">Clientes</h1>

        <LinkButton href={"/dashboard/clientes/nuevo"} name={"Nuevo usuario"} />
      </div>
      <Table
        columns={columns}
        rows={rows}
        url={"users"}
        pathname={"clientes"}
        id={"PK_user"}
      />
    </section>
  );
}

export default UsersPage;
