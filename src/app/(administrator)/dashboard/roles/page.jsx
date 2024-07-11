import Table from "@/components/dashboard/common/Table";

function RolesPage() {
    const columns =["Nº","ID","Rol","Acciones"];
    const rows = ["PK_role","role"]

    return ( 
        <section>
            <h1>Lista de Roles</h1>
            <Table columns={columns} rows={rows} url={"roles"} />
        </section>
     );
}

export default RolesPage;