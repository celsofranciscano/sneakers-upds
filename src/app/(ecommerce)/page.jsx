import CardProducts from "@/components/ecommerce/products/CardProducts";
function AppPage() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4">
      <CardProducts />
    </section>
  );
}

export default AppPage;
