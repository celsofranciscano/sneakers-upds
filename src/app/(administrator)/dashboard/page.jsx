import SaleChart from "@/components/dashboard/analitica/SalesChart";

async function AdminPage() {
  return (
    <section className=" grid gap-4">
    
      <section className="grid md:grid-cols-2 gap-2">
        <SaleChart />
      </section>
    </section>
  );
}

export default AdminPage;
