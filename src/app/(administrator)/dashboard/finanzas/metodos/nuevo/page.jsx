"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/common/ButtonSubmit";
function NewPaymentMethodsPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await axios.post("/api/dashboard/paymentmethods", data);
    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  }
  return (
    <section className="p-4 rounded-md bg-white dark:bg-zinc-900 ">
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

        <ButtonSubmit name={"Añadir nuevo"} />
      </form>
    </section>
  );
}

export default NewPaymentMethodsPage;
