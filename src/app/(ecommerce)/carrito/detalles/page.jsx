"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import LinkButton from "@/components/common/LinkButton";

function NewAdministratorPage() {
  const { data: session } = useSession();
  const [shipments, setShipments] = useState([]);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post(
      `/api/ecommerce/addresses/${session?.user?.email}`,
      data
    );
    console.log(response);

    if (response.status === 200) {
      router.refresh();
      router.push("/carrito/detalles/pago");
    }
  }

  useEffect(() => {
    if (!session) {
      return;
    }

    async function getShipments() {
      try {
        const response = await axios.get("/api/dashboard/shipments");
        setShipments(response.data);
      } catch (error) {
        console.error("Error fetching shipments:", error);
      }
    }

    async function getAddress() {
      try {
        const response = await axios.get(
          `/api/ecommerce/addresses/${session.user.email}`
        );
        setAddress(response.data);
      } catch (error) {
        console.error("Error fetching address:", error);
      } finally {
        setLoading(false);
      }
    }

    getShipments();
    getAddress();
  }, [session]);

  if (loading) {
    return (
      <section className="p-4 bg-white rounded-md">
        <h1 className="font-medium pb-8">Cargando...</h1>
      </section>
    );
  }

  if (address) {
    return (
      <section className="p-4 bg-white rounded-md shadow-md grid gap-4 ">
        <h1 className="font-medium text-lg mb-4">Información de Envío</h1>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex flex-col">
            <span className="font-semibold">Dirección:</span>
            <span>{address.address}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Teléfono:</span>
            <span>{address.phone}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Indicaciones:</span>
            <span>{address.indications}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Ciudad:</span>
            <span>{address.shipment.city}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Descripción del Envío:</span>
            <span>{address.shipment.description}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Precio del Envío:</span>
            <span>{address.shipment.price} Bs</span>
          </div>
        </div>
        <LinkButton href={"/carrito/detalles/pago"} name={"Pasar a pago"} className="mt-4" />
      </section>
    );
  }
  

  return (
    <section className="p-4 bg-white rounded-md">
      <h1 className="font-medium pb-8">Informacion de envio</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:grid-cols-2"
      >
        <label className="flex flex-col gap-1">
          Ciudad
          <select
            className="input-dark"
            {...register("FK_shipment", {
              required: {
                value: true,
                message: "La ciudad es obligatorio",
              },
            })}
          >
            <option value="">Seleccionar</option>
            {shipments?.map((shipment) => (
              <option key={shipment.PK_shipment} value={shipment.PK_shipment}>
                {shipment.city}: Bs {shipment.price}
              </option>
            ))}
          </select>
          {errors.FK_shipment && (
            <span className="text-red-500 text-sm">
              {errors.FK_shipment.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Dirección
          <input
            type="text"
            autoFocus
            className="input-dark"
            {...register("address", {
              required: {
                value: true,
                message: "La dirección es obligatorio",
              },
            })}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">
              {errors.address.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Teléfono
          <input
            type="number"
            className="input-dark"
            {...register("phone", {
              required: {
                value: true,
                message: "El teléfono es obligatorio",
              },
            })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Indicaciones
          <input
            type="text"
            className="input-dark"
            {...register("indications", {
              required: {
                value: true,
                message: "Indicaciones es obligatorio",
              },
            })}
          />
          {errors.indications && (
            <span className="text-red-500 text-sm">
              {errors.indications.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="py-2 px-4 w-full bg-blue-500 rounded-md text-white md:col-span-2"
        >
          Confirmar dirección de envío
        </button>
      </form>
    </section>
  );
}

export default NewAdministratorPage;
