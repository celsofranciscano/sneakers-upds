import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";

function UsersPage() {
  const columns = [
    "Nº",
    "ID",
    "Rol",
    "Nombre",
    "Apellido",
    "Email",
    "Acciones",
  ];
  const rows = ["PK_user", "FK_role", "firstName", "lastName", "email"];
  return (
    <section className=" grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Usuarios</h1>

        <LinkButton href={"crear"} name={"Nuevo usuario"} />
      </div>
      <Table columns={columns} rows={rows} url={"users"} />
    </section>
  );
}

export default UsersPage;
