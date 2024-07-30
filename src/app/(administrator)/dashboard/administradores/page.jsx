import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";

function AdministratorsPage() {
  const columns = [
    "Nº",
    "ID",
    "Rol",
    "Nombre",
    "Apellido",
    "Email",
    "Rol",
    "Acciones",
  ];
  const rows = ["PK_user", "FK_role", "firstName", "lastName", "email", "role"];
  return (
    <section className=" grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Administradores</h1>
        <LinkButton
          href={"/dashboard/administradores/nuevo"}
          name={"Nuevo administrador"}
        />
      </div>
      <Table
        columns={columns}
        rows={rows}
        url={"administrators"}
        pathname={"administradores"}
        id={"PK_user"}

      />
    </section>
  );
}

export default AdministratorsPage;
