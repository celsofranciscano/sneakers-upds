import CardProducts from "@/components/ecommerce/products/CardProducts";

function StorePage() {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4">
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
    
   
    </section>
  );
}

export default StorePage;
