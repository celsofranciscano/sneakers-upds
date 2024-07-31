import SaleChart from "@/components/dashboard/analitica/SalesChart";
import SalesProductChart from "@/components/dashboard/analitica/SalesProductChart";

async function AdminPage() {
  return (
    <section className=" grid gap-4">
      <section className="grid md:grid-cols-2 gap-2">
        <SaleChart />
        <SalesProductChart />
      </section>
    </section>
  );
}

export default AdminPage;
