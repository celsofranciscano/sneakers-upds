"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";
function NewPaymentMethodsPage({ params }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function getMetodos() {
      const response = await axios.get(
        `/api/dashboard/paymentmethods/${params.id}`
      );
      const metodo = response.data;
      setValue("name", metodo.name);
      setValue("description", metodo.description);
      setValue("qrCodeImage", metodo.qrCodeImage);
      setValue("status", metodo.status);
    }
    getMetodos();
  }, []);

  async function onSubmit(data) {
    const response = await axios.patch(
      `/api/dashboard/paymentmethods/${params.id}`,
      data
    );
    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 rounded-md bg-white dark:bg-zinc-900 ">
      <h1 className="text-white font-medium text-2xl pb-8">
        Editar Metodo de pago
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-4"
      >
        <label className="flex flex-col gap-1">
          Nombre
          <input
            className="input-dark"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre del metodo es requerido ",
              },
            })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          QR
          <input
            className="input-dark"
            type="text"
            {...register("qrCodeImage", {
              required: {
                value: true,
                message: "El codigo QR es requerido",
              },
            })}
          />
          {errors.urlCodeImage && (
            <span className="text-red-500 text-sm">
              {errors.urlCodeImage.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Descripcion
          <textarea
            className="input-dark h-10"
            {...register("description", {
              required: {
                value: true,
                message: "La descripcion del metodo de pago es requerido",
              },
            })}
          ></textarea>
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-1">
          Estado
          <input
            type="checkbox"
            className="input-dark size-8"
            {...register("status")}
          />
        </label>

        <ButtonSubmit name={"Editar"} />
      </form>
    </section>
  );
}

export default NewPaymentMethodsPage;
