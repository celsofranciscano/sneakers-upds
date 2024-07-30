import Table from "@/components/dashboard/common/Table";

function RolesPage() {
  const columns = ["Nº", "ID", "Rol", "Estado", "Acciones"];
  const rows = ["PK_role", "role", "status"];

  return (
    <section className="grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Roles</h1>
      </div>

      <Table columns={columns} rows={rows} url={"roles"} pathname={"roles"} />
    </section>
  );
}

export default RolesPage;
