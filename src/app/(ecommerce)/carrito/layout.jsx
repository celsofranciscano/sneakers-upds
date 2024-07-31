import Stepper from "@/components/ecommerce/Stepper";
import CardDetails from "@/components/ecommerce/CartDetails";

export default function CarritoLayout({ children }) {
  return (
    <div>
      <div className="md:grid     md:grid-cols-3">
        <div className="md:col-span-2">
          <Stepper />
        </div>

        <h2 className=" md:order-first text-xl font-bold text-center my-4">
          Resumen de tu compra
        </h2>
      </div>

      <section className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:order-2 md:col-span-2">{children}</div>

        <div>
          
          <CardDetails />
        </div>
      </section>
    </div>
  );
}
