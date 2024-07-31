"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";
import { useEcommerce } from "@/context/ContextEcommerce";
import { useSession } from "next-auth/react";

function NewEcommercePage() {
  const [salestatus, setSalestatus] = useState();
  const [users, setUsers] = useState();
  const [metodo, setMetodo] = useState();
  const router = useRouter();
  const { total, setTotal,cartItems,setCartItems } = useEcommerce();
  const { data: session } = useSession();

  const { handleSubmit } = useForm();

  useEffect(() => {
    async function getSaleStatus() {
      const response = await axios.get("/api/dashboard/salesstatuses");
      setSalestatus(response.data);
    }
    getSaleStatus();
    async function getUsers() {
      const response = await axios.get("/api/dashboard/users");
      setUsers(response.data);
    }
    getUsers();
    async function getMetodo() {
      const response = await axios.get("/api/dashboard/paymentmethods");
      setMetodo(response.data[0]);
    }
    getMetodo();
  }, []);

  async function onSubmit() {
    const response = await axios.post(
      `/api/ecommerce/sale/${session?.user?.email}`,
      cartItems
    );
    // console.log(response);

    if (response.status === 200) {
      setTotal(0);
      setCartItems([])
      router.refresh();
      router.push("/perfil");
    }
  }

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="font-medium text-lg mb-4">Confirmar pago</h1>
      <section className="grid grid-cols-2 gap-4">
        <div className="flex  flex-col items-center gap-2   ">
          <span className="flex items-center text-zinc-500">
            <svg
              class="w-5 h-5 text-zinc-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
              />
            </svg>
            <span>Zapatillas</span>
          </span>
          <div className="flex items-center gap-4">
            {/* <span className="line-through text-zinc-500">Bs 60</span>
          <h1 className="text-4xl font-bold text-green-400">Bs 42</h1> */}
            <h1 className="text-4xl font-bold text-green-400">Bs {total}</h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-3 gap-4"
          >
            <ButtonSubmit name={"Confirmar pedido"} />
          </form>
        </div>
        <div>
          {/* <h1>{metodo?.name}</h1> */}
          <img src={metodo?.qrCodeImage} alt="" />
          <p>{metodo?.description}</p>
        </div>
      </section>
    </section>
  );
}

export default NewEcommercePage;
