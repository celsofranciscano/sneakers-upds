import CardProducts from "@/components/ecommerce/CardProducts";
function StorePage() {
  return (
    <section className="grid md:grid-cols-4 grid-cols-2  gap-4">
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
        <CardProducts name={"Zapatillas Hermosas de color"} precio={68} precioOferta={49} />
   
    </section>
  );
}

export default StorePage;
