import CartConfirm from "@/components/ecommerce/CartConfirm";
import CardDetails from "@/components/ecommerce/CartDetails";
import Stepper from "@/components/ecommerce/Stepper";

function CartPege() {
  return (
    <>
      <div className="md:grid md:fixed md:top-16 gap-32 md:w-[90%] bg-zinc-950  z-10 md:grid-cols-2">
        <Stepper />

        <h2 className=" md:order-first text-xl font-bold text-center my-4">
          Resumen de tu compra
        </h2>
      </div>

      <div className="relative">
        <CartConfirm />

        <section className="md:w-[49%] md:mt-24">
          <CardDetails />
     
       
        </section>
      </div>
    </>
  );
}

export default CartPege;
