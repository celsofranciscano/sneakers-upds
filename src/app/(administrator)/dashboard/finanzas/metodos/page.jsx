import LinkButton from "@/components/common/LinkButton";
import Table from "@/components/dashboard/common/Table";
function PaymentMethodsPage() {
  const columns = [
    "Nº",
    "ID",
    "Estado",
    "Descripcion",
    "QR",
    "Estado",
    "Acciones",
  ];
  const rows = [
    "PK_paymentmethod",
    "name",
    "description",
    "qrCodeImage",
    "status",
  ];
  return (
    <section className=" grid gap-4">
      <div className=" flex items-center justify-between ">
        <h1 className="text-2xl font-medium text-white">Metodos de envio</h1>

        <LinkButton
          href={"/dashboard/finanzas/metodos/nuevo"}
          name={"Añadir nuevo"}
        />
      </div>

      <Table url={"paymentmethods"} columns={columns} rows={rows}  pathname={"metodos"} id={"PK_paymentmethod"}/>
    </section>
  );
}

export default PaymentMethodsPage;
